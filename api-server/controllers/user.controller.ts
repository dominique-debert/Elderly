import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import * as argon2 from "argon2";
import { IUser } from "@/types";
import multer from "multer";
import path from "path";
import fs from "fs";

const prisma = new PrismaClient();

// Configure multer for avatar uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../public/images/avatars");

    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${req.params.id}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  // Accept images only
  if (!file.mimetype.startsWith("image/")) {
    cb(new Error("Seules les images sont acceptées"));
    return;
  }
  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
  },
});

// Créer un nouvel utilisateur
export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userToCreate = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json(userToCreate);
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les utilisateurs avec pagination et filtres optionnels
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        lastName: "asc",
        firstName: "asc",
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// Récupérer un utilisateur par son ID
export const getUserById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un utilisateur
export const updateUser = async (
  req: Request<{ id: string }, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const userToUpdate = await prisma.user.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });
    res.status(200).json(userToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

export const uploadAvatar = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, "Utilisateur non trouvé");
    }

    if (!req.file) {
      throw createHttpError(400, "Aucun fichier uploadé");
    }

    // Delete old avatar if exists
    if (user.avatar) {
      const oldAvatarPath = path.join(
        __dirname,
        "../../public/images/avatars",
        user.avatar
      );
      if (fs.existsSync(oldAvatarPath)) {
        fs.unlinkSync(oldAvatarPath);
      }
    }

    const avatarFilename = req.file.filename;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        avatar: avatarFilename,
        updatedAt: new Date(),
      },
    });

    const serverBase = process.env.SERVER_BASE_URL || "http://localhost:3000";
    const avatarUrl = `${serverBase}/public/images/avatars/${avatarFilename}`;

    const { passwordHash, ...userWithoutPassword } = updatedUser;

    res.status(200).json({
      message: "Avatar mis à jour avec succès",
      user: userWithoutPassword,
      avatarUrl,
    });
  } catch (error) {
    if (req.file) {
      const filePath = req.file.path;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    next(error);
  }
};

export const changePassword = async (
  req: Request<
    { id: string },
    {},
    { currentPassword: string; newPassword: string }
  >,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    // Verify current password
    const isPasswordValid = await argon2.verify(
      user.passwordHash,
      currentPassword
    );

    if (!isPasswordValid) {
      throw createHttpError(401, "Mot de passe actuel incorrect");
    }

    // Validate new password strength
    if (newPassword.length < 8) {
      throw createHttpError(
        400,
        "Le mot de passe doit contenir au moins 8 caractères"
      );
    }

    // Hash the new password before storing
    const hashedPassword = await argon2.hash(newPassword);

    const updatedUser = await prisma.user.update({
      data: {
        passwordHash: hashedPassword,
        updatedAt: new Date(),
      },
      where: { id },
    });

    // Don't return the password hash in response
    const { passwordHash, ...userWithoutPassword } = updatedUser;

    res.status(200).json({
      message: "Mot de passe mis à jour avec succès",
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

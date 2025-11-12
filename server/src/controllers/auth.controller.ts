import { NextFunction, Request, Response } from "express";
import argon2 from "argon2";
import createHttpError from "http-errors";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@/prisma";
import { generateToken } from "@/utils";
import { signUpSchema, signInSchema } from "@/validators";

const prisma = new PrismaClient();

const accessTokenExpiry = process.env.JWT_EXPIRES_IN || "7d";
const refreshTokenExpiryDays =
  parseInt(
    (process.env.REFRESH_TOKEN_EXPIRES_IN || "30d").replace(/\D/g, "")
  ) || 30;

const signToken = (userId: string, type: "access" | "refresh") => {
  const expiresIn =
    type === "access" ? accessTokenExpiry : `${refreshTokenExpiryDays}d`;
  return generateToken({ userId }, expiresIn);
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = signUpSchema.validate(req.body);
    if (error) throw createHttpError(400, "Invalid data", error.details);

    const {
      email,
      password,
      firstName,
      lastName,
      birthDate,
      isAdmin,
      latitude,
      longitude,
    } = req.body as any;

    // accept several possible names coming from the client:
    // avatar (legacy), avatarFilename, fileName, key
    const bodyAny = req.body as any;
    const avatarFromBody =
      bodyAny.avatar ||
      bodyAny.avatarFilename ||
      bodyAny.fileName ||
      bodyAny.filename ||
      bodyAny.key ||
      undefined;
    let uploadedAvatar = (req as any).file?.filename as string | undefined;

    // If the client sent a desired filename (avatarFilename), try to move/rename
    // the uploaded temp file (multer) to that name. This handles the case where
    // multer processed the file before form fields were available in storage.filename.
    const desiredFilename = (req.body as any).avatarFilename as
      | string
      | undefined;
    if (uploadedAvatar && desiredFilename && (req as any).file?.path) {
      try {
        // sanitize desired filename
        const safeBase = path
          .basename(desiredFilename)
          .replace(/[^a-zA-Z0-9._-]/g, "-");
        const avatarsDir = path.join(
          process.cwd(),
          "public",
          "images",
          "avatars"
        );
        // ensure extension
        const ext =
          path.extname(safeBase) || path.extname(uploadedAvatar) || ".jpg";
        const finalName = safeBase.endsWith(ext)
          ? safeBase
          : `${safeBase}${ext}`;
        const oldPath = (req as any).file.path as string;
        const newPath = path.join(avatarsDir, finalName);

        // If destination already exists, avoid overwriting by adding a unique suffix
        let uniqueNewPath = newPath;
        let counter = 1;
        while (fs.existsSync(uniqueNewPath)) {
          const nameOnly = finalName.replace(/\.[^.]+$/, "");
          uniqueNewPath = path.join(avatarsDir, `${nameOnly}-${counter}${ext}`);
          counter++;
        }

        fs.renameSync(oldPath, uniqueNewPath);
        uploadedAvatar = path.basename(uniqueNewPath);
      } catch (err) {
        console.warn(
          "Could not rename uploaded avatar to desired filename:",
          err
        );
      }
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw createHttpError(409, "Email already in use");

    const passwordHash = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        avatar: uploadedAvatar ?? avatarFromBody ?? null,
        birthDate,
        isAdmin,
        latitude: latitude ?? null,
        longitude: longitude ?? null,
      },
    });

    const accessToken = signToken(user.id, "access");
    const refreshToken = signToken(user.id, "refresh");

    // debug: log decoded tokens to confirm expirations (remove in production)
    try {
      console.debug("accessToken payload:", jwt.decode(accessToken));
      console.debug("refreshToken payload:", jwt.decode(refreshToken));
    } catch (e) {
      console.debug("Could not decode tokens for debugging", e);
    }

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);

    await prisma.session.create({
      data: {
        refreshToken,
        userId: user.id,
        expiresAt,
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      },
    });

    const serverBase = process.env.SERVER_BASE_URL || "http://localhost:3000";
    // avatar files are served at /images/avatars/<filename>
    const avatarUrl = user.avatar
      ? `${serverBase}/images/avatars/${user.avatar}`
      : null;

    res.status(201).json({
      accessToken,
      refreshToken,
      expiresIn: accessTokenExpiry,
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      avatarUrl: user.avatar ? avatarUrl : null,
      birthDate: user.birthDate,
      registrationDate: user.registrationDate,
      isAdmin: user.isAdmin,
      latitude: user.latitude,
      longitude: user.longitude,
      profession: user.profession,
      city: user.city,
      postalCode: user.postalCode,
      address: user.address,
      description: user.description,
      phone: user.phone,
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = signInSchema.validate(req.body);
    if (error) throw createHttpError(400, "Invalid data", error.details);

    const { email, password } = req.body as any;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw createHttpError(401, "Utilisateur inconnu !");

    if (!(await argon2.verify(user.passwordHash, password))) {
      throw createHttpError(401, "Mot de passe incorrect !");
    }

    const accessToken = signToken(user.id, "access");
    const refreshToken = signToken(user.id, "refresh");

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);

    await prisma.session.create({
      data: {
        refreshToken,
        userId: user.id,
        expiresAt,
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      },
    });

    const serverBase = process.env.SERVER_BASE_URL || "http://localhost:3000";
    const avatarUrl = user.avatar
      ? `${serverBase}/images/avatars/${user.avatar}`
      : null;

    res.json({
      accessToken,
      refreshToken,
      expiresIn: accessTokenExpiry,
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      avatarUrl,
      latitude: user.latitude,
      longitude: user.longitude,
      birthDate: user.birthDate,
      registrationDate: user.registrationDate,
      profession: user.profession,
      city: user.city,
      postalCode: user.postalCode,
      address: user.address,
      description: user.description,
      phone: user.phone,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.body as any;
    if (!refreshToken) throw createHttpError(400, "Refresh token required");

    await prisma.session.deleteMany({ where: { refreshToken } });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

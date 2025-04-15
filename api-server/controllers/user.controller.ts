import { PrismaClient } from "../prisma/client";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";
import IUser from '@/@types/data/IUser'

const prisma = new PrismaClient();

// Créer un nouvel utilisateur
export const createUser = async (
  req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {

  try {
    const newUser = await prisma.user.create({
      data: req.body
    })
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les utilisateurs avec pagination et filtres optionnels
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        lastName: 'asc',
        firstName: 'asc' // Ascending order (A-Z)
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
  next: NextFunction) => {
  
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
export const updateUser = async (req: Request<{ id: string }, {}, IUser>, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const userToUpdate = await prisma.user.update({
      data: req.body,
      where: { id },
    });
    res.status(200).json(userToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }
    await prisma.user.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

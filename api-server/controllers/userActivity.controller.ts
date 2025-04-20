import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IUserActivity from '@/@types/data/users/IUserActivity';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: User Activities
 *   description: Gestion des activités utilisateurs
 */
export const createUserActivity = async (
  req: Request<{}, {}, IUserActivity>,
  res: Response,
  next: NextFunction
) => {

  try {
    const userActivity = await prisma.userActivity.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(userActivity);
  } catch (error) {
    next(error);
  }
};

export const getAllUserActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userActivities = await prisma.userActivity.findMany({
      orderBy: {
        completionDate: 'desc'
      }
    });
    res.status(200).json({ userActivities });
  } catch (error) {
    next(error);
  }
};

export const getUserActivityById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userActivity = await prisma.userActivity.findUnique({
      where: { id }
    });

    if (!userActivity) {
      throw createHttpError(404, 'Activité utilisateur non trouvée');
    }

    res.status(200).json(userActivity);
  } catch (error) {
    next(error);
  }
};

export const updateUserActivity = async (
  req: Request<{ id: string }, {}, IUserActivity>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userActivity = await prisma.userActivity.findUnique({
      where: { id }
    });

    if (!userActivity) {
      throw createHttpError(404, 'Activité utilisateur non trouvée');
    }

    const updatedUserActivity = await prisma.userActivity.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedUserActivity);
  } catch (error) {
    next(error);
  }
};

export const deleteUserActivity = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userActivity = await prisma.userActivity.findUnique({
      where: { id }
    });

    if (!userActivity) {
      throw createHttpError(404, 'Activité utilisateur non trouvée');
    }

    await prisma.userActivity.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Activité utilisateur supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

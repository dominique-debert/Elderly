import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IUserStatistics from '@/@types/data/users/IUserStatistics';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: User Statistics
 *   description: Gestion des statistiques utilisateurs
 */
export const createUserStatistics = async (
  req: Request<{}, {}, IUserStatistics>,
  res: Response,
  next: NextFunction
) => {

  try {
    const userStatistics = await prisma.userStatistics.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(userStatistics);
  } catch (error) {
    next(error);
  }
};

export const getAllUserStatistics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userStatistics = await prisma.userStatistics.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json({ userStatistics });
  } catch (error) {
    next(error);
  }
};

export const getUserStatisticsById = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const userStatistics = await prisma.userStatistics.findUnique({
      where: { userId }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Statistiques utilisateur non trouvées');
    }

    res.status(200).json(userStatistics);
  } catch (error) {
    next(error);
  }
};

export const updateUserStatistics = async (
  req: Request<{ userId: string }, {}, IUserStatistics>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const userStatistics = await prisma.userStatistics.findUnique({
      where: { userId }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Statistiques utilisateur non trouvées');
    }

    const updatedUserStatistics = await prisma.userStatistics.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { userId }
    });

    res.status(200).json(updatedUserStatistics);
  } catch (error) {
    next(error);
  }
};

export const deleteUserStatistics = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const userStatistics = await prisma.userStatistics.findUnique({
      where: { userId }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Statistiques utilisateur non trouvées');
    }

    await prisma.userStatistics.delete({
      where: { userId }
    });

    res.status(200).json({ message: 'Statistiques utilisateur supprimées avec succès' });
  } catch (error) {
    next(error);
  }
};

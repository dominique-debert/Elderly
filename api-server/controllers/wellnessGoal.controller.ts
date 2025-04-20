import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IWellnessGoal from '@/@types/data/wellness/IWellnessGoal';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Wellness Goals
 *   description: Gestion des objectifs bien-être
 */
export const createWellnessGoal = async (
  req: Request<{}, {}, IWellnessGoal>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userStatistics = await prisma.wellnessGoal.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(userStatistics);
  } catch (error) {
    next(error);
  }
};

export const getAllWellnessGoals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userStatistics = await prisma.wellnessGoal.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json({ userStatistics });
  } catch (error) {
    next(error);
  }
};

export const getWellnessGoalById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userStatistics = await prisma.wellnessGoal.findUnique({
      where: { id }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Objectif bien-être non trouvé');
    }

    res.status(200).json(userStatistics);
  } catch (error) {
    next(error);
  }
};

export const updateWellnessGoal = async (
  req: Request<{ id: string }, {}, IWellnessGoal>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userStatistics = await prisma.wellnessGoal.findUnique({
      where: { id }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Objectif bien-être non trouvé');
    }

    const updatedUserStatistics = await prisma.wellnessGoal.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedUserStatistics);
  } catch (error) {
    next(error);
  }
};

export const deleteWellnessGoal = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const userStatistics = await prisma.wellnessGoal.findUnique({
      where: { id }
    });

    if (!userStatistics) {
      throw createHttpError(404, 'Objectif bien-être non trouvé');
    }

    await prisma.wellnessGoal.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Objectif bien-être supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

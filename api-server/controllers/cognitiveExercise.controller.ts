import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import ICognitiveExercise from '@/@types/data/ICognitiveExercise.js';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Cognitive Exercises
 *   description: API pour gérer les exercices cognitifs
 */

export const createCognitiveExercise = async (
  req: Request<{}, {}, ICognitiveExercise>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCognitiveExercise = await prisma.cognitiveExercise.create({
      data: req.body
    });
    res.status(201).json(newCognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const getAllCognitiveExercises = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cognitiveExercises = await prisma.cognitiveExercise.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ cognitiveExercises });
  } catch (error) {
    next(error);
  }
};

export const getCognitiveExerciseById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const cognitiveExercise = await prisma.cognitiveExercise.findUnique({
      where: { id }
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }

    res.status(200).json(cognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const updateCognitiveExercise = async (
  req: Request<{ id: string }, {}, ICognitiveExercise>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, categoryId, difficultyLevel, durationMinutes, description, image } = req.body;

  try {
    const cognitiveExercise = await prisma.cognitiveExercise.findUnique({
      where: { id }
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }

    const updatedCognitiveExercise = await prisma.cognitiveExercise.update({
      data: req.body,
      where: { id }
    });

    res.status(200).json(updatedCognitiveExercise);
  } catch (error) {
    next(error);
  }
};

export const deleteCognitiveExercise = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const cognitiveExercise = await prisma.cognitiveExercise.findUnique({
      where: { id }
    });

    if (!cognitiveExercise) {
      throw createHttpError(404, 'Exercice cognitif non trouvé');
    }

    await prisma.cognitiveExercise.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Exercice cognitif supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

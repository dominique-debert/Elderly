import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma/client.js";
import createHttpError from "http-errors";
import { ICognitiveExercise } from "@/types";

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
    const exerciseToCreate = await prisma.cognitiveExercise.create({
      data: req.body,
    });
    res.status(201).json(exerciseToCreate);
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
    const exercises = await prisma.cognitiveExercise.findMany({
      orderBy: {
        name: "asc",
      },
    });

    res.status(200).json({ exercises });
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
    const exercise = await prisma.cognitiveExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercice cognitif non trouvé");
    }

    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

export const updateCognitiveExercise = async (
  req: Request<{ id: string }, ICognitiveExercise>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const exercise = await prisma.cognitiveExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercice cognitif non trouvé");
    }

    const exerciseToUpdate = await prisma.cognitiveExercise.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(exerciseToUpdate);
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
    const exercise = await prisma.cognitiveExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw createHttpError(404, "Exercice cognitif non trouvé");
    }

    await prisma.cognitiveExercise.delete({
      where: { id },
    });

    res.status(200).json({ message: "Exercice cognitif supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

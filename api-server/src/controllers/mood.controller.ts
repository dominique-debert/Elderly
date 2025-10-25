import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IMood } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Moods
 *   description: Gestion des humeurs
 */
export const createMood = async (
  req: Request<{}, {}, IMood>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMood = await prisma.mood.create({
      data: req.body,
    });
    res.status(201).json(newMood);
  } catch (error) {
    next(error);
  }
};

export const getAllMoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const moods = await prisma.mood.findMany({
      orderBy: {
        name: "asc",
      },
    });
    res.status(200).json({ moods });
  } catch (error) {
    next(error);
  }
};

export const getMoodById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);

  try {
    const mood = await prisma.mood.findUnique({
      where: { id },
    });

    if (!mood) {
      throw createHttpError(404, "Mood non trouvé");
    }

    res.status(200).json(mood);
  } catch (error) {
    next(error);
  }
};

export const updateMood = async (
  req: Request<{ id: string }, {}, IMood>,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);

  try {
    const mood = await prisma.mood.findUnique({
      where: { id },
    });

    if (!mood) {
      throw createHttpError(404, "Mood non trouvé");
    }

    const updatedMood = await prisma.mood.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedMood);
  } catch (error) {
    next(error);
  }
};

export const deleteMood = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);

  try {
    const mood = await prisma.mood.findUnique({
      where: { id },
    });

    if (!mood) {
      throw createHttpError(404, "Humeur non trouvée");
    }

    await prisma.mood.delete({
      where: { id },
    });

    res.status(200).json({ message: "Humeur supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

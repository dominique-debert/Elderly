import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils";
import { PrismaClient } from "@/prisma";
import { IWellnessGoal } from "@/types";

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
    const wellnessGoal = await prisma.wellnessGoal.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(wellnessGoal);
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
    const wellnessGoals = await prisma.wellnessGoal.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ wellnessGoals });
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
    const wellnessGoal = await prisma.wellnessGoal.findUnique({
      where: { id },
    });

    if (!wellnessGoal) {
      throw createHttpError(404, "Objectif bien-être non trouvé");
    }

    res.status(200).json(wellnessGoal);
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
    const wellnessGoal = await prisma.wellnessGoal.findUnique({
      where: { id },
    });

    if (!wellnessGoal) {
      throw createHttpError(404, "Objectif bien-être non trouvé");
    }

    const updatedWellnessGoal = await prisma.wellnessGoal.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedWellnessGoal);
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
    const wellnessGoal = await prisma.wellnessGoal.findUnique({
      where: { id },
    });

    if (!wellnessGoal) {
      throw createHttpError(404, "Objectif bien-être non trouvé");
    }

    await prisma.wellnessGoal.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Objectif bien-être supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

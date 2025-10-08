import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma/client.js";
import { createHttpError } from "@/utils/httpError.js";
import IHealthIndicator from "@/types/data/health/IHealthIndicator";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Health Indicators
 *   description: API pour gérer les indicateurs de santé
 */

export const createHealthIndicator = async (
  req: Request<{}, {}, IHealthIndicator>,
  res: Response,
  next: NextFunction
) => {
  try {
    const healthIndicatorToCreate = await prisma.healthIndicator.create({
      data: req.body,
    });
    res.status(201).json(healthIndicatorToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllHealthIndicators = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const healthIndicators = await prisma.healthIndicator.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    res.status(200).json({ healthIndicators });
  } catch (error) {
    next(error);
  }
};

export const getHealthIndicatorById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const healthIndicator = await prisma.healthIndicator.findUnique({
      where: { id },
    });

    if (!healthIndicator) {
      throw createHttpError(404, "Indicateur non trouvé");
    }

    res.status(200).json(healthIndicator);
  } catch (error) {
    next(error);
  }
};

export const updateHealthIndicator = async (
  req: Request<{ id: string }, IHealthIndicator>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const healthIndicator = await prisma.healthIndicator.findUnique({
      where: { id },
    });

    if (!healthIndicator) {
      throw createHttpError(404, "Indicateur non trouvé");
    }

    const healthIndicatorToUpdate = await prisma.healthIndicator.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(healthIndicatorToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteHealthIndicator = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const healthIndicator = await prisma.healthIndicator.findUnique({
      where: { id },
    });

    if (!healthIndicator) {
      throw createHttpError(404, "Indicateur non trouvé");
    }

    await prisma.healthIndicator.delete({
      where: { id },
    });

    res.status(200).json({ message: "Indicateur supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

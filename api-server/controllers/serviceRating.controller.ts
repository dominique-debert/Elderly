import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError.js";
import { PrismaClient } from "@/prisma/client.js";
import IServiceRating from "@/types/data/services/IServiceRating";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Service Rating
 *   description: Gestion des évaluations de services
 */
export const createServiceRating = async (
  req: Request<{}, {}, IServiceRating>,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceRating = await prisma.serviceRating.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(serviceRating);
  } catch (error) {
    next(error);
  }
};

export const getAllServiceRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceRating = await prisma.serviceRating.findMany({
      orderBy: {
        ratingDate: "desc",
      },
    });
    res.status(200).json({ serviceRating });
  } catch (error) {
    next(error);
  }
};

export const getServiceRatingById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceRating = await prisma.serviceRating.findUnique({
      where: { id },
    });

    if (!serviceRating) {
      throw createHttpError(404, "Service non trouvé");
    }

    res.status(200).json(serviceRating);
  } catch (error) {
    next(error);
  }
};

export const updateServiceRating = async (
  req: Request<{ id: string }, {}, IServiceRating>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceRating = await prisma.serviceRating.findUnique({
      where: { id },
    });

    if (!serviceRating) {
      throw createHttpError(404, "Service non trouvé");
    }

    const updateServiceRating = await prisma.serviceRating.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updateServiceRating);
  } catch (error) {
    next(error);
  }
};

export const deleteServiceRating = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceRating = await prisma.serviceRating.findUnique({
      where: { id },
    });

    if (!serviceRating) {
      throw createHttpError(404, "Service non trouvé");
    }

    await prisma.serviceRating.delete({
      where: { id },
    });

    res.status(200).json({ message: "Service supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

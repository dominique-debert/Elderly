import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma/client.js";
import { createHttpError } from "@/utils";
import { IServiceCompleted } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Service Completed
 *   description: Gestion des services complétés
 */
export const createServiceCompleted = async (
  req: Request<{}, {}, IServiceCompleted>,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceCompleted = await prisma.serviceCompleted.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(serviceCompleted);
  } catch (error) {
    next(error);
  }
};

export const getAllServiceCompleted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceCompleted = await prisma.serviceCompleted.findMany({
      orderBy: {
        completionDate: "desc",
      },
    });
    res.status(200).json({ serviceCompleted });
  } catch (error) {
    next(error);
  }
};

export const getServiceCompletedById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceCompleted = await prisma.serviceCompleted.findUnique({
      where: { id },
    });

    if (!serviceCompleted) {
      throw createHttpError(404, "Service non trouvé");
    }

    res.status(200).json(serviceCompleted);
  } catch (error) {
    next(error);
  }
};

export const updateServiceCompleted = async (
  req: Request<{ id: string }, {}, IServiceCompleted>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceCompleted = await prisma.serviceCompleted.findUnique({
      where: { id },
    });

    if (!serviceCompleted) {
      throw createHttpError(404, "Service non trouvé");
    }

    const updateServiceCompleted = await prisma.serviceCompleted.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updateServiceCompleted);
  } catch (error) {
    next(error);
  }
};

export const deleteServiceCompleted = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const serviceCompleted = await prisma.serviceCompleted.findUnique({
      where: { id },
    });

    if (!serviceCompleted) {
      throw createHttpError(404, "Service non trouvé");
    }

    await prisma.serviceCompleted.delete({
      where: { id },
    });

    res.status(200).json({ message: "Service supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { ITrustCircle } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Trust Circle
 *   description: Gestion des cercles de confiance
 */
export const createTrustCircle = async (
  req: Request<{}, {}, ITrustCircle>,
  res: Response,
  next: NextFunction
) => {
  try {
    const trustCircle = await prisma.trustCircle.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(trustCircle);
  } catch (error) {
    next(error);
  }
};

export const getAllTrustCircle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trustCircle = await prisma.trustCircle.findMany({
      orderBy: {
        dateAdded: "desc",
      },
    });
    res.status(200).json({ trustCircle });
  } catch (error) {
    next(error);
  }
};

export const getTrustCircleById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustCircle = await prisma.trustCircle.findUnique({
      where: { id },
    });

    if (!trustCircle) {
      throw createHttpError(404, "Cercle de confiance non trouvé");
    }

    res.status(200).json(trustCircle);
  } catch (error) {
    next(error);
  }
};

export const updateTrustCircle = async (
  req: Request<{ id: string }, {}, ITrustCircle>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustCircle = await prisma.trustCircle.findUnique({
      where: { id },
    });

    if (!trustCircle) {
      throw createHttpError(404, "Cercle de confiance non trouvé");
    }

    const updateTrustCircle = await prisma.trustCircle.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updateTrustCircle);
  } catch (error) {
    next(error);
  }
};

export const deleteTrustCircle = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustCircle = await prisma.trustCircle.findUnique({
      where: { id },
    });

    if (!trustCircle) {
      throw createHttpError(404, "Cercle de confiance non trouvé");
    }

    await prisma.trustCircle.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Cercle de confiance supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

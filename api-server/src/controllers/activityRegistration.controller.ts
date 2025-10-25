import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { PrismaClient } from "@/prisma";
import { IActivityRegistration } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Activity Registrations
 *   description: Inscriptions aux activités
 */

export const createActivityRegistration = async (
  req: Request<{}, {}, IActivityRegistration>,
  res: Response,
  next: NextFunction
) => {
  try {
    const registrationToCreate = await prisma.activityRegistration.create({
      data: req.body,
    });
    res.status(201).json(registrationToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllActivityRegistrations = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const registrations = await prisma.activityRegistration.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json({ registrations });
  } catch (error) {
    next(error);
  }
};

export const getActivityRegistrationById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const registration = await prisma.activityRegistration.findUnique({
      where: { id },
    });

    if (!registration) {
      throw createHttpError(404, `Inscription à l'activité non trouvée`);
    }

    res.status(200).json(registration);
  } catch (error) {
    next(error);
  }
};

export const updateActivityRegistration = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const registration = await prisma.activityRegistration.findUnique({
      where: { id },
    });

    if (!registration) {
      throw createHttpError(404, `Inscription à l'activité non trouvée`);
    }

    const registrationToUpdate = await prisma.activityRegistration.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });
    res.status(200).json(registrationToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteActivityRegistration = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const registration = await prisma.activityRegistration.findUnique({
      where: { id },
    });

    if (!registration) {
      throw createHttpError(404, `Inscription à l'activité non trouvée`);
    }

    await prisma.activityRegistration.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Inscription à l'activité supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

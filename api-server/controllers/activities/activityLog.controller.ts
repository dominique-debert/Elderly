import { PrismaClient } from "@/prisma/client";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import IActivityLog from "@/types/data/activities/IActivityLog";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Activity Logs
 *   description: Gestion des badges bien-être
 */

export const createActivityLog = async (
  req: Request<{}, {}, IActivityLog>,
  res: Response,
  next: NextFunction
) => {
  try {
    const logToCreate = await prisma.activityLog.create({
      data: req.body,
    });
    res.status(201).json(logToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllActivityLogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const logs = await prisma.activityLog.findMany({
      orderBy: {
        userId: "asc", // Ascending order (A-Z)
      },
    });

    res.status(200).json({ logs });
  } catch (error) {
    next(error);
  }
};

export const getActivityLogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const log = await prisma.activityLog.findUnique({
      where: { id },
    });

    if (!log) {
      throw createHttpError(404, `Log d'activité non trouvé`);
    }

    res.status(200).json(log);
  } catch (error) {
    next(error);
  }
};

export const updateActivityLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const log = await prisma.activityLog.findUnique({
      where: { id },
    });

    if (!log) {
      throw createHttpError(404, `Log d'activité non trouvé`);
    }

    const logToUpdate = await prisma.activityLog.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });
    res.status(200).json(logToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteActivityLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const log = await prisma.activityLog.findUnique({
      where: { id },
    });

    if (!log) {
      throw createHttpError(404, `Log d'activité non trouvé`);
    }

    await prisma.activityLog.delete({
      where: { id },
    });

    // Correction : Cette variable n'existait pas dans le code d'origine
    res.status(200).json({ message: "Log d'activité supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma/client";
import { createHttpError } from "@/utils/httpError";
import IActivity from "@/types/data/activities/IActivity";

const prisma = new PrismaClient();

export const createActivity = async (
  req: Request<{}, {}, IActivity>,
  res: Response,
  next: NextFunction
) => {
  try {
    const activityToCreate = await prisma.activity.create({
      data: req.body,
    });

    res.status(201).json(activityToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: { title: "asc" },
    });

    res.status(200).json({ activities });
  } catch (error) {
    next(error);
  }
};

export const getActivityById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const activity = await prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw createHttpError(404, "Activité non trouvée");
    }

    res.status(200).json(activity);
  } catch (error) {
    next(error);
  }
};

export const updateActivity = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const badge = await prisma.activity.findUnique({
      where: { id },
    });

    if (!badge) {
      throw createHttpError(404, "Activité non trouvée");
    }

    const activityToUpddate = await prisma.activity.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(activityToUpddate);
  } catch (error) {
    next(error);
  }
};

export const deleteActivity = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const activity = await prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw createHttpError(404, "Activité non trouvée");
    }

    await prisma.activity.delete({
      where: { id },
    });

    res.status(200).json({ message: "Activité supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

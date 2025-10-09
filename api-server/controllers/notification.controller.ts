import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { INotification } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Gestion des notifications
 */
export const createNotification = async (
  req: Request<{}, {}, INotification>,
  res: Response,
  next: NextFunction
) => {
  try {
    const notification = await prisma.notification.create({
      data: req.body,
    });
    res.status(201).json(notification);
  } catch (error) {
    next(error);
  }
};

export const getAllNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ notifications });
  } catch (error) {
    next(error);
  }
};

export const getAllNotificationsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: {
        createdAt: "asc",
      },
      where: {
        userId:
          typeof req.query.userId === "string" ? req.query.userId : undefined,
      },
    });
    res.status(200).json({ notifications });
  } catch (error) {
    next(error);
  }
};

export const getNotificationById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const notification = await prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw createHttpError(404, "Notification non trouvée");
    }

    res.status(200).json(notification);
  } catch (error) {
    next(error);
  }
};

export const updateNotification = async (
  req: Request<{ id: string }, {}, INotification>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const notification = await prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw createHttpError(404, "Notification non trouvée");
    }

    const updatedNotification = await prisma.notification.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedNotification);
  } catch (error) {
    next(error);
  }
};

export const deleteNotification = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const notification = await prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw createHttpError(404, "Notification non trouvée");
    }

    await prisma.notification.delete({
      where: { id },
    });

    res.status(200).json({ message: "Notification supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IUserPreferences } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: User Preferences
 *   description: Gestion des préférences utilisateur
 */
export const createUserPreferences = async (
  req: Request<{ userId: string }, {}, IUserPreferences>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPreferences = await prisma.userPreferences.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(userPreferences);
  } catch (error) {
    next(error);
  }
};

export const getUserPreferences = async (
  req: Request<{ userId: string }>,
  res: Response<any, Record<string, any>>,
  next: NextFunction
) => {
  try {
    const { userId }: { userId: string } = req.params;

    const defaultPrefs = {
      notificationMessages: true,
      notificationForum: true,
      notificationActivities: true,
      emailUpdates: true,
      smsUpdates: false,
      frequencyInstant: false,
      frequencyDaily: true,
      fontSize: "medium",
      highContrast: false,
      statusVisibilityEverybody: true,
      statusVisibilityFriends: false,
      statusVisibilityNoOne: false,
      messagesFromEverybody: true,
      messagesFromFriends: true,
      messagesFromNoOne: false,
      dataSharing: false,
    };

    const existingPrefs = await prisma.userPreferences.findFirst({
      where: { userId },
    });

    if (existingPrefs) {
      return res.status(200).json(existingPrefs);
    }

    const prefs = await prisma.userPreferences.create({
      data: { userId, ...defaultPrefs },
    });

    return res.status(200).json(prefs);
  } catch (err) {
    next(err);
  }
};

export const updateUserPreferences = async (
  req: Request<{ userId: string }, {}, IUserPreferences>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const userPreferences = await prisma.userPreferences.findFirst({
      where: { userId },
    });

    if (!userPreferences) {
      throw createHttpError(404, "Préférences utilisateur non trouvées");
    }

    const updatedUserPreferences = await prisma.userPreferences.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id: userPreferences.id },
    });

    res.status(200).json(updatedUserPreferences);
  } catch (error) {
    next(error);
  }
};

export const deleteUserPreferences = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const userPreferences = await prisma.userPreferences.findFirst({
      where: { userId },
    });

    if (!userPreferences) {
      throw createHttpError(404, "Préférences utilisateur non trouvées");
    }

    await prisma.userPreferences.delete({
      where: { id: userPreferences.id },
    });

    res
      .status(200)
      .json({ message: "Préférences utilisateur supprimées avec succès" });
  } catch (error) {
    next(error);
  }
};

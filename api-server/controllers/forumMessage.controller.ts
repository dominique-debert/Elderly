import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import { createHttpError } from "@/utils";
import { IForumMessage } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Forum messages
 *   description: API pour gérer les messages du forum
 */

export const createForumMessage = async (
  req: Request<{}, {}, IForumMessage>,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumMessageToCreate = await prisma.forumMessage.create({
      data: req.body,
    });
    res.status(201).json(forumMessageToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllForumMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumMessages = await prisma.forumMessage.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    res.status(200).json({ forumMessages });
  } catch (error) {
    next(error);
  }
};

export const getForumMessageById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumMessage = await prisma.forumMessage.findUnique({
      where: { id },
    });

    if (!forumMessage) {
      throw createHttpError(404, "Message non trouvé");
    }

    res.status(200).json(forumMessage);
  } catch (error) {
    next(error);
  }
};

export const updateForumMessage = async (
  req: Request<{ id: string }, IForumMessage>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumMessage = await prisma.forumMessage.findUnique({
      where: { id },
    });

    if (!forumMessage) {
      throw createHttpError(404, "Message non trouvé");
    }

    const forumMessageToUpdate = await prisma.forumMessage.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(forumMessageToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteForumMessage = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumMessage = await prisma.forumMessage.findUnique({
      where: { id },
    });

    if (!forumMessage) {
      throw createHttpError(404, "Message non trouvé");
    }

    await prisma.forumMessage.delete({
      where: { id },
    });

    res.status(200).json({ message: "Message supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

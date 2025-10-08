import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";
import { PrismaClient } from "@/prisma/client";
import IMessage from "@/types/data/conversations/IMessage";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Gestion des messages
 */
export const createMessage = async (
  req: Request<{}, {}, IMessage>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMessage = await prisma.message.create({
      data: req.body,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        sendDate: "desc",
      },
    });
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};

export const getMessageById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const message = await prisma.message.findUnique({
      where: { id },
    });

    if (!message) {
      throw createHttpError(404, "Message non trouvé");
    }

    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

export const updateMessage = async (
  req: Request<{ id: string }, {}, IMessage>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const message = await prisma.message.findUnique({
      where: { id },
    });

    if (!message) {
      throw createHttpError(404, "Message non trouvé");
    }

    const updatedMessage = await prisma.message.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedMessage);
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const message = await prisma.message.findUnique({
      where: { id },
    });

    if (!message) {
      throw createHttpError(404, "Message non trouvé");
    }

    await prisma.message.delete({
      where: { id },
    });

    res.status(200).json({ message: "Conversation supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

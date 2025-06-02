
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import IConversationParticipant from '@/@types/data/conversations/IConversationParticipant';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: API pour gérer les conversations
 */

export const createConversationParticipant = async (
  req: Request<{}, {}, IConversationParticipant>,
  res: Response,
  next: NextFunction
) => {
  try {
    const conversationParticipantToCreate = await prisma.conversationParticipant.create({
      data: req.body
    });
    res.status(201).json(conversationParticipantToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllConversationParticipants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const conversationParticipants = await prisma.conversationParticipant.findMany({
      orderBy: {
        dateAdded: 'asc'
      }
    });

    res.status(200).json({ conversationParticipants });
  } catch (error) {
    next(error);
  }
};

export const getConversationParticipantById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const conversationParticipant = await prisma.conversationParticipant.findUnique({
      where: { id }
    });

    if (!conversationParticipant) {
      throw createHttpError(404, 'Conversation non trouvée');
    }

    res.status(200).json(conversationParticipant);
  } catch (error) {
    next(error);
  }
};

export const updateConversationParticipant = async (
  req: Request<{ id: string },IConversationParticipant>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const conversationParticipant = await prisma.conversationParticipant.findUnique({
      where: { id }
    });

    if (!conversationParticipant) {
      throw createHttpError(404, 'Conversation non trouvée');
    }

    const conversationParticipantToUpdate = await prisma.conversationParticipant.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(conversationParticipantToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteConversationParticipant = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const conversationParticipant = await prisma.conversationParticipant.findUnique({
      where: { id }
    });

    if (!conversationParticipant) {
      throw createHttpError(404, 'Conversation non trouvée');
    }

    await prisma.conversationParticipant.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Conversation supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

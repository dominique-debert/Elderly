import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IForumTopic } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Forum topics
 *   description: API pour gérer les sujets du forum
 */

export const createForumTopic = async (
  req: Request<{}, {}, IForumTopic>,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumTopicToCreate = await prisma.forumTopic.create({
      data: {
        title: req.body.title,
        pinned: req.body.pinned,
        status: req.body.status,
        views: req.body.views,
        user: {
          connect: { id: req.body.author_id },
        },
        category: {
          connect: { id: req.body.category_id },
        },
      },
    });
    res.status(201).json(forumTopicToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllForumTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumTopics = await prisma.forumTopic.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({ forumTopics });
  } catch (error) {
    next(error);
  }
};

export const getForumTopicById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumTopic = await prisma.forumTopic.findUnique({
      where: { id },
    });

    if (!forumTopic) {
      throw createHttpError(404, "Sujet non trouvé");
    }

    res.status(200).json(forumTopic);
  } catch (error) {
    next(error);
  }
};

export const updateForumTopic = async (
  req: Request<{ id: string }, IForumTopic>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumTopic = await prisma.forumTopic.findUnique({
      where: { id },
    });

    if (!forumTopic) {
      throw createHttpError(404, "Sujet non trouvé");
    }

    const forumTopicToUpdate = await prisma.forumTopic.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(forumTopicToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteForumTopic = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumTopic = await prisma.forumTopic.findUnique({
      where: { id },
    });

    if (!forumTopic) {
      throw createHttpError(404, "Sujet non trouvé");
    }

    await prisma.forumTopic.delete({
      where: { id },
    });

    res.status(200).json({ message: "Sujet supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

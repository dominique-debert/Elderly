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
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const [forumTopics, totalCount] = await Promise.all([
      prisma.forumTopic.findMany({
        skip,
        take: limit,
        orderBy: [
          {
            pinned: "desc",
          },
          {
            createdAt: "desc",
          },
        ],
        include: {
          user: true,
          _count: {
            select: { forumMessage: true },
          },
        },
      }),
      prisma.forumTopic.count(),
    ]);

    res.status(200).json({
      data: forumTopics,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getForumStatistics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Total threads (topics)
    const totalThreads = await prisma.forumTopic.count();

    // Total discussions (messages)
    const totalMessages = await prisma.forumMessage.count();

    // Number of unique users who have posted (topics or messages)
    const topicAuthors = await prisma.forumTopic.findMany({
      select: { authorId: true },
      distinct: ["authorId"],
    });

    const messageAuthors = await prisma.forumMessage.findMany({
      select: { authorId: true },
      distinct: ["authorId"],
    });

    // Combine and count unique authors
    const uniqueAuthorIds = new Set([
      ...topicAuthors.map((t) => t.authorId),
      ...messageAuthors.map((m) => m.authorId),
    ]);

    const activeParticipants = uniqueAuthorIds.size;

    res.status(200).json({
      totalThreads,
      totalMessages,
      activeParticipants,
    });
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

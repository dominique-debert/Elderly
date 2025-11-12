import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IForumSection } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Forum sections
 *   description: API pour gérer les sections du forum
 */

export const createForumSection = async (
  req: Request<{}, {}, IForumSection>,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumSectionToCreate = await prisma.forumSection.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        authorId: req.body.authorId,
      },
    });
    res.status(201).json(forumSectionToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllForumSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumSections = await prisma.forumSection.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    res.status(200).json(forumSections);
  } catch (error) {
    next(error);
  }
};

export const getForumSectionById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  try {
    const forumSection = await prisma.forumSection.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!forumSection) {
      throw createHttpError(404, "Section non trouvée");
    }

    res.status(200).json({ forumSection });
  } catch (error) {
    next(error);
  }
};

export const updateForumSection = async (
  req: Request<{ id: string }, IForumSection>,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  try {
    const forumSection = await prisma.forumSection.findUnique({
      where: { id },
    });

    if (!forumSection) {
      throw createHttpError(404, "Section non trouvée");
    }

    const forumSectionToUpdate = await prisma.forumSection.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json({ forumSectionToUpdate });
  } catch (error) {
    next(error);
  }
};

export const deleteForumSection = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  try {
    const forumSection = await prisma.forumSection.findUnique({
      where: { id },
    });

    if (!forumSection) {
      throw createHttpError(404, "Section non trouvée");
    }

    await prisma.forumSection.delete({
      where: { id },
    });

    res.status(200).json({ message: "Section supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

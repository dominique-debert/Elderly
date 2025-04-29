import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import IForumCategory from '@/@types/data/forums/IForumCategory';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Forum categories
 *   description: API pour gérer les catégories du forum
 */

export const createForumCategory = async (
  req: Request<{}, {}, IForumCategory>,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumCategoryToCreate = await prisma.forumCategory.create({
      data: req.body
    });
    res.status(201).json(forumCategoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllForumCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumCategories = await prisma.forumCategory.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ forumCategories });
  } catch (error) {
    next(error);
  }
};

export const getForumCategoryById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(forumCategory);
  } catch (error) {
    next(error);
  }
};

export const updateForumCategory = async (
  req: Request< { id: string }, IForumCategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const forumCategoryToUpdate = await prisma.forumCategory.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(forumCategoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteForumCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.forumCategory.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

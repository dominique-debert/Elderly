import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Issue Categories
 *   description: API pour gérer les catégories de problèmes
 */

export const createIssueCategory = async (
  req: Request<{}, {}, ICategory>,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryToCreate = await prisma.issueCategory.create({
      data: req.body
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllIssueCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.issueCategory.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

export const getIssueCategoryById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.issueCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

export const updateIssueCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.issueCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const categoryToUpdate = await prisma.issueCategory.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteIssueCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.issueCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.activityCategory.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

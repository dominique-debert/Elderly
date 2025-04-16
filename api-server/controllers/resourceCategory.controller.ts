import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Resource Categories
 *   description: API pour gérer les catégories de projets
 */

export const createResourceCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryToCreate = await prisma.resourceCategory.create({
      data: req.body
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllResourceCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.resourceCategory.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

export const getResourceCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.resourceCategory.findUnique({
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

export const updateResourceCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.resourceCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const categoryToUpdate = await prisma.resourceCategory.update({
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

export const deleteResourceCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.resourceCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.resourceCategory.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

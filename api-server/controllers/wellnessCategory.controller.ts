import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Skill Categories
 *   description: API pour gérer les catégories de bien-être
 */

export const createWellnessCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryToCreate = await prisma.wellnessCategory.create({
      data: req.body
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllWellnessCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.wellnessCategory.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

export const getWellnessCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.wellnessCategory.findUnique({
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

export const updateWellnessCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.wellnessCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const categoryToUpdate = await prisma.wellnessCategory.update({
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

export const deleteWellnessCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.wellnessCategory.findUnique({
      where: { id }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.wellnessCategory.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

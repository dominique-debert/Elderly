import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Badge Categories
*   description: API pour gérer les catégories de badges
*/

// TOUTES LES CATÉGORIES DE BADGES
export const fetchAllBadgeCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const badgeCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.BADGE
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ badgeCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE BADGE PAR ID
export const fetchBadgeCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const badgeCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.BADGE }
    });

    if (!badgeCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(badgeCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE BADGE
export const createBadgeCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryToCreate = await prisma.category.create({
      data: req.body
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const updateBadgeCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.BADGE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const categoryToUpdate = await prisma.category.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: {
        id: Number(id),
        typeId: CategoryType.BADGE }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteBadgeCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.BADGE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.BADGE }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Wellness Categories
*   description: API pour gérer les catégories de bien-être
*/

// TOUTES LES CATÉGORIES DE BIEN-ÊTRE
export const fetchAllWellnessCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const wellnessCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.WELLNESS
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ wellnessCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE BIEN-ÊTRE PAR ID
export const fetchWellnessCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const wellnessCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.WELLNESS }
    });

    if (!wellnessCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(wellnessCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE BIEN-ÊTRE
export const createWellnessCategory = async (
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

export const updateWellnessCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.WELLNESS }
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
        typeId: CategoryType.WELLNESS }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteWellnessCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.WELLNESS }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.WELLNESS }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

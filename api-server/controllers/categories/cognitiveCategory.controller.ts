import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Cognitive Categories
*   description: API pour gérer les catégories d'exercices cognitifs
*/

// TOUTES LES CATÉGORIES D'EXERCICES COGNITIFS
export const fetchAllCognitiveCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cognitiveCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.COGNITIVE
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ cognitiveCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE D'EXERCICE COGNITIF PAR ID
export const fetchCognitiveCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const cognitiveCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.COGNITIVE }
    });

    if (!cognitiveCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(cognitiveCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE D'EXERCICE COGNITIF
export const createCognitiveCategory = async (
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

export const updateCognitiveCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.COGNITIVE }
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
        typeId: CategoryType.COGNITIVE }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteCognitiveCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.COGNITIVE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.COGNITIVE }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

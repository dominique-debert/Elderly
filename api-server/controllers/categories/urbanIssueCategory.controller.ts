import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Urban Issue Categories
*   description: API pour gérer les catégories de problèmes urbains
*/

// TOUTES LES CATÉGORIES DE PROBLÈMES URBAINS
export const fetchAllUrbanIssueCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const urbanIssueCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.URBAN_ISSUE
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ urbanIssueCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE PROBLÈME URBAIN PAR ID
export const fetchUrbanIssueCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const urbanIssueCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.URBAN_ISSUE }
    });

    if (!urbanIssueCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(urbanIssueCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE PROBLÈME URBAIN
export const createUrbanIssueCategory = async (
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

export const updateUrbanIssueCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.URBAN_ISSUE }
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
        typeId: CategoryType.URBAN_ISSUE }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteUrbanIssueCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.URBAN_ISSUE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.URBAN_ISSUE }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

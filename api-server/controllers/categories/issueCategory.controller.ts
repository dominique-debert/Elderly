import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Urban Issues Categories
*   description: API pour gérer les catégories de problèmes urbains
*/

// TOUTES LES CATÉGORIES DE PROBLÈMES URBAINS
export const fetchAllIssueCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const issueCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.ISSUE
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ issueCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE PROBLÈME URBAIN PAR ID
export const fetchIssueCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const issueCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.ISSUE }
    });

    if (!issueCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(issueCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE PROBLÈME URBAIN
export const createIssueCategory = async (
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

export const updateIssueCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.ISSUE }
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
        typeId: CategoryType.ISSUE }
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
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.ISSUE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.ISSUE }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

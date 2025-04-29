import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Project Categories
*   description: API pour gérer les catégories de projets
*/

// TOUTES LES CATÉGORIES DE PROJETS
export const fetchAllProjectCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.PROJECT
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ projectCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE PROJET PAR ID
export const fetchProjectCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const projectCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROJECT }
    });

    if (!projectCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(projectCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE PROJET
export const createProjectCategory = async (
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

export const updateProjectCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROJECT }
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
        typeId: CategoryType.PROJECT }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteProjectCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROJECT }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.PROJECT }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

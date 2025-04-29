import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Program Categories
*   description: API pour gérer les catégories de programmes d'activité
*/

// TOUTES LES CATÉGORIES DE PROGRAMMES
export const fetchAllProgramCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const programCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.PROGRAM
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ programCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE PROGRAMME PAR ID
export const fetchProgramCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const programCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROGRAM }
    });

    if (!programCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(programCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE PROGRAMME
export const createProgramCategory = async (
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

export const updateProgramCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROGRAM }
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
        typeId: CategoryType.PROGRAM }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteProgramCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.PROGRAM }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.PROGRAM }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

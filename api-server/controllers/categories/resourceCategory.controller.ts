import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Resource Categories
*   description: API pour gérer les catégories de ressources
*/

// TOUTES LES CATÉGORIES DE RESSOURCES
export const fetchAllResourceCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resourceCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.RESOURCE
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ resourceCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE RESSOURCE PAR ID
export const fetchResourceCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const resourceCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.RESOURCE }
    });

    if (!resourceCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(resourceCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE RESSOURCE
export const createResourceCategory = async (
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

export const updateResourceCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.RESOURCE }
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
        typeId: CategoryType.RESOURCE }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteResourceCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.RESOURCE }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.RESOURCE }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

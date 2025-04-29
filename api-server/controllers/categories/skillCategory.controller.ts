import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Skill Categories
*   description: API pour gérer les catégories de compétences
*/

// TOUTES LES CATÉGORIES DE COMPÉTENCES
export const fetchAllSkillCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skillCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.SKILL
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({ skillCategories });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE COMPÉTENCE PAR ID
export const fetchSkillCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const skillCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.SKILL }
    });

    if (!skillCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(skillCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE COMPÉTENCE
export const createSkillCategory = async (
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

export const updateSkillCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.SKILL }
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
        typeId: CategoryType.SKILL }
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteSkillCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.SKILL }
    });

    if (!category) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: CategoryType.SKILL }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

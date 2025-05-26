import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import IForumCategory from '@/@types/data/forums/IForumCategory';
import { ECategoryType } from "@/@types/data/categories/ECategory";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Forum categories
 *   description: API pour gérer les catégories du forum
 */

export const createForumCategory = async (
  req: Request<{}, {}, IForumCategory>,
  res: Response,
  next: NextFunction
) => {
  try {
    const forumCategoryToCreate = await prisma.forumCategory.create({
      data: req.body
    });
    res.status(201).json(forumCategoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllForumCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.FORUM
      },
      orderBy: {
        categoryName: 'asc',
      },
      include: {
        categoryType:{
          select: {
            id: true,
            name: true
          },
        },
        categoryChapter: {
          select: {
            chapterId: true,
            chapterName: true, 
            chapterDescription: true,
          },
        },
      }
    });
    
    const grouped: Record<string, Record<string, any[]>> = {};
    
    // Étape 1 : Regrouper d'abord par typeName → chapterName
    categories.forEach((category) => {
      const typeName = category.categoryType?.name ?? 'Sans type';
      const chapterName = category.categoryChapter?.chapterName ?? 'Sans chapitre';
      
      if (!grouped[typeName]) grouped[typeName] = {};
      if (!grouped[typeName][chapterName]) grouped[typeName][chapterName] = [];
      
      grouped[typeName][chapterName].push({
        id: category.id,
        categoryName: category.categoryName,
        description: category.description,
      });
    });
    
    // Étape 2 : Trier par typeName > chapterName > categoryName
    const sortedGrouped: Record<string, Record<string, any[]>> = {};
    
    Object.keys(grouped).sort().forEach((typeName) => {
      sortedGrouped[typeName] = {};
      
      Object.keys(grouped[typeName]).sort().forEach((chapterName) => {
        sortedGrouped[typeName][chapterName] = grouped[typeName][chapterName].sort((a, b) =>
          a.categoryName.localeCompare(b.categoryName)
      );
    });
  });
  
  
  res.status(200).json(grouped);
} catch (error) {
  next(error);
}
};

export const getForumCategoryById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    res.status(200).json(forumCategory);
  } catch (error) {
    next(error);
  }
};

export const updateForumCategory = async (
  req: Request< { id: string }, IForumCategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    const forumCategoryToUpdate = await prisma.forumCategory.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(forumCategoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteForumCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const forumCategory = await prisma.forumCategory.findUnique({
      where: { id }
    });

    if (!forumCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }

    await prisma.forumCategory.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

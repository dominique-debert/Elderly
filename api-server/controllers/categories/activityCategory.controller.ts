import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError.js';
import { ECategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: Activity Categories
*   description: API pour gérer les catégories d'activités
*/

// TOUTES LES CATÉGORIES D'ACTIVITÉS
export const fetchAllActivityCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.ACTIVITY
      },
      orderBy: {
        categoryName: 'asc'
      },
      include: {
        categoryType: {
          select: { name: true }
        },
        categoryChapter: {
          select: {
            chapterName: true,
            chapterDescription: true
          }
        }
      }
    });
    
    // Regroupement
    const grouped: Record<string, Record<string, any[]>> = {};
    
    categories.forEach((category) => {
      const chapterName = category.categoryChapter?.chapterName ?? 'Sans chapitre';
      const typeName = category.categoryType?.name ?? 'Sans type';
      
      if (!grouped[chapterName]) grouped[chapterName] = {};
      if (!grouped[chapterName][typeName]) grouped[chapterName][typeName] = [];
      
      grouped[chapterName][typeName].push({
        id: category.id,
        categoryName: category.categoryName,
        description: category.description,
      });
    });
    
    res.status(200).json(grouped);
  } catch (error) {
    next(error);
  }
};


// CATÉGORIE D'ACTIVITÉ PAR ID
export const fetchActivityCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  try {
    const activityCategory = await prisma.category.findFirst({
      where: {
        id: Number(id),
        typeId: ECategoryType.ACTIVITY }
    });
      
    if (!activityCategory) {
      throw createHttpError(404, 'Catégorie non trouvée');
    }
      
    res.status(200).json(activityCategory);
  } catch (error) {
    next(error);
  }
};
  
  // CRÉER UNE CATÉGORIE D'ACTIVITÉ
  export const createActivityCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { categoryName, description, chapterId } = req.body;
      
      const categoryToCreate = await prisma.category.create({
        data: {
          categoryName,
          description,
          typeId: ECategoryType.ACTIVITY,
          chapterId: chapterId
        }
      });
      
      res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};
  
  export const updateActivityCategory = async (
    req: Request<{ id: string }, ICategory>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: Number(id)
        }});
        
        if (!category) {
          throw createHttpError(404, 'Activité non trouvée');
        }
        
        const categoryToUpdate = await prisma.category.update({
          data: {
            ...req.body,
            updatedAt: new Date()
          },
          where: {
            id: Number(id),
            typeId: ECategoryType.ACTIVITY
           }
          });
          
          res.status(200).json(categoryToUpdate);
        } catch (error) {
          next(error);
        }
      };
      
export const deleteActivityCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
  ) => {
    const { id } = req.params;
    
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: Number(id),
          typeId: ECategoryType.ACTIVITY }
        });
        
        if (!category) {
          throw createHttpError(404, 'Catégorie non trouvée');
        }
        
        await prisma.category.delete({
          where: {
            id: Number(id),
            typeId: ECategoryType.ACTIVITY }
          });
          
          res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};
          
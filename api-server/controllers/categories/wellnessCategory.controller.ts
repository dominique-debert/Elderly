import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError.js';
import { ECategoryType } from '@/@types/data/categories/ECategory';
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
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.WELLNESS
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


// CATÉGORIE DE BIEN-ÊTRE PAR ID
export const fetchWellnessCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  try {
    const WellnessCategory = await prisma.category.findFirst({
      where: {
        id: Number(id),
        typeId: ECategoryType.WELLNESS }
    });
      
    if (!WellnessCategory) {
      throw createHttpError(404, `Catégorie de bien-être non trouvée`);
    }
      
    res.status(200).json(WellnessCategory);
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
      const { categoryName, description, chapterId } = req.body;
      
      const categoryToCreate = await prisma.category.create({
        data: {
          categoryName,
          description,
          typeId: ECategoryType.WELLNESS,
          chapterId: chapterId
        }
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
          id: Number(id)
        }});
        
        if (!category) {
          throw createHttpError(404, `Catégorie de bien-être non trouvée`);
        }
        
        const categoryToUpdate = await prisma.category.update({
          data: {
            ...req.body,
            updatedAt: new Date()
          },
          where: {
            id: Number(id),
            typeId: ECategoryType.WELLNESS
           }
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
          typeId: ECategoryType.WELLNESS }
        });
        
        if (!category) {
          throw createHttpError(404, `Catégorie de bien-être non trouvée`);
        }
        
        await prisma.category.delete({
          where: {
            id: Number(id),
            typeId: ECategoryType.WELLNESS 
          }
        });
          
        res.status(200).json({ message: `Catégorie de bien-être supprimée avec succès` });
  } catch (error) {
    next(error);
  }
};
          
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma/client";
import { createHttpError } from "@/utils/httpError.js";
import { ECategoryType } from "@/@types/data/categories/ECategory";
import ICategory from "@/@types/data/categories/ICategory";

const prisma = new PrismaClient({log: ['query']});

/**
* @swagger
* tags:
*   name: Help Categories
*   description: API pour gérer les catégories d'aide
*/

// TOUTES LES CATÉGORIES D'AIDE
export const fetchAllHelpCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.HELP
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
            chapterDescription: true,
          },
        }
      }
    });
    
    // Regroupement
    const grouped: Record<string, Record<string, any[]>> = {};
    
    categories.forEach((category) => {
      const chapterName = category.categoryChapter?.chapterName ?? "Sans chapitre";
      const typeName = category.categoryType?.name ?? "Sans type";
      
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


// CATÉGORIE D'AIDE PAR ID
export const fetchHelpCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  try {
    const helpCategory = await prisma.category.findFirst({
      where: {
        id: Number(id),
        typeId: ECategoryType.HELP }
    });
      
    if (!helpCategory) {
      throw createHttpError(404, `Catégorie d'aide non trouvée`);
    }
      
    res.status(200).json(helpCategory);
  } catch (error) {
    next(error);
  }
};
  
  // CRÉER UNE CATÉGORIE D'AIDE
  export const createHelpCategory = async (
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
          typeId: ECategoryType.HELP,
          chapterId: chapterId
        }
      });
      
      res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};
  
  export const updateHelpCategory = async (
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
          throw createHttpError(404, `Catégorie d'aide non trouvée`);
        }
        
        const categoryToUpdate = await prisma.category.update({
          data: {
            ...req.body,
            updatedAt: new Date()
          },
          where: {
            id: Number(id),
            typeId: ECategoryType.HELP
           }
          });
          
          res.status(200).json(categoryToUpdate);
        } catch (error) {
          next(error);
        }
      };
      
export const deleteHelpCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
  ) => {
    const { id } = req.params;
    
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: Number(id),
          typeId: ECategoryType.HELP }
        });
        
        if (!category) {
          throw createHttpError(404, `Catégorie d'aide non trouvée`);
        }
        
        await prisma.category.delete({
          where: {
            id: Number(id),
            typeId: ECategoryType.HELP }
          });
          
          res.status(200).json({ message: `Catégorie  d'aide supprimée avec succès` });
  } catch (error) {
    next(error);
  }
};

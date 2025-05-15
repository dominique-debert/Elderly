import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError.js';
import { CategoryType } from '@/@types/data/categories/ECategory';
import ICategory from '@/@types/data/categories/ICategory';
import { activityCategorySchema } from '../../validators/activityCategory.validator';

const prisma = new PrismaClient();

// { id: 1, name: 'ACTIVITY' },
// { id: 2, name: 'BADGE' },
// { id: 3, name: 'COGNITIVE' },
// { id: 4, name: 'FORUM' },
// { id: 5, name: 'HELP' },
// { id: 6, name: 'NUTRITIONAL' },
// { id: 7, name: 'PROGRAM' },
// { id: 8, name: 'PROJECT' },
// { id: 9, name: 'RESOURCE' },
// { id: 10, name: 'SERVICE' },
// { id: 11, name: 'SKILL' },
// { id: 12, name: 'URBAN_ISSUE' },
// { id: 13, name: 'WELLNESS' },


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
    const activityCategories = await prisma.category.findMany({
      where: {
        typeId: CategoryType.ACTIVITY
      },
      orderBy: {
        name: 'asc'
      }
    });
    
    res.status(200).json({ activityCategories });
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
    const activityCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: CategoryType.ACTIVITY }
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
    const { name, description } = req.body;

    const categoryToCreate = await prisma.category.create({
      data: {
        name,
        description,
        typeId: CategoryType.ACTIVITY, // 👈 Clé étrangère correcte ici
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
          id: Number(id),
          typeId: CategoryType.ACTIVITY }
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
            typeId: CategoryType.ACTIVITY }
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
              typeId: CategoryType.ACTIVITY }
            });
            
            if (!category) {
              throw createHttpError(404, 'Catégorie non trouvée');
            }
            
            await prisma.category.delete({
              where: {
                id: Number(id),
                typeId: CategoryType.ACTIVITY }
              });
              
              res.status(200).json({ message: 'Catégorie supprimée avec succès' });
            } catch (error) {
              next(error);
            }
          };
          
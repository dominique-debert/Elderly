import { PrismaClient } from "../prisma/client.js";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import IWellnessBadge from "@/@types/data/IWellnessBadge.js";

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: WellnessBadges
*   description: Gestion des badges bien-être
*/

export const createWellnessBadge = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    name,
    description,
    category,
    image,
    level
  }: IWellnessBadge = req.body;
  
  try {
    const newWellnessBadge = await prisma.wellness_badge.create({
      data: {
        name,
        description,
        category,
        image,
        level      
      }
    });
    res.status(201).json(newWellnessBadge);
  } catch (error) {
    next(error);
  }
};

export const getAllWellnessBadges = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const wellnessBadges = await prisma.wellness_badge.findMany({
      orderBy: {
        name: 'asc', // Ascending order (A-Z)
      },
    });
    
    res.status(200).json({ wellnessBadges });
  } catch (error) {
    next(error);
  }  
};

export const getWellnessBadgeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  
  try {
    const wellnessBadge = await prisma.wellness_badge.findUnique({
      where: { id },
    });
    
    if (!wellnessBadge) {
      throw createHttpError(404, `Badge bien-être non trouvé`);
    }
    
    res.status(200).json(wellnessBadge);
  } catch (error) {
    next(error);
  }  
};

export const updateWellnessBadge = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  
  const {
    name,
    description,
    category,
    image,
    level
  }: IWellnessBadge = req.body;
  
  try {
    const wellnessBadge = await prisma.wellness_badge.findUnique({
      where: { id },
    });    
    
    if (!wellnessBadge) {
      throw createHttpError(404, `Badge bien-être non trouvé`);
    }
    
    const updatedWellnessBadge = await prisma.wellness_badge.update({
      data: {
        name,
        description,
        category,
        image,
        level      
      },
      where: { id },
    });
    res.status(200).json(updatedWellnessBadge);
  } catch (error) {
    next(error);
  }
};

export const deleteWellnessBadge = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
 
  try {
    const wellnessBadge = await prisma.wellness_badge.findUnique({
      where: { id },
    });    
    
    if (!wellnessBadge) {
      throw createHttpError(404, `Badge bien-être non trouvé`);
    }
    
    await prisma.wellness_badge.delete({
      where: { id },
    });
    
    // Correction : Cette variable n'existait pas dans le code d'origine
    res.status(200).json({ message: "Badge bien-être supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};
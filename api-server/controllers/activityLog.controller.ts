import { PrismaClient } from "../prisma/client";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import IActivityLog from "@/@types/data/IActivityLog";

const prisma = new PrismaClient();

/**
* @swagger
* tags:
*   name: WellnessBadges
*   description: Gestion des badges bien-être
*/

export const createWellnessBadge = async (
  req: Request<{}, {}, IActivityLog>,
  res: Response, 
  next: NextFunction
) => {
  
  try {
    const newActivityLog = await prisma.activityLog.create({
      data: req.body
    });
    res.status(201).json(newActivityLog);
  } catch (error) {
    next(error);
  }
};

export const getAllWellnessBadges = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const wellnessBadges = await prisma.wellnessBadge.findMany({
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
    const wellnessBadge = await prisma.wellnessBadge.findUnique({
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
  
  try {
    const wellnessBadge = await prisma.wellnessBadge.findUnique({
      where: { id },
    });    
    
    if (!wellnessBadge) {
      throw createHttpError(404, `Badge bien-être non trouvé`);
    }
    
    const updatedWellnessBadge = await prisma.wellnessBadge.update({
      data: req.body,
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
    const wellnessBadge = await prisma.wellnessBadge.findUnique({
      where: { id },
    });    
    
    if (!wellnessBadge) {
      throw createHttpError(404, `Badge bien-être non trouvé`);
    }
    
    await prisma.wellnessBadge.delete({
      where: { id },
    });
    
    // Correction : Cette variable n'existait pas dans le code d'origine
    res.status(200).json({ message: "Badge bien-être supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};
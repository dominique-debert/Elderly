import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../prisma/client.js';
import createHttpError from 'http-errors';
import INutritionalAdvice from '@/@types/INutritionalAdvice.js';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: NutritionAdvices
 *   description: Gestion des avis nutritionnels
 */
export const createNutritionalAdvice = async (
  req: Request<{}, {}, INutritionalAdvice>,
  res: Response,
  next: NextFunction
) => {
  const { title, description, category, season, image } = req.body;

  try {
    const newAdvice = await prisma.nutritional_advice.create({
      data: {
        title,
        description,
        category,
        season,
        image,
      },
    });
    res.status(201).json(newAdvice);
  } catch (error) {
    next(error);
  }
};

export const getAllNutritionalAdvices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const advices = await prisma.nutritional_advice.findMany({
      orderBy: {
        title: 'asc', // corrected from `name: 'title'`
      },
    });

    res.status(200).json({ advices });
  } catch (error) {
    next(error);
  }
};

export const getNutritionalAdviceById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const advice = await prisma.nutritional_advice.findUnique({
      where: { id },
    });

    if (!advice) {
      throw createHttpError(404, 'Conseil nutritionnel non trouvé');
    }

    res.status(200).json(advice);
  } catch (error) {
    next(error);
  }
};

export const updateNutritionalAdvice = async (
  req: Request<{ id: string }, {}, INutritionalAdvice>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { title, description, category, season, image } = req.body;

  try {
    const advice = await prisma.nutritional_advice.findUnique({
      where: { id },
    });

    if (!advice) {
      throw createHttpError(404, 'Avis nutritionnel non trouvé');
    }

    const updatedAdvice = await prisma.nutritional_advice.update({
      data: {
        title,
        description,
        category,
        season,
        image,
      },
      where: { id },
    });

    res.status(200).json(updatedAdvice);
  } catch (error) {
    next(error);
  }
};

export const deleteNutritionalAdvice = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await prisma.nutritional_advice.findUnique({
      where: { id },
    });

    if (!service) {
      throw createHttpError(404, 'Avis nutritionnel non trouvé');
    }

    await prisma.nutritional_advice.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Avis nutritionnel supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

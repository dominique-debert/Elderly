import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import { createHttpError } from "@/utils";
import { ISurveyResponse } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Survey Response
 *   description: Gestion des réponses aux enquêtes
 */
export const createSurveyResponse = async (
  req: Request<{}, {}, ISurveyResponse>,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyResponse = await prisma.surveyResponse.create({
      data: {
        ...req.body,
        responseDate: new Date(),
      },
    });
    res.status(201).json(surveyResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllSurveyResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyResponse = await prisma.surveyResponse.findMany({
      orderBy: {
        responseDate: "desc",
      },
    });
    res.status(200).json({ surveyResponse });
  } catch (error) {
    next(error);
  }
};

export const getSurveyResponseById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const surveyResponse = await prisma.surveyResponse.findUnique({
      where: { id },
    });

    if (!surveyResponse) {
      throw createHttpError(404, "Réponse à l'enquête non trouvée");
    }

    res.status(200).json(surveyResponse);
  } catch (error) {
    next(error);
  }
};

export const updateSurveyResponse = async (
  req: Request<{ id: string }, {}, ISurveyResponse>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const surveyResponse = await prisma.surveyResponse.findUnique({
      where: { id },
    });

    if (!surveyResponse) {
      throw createHttpError(404, "Réponse à l'enquête non trouvée");
    }

    const updateSurveyResponse = await prisma.surveyResponse.update({
      data: {
        ...req.body,
        responseDate: new Date(),
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updateSurveyResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteSurveyResponse = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const surveyResponse = await prisma.surveyResponse.findUnique({
      where: { id },
    });

    if (!surveyResponse) {
      throw createHttpError(404, "Réponse à l'enquête non trouvée");
    }

    await prisma.surveyResponse.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Réponse à l'enquête supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

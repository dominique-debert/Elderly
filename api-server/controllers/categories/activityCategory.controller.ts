import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { ECategoryType, ICategory } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Activity Categories
 *   description: API pour gérer les catégories d'activités
 */

// TOUTES LES CATÉGORIES D'ACTIVITÉS
export const getAllActivityCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.ACTIVITY,
      },
      orderBy: {
        categoryName: "asc",
      },
      include: {
        categoryType: {
          select: {
            id: true,
            name: true,
          },
        },
        categoryChapter: {
          select: {
            chapterId: true,
            chapterName: true,
            chapterDescription: true,
          },
        },
      },
    });

    const grouped: Record<string, Record<string, any[]>> = {};

    // Étape 1 : Regrouper d'abord par typeName → chapterName
    categories.forEach((category) => {
      const typeName = category.categoryType?.name ?? "Sans type";
      const chapterName =
        category.categoryChapter?.chapterName ?? "Sans chapitre";

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

    Object.keys(grouped)
      .sort()
      .forEach((typeName) => {
        sortedGrouped[typeName] = {};

        Object.keys(grouped[typeName])
          .sort()
          .forEach((chapterName) => {
            sortedGrouped[typeName][chapterName] = grouped[typeName][
              chapterName
            ].sort((a, b) => a.categoryName.localeCompare(b.categoryName));
          });
      });

    res.status(200).json(sortedGrouped);
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE D'ACTIVITÉ PAR ID
export const getActivityCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const activityCategory = await prisma.category.findFirst({
      where: {
        id: Number(id),
        typeId: ECategoryType.ACTIVITY,
      },
    });

    if (!activityCategory) {
      throw createHttpError(404, `Catégorie d'activité non trouvée`);
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
    const { name, description, chapterId, typeId } = req.body;

    const categoryToCreate = await prisma.category.create({
      data: {
        categoryName: name,
        description,
        typeId: typeId || ECategoryType.ACTIVITY,
        chapterId: chapterId,
      },
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
      },
    });

    if (!category) {
      throw createHttpError(404, `Catégorie d'activité non trouvée`);
    }

    const categoryToUpdate = await prisma.category.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: {
        id: Number(id),
        typeId: ECategoryType.ACTIVITY,
      },
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
        typeId: ECategoryType.ACTIVITY,
      },
    });

    if (!category) {
      throw createHttpError(404, `Catégorie d'activité non trouvée`);
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: ECategoryType.ACTIVITY,
      },
    });

    res
      .status(200)
      .json({ message: `Catégorie d'activité supprimée avec succès` });
  } catch (error) {
    next(error);
  }
};

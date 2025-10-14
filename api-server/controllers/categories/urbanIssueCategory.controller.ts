import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { ECategoryType, ICategory } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Urban Issue Categories
 *   description: API pour gérer les catégories de problèmes urbains
 */

// TOUTES LES CATÉGORIES DE PROBLÈMES URBAINS
export const getAllUrbanIssueCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: ECategoryType.URBAN_ISSUE,
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

    res.status(200).json(grouped);
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE DE PROBLÈME URBAIN PAR ID
export const getUrbanIssueCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const urbanIssueCategory = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: ECategoryType.URBAN_ISSUE,
      },
    });

    if (!urbanIssueCategory) {
      throw createHttpError(404, "Catégorie non trouvée");
    }

    res.status(200).json(urbanIssueCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE DE PROBLÈME URBAIN
export const createUrbanIssueCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryToCreate = await prisma.category.create({
      data: req.body,
    });
    res.status(201).json(categoryToCreate);
  } catch (error) {
    next(error);
  }
};

export const updateUrbanIssueCategory = async (
  req: Request<{ id: string }, ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: ECategoryType.URBAN_ISSUE,
      },
    });

    if (!category) {
      throw createHttpError(404, "Catégorie non trouvée");
    }

    const categoryToUpdate = await prisma.category.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: {
        id: Number(id),
        typeId: ECategoryType.URBAN_ISSUE,
      },
    });

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteUrbanIssueCategory = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
        typeId: ECategoryType.URBAN_ISSUE,
      },
    });

    if (!category) {
      throw createHttpError(404, "Catégorie non trouvée");
    }

    await prisma.category.delete({
      where: {
        id: Number(id),
        typeId: ECategoryType.URBAN_ISSUE,
      },
    });

    res.status(200).json({ message: "Catégorie supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

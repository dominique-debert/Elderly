import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { ECategoryType, ICategory } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Activity Categories
 *   description: API pour gérer les catégories d'aide
 */

// TOUTES LES CATÉGORIES D'AIDE
export const getAllActivityCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Récupère le categoryType ciblé (id = ECategoryType.ACTIVITY) et inclut ses categories (liste => orderBy possible)
    const typeWithCategories = await prisma.categoryType.findUnique({
      where: { id: ECategoryType.ACTIVITY },
      include: {
        categories: {
          include: {
            categoryChapter: {
              select: {
                chapterId: true,
                chapterName: true,
                chapterDescription: true,
              },
            },
          },
          orderBy: [
            { categoryChapter: { chapterName: "asc" } },
            { categoryName: "asc" },
          ],
        },
      },
    });

    if (!typeWithCategories) {
      return res.status(200).json({});
    }

    // Grouper par chapterName
    const groupedByChapter: Record<string, any[]> = {};
    typeWithCategories.categories.forEach((cat) => {
      const chapterName = cat.categoryChapter?.chapterName ?? "Sans chapitre";
      if (!groupedByChapter[chapterName]) groupedByChapter[chapterName] = [];
      groupedByChapter[chapterName].push({
        id: cat.id,
        categoryName: cat.categoryName,
        description: cat.description,
      });
    });

    res.status(200).json({
      typeId: typeWithCategories.id,
      typeName: typeWithCategories.name,
      chapters: groupedByChapter,
    });
  } catch (error) {
    next(error);
  }
};

// CATÉGORIE D'AIDE PAR ID
export const getActivityCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const helpCategory = await prisma.category.findFirst({
      where: {
        id: Number(id),
        typeId: ECategoryType.ACTIVITY,
      },
    });

    if (!helpCategory) {
      throw createHttpError(404, `Catégorie d'activité non trouvée`);
    }

    res.status(200).json(helpCategory);
  } catch (error) {
    next(error);
  }
};

// CRÉER UNE CATÉGORIE D'AIDE
export const createActivityCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, categoryName, description, chapterId } = req.body;

    // Use categoryName if provided, otherwise use name
    const finalCategoryName = categoryName || name;

    if (!finalCategoryName) {
      throw createHttpError(400, "Le nom de la catégorie est requis");
    }

    const categoryToCreate = await prisma.category.create({
      data: {
        categoryName: finalCategoryName,
        description: description || null,
        typeId: ECategoryType.ACTIVITY,
        chapterId: Number(chapterId),
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
  const { name, categoryName, ...rest } = req.body;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      throw createHttpError(404, `Catégorie d'activité non trouvée`);
    }

    const updateData = { ...rest };

    // Update categoryName if either name or categoryName is provided
    if (name || categoryName) {
      updateData.categoryName = categoryName || name;
    }

    const categoryToUpdate = await prisma.category.update({
      data: {
        ...updateData,
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

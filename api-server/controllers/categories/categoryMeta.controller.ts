import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@/prisma/client";
import { ECategoryType } from "@/types/data/categories/ECategory";

const prisma = new PrismaClient();

export async function getCategoryChapters(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const chapters = await prisma.categoryChapter.findMany({
      select: {
        chapterId: true,
        chapterName: true,
      },
      orderBy: { chapterName: "asc" },
    });
    return res.status(200).json(chapters ?? []);
  } catch (error) {
    next(error);
  }
}

export async function getCategoryTypes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const types = await prisma.categoryType.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: { name: "asc" },
    });
    return res.status(200).json(types ?? []);
  } catch (error) {
    next(error);
  }
}

export async function getCategories(
  req: Request,
  res: Response,
  next: NextFunction,
  categoryTypeId: number
) {
  try {
    const categories = await prisma.category.findMany({
      where: {
        typeId: categoryTypeId,
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
}

export async function getCategoryById(id: number) {
  const category = await prisma.category.findUnique({
    where: { id: id },
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
  return category;
}

export async function createCategory(category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) {
  const response = await prisma.category.create({
    data: category,
  });
  return response;
}

export const updateCategory = async (
  id: number,
  data: { name: string; description?: string }
) => {
  const response = await prisma.category.update({
    where: { id: Number(id) },
    data: {
      categoryName: data.name,
      description: data.description,
    },
  });
  return response;
};

export async function deleteCategory(id: number) {
  const response = await prisma.category.delete({
    where: { id: id },
  });
  return response;
}

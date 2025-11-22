import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@/prisma";

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

export async function getCategoryChapterById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const chapter = await prisma.categoryChapter.findUnique({
      where: { chapterId: Number(req.params.id) },
      select: {
        chapterId: true,
        chapterName: true,
      },
    });
    return res.status(200).json(chapter ?? null);
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

export async function getCategoryTypeById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const type = await prisma.categoryType.findUnique({
      where: { id: Number(req.params.id) },
      select: {
        id: true,
        name: true,
      },
    });
    return res.status(200).json(type ?? null);
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

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
}

export async function getCategoryById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const category = await prisma.category.findUnique({
      where: { id: Number(req.params.id) },
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

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
}

export async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { categoryName, description, chapterId, typeId } = req.body;

    const response = await prisma.category.create({
      data: {
        categoryName,
        description,
        chapterId: Number(chapterId),
        typeId: Number(typeId),
      },
      include: {
        categoryType: true,
        categoryChapter: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}

export async function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, description } = req.body;
    const id = Number(req.params.id);

    const response = await prisma.category.update({
      where: { id },
      data: {
        categoryName: name,
        description: description,
      },
      include: {
        categoryType: true,
        categoryChapter: true,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);

    const response = await prisma.category.delete({
      where: { id },
    });

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

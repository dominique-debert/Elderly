import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@/prisma/client";

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

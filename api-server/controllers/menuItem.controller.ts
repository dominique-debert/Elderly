import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

export const getAllMenuItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const menuItems = await prisma.menuItem.findMany({
      orderBy: { label: "asc" },
    });
    res.status(200).json({ menuItems });
  } catch (error) {
    next(error);
  }
};

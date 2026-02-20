import { Request, Response, NextFunction } from "express";
import { prisma } from "@/config/database";

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

import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import IBadgeRequest from '@/@types/IBadgeRequest.js';

const prisma = new PrismaClient();

export const createBadge = async (
  req: Request<{}, {}, IBadgeRequest>,
  res: Response,
  next: NextFunction
) => {
  const { name, description, icon, category, level } = req.body;

  try {
    const newBadge = await prisma.badge.create({
      data: { name, description, icon, category, level },
    });

    res.status(201).json(newBadge);
  } catch (error) {
    next(error);
  }
};

export const getAllBadges = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const badges = await prisma.badge.findMany({
      orderBy: { name: 'asc' },
    });

    res.status(200).json({ badges });
  } catch (error) {
    next(error);
  }
};

export const getBadgeById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const badge = await prisma.badge.findUnique({
      where: { id },
    });

    if (!badge) {
      throw createHttpError(404, 'Badge non trouvé');
    }

    res.status(200).json(badge);
  } catch (error) {
    next(error);
  }
};

export const updateBadge = async (
  req: Request<{}, {}, IBadgeRequest>,
  res: Response,
  next: NextFunction
) => {
  const { id, name, description, icon, category, level } = req.body;

  try {
    const badge = await prisma.badge.findUnique({
      where: { id },
    });

    if (!badge) {
      throw createHttpError(404, 'Badge non trouvé');
    }

    const updatedBadge = await prisma.badge.update({
      data: {
        name,
        description,
        icon,
        category,
        level,
        updated_at: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedBadge);
  } catch (error) {
    next(error);
  }
};

export const deleteBadge = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const badge = await prisma.badge.findUnique({
      where: { id },
    });

    if (!badge) {
      throw createHttpError(404, 'Badge non trouvé');
    }

    await prisma.badge.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Badge supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

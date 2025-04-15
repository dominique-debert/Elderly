import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import IBadge from '@/@types/data/IBadge';

const prisma = new PrismaClient();

export const createBadge = async (
  req: Request<{}, {}, IBadge>,
  res: Response,
  next: NextFunction
) => {
  const { name, description, icon, category_id, level } = req.body;

  try {
    const badgeToCreate = await prisma.badge.create({
      data: { name, description, icon, category_id, level },
    });

    res.status(201).json(badgeToCreate);
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
  req: Request<{ id: string }>, 
  res: Response, 
  next: NextFunction) => {
    
    const { id } = req.params;
    const { name, description, icon, category_id, level } = req.body;

  try {
    const badge = await prisma.badge.findUnique({
      where: { id },
    });

    if (!badge) {
      throw createHttpError(404, 'Badge non trouvé');
    }

    const badgeToUpdate = await prisma.badge.update({
      data: {
        name,
        description,
        icon,
        category_id,
        level,
        updated_at: new Date(),
      },
      where: { id },
    });

    res.status(200).json(badgeToUpdate);
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

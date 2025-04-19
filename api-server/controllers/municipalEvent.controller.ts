import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IMunicipalEvent from '@/@types/data/IMunicipalEvent';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Municipal Events
 *   description: Gestion des événements municipaux
 */
export const createMunicipalEvent = async (
  req: Request<{}, {}, IMunicipalEvent>,
  res: Response,
  next: NextFunction
) => {

  try {
    const municipalEvent = await prisma.municipalEvent.create({
      data: req.body
    });
    res.status(201).json(municipalEvent);
  } catch (error) {
    next(error);
  }
};

export const getAllMunicipalEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const municipalEvents  = await prisma.municipalEvent.findMany({
      orderBy: {
        startDate: 'desc'
      }
    });
    res.status(200).json({ municipalEvents });
  } catch (error) {
    next(error);
  }
};

export const getMunicipalEventById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const municipalEvent = await prisma.municipalEvent.findUnique({
      where: { id }
    });

    if (!municipalEvent) {
      throw createHttpError(404, 'Evénement municipal non trouvé');
    }

    res.status(200).json(municipalEvent);
  } catch (error) {
    next(error);
  }
};

export const updateMunicipalEvent = async (
  req: Request<{ id: string }, {}, IMunicipalEvent>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const municipalEvent = await prisma.municipalEvent.findUnique({
      where: { id }
    });

    if (!municipalEvent) {
      throw createHttpError(404, 'Evénement municipal non trouvé');
    }

    const updatedMunicipalEvent = await prisma.municipalEvent.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id },
    });

    res.status(200).json(updatedMunicipalEvent);
  } catch (error) {
    next(error);
  }
};

export const deleteMunicipalEvent = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const municipalEvent = await prisma.municipalEvent.findUnique({
      where: { id }
    });

    if (!municipalEvent) {
      throw createHttpError(404, 'Evénement municipal non trouvé');
    }

    await prisma.municipalEvent.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Evénement municipal supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

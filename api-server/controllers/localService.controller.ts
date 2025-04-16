import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { PrismaClient } from '../prisma/client.js'; // ou '@/prisma/client' si tu utilises des alias
import ILocalService from '@/@types/data/ILocalService.js';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: LocalServices
 *   description: Gestion des services locaux
 */
export const createLocalService = async (
  req: Request<{}, {}, ILocalService>,
  res: Response,
  next: NextFunction
) => {

  try {
    const newService = await prisma.localService.create({
      data: req.body
    });
    res.status(201).json(newService);
  } catch (error) {
    next(error);
  }
};

export const getAllLocalServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const localServices = await prisma.localService.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    res.status(200).json({ localServices });
  } catch (error) {
    next(error);
  }
};

export const getLocalServiceById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await prisma.localService.findUnique({
      where: { id }
    });

    if (!service) {
      throw createHttpError(404, 'Service local non trouvé');
    }

    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

export const updateLocalService = async (
  req: Request<{ id: string }, {}, Partial<ILocalService>>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await prisma.localService.findUnique({
      where: { id }
    });

    if (!service) {
      throw createHttpError(404, 'Service local non trouvé');
    }

    const updatedService = await prisma.localService.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id },
    });

    res.status(200).json(updatedService);
  } catch (error) {
    next(error);
  }
};

export const deleteLocalService = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const service = await prisma.localService.findUnique({
      where: { id }
    });

    if (!service) {
      throw createHttpError(404, 'Service local non trouvé');
    }

    await prisma.localService.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Service supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

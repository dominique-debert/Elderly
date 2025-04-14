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
  const {
    name,
    category,
    address,
    gps_coordinates,
    phone,
    website,
    description,
    hours,
    senior_friendly
  } = req.body;

  try {
    const newService = await prisma.local_service.create({
      data: {
        name,
        category,
        address,
        gps_coordinates,
        phone,
        website,
        description,
        hours,
        senior_friendly
      }
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
    const localServices = await prisma.local_service.findMany({
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
    const service = await prisma.local_service.findUnique({
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

  const {
    name,
    category,
    address,
    gps_coordinates,
    phone,
    website,
    description,
    hours,
    senior_friendly
  } = req.body;

  try {
    const service = await prisma.local_service.findUnique({
      where: { id }
    });

    if (!service) {
      throw createHttpError(404, 'Service local non trouvé');
    }

    const updatedService = await prisma.local_service.update({
      where: { id },
      data: {
        name,
        category,
        address,
        gps_coordinates,
        phone,
        website,
        description,
        hours,
        senior_friendly
      }
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
    const service = await prisma.local_service.findUnique({
      where: { id }
    });

    if (!service) {
      throw createHttpError(404, 'Service local non trouvé');
    }

    await prisma.local_service.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Service supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

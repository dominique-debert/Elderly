import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IResource from '@/@types/data/IResource';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: Gestion des ressources
 */
export const createResource = async (
  req: Request<{}, {}, IResource>,
  res: Response,
  next: NextFunction
) => {

  try {
    const resource = await prisma.resource.create({
      data: req.body
    });
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
};

export const getAllResources = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resources = await prisma.resource.findMany({
      orderBy: {
        title: 'asc'
      }
    });
    res.status(200).json({ resources });
  } catch (error) {
    next(error);
  }
};

export const getResourceById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const resource = await prisma.resource.findUnique({
      where: { id }
    });

    if (!resource) {
      throw createHttpError(404, 'Ressource non trouvée');
    }

    res.status(200).json(resource);
  } catch (error) {
    next(error);
  }
};

export const updateResource = async (
  req: Request<{ id: string }, {}, IResource>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const resource = await prisma.resource.findUnique({
      where: { id }
    });

    if (!resource) {
      throw createHttpError(404, 'Ressource non trouvée');
    }

    const updatedResource = await prisma.resource.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedResource);
  } catch (error) {
    next(error);
  }
};

export const deleteResource = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const resource = await prisma.resource.findUnique({
      where: { id }
    });

    if (!resource) {
      throw createHttpError(404, 'Ressource non trouvée');
    }

    await prisma.resource.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Ressource supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

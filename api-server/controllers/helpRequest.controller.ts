import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import IHelpRequest from '@/@types/data/IHelpRequest';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Help Requests
 *   description: API pour gérer les demandes d'aide
 */

export const createHelpRequest = async (
  req: Request<{}, {}, IHelpRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const helpRequestToCreate = await prisma.helpRequest.create({
      data: req.body
    });
    res.status(201).json(helpRequestToCreate);
  } catch (error) {
    next(error);
  }
};

export const getAllHelpRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const helpRequests = await prisma.helpRequest.findMany({
      orderBy: {
        neededDate: 'desc'
      }
    });

    res.status(200).json({ helpRequests });
  } catch (error) {
    next(error);
  }
};

export const getHelpRequestById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const helpRequest = await prisma.helpRequest.findUnique({
      where: { id }
    });

    if (!helpRequest) {
      throw createHttpError(404, 'Demande non trouvée');
    }

    res.status(200).json(helpRequest);
  } catch (error) {
    next(error);
  }
};

export const updateHelpRequest = async (
  req: Request<{ id: string }, IHelpRequest>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const helpRequest = await prisma.helpRequest.findUnique({
      where: { id }
    });

    if (!helpRequest) {
      throw createHttpError(404, 'Demande non trouvée');
    }

    const helpRequestToUpdate = await prisma.helpRequest.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(helpRequestToUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteHelpRequest = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const helpRequest = await prisma.helpRequest.findUnique({
      where: { id }
    });

    if (!helpRequest) {
      throw createHttpError(404, 'Demande non trouvée');
    }

    await prisma.helpRequest.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Demande supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};

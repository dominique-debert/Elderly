import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import ITrustedContact from '@/@types/data/ITrustedContact';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Trusted Contact
 *   description: Gestion des contacts de confiance
 */
export const createTrustedContact = async (
  req: Request<{}, {}, ITrustedContact>,
  res: Response,
  next: NextFunction
) => {

  try {
    const trustedContact = await prisma.trustedContact.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(trustedContact);
  } catch (error) {
    next(error);
  }
};

export const getAllTrustedContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trustedContacts = await prisma.trustedContact.findMany({
      orderBy: {
        lastName: 'desc',
        firstName: 'desc'
      }
    });
    res.status(200).json({ trustedContacts });
  } catch (error) {
    next(error);
  }
};

export const getTrustedContactById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustedContact = await prisma.trustedContact.findUnique({
      where: { id }
    });

    if (!trustedContact) {
      throw createHttpError(404, 'Contact de confiance non trouvé');
    }

    res.status(200).json(trustedContact);
  } catch (error) {
    next(error);
  }
};

export const updateTrustedContact = async (
  req: Request<{ id: string }, {}, ITrustedContact>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustedContact = await prisma.trustedContact.findUnique({
      where: { id }
    });

    if (!trustedContact) {
      throw createHttpError(404, 'Contact de confiance non trouvé');
    }

    const updatedTrustedContact = await prisma.trustedContact.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedTrustedContact);
  } catch (error) {
    next(error);
  }
};

export const deleteTrustedContact = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const trustedContact = await prisma.trustedContact.findUnique({
      where: { id }
    });

    if (!trustedContact) {
      throw createHttpError(404, 'Contact de confiance non trouvé');
    }

    await prisma.trustedContact.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Contact de confiance supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

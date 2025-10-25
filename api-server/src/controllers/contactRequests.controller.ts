import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IUserContact } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Contacts Requests
 *   description: Gestion des demandes de contacts
 */
export const createUserContactRequest = async (
  req: Request<{ userId: string; contactId: string }, {}, IUserContact>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const contactRequest = await prisma.contactRequest.create({
      data: {
        ...req.body,
        userId,
        contactId,
      },
    });
    res.status(201).json(contactRequest);
  } catch (error) {
    next(error);
  }
};

export const getAllUserContactRequests = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const contactRequests = await prisma.contactRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId,
      },
    });
    res.status(200).json({ contactRequests });
  } catch (error) {
    next(error);
  }
};

export const getUserContactRequest = async (
  req: Request<{ userId: string; contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const contactRequest = await prisma.contactRequest.findFirst({
      where: { userId, contactId },
    });

    if (!contactRequest) {
      throw createHttpError(404, "Demande de contact non trouvée");
    }

    res.status(200).json(contactRequest);
  } catch (error) {
    next(error);
  }
};

export const updateUserContactRequest = async (
  req: Request<
    { userId: string; contactId: string },
    {},
    Partial<IUserContact>
  >,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const contactRequest = await prisma.contactRequest.findFirst({
      where: { userId, contactId },
    });

    if (!contactRequest) {
      throw createHttpError(404, "Demande de contact non trouvée");
    }

    const updatedRequest = await prisma.contactRequest.update({
      where: { id: contactRequest.id },
      data: req.body,
    });

    res.status(200).json(updatedRequest);
  } catch (error) {
    next(error);
  }
};

export const deleteUserContactRequest = async (
  req: Request<{ userId: string; contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const contactRequest = await prisma.contactRequest.findFirst({
      where: { userId, contactId },
    });

    if (!contactRequest) {
      throw createHttpError(404, "Demande de contact non trouvée");
    }

    await prisma.contactRequest.delete({
      where: { id: contactRequest.id },
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const deleteAllUserContactRequests = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    await prisma.contactRequest.deleteMany({
      where: { userId },
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

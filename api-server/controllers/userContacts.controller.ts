import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IUserContact } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: User Contacts
 *   description: Gestion des contacts utilisateurs
 */
export const createUserContact = async (
  req: Request<{ userId: string }, {}, IUserContact>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userContact = await prisma.userContacts.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(userContact);
  } catch (error) {
    next(error);
  }
};

export const getAllUserContacts = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userContacts = await prisma.userContacts.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId: req.params.userId,
      },
    });
    res.status(200).json({ userContacts });
  } catch (error) {
    next(error);
  }
};

export const getUserContactByContactId = async (
  req: Request<{ contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { contactId } = req.params;

  try {
    const userContact = await prisma.userContacts.findUnique({
      where: { id: contactId },
    });

    if (!userContact) {
      throw createHttpError(404, "Contact utilisateur non trouvé");
    }

    res.status(200).json(userContact);
  } catch (error) {
    next(error);
  }
};

export const updateUserContact = async (
  req: Request<{ contactId: string }, {}, IUserContact>,
  res: Response,
  next: NextFunction
) => {
  const { contactId } = req.params;

  try {
    const userContact = await prisma.userContacts.findUnique({
      where: { id: contactId },
    });

    if (!userContact) {
      throw createHttpError(404, "Contact utilisateur non trouvé");
    }

    const updatedUserContact = await prisma.userContacts.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id: contactId },
    });

    res.status(200).json(updatedUserContact);
  } catch (error) {
    next(error);
  }
};

export const deleteUserContact = async (
  req: Request<{ contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { contactId } = req.params;

  try {
    const userContact = await prisma.userContacts.findUnique({
      where: { id: contactId },
    });

    if (!userContact) {
      throw createHttpError(404, "Contact utilisateur non trouvé");
    }

    await prisma.userContacts.delete({
      where: { id: contactId },
    });

    res
      .status(200)
      .json({ message: "Contact utilisateur supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

export const deleteAllUserContacts = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    await prisma.userContacts.deleteMany({
      where: { userId },
    });

    res
      .status(200)
      .json({ message: "Tous les contacts utilisateur ont été supprimés" });
  } catch (error) {
    next(error);
  }
};

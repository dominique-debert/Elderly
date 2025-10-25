import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IUserContact } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Blocked Contacts
 *   description: Gestion des contacts bloqués
 */
export const createUserBlockedContact = async (
  req: Request<{ userId: string; contactId: string }, {}, IUserContact>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const blockedContact = await prisma.blockedContact.create({
      data: {
        ...req.body,
        userId,
        contactId,
      },
    });
    res.status(201).json(blockedContact);
  } catch (error) {
    next(error);
  }
};

export const getAllUserBlockedContacts = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const blockedContacts = await prisma.blockedContact.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId,
      },
    });
    res.status(200).json({ blockedContacts });
  } catch (error) {
    next(error);
  }
};

export const getUserBlockedContact = async (
  req: Request<{ userId: string; contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const blockContact = await prisma.contactRequest.findFirst({
      where: { userId, contactId },
    });

    if (!blockContact) {
      throw createHttpError(404, "Contact bloqué non trouvé");
    }

    res.status(200).json(blockContact);
  } catch (error) {
    next(error);
  }
};

// Delete a blocked contact by userId and contactId
export const deleteUserBlockedContact = async (
  req: Request<{ userId: string; contactId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId, contactId } = req.params;

  try {
    const blockedContact = await prisma.blockedContact.findFirst({
      where: { userId, contactId },
    });

    if (!blockedContact) {
      throw createHttpError(404, "Contact bloqué non trouvé");
    }

    await prisma.blockedContact.delete({
      where: { id: blockedContact.id },
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const deleteAllUserBlockedContacts = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    await prisma.blockedContact.deleteMany({
      where: { userId },
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

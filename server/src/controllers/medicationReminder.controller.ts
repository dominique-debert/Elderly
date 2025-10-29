import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { PrismaClient } from "@/prisma"; // ou '@/prisma/client' si tu utilises des alias
import { IMedicationReminder } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: MedicationReminders
 *   description: Gestion des rappels de médicaments
 */
export const createMedicationReminder = async (
  req: Request<{}, {}, IMedicationReminder>,
  res: Response,
  next: NextFunction
) => {
  try {
    const medicationReminder = await prisma.medicationReminder.create({
      data: req.body,
    });
    res.status(201).json(medicationReminder);
  } catch (error) {
    next(error);
  }
};

export const getAllMedicationReminders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const medicationReminders = await prisma.medicationReminder.findMany({
      orderBy: {
        medicationName: "asc",
      },
    });
    res.status(200).json({ medicationReminders });
  } catch (error) {
    next(error);
  }
};

export const getMedicationReminderById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const medicationReminder = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!medicationReminder) {
      throw createHttpError(404, "Rappel de médicament non trouvé");
    }

    res.status(200).json(medicationReminder);
  } catch (error) {
    next(error);
  }
};

export const updateMedicationReminder = async (
  req: Request<{ id: string }, {}, Partial<IMedicationReminder>>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const medicationReminder = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!medicationReminder) {
      throw createHttpError(404, "Rappel de médicament non trouvé");
    }

    const updatedMedicationReminder = await prisma.medicationReminder.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedMedicationReminder);
  } catch (error) {
    next(error);
  }
};

export const deleteMedicationReminder = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const medicationReminder = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!medicationReminder) {
      throw createHttpError(404, "Rappel de médicament non trouvé");
    }

    await prisma.medicationReminder.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Rappel de médicament supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

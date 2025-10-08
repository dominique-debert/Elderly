import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { PrismaClient } from "@/prisma/client.js"; // ou '@/prisma/client' si tu utilises des alias
import IMedicationReminder from "@/types/data/health/IMedicationReminder.js";

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
    const newService = await prisma.medicationReminder.create({
      data: req.body,
    });
    res.status(201).json(newService);
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
    const localServices = await prisma.medicationReminder.findMany({
      orderBy: {
        medicationName: "asc",
      },
    });
    res.status(200).json({ localServices });
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
    const service = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!service) {
      throw createHttpError(404, "Rappel de médicament non trouvé");
    }

    res.status(200).json(service);
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
    const service = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!service) {
      throw createHttpError(404, "Rappel de médicament non trouvé");
    }

    const updatedService = await prisma.medicationReminder.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedService);
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
    const service = await prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!service) {
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

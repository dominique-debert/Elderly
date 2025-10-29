import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@/prisma";
import createHttpError from "http-errors";
import { IProjectTask } from "@/types";

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Project Tasks
 *   description: Gestion des tâches de projets
 */
export const createProjectTask = async (
  req: Request<{}, {}, IProjectTask>,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectTask = await prisma.projectTask.create({
      data: req.body,
    });
    res.status(201).json(projectTask);
  } catch (error) {
    next(error);
  }
};

export const getAllProjectTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectTasks = await prisma.projectTask.findMany({
      orderBy: {
        dueDate: "desc",
      },
    });
    res.status(200).json({ projectTasks });
  } catch (error) {
    next(error);
  }
};

export const getProjectTaskById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const projectTask = await prisma.projectTask.findUnique({
      where: { id },
    });

    if (!projectTask) {
      throw createHttpError(404, "Tâche de projet non trouvée");
    }

    res.status(200).json(projectTask);
  } catch (error) {
    next(error);
  }
};

export const updateProjectTask = async (
  req: Request<{ id: string }, {}, IProjectTask>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const projectTask = await prisma.projectTask.findUnique({
      where: { id },
    });

    if (!projectTask) {
      throw createHttpError(404, "Tâche de projet non trouvée");
    }

    const updatedProjectTask = await prisma.projectTask.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { id },
    });

    res.status(200).json(updatedProjectTask);
  } catch (error) {
    next(error);
  }
};

export const deleteProjectTask = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const projectTask = await prisma.projectTask.findUnique({
      where: { id },
    });

    if (!projectTask) {
      throw createHttpError(404, "Tâche de projet non trouvée");
    }

    await prisma.projectTask.delete({
      where: { id },
    });

    res.status(200).json({ message: "Tâche de projet supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

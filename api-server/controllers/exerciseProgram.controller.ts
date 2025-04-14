import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { PrismaClient } from '@/prisma/client';
import IExerciseProgram from '@/@types/IExerciseProgram';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: ExerciseProgram
 *   description: API for managing exercise programs
 */

export const createExerciseProgram = async (
  req: Request<{}, {}, IExerciseProgram>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProgram = await prisma.exercise_program.create({
      data: req.body,
    });
    res.status(201).json(newProgram);
  } catch (error) {
    next(error);
  }
};

export const getAllExercisePrograms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const programs = await prisma.exercise_program.findMany({
      orderBy: { name: 'asc' },
    });
    res.status(200).json({ programs });
  } catch (error) {
    next(error);
  }
};

export const getExerciseProgramById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const program = await prisma.exercise_program.findUnique({
      where: { id },
    });

    if (!program) {
      throw createHttpError(404, `Programme d'exercices non trouvé`);
    }

    res.status(200).json(program);
  } catch (error) {
    next(error);
  }
};

export const updateExerciseProgram = async (
  req: Request<{ id: string }, {}, IExerciseProgram>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const program = await prisma.exercise_program.findUnique({
      where: { id },
    });

    if (!program) {
      throw createHttpError(404, `Programme d'exercices non trouvé`);
    }

    const updatedProgram = await prisma.exercise_program.update({
      data: req.body,
      where: { id },
    });

    res.status(200).json(updatedProgram);
  } catch (error) {
    next(error);
  }
};

export const deleteExerciseProgram = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const program = await prisma.exercise_program.findUnique({
      where: { id },
    });

    if (!program) {
      throw createHttpError(404, 'Programme non trouvé');
    }

    await prisma.exercise_program.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Programme supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

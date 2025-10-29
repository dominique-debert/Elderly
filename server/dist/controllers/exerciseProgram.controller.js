import createHttpError from 'http-errors';
import { PrismaClient } from '@/prisma/client';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: ExerciseProgram
 *   description: API for managing exercise programs
 */
export const createExerciseProgram = async (req, res, next) => {
    try {
        const newProgram = await prisma.exerciseProgram.create({
            data: req.body,
        });
        res.status(201).json(newProgram);
    }
    catch (error) {
        next(error);
    }
};
export const getAllExercisePrograms = async (req, res, next) => {
    try {
        const programs = await prisma.exerciseProgram.findMany({
            orderBy: { name: 'asc' },
        });
        res.status(200).json({ programs });
    }
    catch (error) {
        next(error);
    }
};
export const getExerciseProgramById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const program = await prisma.exerciseProgram.findUnique({
            where: { id },
        });
        if (!program) {
            throw createHttpError(404, `Programme d'exercices non trouvé`);
        }
        res.status(200).json(program);
    }
    catch (error) {
        next(error);
    }
};
export const updateExerciseProgram = async (req, res, next) => {
    const id = req.params.id;
    try {
        const program = await prisma.exerciseProgram.findUnique({
            where: { id },
        });
        if (!program) {
            throw createHttpError(404, `Programme d'exercices non trouvé`);
        }
        const updatedProgram = await prisma.exerciseProgram.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id },
        });
        res.status(200).json(updatedProgram);
    }
    catch (error) {
        next(error);
    }
};
export const deleteExerciseProgram = async (req, res, next) => {
    const id = req.params.id;
    try {
        const program = await prisma.exerciseProgram.findUnique({
            where: { id },
        });
        if (!program) {
            throw createHttpError(404, 'Programme non trouvé');
        }
        await prisma.exerciseProgram.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Programme supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

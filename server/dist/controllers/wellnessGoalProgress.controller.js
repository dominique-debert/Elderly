import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Wellness Goals Progress
 *   description: Gestion des progrès des objectifs bien-être
 */
export const createWellnessGoalProgress = async (req, res, next) => {
    try {
        const wellnessGoalProgress = await prisma.wellnessGoalProgress.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(wellnessGoalProgress);
    }
    catch (error) {
        next(error);
    }
};
export const getAllWellnessGoalsProgress = async (req, res, next) => {
    try {
        const wellnessGoalsProgress = await prisma.wellnessGoalProgress.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({ wellnessGoalsProgress });
    }
    catch (error) {
        next(error);
    }
};
export const getWellnessGoalProgressById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoalProgress = await prisma.wellnessGoalProgress.findUnique({
            where: { id }
        });
        if (!wellnessGoalProgress) {
            throw createHttpError(404, 'Progrès de l\'objectif bien-être non trouvé');
        }
        res.status(200).json(wellnessGoalProgress);
    }
    catch (error) {
        next(error);
    }
};
export const updateWellnessGoalProgress = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoalProgress = await prisma.wellnessGoalProgress.findUnique({
            where: { id }
        });
        if (!wellnessGoalProgress) {
            throw createHttpError(404, 'Progrès de l\'objectif bien-être non trouvé');
        }
        const updatedWellnessGoalProgress = await prisma.wellnessGoalProgress.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedWellnessGoalProgress);
    }
    catch (error) {
        next(error);
    }
};
export const deleteWellnessGoalProgress = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoalProgress = await prisma.wellnessGoalProgress.findUnique({
            where: { id }
        });
        if (!wellnessGoalProgress) {
            throw createHttpError(404, 'Progrès de l\'objectif bien-être non trouvé');
        }
        await prisma.wellnessGoalProgress.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Progrès de l\'objectif bien-être supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

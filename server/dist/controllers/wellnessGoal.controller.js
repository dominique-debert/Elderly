import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Wellness Goals
 *   description: Gestion des objectifs bien-être
 */
export const createWellnessGoal = async (req, res, next) => {
    try {
        const wellnessGoal = await prisma.wellnessGoal.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(wellnessGoal);
    }
    catch (error) {
        next(error);
    }
};
export const getAllWellnessGoals = async (req, res, next) => {
    try {
        const wellnessGoals = await prisma.wellnessGoal.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({ wellnessGoals });
    }
    catch (error) {
        next(error);
    }
};
export const getWellnessGoalById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoal = await prisma.wellnessGoal.findUnique({
            where: { id }
        });
        if (!wellnessGoal) {
            throw createHttpError(404, 'Objectif bien-être non trouvé');
        }
        res.status(200).json(wellnessGoal);
    }
    catch (error) {
        next(error);
    }
};
export const updateWellnessGoal = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoal = await prisma.wellnessGoal.findUnique({
            where: { id }
        });
        if (!wellnessGoal) {
            throw createHttpError(404, 'Objectif bien-être non trouvé');
        }
        const updatedWellnessGoal = await prisma.wellnessGoal.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedWellnessGoal);
    }
    catch (error) {
        next(error);
    }
};
export const deleteWellnessGoal = async (req, res, next) => {
    const { id } = req.params;
    try {
        const wellnessGoal = await prisma.wellnessGoal.findUnique({
            where: { id }
        });
        if (!wellnessGoal) {
            throw createHttpError(404, 'Objectif bien-être non trouvé');
        }
        await prisma.wellnessGoal.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Objectif bien-être supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

import { PrismaClient } from '@/prisma/client.js';
import createHttpError from 'http-errors';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: NutritionAdvices
 *   description: Gestion des avis nutritionnels
 */
export const createNutritionalAdvice = async (req, res, next) => {
    try {
        const newAdvice = await prisma.nutritionalAdvice.create({
            data: req.body,
        });
        res.status(201).json(newAdvice);
    }
    catch (error) {
        next(error);
    }
};
export const getAllNutritionalAdvices = async (req, res, next) => {
    try {
        const advices = await prisma.nutritionalAdvice.findMany({
            orderBy: {
                title: 'asc', // corrected from `name: 'title'`
            },
        });
        res.status(200).json({ advices });
    }
    catch (error) {
        next(error);
    }
};
export const getNutritionalAdviceById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const advice = await prisma.nutritionalAdvice.findUnique({
            where: { id },
        });
        if (!advice) {
            throw createHttpError(404, 'Conseil nutritionnel non trouvé');
        }
        res.status(200).json(advice);
    }
    catch (error) {
        next(error);
    }
};
export const updateNutritionalAdvice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const advice = await prisma.nutritionalAdvice.findUnique({
            where: { id },
        });
        if (!advice) {
            throw createHttpError(404, 'Avis nutritionnel non trouvé');
        }
        const updatedAdvice = await prisma.nutritionalAdvice.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id },
        });
        res.status(200).json(updatedAdvice);
    }
    catch (error) {
        next(error);
    }
};
export const deleteNutritionalAdvice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const advice = await prisma.nutritionalAdvice.findUnique({
            where: { id },
        });
        if (!advice) {
            throw createHttpError(404, 'Avis nutritionnel non trouvé');
        }
        await prisma.nutritionalAdvice.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Avis nutritionnel supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: User Activities
 *   description: Gestion des activités utilisateurs
 */
export const createUserActivity = async (req, res, next) => {
    try {
        const userActivity = await prisma.userActivity.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(userActivity);
    }
    catch (error) {
        next(error);
    }
};
export const getAllUserActivities = async (req, res, next) => {
    try {
        const userActivities = await prisma.userActivity.findMany({
            orderBy: {
                completionDate: 'desc'
            }
        });
        res.status(200).json({ userActivities });
    }
    catch (error) {
        next(error);
    }
};
export const getUserActivityById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userActivity = await prisma.userActivity.findUnique({
            where: { id }
        });
        if (!userActivity) {
            throw createHttpError(404, 'Activité utilisateur non trouvée');
        }
        res.status(200).json(userActivity);
    }
    catch (error) {
        next(error);
    }
};
export const updateUserActivity = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userActivity = await prisma.userActivity.findUnique({
            where: { id }
        });
        if (!userActivity) {
            throw createHttpError(404, 'Activité utilisateur non trouvée');
        }
        const updatedUserActivity = await prisma.userActivity.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedUserActivity);
    }
    catch (error) {
        next(error);
    }
};
export const deleteUserActivity = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userActivity = await prisma.userActivity.findUnique({
            where: { id }
        });
        if (!userActivity) {
            throw createHttpError(404, 'Activité utilisateur non trouvée');
        }
        await prisma.userActivity.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Activité utilisateur supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

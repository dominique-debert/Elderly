import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: User Badges
 *   description: Gestion des badges utilisateurs
 */
export const createUserBadge = async (req, res, next) => {
    try {
        const userBadge = await prisma.userBadge.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(userBadge);
    }
    catch (error) {
        next(error);
    }
};
export const getAllUserBadges = async (req, res, next) => {
    try {
        const userBadges = await prisma.userBadge.findMany({
            orderBy: {
                achievementDate: 'desc'
            }
        });
        res.status(200).json({ userBadges });
    }
    catch (error) {
        next(error);
    }
};
export const getUserBadgeById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userBadge = await prisma.userBadge.findUnique({
            where: { id }
        });
        if (!userBadge) {
            throw createHttpError(404, 'Badge utilisateur non trouvé');
        }
        res.status(200).json(userBadge);
    }
    catch (error) {
        next(error);
    }
};
export const updateUserBadge = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userBadge = await prisma.userBadge.findUnique({
            where: { id }
        });
        if (!userBadge) {
            throw createHttpError(404, 'Badge utilisateur non trouvé');
        }
        const updatedUserBadge = await prisma.userBadge.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedUserBadge);
    }
    catch (error) {
        next(error);
    }
};
export const deleteUserBadge = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userBadge = await prisma.userBadge.findUnique({
            where: { id }
        });
        if (!userBadge) {
            throw createHttpError(404, 'Badge utilisateur non trouvé');
        }
        await prisma.userBadge.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Badge utilisateur supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

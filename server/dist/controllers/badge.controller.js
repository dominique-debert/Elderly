import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
const prisma = new PrismaClient();
export const createBadge = async (req, res, next) => {
    try {
        const badgeToCreate = await prisma.badge.create({
            data: req.body
        });
        res.status(201).json(badgeToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllBadges = async (req, res, next) => {
    try {
        const badges = await prisma.badge.findMany({
            orderBy: { name: 'asc' },
        });
        res.status(200).json({ badges });
    }
    catch (error) {
        next(error);
    }
};
export const getBadgeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const badge = await prisma.badge.findUnique({
            where: { id },
        });
        if (!badge) {
            throw createHttpError(404, 'Badge non trouvé');
        }
        res.status(200).json(badge);
    }
    catch (error) {
        next(error);
    }
};
export const updateBadge = async (req, res, next) => {
    const { id } = req.params;
    try {
        const badge = await prisma.badge.findUnique({
            where: { id },
        });
        if (!badge) {
            throw createHttpError(404, 'Badge non trouvé');
        }
        const badgeToUpdate = await prisma.badge.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id },
        });
        res.status(200).json(badgeToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteBadge = async (req, res, next) => {
    try {
        const { id } = req.params;
        const badge = await prisma.badge.findUnique({
            where: { id },
        });
        if (!badge) {
            throw createHttpError(404, 'Badge non trouvé');
        }
        await prisma.badge.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Badge supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

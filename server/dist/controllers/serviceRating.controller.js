import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Service Rating
 *   description: Gestion des évaluations de services
 */
export const createServiceRating = async (req, res, next) => {
    try {
        const serviceRating = await prisma.serviceRating.create({
            data: {
                ...req.body,
            }
        });
        res.status(201).json(serviceRating);
    }
    catch (error) {
        next(error);
    }
};
export const getAllServiceRating = async (req, res, next) => {
    try {
        const serviceRating = await prisma.serviceRating.findMany({
            orderBy: {
                ratingDate: 'desc'
            }
        });
        res.status(200).json({ serviceRating });
    }
    catch (error) {
        next(error);
    }
};
export const getServiceRatingById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const serviceRating = await prisma.serviceRating.findUnique({
            where: { id }
        });
        if (!serviceRating) {
            throw createHttpError(404, 'Service non trouvé');
        }
        res.status(200).json(serviceRating);
    }
    catch (error) {
        next(error);
    }
};
export const updateServiceRating = async (req, res, next) => {
    const { id } = req.params;
    try {
        const serviceRating = await prisma.serviceRating.findUnique({
            where: { id }
        });
        if (!serviceRating) {
            throw createHttpError(404, 'Service non trouvé');
        }
        const updateServiceRating = await prisma.serviceRating.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updateServiceRating);
    }
    catch (error) {
        next(error);
    }
};
export const deleteServiceRating = async (req, res, next) => {
    const { id } = req.params;
    try {
        const serviceRating = await prisma.serviceRating.findUnique({
            where: { id }
        });
        if (!serviceRating) {
            throw createHttpError(404, 'Service non trouvé');
        }
        await prisma.serviceRating.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Service supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

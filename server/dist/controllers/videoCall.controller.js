import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Video Calls
 *   description: Gestion des appels vidéo
 */
export const createVideoCall = async (req, res, next) => {
    try {
        const userStatistics = await prisma.videoCall.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(userStatistics);
    }
    catch (error) {
        next(error);
    }
};
export const getAllVideoCalls = async (req, res, next) => {
    try {
        const userStatistics = await prisma.videoCall.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({ userStatistics });
    }
    catch (error) {
        next(error);
    }
};
export const getVideoCallById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userStatistics = await prisma.videoCall.findUnique({
            where: { id }
        });
        if (!userStatistics) {
            throw createHttpError(404, 'Appel vidéo non trouvé');
        }
        res.status(200).json(userStatistics);
    }
    catch (error) {
        next(error);
    }
};
export const updateVideoCall = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userStatistics = await prisma.videoCall.findUnique({
            where: { id }
        });
        if (!userStatistics) {
            throw createHttpError(404, 'Appel vidéo non trouvé');
        }
        const updatedUserStatistics = await prisma.videoCall.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedUserStatistics);
    }
    catch (error) {
        next(error);
    }
};
export const deleteVideoCall = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userStatistics = await prisma.videoCall.findUnique({
            where: { id }
        });
        if (!userStatistics) {
            throw createHttpError(404, 'Appel vidéo non trouvé');
        }
        await prisma.videoCall.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Appel vidéo supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

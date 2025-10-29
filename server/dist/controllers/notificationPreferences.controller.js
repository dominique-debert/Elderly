import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Notification Preferences
 *   description: Gestion des préférences de notifications
 */
export const createNotificationPreferences = async (req, res, next) => {
    try {
        const notificationPreferences = await prisma.notificationPreferences.create({
            data: req.body
        });
        res.status(201).json(notificationPreferences);
    }
    catch (error) {
        next(error);
    }
};
export const getAllNotificationPreferences = async (req, res, next) => {
    try {
        const notificationPreferences = await prisma.notificationPreferences.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({ notificationPreferences });
    }
    catch (error) {
        next(error);
    }
};
export const getNotificationPreferencesById = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const notificationPreferences = await prisma.notificationPreferences.findUnique({
            where: { userId }
        });
        if (!notificationPreferences) {
            throw createHttpError(404, 'Préférence de notification non trouvée');
        }
        res.status(200).json(notificationPreferences);
    }
    catch (error) {
        next(error);
    }
};
export const updateNotificationPreferences = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const notificationPreferences = await prisma.notificationPreferences.findUnique({
            where: { userId }
        });
        if (!notificationPreferences) {
            throw createHttpError(404, 'Préférence de notification non trouvée');
        }
        const updatedNotificationPreferences = await prisma.notificationPreferences.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { userId },
        });
        res.status(200).json(updatedNotificationPreferences);
    }
    catch (error) {
        next(error);
    }
};
export const deleteNotificationPreferences = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const notificationPreferences = await prisma.notificationPreferences.findUnique({
            where: { userId }
        });
        if (!notificationPreferences) {
            throw createHttpError(404, 'Préférence de notification non trouvée');
        }
        await prisma.notificationPreferences.delete({
            where: { userId }
        });
        res.status(200).json({ message: 'Préférence de notification supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

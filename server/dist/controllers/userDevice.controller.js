import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: User Devices
 *   description: Gestion des appareils utilisateurs
 */
export const createUserDevice = async (req, res, next) => {
    try {
        const userDevice = await prisma.userDevice.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(userDevice);
    }
    catch (error) {
        next(error);
    }
};
export const getAllUserDevices = async (req, res, next) => {
    try {
        const userDevices = await prisma.userDevice.findMany({
            orderBy: {
                lastConnection: 'desc'
            }
        });
        res.status(200).json({ userDevices });
    }
    catch (error) {
        next(error);
    }
};
export const getUserDeviceById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userDevice = await prisma.userDevice.findUnique({
            where: { id }
        });
        if (!userDevice) {
            throw createHttpError(404, 'Appareil utilisateur non trouvé');
        }
        res.status(200).json(userDevice);
    }
    catch (error) {
        next(error);
    }
};
export const updateUserDevice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userDevice = await prisma.userDevice.findUnique({
            where: { id }
        });
        if (!userDevice) {
            throw createHttpError(404, 'Appareil utilisateur non trouvé');
        }
        const updatedUserDevice = await prisma.userDevice.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedUserDevice);
    }
    catch (error) {
        next(error);
    }
};
export const deleteUserDevice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userDevice = await prisma.userDevice.findUnique({
            where: { id }
        });
        if (!userDevice) {
            throw createHttpError(404, 'Appareil utilisateur non trouvé');
        }
        await prisma.userDevice.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Appareil utilisateur supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

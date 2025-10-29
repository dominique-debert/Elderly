import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Forum messages
 *   description: API pour gérer les messages du forum
 */
export const createForumMessage = async (req, res, next) => {
    try {
        const forumMessageToCreate = await prisma.forumMessage.create({
            data: req.body
        });
        res.status(201).json(forumMessageToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllForumMessages = async (req, res, next) => {
    try {
        const forumMessages = await prisma.forumMessage.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });
        res.status(200).json({ forumMessages });
    }
    catch (error) {
        next(error);
    }
};
export const getForumMessageById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumMessage = await prisma.forumMessage.findUnique({
            where: { id }
        });
        if (!forumMessage) {
            throw createHttpError(404, 'Message non trouvé');
        }
        res.status(200).json(forumMessage);
    }
    catch (error) {
        next(error);
    }
};
export const updateForumMessage = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumMessage = await prisma.forumMessage.findUnique({
            where: { id }
        });
        if (!forumMessage) {
            throw createHttpError(404, 'Message non trouvé');
        }
        const forumMessageToUpdate = await prisma.forumMessage.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(forumMessageToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteForumMessage = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumMessage = await prisma.forumMessage.findUnique({
            where: { id }
        });
        if (!forumMessage) {
            throw createHttpError(404, 'Message non trouvé');
        }
        await prisma.forumMessage.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Message supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

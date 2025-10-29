import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: API pour gérer les conversations
 */
export const createConversation = async (req, res, next) => {
    try {
        const conversationToCreate = await prisma.conversation.create({
            data: req.body
        });
        res.status(201).json(conversationToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllConversations = async (req, res, next) => {
    try {
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                title: 'asc'
            }
        });
        res.status(200).json({ conversations });
    }
    catch (error) {
        next(error);
    }
};
export const getConversationById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const conversation = await prisma.conversation.findUnique({
            where: { id }
        });
        if (!conversation) {
            throw createHttpError(404, 'Conversation non trouvée');
        }
        res.status(200).json(conversation);
    }
    catch (error) {
        next(error);
    }
};
export const updateConversation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const conversation = await prisma.conversation.findUnique({
            where: { id }
        });
        if (!conversation) {
            throw createHttpError(404, 'Conversation non trouvée');
        }
        const conversationToUpdate = await prisma.conversation.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(conversationToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteConversation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const conversation = await prisma.conversation.findUnique({
            where: { id }
        });
        if (!conversation) {
            throw createHttpError(404, 'Conversation non trouvée');
        }
        await prisma.conversation.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Conversation supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

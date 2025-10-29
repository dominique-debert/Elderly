import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Help Offers
 *   description: API pour gérer les offres d'aide
 */
export const createHelpOffer = async (req, res, next) => {
    try {
        const helpOfferToCreate = await prisma.helpOffer.create({
            data: req.body
        });
        res.status(201).json(helpOfferToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllHelpOffers = async (req, res, next) => {
    try {
        const helpOffers = await prisma.helpOffer.findMany({
            orderBy: {
                offerDate: 'desc'
            }
        });
        res.status(200).json({ helpOffers });
    }
    catch (error) {
        next(error);
    }
};
export const getHelpOfferById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const helpOffer = await prisma.helpOffer.findUnique({
            where: { id }
        });
        if (!helpOffer) {
            throw createHttpError(404, 'Offre non trouvée');
        }
        res.status(200).json(helpOffer);
    }
    catch (error) {
        next(error);
    }
};
export const updateHelpOffer = async (req, res, next) => {
    const { id } = req.params;
    try {
        const helpOffer = await prisma.helpOffer.findUnique({
            where: { id }
        });
        if (!helpOffer) {
            throw createHttpError(404, 'Offre non trouvée');
        }
        const helpOfferToUpdate = await prisma.helpOffer.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(helpOfferToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteHelpOffer = async (req, res, next) => {
    const { id } = req.params;
    try {
        const helpOffer = await prisma.helpOffer.findUnique({
            where: { id }
        });
        if (!helpOffer) {
            throw createHttpError(404, 'Offre non trouvée');
        }
        await prisma.helpOffer.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Offre supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

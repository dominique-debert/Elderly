import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Satisfaction Surveys
 *   description: Gestion des sondages de satisfaction
 */
export const createSatisfactionSurvey = async (req, res, next) => {
    try {
        const satifactionSurvey = await prisma.satisfactionSurvey.create({
            data: {
                ...req.body,
            }
        });
        res.status(201).json(satifactionSurvey);
    }
    catch (error) {
        next(error);
    }
};
export const getAllSatisfactionSurveys = async (req, res, next) => {
    try {
        const satisfactionSurveys = await prisma.satisfactionSurvey.findMany({
            orderBy: {
                title: 'asc'
            }
        });
        res.status(200).json({ satisfactionSurveys });
    }
    catch (error) {
        next(error);
    }
};
export const getSatisfactionSurveyById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const resource = await prisma.satisfactionSurvey.findUnique({
            where: { id }
        });
        if (!resource) {
            throw createHttpError(404, 'Sondage de satisfaction non trouvé');
        }
        res.status(200).json(resource);
    }
    catch (error) {
        next(error);
    }
};
export const updateSatisfactionSurvey = async (req, res, next) => {
    const { id } = req.params;
    try {
        const resource = await prisma.satisfactionSurvey.findUnique({
            where: { id }
        });
        if (!resource) {
            throw createHttpError(404, 'Sondage de satisfaction non trouvé');
        }
        const updateSatisfactionSurvey = await prisma.satisfactionSurvey.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updateSatisfactionSurvey);
    }
    catch (error) {
        next(error);
    }
};
export const deleteSatisfactionSurvey = async (req, res, next) => {
    const { id } = req.params;
    try {
        const resource = await prisma.satisfactionSurvey.findUnique({
            where: { id }
        });
        if (!resource) {
            throw createHttpError(404, 'Sondage de satisfaction non trouvé');
        }
        await prisma.satisfactionSurvey.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Sondage de satisfaction supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

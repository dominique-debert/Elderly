import { PrismaClient } from "@/prisma/client";
import createHttpError from "http-errors";
const prisma = new PrismaClient();
/**
* @swagger
* tags:
*   name: Activity Registrations
*   description: Inscriptions aux activités
*/
export const createActivityRegistration = async (req, res, next) => {
    try {
        const registrationToCreate = await prisma.activityLog.create({
            data: req.body
        });
        res.status(201).json(registrationToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllActivityRegistrations = async (req, res, next) => {
    try {
        const registrations = await prisma.activityRegistration.findMany({
            orderBy: {
                id: 'asc', // Ascending order (A-Z)
            },
        });
        res.status(200).json({ registrations });
    }
    catch (error) {
        next(error);
    }
};
export const getActivityRegistrationById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const registration = await prisma.activityRegistration.findUnique({
            where: { id },
        });
        if (!registration) {
            throw createHttpError(404, `Badge bien-être non trouvé`);
        }
        res.status(200).json(registration);
    }
    catch (error) {
        next(error);
    }
};
export const updateActivityRegistration = async (req, res, next) => {
    const { id } = req.params;
    try {
        const registration = await prisma.activityRegistration.findUnique({
            where: { id },
        });
        if (!registration) {
            throw createHttpError(404, `Badge bien-être non trouvé`);
        }
        const registrationToUpdate = await prisma.activityRegistration.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id },
        });
        res.status(200).json(registrationToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteActivityRegistration = async (req, res, next) => {
    const { id } = req.params;
    try {
        const registration = await prisma.activityRegistration.findUnique({
            where: { id },
        });
        if (!registration) {
            throw createHttpError(404, `Badge bien-être non trouvé`);
        }
        await prisma.activityRegistration.delete({
            where: { id },
        });
        // Correction : Cette variable n'existait pas dans le code d'origine
        res.status(200).json({ message: "Badge bien-être supprimé avec succès" });
    }
    catch (error) {
        next(error);
    }
};

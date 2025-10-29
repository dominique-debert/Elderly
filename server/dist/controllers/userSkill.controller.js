import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: User Skills
 *   description: Gestion des compétences utilisateurs
 */
export const createUserSkill = async (req, res, next) => {
    try {
        const userSkill = await prisma.userSkill.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(userSkill);
    }
    catch (error) {
        next(error);
    }
};
export const getAllUserSkills = async (req, res, next) => {
    try {
        const userSkills = await prisma.userSkill.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({ userSkills });
    }
    catch (error) {
        next(error);
    }
};
export const getUserSkillById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userSkill = await prisma.userSkill.findUnique({
            where: { id }
        });
        if (!userSkill) {
            throw createHttpError(404, 'Compétence utilisateur non trouvée');
        }
        res.status(200).json(userSkill);
    }
    catch (error) {
        next(error);
    }
};
export const updateUserSkill = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userSkill = await prisma.userSkill.findUnique({
            where: { id }
        });
        if (!userSkill) {
            throw createHttpError(404, 'Compétence utilisateur non trouvée');
        }
        const updatedUserSkill = await prisma.userSkill.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedUserSkill);
    }
    catch (error) {
        next(error);
    }
};
export const deleteUserSkill = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userSkill = await prisma.userSkill.findUnique({
            where: { id }
        });
        if (!userSkill) {
            throw createHttpError(404, 'Compétence utilisateur non trouvée');
        }
        await prisma.userSkill.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Compétence utilisateur supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

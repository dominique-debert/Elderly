import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Project Members
 *   description: Gestion des membres de projets
 */
export const createProjectMember = async (req, res, next) => {
    try {
        const projectMember = await prisma.projectMember.create({
            data: req.body
        });
        res.status(201).json(projectMember);
    }
    catch (error) {
        next(error);
    }
};
export const getAllProjectMembers = async (req, res, next) => {
    try {
        const projectMembers = await prisma.projectMember.findMany({
            orderBy: {
                joinDate: 'desc'
            }
        });
        res.status(200).json({ projectMembers });
    }
    catch (error) {
        next(error);
    }
};
export const getProjectMemberById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const projectMember = await prisma.projectMember.findUnique({
            where: { id }
        });
        if (!projectMember) {
            throw createHttpError(404, 'Membre de projet non trouvé');
        }
        res.status(200).json(projectMember);
    }
    catch (error) {
        next(error);
    }
};
export const updateProjectMember = async (req, res, next) => {
    const { id } = req.params;
    try {
        const projectMember = await prisma.projectMember.findUnique({
            where: { id }
        });
        if (!projectMember) {
            throw createHttpError(404, 'Membre de projet non trouvé');
        }
        const updatedProjectMember = await prisma.projectMember.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(updatedProjectMember);
    }
    catch (error) {
        next(error);
    }
};
export const deleteProjectMember = async (req, res, next) => {
    const { id } = req.params;
    try {
        const projectMember = await prisma.projectMember.findUnique({
            where: { id }
        });
        if (!projectMember) {
            throw createHttpError(404, 'Membre de projet non trouvé');
        }
        await prisma.projectMember.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Membre de projet supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Collaborative Project
 *   description: API pour gérer les projets collaboratifs
 */
export const createCollaborativeProject = async (req, res, next) => {
    try {
        const projectToCreate = await prisma.collaborativeProject.create({
            data: req.body
        });
        res.status(201).json(projectToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllCollaborativeProjects = async (req, res, next) => {
    try {
        const projects = await prisma.collaborativeProject.findMany({
            orderBy: {
                title: 'asc'
            }
        });
        res.status(200).json({ projects });
    }
    catch (error) {
        next(error);
    }
};
export const getCollaborativeProjectById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const project = await prisma.collaborativeProject.findUnique({
            where: { id }
        });
        if (!project) {
            throw createHttpError(404, 'Projet collaboratif non trouvé');
        }
        res.status(200).json(project);
    }
    catch (error) {
        next(error);
    }
};
export const updateCollaborativeProject = async (req, res, next) => {
    const { id } = req.params;
    try {
        const project = await prisma.collaborativeProject.findUnique({
            where: { id }
        });
        if (!project) {
            throw createHttpError(404, 'Projet collaboratif non trouvé');
        }
        const projectToUpdate = await prisma.collaborativeProject.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(projectToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteCollaborativeProject = async (req, res, next) => {
    const { id } = req.params;
    try {
        const project = await prisma.collaborativeProject.findUnique({
            where: { id }
        });
        if (!project) {
            throw createHttpError(404, 'Projet collaboratif non trouvé');
        }
        await prisma.collaborativeProject.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Projet collaboratif supprimé avec succès' });
    }
    catch (error) {
        next(error);
    }
};

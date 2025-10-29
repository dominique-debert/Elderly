import { PrismaClient } from '@/prisma/client.js';
import { createHttpError } from '@/utils/httpError.js';
import { ECategoryType } from "@/@types/data/categories/ECategory";
const prisma = new PrismaClient();
/**
 * @swagger
 * tags:
 *   name: Forum categories
 *   description: API pour gérer les catégories du forum
 */
export const createForumCategory = async (req, res, next) => {
    try {
        const forumCategoryToCreate = await prisma.forumCategory.create({
            data: req.body
        });
        res.status(201).json(forumCategoryToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const getAllForumCategories = async (req, res, next) => {
    try {
        const categories = await prisma.category.findMany({
            where: {
                typeId: ECategoryType.FORUM
            },
            orderBy: {
                categoryName: 'asc',
            },
            include: {
                categoryType: {
                    select: {
                        id: true,
                        name: true
                    },
                },
                categoryChapter: {
                    select: {
                        chapterId: true,
                        chapterName: true,
                        chapterDescription: true,
                    },
                },
            }
        });
        const grouped = {};
        // Étape 1 : Regrouper d'abord par typeName → chapterName
        categories.forEach((category) => {
            const typeName = category.categoryType?.name ?? 'Sans type';
            const chapterName = category.categoryChapter?.chapterName ?? 'Sans chapitre';
            if (!grouped[typeName])
                grouped[typeName] = {};
            if (!grouped[typeName][chapterName])
                grouped[typeName][chapterName] = [];
            grouped[typeName][chapterName].push({
                id: category.id,
                categoryName: category.categoryName,
                description: category.description,
            });
        });
        // Étape 2 : Trier par typeName > chapterName > categoryName
        const sortedGrouped = {};
        Object.keys(grouped).sort().forEach((typeName) => {
            sortedGrouped[typeName] = {};
            Object.keys(grouped[typeName]).sort().forEach((chapterName) => {
                sortedGrouped[typeName][chapterName] = grouped[typeName][chapterName].sort((a, b) => a.categoryName.localeCompare(b.categoryName));
            });
        });
        res.status(200).json(grouped);
    }
    catch (error) {
        next(error);
    }
};
export const getForumCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumCategory = await prisma.forumCategory.findUnique({
            where: { id }
        });
        if (!forumCategory) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        res.status(200).json(forumCategory);
    }
    catch (error) {
        next(error);
    }
};
export const updateForumCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumCategory = await prisma.forumCategory.findUnique({
            where: { id }
        });
        if (!forumCategory) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        const forumCategoryToUpdate = await prisma.forumCategory.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: { id }
        });
        res.status(200).json(forumCategoryToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteForumCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const forumCategory = await prisma.forumCategory.findUnique({
            where: { id }
        });
        if (!forumCategory) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        await prisma.forumCategory.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Catégorie supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

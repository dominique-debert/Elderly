import { PrismaClient } from '@/prisma/client';
import { createHttpError } from '@/utils/httpError';
import { ECategoryType } from '@/@types/data/categories/ECategory';
const prisma = new PrismaClient();
/**
* @swagger
* tags:
*   name: Skill Categories
*   description: API pour gérer les catégories de compétences
*/
// TOUTES LES CATÉGORIES DE COMPÉTENCES
export const fetchAllSkillCategories = async (req, res, next) => {
    try {
        const categories = await prisma.category.findMany({
            where: {
                typeId: ECategoryType.SKILL
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
// CATÉGORIE DE COMPÉTENCE PAR ID
export const fetchSkillCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const skillCategory = await prisma.category.findUnique({
            where: {
                id: Number(id),
                typeId: ECategoryType.SKILL
            }
        });
        if (!skillCategory) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        res.status(200).json(skillCategory);
    }
    catch (error) {
        next(error);
    }
};
// CRÉER UNE CATÉGORIE DE COMPÉTENCE
export const createSkillCategory = async (req, res, next) => {
    try {
        const categoryToCreate = await prisma.category.create({
            data: req.body
        });
        res.status(201).json(categoryToCreate);
    }
    catch (error) {
        next(error);
    }
};
export const updateSkillCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: Number(id),
                typeId: ECategoryType.SKILL
            }
        });
        if (!category) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        const categoryToUpdate = await prisma.category.update({
            data: {
                ...req.body,
                updatedAt: new Date()
            },
            where: {
                id: Number(id),
                typeId: ECategoryType.SKILL
            }
        });
        res.status(200).json(categoryToUpdate);
    }
    catch (error) {
        next(error);
    }
};
export const deleteSkillCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: Number(id),
                typeId: ECategoryType.SKILL
            }
        });
        if (!category) {
            throw createHttpError(404, 'Catégorie non trouvée');
        }
        await prisma.category.delete({
            where: {
                id: Number(id),
                typeId: ECategoryType.SKILL
            }
        });
        res.status(200).json({ message: 'Catégorie supprimée avec succès' });
    }
    catch (error) {
        next(error);
    }
};

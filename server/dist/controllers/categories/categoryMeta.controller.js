import { PrismaClient } from '@/prisma/client';
const prisma = new PrismaClient();
export async function fetchCategoryChapters(req, res, next) {
    try {
        const chapters = await prisma.categoryChapter.findMany({
            select: {
                chapterId: true,
                chapterName: true,
            },
            orderBy: { chapterId: 'asc' }
        });
        res.json(chapters);
    }
    catch (error) {
        next(error);
    }
}
export async function fetchCategoryTypes(req, res, next) {
    try {
        const types = await prisma.categoryType.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: { id: 'asc' }
        });
        res.json(types);
    }
    catch (error) {
        next(error);
    }
}

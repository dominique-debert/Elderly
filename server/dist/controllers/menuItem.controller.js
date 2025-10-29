import { PrismaClient } from '@/prisma/client';
const prisma = new PrismaClient();
export const getAllMenuItems = async (req, res, next) => {
    try {
        const menuItems = await prisma.menuItem.findMany({
            orderBy: { label: 'asc' },
        });
        res.status(200).json({ menuItems });
    }
    catch (error) {
        next(error);
    }
};

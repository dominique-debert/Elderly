import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.categoryType.createMany({
    data: [
      { id: 1, name: 'ACTIVITY' },
      { id: 2, name: 'BADGE' },
      { id: 3, name: 'COGNITIVE' },
      { id: 4, name: 'FORUM' },
      { id: 5, name: 'HELP' },
      { id: 6, name: 'NUTRITIONAL' },
      { id: 7, name: 'PROGRAM' },
      { id: 8, name: 'PROJECT' },
      { id: 9, name: 'RESOURCE' },
      { id: 10, name: 'SERVICE' },
      { id: 11, name: 'SKILL' },
      { id: 12, name: 'URBAN_ISSUE' },
      { id: 13, name: 'WELLNESS' },
    ],
    skipDuplicates: true
  });
}

seedCategoryTypes()
  .then(() => {
    console.log('✅ Catégories types seedées');
  })
  .catch((err) => {
    console.error('❌ Erreur lors du seed des category types', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

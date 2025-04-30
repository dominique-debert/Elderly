import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.categoryType.createMany({
    data: [
      { id: 1, name: 'ACTIVITY' },
      { id: 2, name: 'PROGRAM' }
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
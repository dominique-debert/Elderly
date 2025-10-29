import { PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.categoryType.deleteMany();
  await prisma.categoryType.createMany({
    data: [
      { id: 1, name: "Activités" },
      { id: 2, name: "Badges" },
      { id: 3, name: "Cognition" },
      { id: 4, name: "Forum" },
      { id: 5, name: "Aide" },
      { id: 6, name: "Nutrition" },
      { id: 7, name: "Programmes" },
      { id: 8, name: "Projets" },
      { id: 9, name: "Ressources" },
      { id: 10, name: "Services" },
      { id: 11, name: "Compétences" },
      { id: 12, name: "Problèmes urbains" },
      { id: 13, name: "Bien-être" },
    ],
    skipDuplicates: true,
  });
}

seedCategoryTypes()
  .then(() => {
    console.log("✅ Catégories types seedées");
  })
  .catch((err) => {
    console.error("❌ Erreur lors du seed des category types", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

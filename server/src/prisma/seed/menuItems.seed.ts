import { PrismaClient } from "../index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

export const seedMenuItems = async () => {
  const items = [
    { label: "Humeurs", key: "mood" },
    { label: "Activités", key: "activity" },
    { label: "Badges", key: "badge" },
    { label: "Cognition", key: "cognitive" },
    { label: "Aide", key: "help" },
    { label: "Nutrition", key: "nutrition" },
    { label: "Programmes", key: "program" },
    { label: "Projets", key: "project" },
    {
      label: "Ressources",
      key: "resource",
    },
    { label: "Services", key: "service" },
    { label: "Compétences", key: "skill" },
    {
      label: "Problème urbain",
      key: "urban_issue",
    },
    { label: "Bien-être", key: "wellness" },
  ];

  try {
    await prisma.menuItem.deleteMany();
    await prisma.menuItem.createMany({
      data: items,
    });
    console.log("✅ Seed des items du menu terminé.");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedMenuItems();

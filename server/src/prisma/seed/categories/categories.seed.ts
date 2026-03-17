import { PrismaClient } from "@/prisma";
import {
  seedActivities,
  seedBadges,
  seedCognitions,
  seedHelp,
  seedNutritional,
  seedPrograms,
  seedProjects,
  seedResources,
  seedServices,
  seedSkills,
  seedUrbanIssues,
  seedWellness,
} from "@/prisma/seed/";

import { seedMenuItems } from "@/prisma/seed/menuItems.seed";
import { seedMoods } from "@/prisma/seed/moods.seed";
import { seedNotifications } from "@/prisma/seed/notifications.seed";

const prisma = new PrismaClient();

async function seedCategories() {
  // Delete all dependent records first
  await prisma.activity.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.cognitiveExercise.deleteMany();
  await prisma.collaborativeProject.deleteMany();
  await prisma.exerciseProgram.deleteMany();
  await prisma.helpRequest.deleteMany();
  await prisma.localService.deleteMany();
  await prisma.nutritionalAdvice.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.urbanIssueReport.deleteMany();
  await prisma.wellnessBadge.deleteMany();
  await prisma.wellnessGoal.deleteMany();

  // Now delete categories
  await prisma.category.deleteMany();

  // 1. ACTIVITY
  // 🎯 Actions ou activités à réaliser
  seedActivities();

  // 2. BADGE
  // 🏅 Distinctions ou badges obtenus
  seedBadges();

  // 3. COGNITIVE CATEGORIES
  // 🧠 Catégories liées aux fonctions cognitives
  seedCognitions();

  // 5. HELP
  // 🆘 Aides, supports et assistances
  seedHelp();

  // 6. NUTRITIONAL
  // 🍏 Catégories nutritionnelles (alimentation, diététique)
  seedNutritional();

  // 7. PROGRAM
  // 📅 Programmes ou challenges planifiés
  seedPrograms();

  // 8. PROJECT
  // 🏗️ Projets collaboratifs ou personnels
  seedProjects();

  // 9. RESOURCES
  // 📚 Ressources documentaires, guides, supports pédagogiques
  seedResources();

  // 10. SERVICE
  // 🛎️ Services proposés ou accessibles
  seedServices();

  // 11. SKILL
  // 🛠️ Compétences pratiques ou savoir-faire
  seedSkills();

  // 12. URBAN_ISSUE
  // 🌆 Problématiques urbaines ou environnementales locales
  seedUrbanIssues();

  // 13. WELLNESS
  // 🧘 Bien-être général (physique, mental, émotionnel)
  seedWellness();

  seedMenuItems();
  seedMoods();
  seedNotifications();
}

seedCategories()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

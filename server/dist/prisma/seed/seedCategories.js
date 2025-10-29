import { PrismaClient } from '@/prisma/client';
import seedActivities from "./seedActivities";
import seedBadges from "./seedBadges";
import seedCognitions from "./seedCognitions";
import seedForum from "./seedForum";
import seedHelp from "./seedHelp";
import seedNutritional from "./seedNutritional";
import seedPrograms from "./seedPrograms";
import seedProjects from "./seedProjects";
import seedResources from "./seedResources";
import seedServices from "./seedServices";
import seedSkills from "./seedSkills";
import seedUrbanIssues from "./seedUrbanIssues";
import seedWellness from "./seedWellness";
const prisma = new PrismaClient();
async function seedCategories() {
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
    // 4. FORUM
    // 💬 Forums de discussion, échanges entre utilisateurs
    seedForum();
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

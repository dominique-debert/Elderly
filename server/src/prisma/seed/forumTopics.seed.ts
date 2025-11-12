import { PrismaClient } from "../index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const authorId = "cmhvrbegp00000t6clypmvbvh";

  // Helper function to create dates in the past
  const daysAgo = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  };

  await prisma.forumTopic.createMany({
    data: [
      // Section 1: Règlements & Annonces
      {
        title: "📜 Règlement du forum - À lire avant de poster",
        authorId,
        sectionId: 1,
        pinned: true,
        status: "open",
        views: 245,
        createdAt: daysAgo(90),
      },
      {
        title: "🎉 Bienvenue sur notre nouveau forum communautaire !",
        authorId,
        sectionId: 1,
        pinned: true,
        status: "open",
        views: 189,
        createdAt: daysAgo(85),
      },
      {
        title: "Mise à jour de la plateforme - Novembre 2025",
        authorId,
        sectionId: 1,
        pinned: false,
        status: "open",
        views: 78,
        createdAt: daysAgo(5),
      },

      // Section 2: Bienvenue & Présentations
      {
        title: "Bonjour à tous, nouvelle venue du Var !",
        authorId,
        sectionId: 2,
        pinned: false,
        status: "open",
        views: 32,
        createdAt: daysAgo(2),
      },
      {
        title: "Présentation d'un retraité passionné de jardinage",
        authorId,
        sectionId: 2,
        pinned: false,
        status: "open",
        views: 45,
        createdAt: daysAgo(7),
      },
      {
        title: "Un petit coucou de Normandie",
        authorId,
        sectionId: 2,
        pinned: false,
        status: "open",
        views: 28,
        createdAt: daysAgo(12),
      },

      // Section 3: Vie quotidienne
      {
        title: "Vos meilleures recettes de cuisine d'hiver",
        authorId,
        sectionId: 3,
        pinned: false,
        status: "open",
        views: 156,
        createdAt: daysAgo(15),
      },
      {
        title: "Comment organiser vos courses pour la semaine ?",
        authorId,
        sectionId: 3,
        pinned: false,
        status: "open",
        views: 93,
        createdAt: daysAgo(8),
      },
      {
        title: "Astuces pour économiser sur les factures d'électricité",
        authorId,
        sectionId: 3,
        pinned: false,
        status: "open",
        views: 127,
        createdAt: daysAgo(20),
      },
      {
        title: "Faire ses produits ménagers soi-même : vos conseils ?",
        authorId,
        sectionId: 3,
        pinned: false,
        status: "open",
        views: 68,
        createdAt: daysAgo(4),
      },

      // Section 4: Santé & Bien-être
      {
        title: "Conseils pour mieux dormir - partagez vos astuces",
        authorId,
        sectionId: 4,
        pinned: false,
        status: "open",
        views: 201,
        createdAt: daysAgo(25),
      },
      {
        title: "Exercices doux pour maintenir la mobilité",
        authorId,
        sectionId: 4,
        pinned: false,
        status: "open",
        views: 178,
        createdAt: daysAgo(18),
      },
      {
        title: "Alimentation et arthrose : qu'est-ce qui fonctionne ?",
        authorId,
        sectionId: 4,
        pinned: false,
        status: "open",
        views: 142,
        createdAt: daysAgo(11),
      },
      {
        title: "Méditation et relaxation : vos expériences",
        authorId,
        sectionId: 4,
        pinned: false,
        status: "open",
        views: 89,
        createdAt: daysAgo(6),
      },

      // Section 5: Retraite & Droits
      {
        title: "Question sur le calcul de la pension de réversion",
        authorId,
        sectionId: 5,
        pinned: false,
        status: "open",
        views: 167,
        createdAt: daysAgo(30),
      },
      {
        title: "Aide pour déclarer ses impôts en ligne",
        authorId,
        sectionId: 5,
        pinned: false,
        status: "solved",
        views: 134,
        createdAt: daysAgo(45),
      },
      {
        title: "Carte senior SNCF : comment l'obtenir ?",
        authorId,
        sectionId: 5,
        pinned: false,
        status: "open",
        views: 98,
        createdAt: daysAgo(22),
      },

      // Section 6: Aide numérique
      {
        title: "Comment installer WhatsApp sur ma tablette ?",
        authorId,
        sectionId: 6,
        pinned: false,
        status: "solved",
        views: 156,
        createdAt: daysAgo(35),
      },
      {
        title: "Mon ordinateur est très lent, que faire ?",
        authorId,
        sectionId: 6,
        pinned: false,
        status: "open",
        views: 203,
        createdAt: daysAgo(14),
      },
      {
        title: "Tutoriel : Faire des visios avec mes petits-enfants",
        authorId,
        sectionId: 6,
        pinned: true,
        status: "open",
        views: 289,
        createdAt: daysAgo(50),
      },
      {
        title: "Problème de mot de passe oublié sur mon email",
        authorId,
        sectionId: 6,
        pinned: false,
        status: "solved",
        views: 87,
        createdAt: daysAgo(3),
      },

      // Section 7: Loisirs & Passions
      {
        title: "Partage de photos : mon jardin en automne 🍂",
        authorId,
        sectionId: 7,
        pinned: false,
        status: "open",
        views: 112,
        createdAt: daysAgo(9),
      },
      {
        title: "Club de lecture : quel livre lisez-vous en ce moment ?",
        authorId,
        sectionId: 7,
        pinned: false,
        status: "open",
        views: 176,
        createdAt: daysAgo(17),
      },
      {
        title: "Mes créations en tricot - conseils bienvenus !",
        authorId,
        sectionId: 7,
        pinned: false,
        status: "open",
        views: 94,
        createdAt: daysAgo(13),
      },
      {
        title: "Mots croisés et jeux de lettres : vos préférés ?",
        authorId,
        sectionId: 7,
        pinned: false,
        status: "open",
        views: 131,
        createdAt: daysAgo(28),
      },

      // Section 8: Voyages & Découvertes
      {
        title: "Weekend en Bretagne : vos recommandations ?",
        authorId,
        sectionId: 8,
        pinned: false,
        status: "open",
        views: 145,
        createdAt: daysAgo(21),
      },
      {
        title: "Croisière sur le Rhin - retour d'expérience",
        authorId,
        sectionId: 8,
        pinned: false,
        status: "open",
        views: 188,
        createdAt: daysAgo(40),
      },
      {
        title: "Voyager en train en Europe : bons plans",
        authorId,
        sectionId: 8,
        pinned: false,
        status: "open",
        views: 167,
        createdAt: daysAgo(26),
      },

      // Section 9: Famille & Relations
      {
        title: "Comment rester proche de ses petits-enfants à distance ?",
        authorId,
        sectionId: 9,
        pinned: false,
        status: "open",
        views: 198,
        createdAt: daysAgo(33),
      },
      {
        title: "Gérer la solitude après un déménagement",
        authorId,
        sectionId: 9,
        pinned: false,
        status: "open",
        views: 156,
        createdAt: daysAgo(19),
      },
      {
        title: "Idées de cadeaux pour petits-enfants (10-15 ans)",
        authorId,
        sectionId: 9,
        pinned: false,
        status: "open",
        views: 223,
        createdAt: daysAgo(10),
      },

      // Section 10: Habitat & Vie pratique
      {
        title: "Aménager sa salle de bain pour plus de sécurité",
        authorId,
        sectionId: 10,
        pinned: false,
        status: "open",
        views: 178,
        createdAt: daysAgo(38),
      },
      {
        title: "Téléassistance : laquelle choisir ?",
        authorId,
        sectionId: 10,
        pinned: false,
        status: "open",
        views: 145,
        createdAt: daysAgo(24),
      },
      {
        title: "Chauffage économique : vos solutions ?",
        authorId,
        sectionId: 10,
        pinned: false,
        status: "open",
        views: 192,
        createdAt: daysAgo(16),
      },

      // Section 11: Aides & Services
      {
        title: "APA : démarches et conseils pour la demande",
        authorId,
        sectionId: 11,
        pinned: true,
        status: "open",
        views: 267,
        createdAt: daysAgo(55),
      },
      {
        title: "Aide ménagère à domicile : comment ça marche ?",
        authorId,
        sectionId: 11,
        pinned: false,
        status: "open",
        views: 189,
        createdAt: daysAgo(29),
      },
      {
        title: "Portage de repas : tarifs et qualité",
        authorId,
        sectionId: 11,
        pinned: false,
        status: "open",
        views: 134,
        createdAt: daysAgo(23),
      },

      // Section 12: Actualité & Société
      {
        title: "Réforme des retraites 2025 : qu'en pensez-vous ?",
        authorId,
        sectionId: 12,
        pinned: false,
        status: "open",
        views: 312,
        createdAt: daysAgo(42),
      },
      {
        title: "Le système de santé français vu par les seniors",
        authorId,
        sectionId: 12,
        pinned: false,
        status: "open",
        views: 245,
        createdAt: daysAgo(36),
      },
      {
        title: "Environnement : petits gestes du quotidien",
        authorId,
        sectionId: 12,
        pinned: false,
        status: "open",
        views: 167,
        createdAt: daysAgo(27),
      },

      // Section 13: Témoignages & Partages d'expériences
      {
        title: "Mon parcours de la vie active à la retraite",
        authorId,
        sectionId: 13,
        pinned: false,
        status: "open",
        views: 198,
        createdAt: daysAgo(48),
      },
      {
        title: "Comment j'ai surmonté la perte de mon conjoint",
        authorId,
        sectionId: 13,
        pinned: false,
        status: "open",
        views: 234,
        createdAt: daysAgo(60),
      },
      {
        title: "Ma reconversion en bénévolat après 70 ans",
        authorId,
        sectionId: 13,
        pinned: false,
        status: "open",
        views: 156,
        createdAt: daysAgo(31),
      },

      // Section 14: Associations & Engagement
      {
        title: "Recherche bénévoles pour association locale",
        authorId,
        sectionId: 14,
        pinned: false,
        status: "open",
        views: 123,
        createdAt: daysAgo(8),
      },
      {
        title: "Club des Ainés de ma commune : activités mensuelles",
        authorId,
        sectionId: 14,
        pinned: false,
        status: "open",
        views: 145,
        createdAt: daysAgo(34),
      },
      {
        title: "Créer une association : par où commencer ?",
        authorId,
        sectionId: 14,
        pinned: false,
        status: "open",
        views: 98,
        createdAt: daysAgo(44),
      },

      // Section 15: Coup de pouce entre membres
      {
        title: "Besoin de conseils pour choisir une tablette tactile",
        authorId,
        sectionId: 15,
        pinned: false,
        status: "solved",
        views: 112,
        createdAt: daysAgo(37),
      },
      {
        title: "Qui peut m'aider à comprendre ma facture d'électricité ?",
        authorId,
        sectionId: 15,
        pinned: false,
        status: "open",
        views: 87,
        createdAt: daysAgo(5),
      },
      {
        title: "Recherche recette de tarte aux pommes de ma grand-mère",
        authorId,
        sectionId: 15,
        pinned: false,
        status: "solved",
        views: 145,
        createdAt: daysAgo(41),
      },

      // Section 16: Le Café du forum
      {
        title: "☕ Bonjour ! Comment allez-vous aujourd'hui ?",
        authorId,
        sectionId: 16,
        pinned: true,
        status: "open",
        views: 456,
        createdAt: daysAgo(1),
      },
      {
        title: "La météo de ce week-end : soleil ou pluie ?",
        authorId,
        sectionId: 16,
        pinned: false,
        status: "open",
        views: 178,
        createdAt: daysAgo(3),
      },
      {
        title: "Vos films préférés de tous les temps",
        authorId,
        sectionId: 16,
        pinned: false,
        status: "open",
        views: 267,
        createdAt: daysAgo(39),
      },
      {
        title: "Petites joies du quotidien - partagez les vôtres !",
        authorId,
        sectionId: 16,
        pinned: false,
        status: "open",
        views: 198,
        createdAt: daysAgo(12),
      },
      {
        title: "Nostalgie : souvenirs des années 60-70",
        authorId,
        sectionId: 16,
        pinned: false,
        status: "open",
        views: 289,
        createdAt: daysAgo(52),
      },
    ],
  });

  console.log("✅ Forum topics successfully seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

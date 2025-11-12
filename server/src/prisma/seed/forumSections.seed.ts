import { PrismaClient } from "../index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const authorId = "cmhvrbegp00000t6clypmvbvh";

  await prisma.forumSection.createMany({
    data: [
      {
        name: "Règlements & Annonces",
        description:
          "Règles du forum, annonces importantes et mises à jour de la plateforme.",
        authorId,
      },
      {
        name: "Bienvenue & Présentations",
        description:
          "Un espace pour vous présenter, faire connaissance et découvrir la communauté.",
        authorId,
      },
      {
        name: "Vie quotidienne",
        description:
          "Échanges autour des activités du quotidien : organisation, cuisine, maison, courses, astuces pratiques.",
        authorId,
      },
      {
        name: "Santé & Bien-être",
        description:
          "Conseils, partages d’expériences et discussions autour de la santé, du moral, du sommeil et du bien-être global.",
        authorId,
      },
      {
        name: "Retraite & Droits",
        description:
          "Tout sur la retraite : démarches administratives, pensions, fiscalité, et droits sociaux.",
        authorId,
      },
      {
        name: "Aide numérique",
        description:
          "Aide pour smartphones, tablettes, ordinateurs, internet, e-mails et réseaux sociaux.",
        authorId,
      },
      {
        name: "Loisirs & Passions",
        description:
          "Partagez vos hobbies : lecture, jardinage, bricolage, couture, peinture, jeux, etc.",
        authorId,
      },
      {
        name: "Voyages & Découvertes",
        description:
          "Idées de voyages, bons plans, destinations adaptées aux seniors.",
        authorId,
      },
      {
        name: "Famille & Relations",
        description:
          "Discussions sur la famille, les petits-enfants, les relations sociales et la solitude.",
        authorId,
      },
      {
        name: "Habitat & Vie pratique",
        description:
          "Aménagement du logement, sécurité, adaptation, vie en résidence ou à domicile.",
        authorId,
      },
      {
        name: "Aides & Services",
        description:
          "Informations sur les services à la personne, aides financières, démarches administratives.",
        authorId,
      },
      {
        name: "Actualité & Société",
        description:
          "Débats et discussions sur l’actualité, les politiques publiques et la société.",
        authorId,
      },
      {
        name: "Témoignages & Partages d’expériences",
        description:
          "Un lieu bienveillant pour raconter son parcours et échanger sur les expériences de vie.",
        authorId,
      },
      {
        name: "Associations & Engagement",
        description:
          "Mettre en avant les initiatives, le bénévolat, et les associations locales.",
        authorId,
      },
      {
        name: "Coup de pouce entre membres",
        description:
          "Espace d’entraide : petits services, conseils personnalisés, échanges de bons plans.",
        authorId,
      },
      {
        name: "Le Café du forum",
        description:
          "Discussion libre et conviviale sur tout et n’importe quoi, comme autour d’un café ☕.",
        authorId,
      },
    ],
  });

  console.log("✅ Forum sections successfully seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

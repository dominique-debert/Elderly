// prisma/seed.ts
import { PrismaClient } from "@/prisma";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash("12345678");

  // Create test users
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@helpy.dev" },
    update: {},
    create: {
      email: "admin@helpy.dev",
      passwordHash: password,
      firstName: "Admin",
      lastName: "Helpy",
      description: "Administrateur de la plateforme Helpy",
      latitude: "45.8782369390931",
      longitude: "4.275273449092379",
      isAdmin: true,
    },
  });

  const seniorUser1 = await prisma.user.upsert({
    where: { email: "marie@helpy.dev" },
    update: {},
    create: {
      email: "marie@helpy.dev",
      passwordHash: password,
      firstName: "Marie",
      lastName: "Dupont",
      description: "Amatrice de jardinage et de lecture",
      latitude: "45.764043",
      longitude: "4.835659",
      isAdmin: false,
    },
  });

  const seniorUser2 = await prisma.user.upsert({
    where: { email: "jean@helpy.dev" },
    update: {},
    create: {
      email: "jean@helpy.dev",
      passwordHash: password,
      firstName: "Jean",
      lastName: "Martin",
      description: "Passionné de technologie et d'aide mutuelle",
      latitude: "45.750000",
      longitude: "4.850000",
      isAdmin: false,
    },
  });

  const seniorUser3 = await prisma.user.upsert({
    where: { email: "sophie@helpy.dev" },
    update: {},
    create: {
      email: "sophie@helpy.dev",
      passwordHash: password,
      firstName: "Sophie",
      lastName: "Bernard",
      description: "Ancienne enseignante, aime partager ses connaissances",
      latitude: "45.770000",
      longitude: "4.840000",
      isAdmin: false,
    },
  });

  console.log("✅ Utilisateurs créés");

  // Get or create forum chapter
  const forumChapter = await prisma.categoryChapter.upsert({
    where: { chapterId: 1 },
    update: {},
    create: {
      chapterId: 1,
      chapterName: "Forum",
      chapterDescription: "Catégories pour le forum communautaire",
    },
  });

  // Get or create forum category type
  const forumType = await prisma.categoryType.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Forum",
    },
  });

  console.log("✅ Chapter et Type de forum créés");

  // Create forum categories
  const generalCategory = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      categoryName: "Discussion Générale",
      description: "Pour tous les sujets généraux et discussions libres",
      typeId: forumType.id,
      chapterId: forumChapter.chapterId,
    },
  });

  const helpCategory = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      categoryName: "Entraide & Support",
      description: "Demandez ou offrez de l'aide à la communauté",
      typeId: forumType.id,
      chapterId: forumChapter.chapterId,
    },
  });

  const hobbiesCategory = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      categoryName: "Loisirs & Passions",
      description: "Partagez vos hobbies et centres d'intérêt",
      typeId: forumType.id,
      chapterId: forumChapter.chapterId,
    },
  });

  const techCategory = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      categoryName: "Technologie & Numérique",
      description: "Questions et astuces sur les technologies",
      typeId: forumType.id,
      chapterId: forumChapter.chapterId,
    },
  });

  const healthCategory = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      categoryName: "Santé & Bien-être",
      description: "Conseils et discussions sur la santé et le bien-être",
      typeId: forumType.id,
      chapterId: forumChapter.chapterId,
    },
  });

  console.log("✅ Catégories de forum créées");

  // Create forum topics
  const topic1 = await prisma.forumTopic.create({
    data: {
      title: "Bienvenue sur le forum !",
      categoryId: generalCategory.id,
      authorId: adminUser.id,
      pinned: true,
      status: "open",
      views: 150,
    },
  });

  const topic2 = await prisma.forumTopic.create({
    data: {
      title: "Conseils pour démarrer avec un smartphone",
      categoryId: techCategory.id,
      authorId: seniorUser2.id,
      status: "open",
      views: 45,
    },
  });

  const topic3 = await prisma.forumTopic.create({
    data: {
      title: "Recherche compagnon pour club de lecture",
      categoryId: hobbiesCategory.id,
      authorId: seniorUser1.id,
      status: "open",
      views: 28,
    },
  });

  const topic4 = await prisma.forumTopic.create({
    data: {
      title: "Besoin d'aide pour les courses hebdomadaires",
      categoryId: helpCategory.id,
      authorId: seniorUser3.id,
      status: "open",
      views: 62,
    },
  });

  const topic5 = await prisma.forumTopic.create({
    data: {
      title: "Partage de recettes santé",
      categoryId: healthCategory.id,
      authorId: seniorUser1.id,
      status: "open",
      views: 89,
    },
  });

  const topic6 = await prisma.forumTopic.create({
    data: {
      title: "Organisation d'une sortie au parc",
      categoryId: generalCategory.id,
      authorId: seniorUser2.id,
      status: "open",
      views: 34,
    },
  });

  console.log("✅ Topics de forum créés");

  // Create forum messages
  await prisma.forumMessage.create({
    data: {
      topicId: topic1.id,
      authorId: adminUser.id,
      content:
        "Bienvenue à tous sur notre nouveau forum communautaire ! N'hésitez pas à partager vos expériences, poser vos questions et échanger avec les autres membres.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic1.id,
      authorId: seniorUser1.id,
      content:
        "Merci pour cette belle initiative ! Je suis ravie de pouvoir échanger avec d'autres personnes de mon âge.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic2.id,
      authorId: seniorUser2.id,
      content:
        "Bonjour à tous, je viens d'acquérir mon premier smartphone et je suis un peu perdu. Quelqu'un pourrait-il me donner quelques conseils de base ?",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic2.id,
      authorId: seniorUser3.id,
      content:
        "Bonjour Jean ! Je vous conseille de commencer par configurer votre compte email et d'installer quelques applications essentielles comme WhatsApp pour rester en contact avec votre famille.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic2.id,
      authorId: adminUser.id,
      content:
        "Excellents conseils Sophie ! Je recommande également de prendre le temps d'explorer les paramètres de sécurité et de confidentialité.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic3.id,
      authorId: seniorUser1.id,
      content:
        "Je cherche des personnes intéressées pour créer un club de lecture dans le quartier. Nous pourrions nous retrouver une fois par mois pour discuter d'un livre.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic3.id,
      authorId: seniorUser3.id,
      content:
        "Quelle excellente idée Marie ! Je serais ravie de participer. Avez-vous déjà une idée du premier livre ?",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic4.id,
      authorId: seniorUser3.id,
      content:
        "Bonjour, j'ai du mal à porter mes courses depuis le supermarché. Quelqu'un pourrait-il m'aider ou me recommander un service ?",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic4.id,
      authorId: seniorUser2.id,
      content:
        "Bonjour Sophie, je peux vous aider ! J'habite dans le même quartier. On pourrait s'organiser pour faire les courses ensemble ?",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic5.id,
      authorId: seniorUser1.id,
      content:
        "Je voudrais partager quelques recettes saines que j'ai découvertes. Commençons par une délicieuse soupe aux légumes de saison !",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic5.id,
      authorId: seniorUser3.id,
      content:
        "Merci pour le partage ! J'adore cuisiner. Je pourrais également partager ma recette de salade composée équilibrée.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic6.id,
      authorId: seniorUser2.id,
      content:
        "Que diriez-vous d'une sortie au parc ce samedi ? On pourrait organiser un pique-nique si le temps le permet.",
    },
  });

  await prisma.forumMessage.create({
    data: {
      topicId: topic6.id,
      authorId: seniorUser1.id,
      content: "Je suis partante ! Quelle heure vous conviendrait ?",
    },
  });

  console.log("✅ Messages de forum créés");
  console.log("\n📊 Résumé du seed:");
  console.log("- 4 utilisateurs créés (1 admin + 3 seniors)");
  console.log("- 5 catégories de forum créées");
  console.log("- 6 topics de forum créés");
  console.log("- 13 messages de forum créés");
}

main()
  .catch((e) => {
    console.error("❌ Erreur pendant le seed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.category.deleteMany();
  await prisma.category.createMany({
    data: [
      {
        categoryName: "Séance de gym douce",
        description: "Séance de gym douce adaptée aux capacités physiques des seniors. Utilisez des exercices simples et doux pour travailler l’équilibre, la souplesse et la force musculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        categoryName: "Marche en groupe",
        description: "Sorties en groupe pour des promenades dans le quartier ou dans un parc. La marche est une activité physique douce et bénéfique pour la santé cardiovasculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        categoryName: "Jeux de ballon",
        description: "Jeux de ballon adaptés aux capacités des seniors, comme le ballon assis ou le mini-golf. Ces jeux stimulent la coordination et la motricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        categoryName: "Yoga",
        description: "Séances de yoga adaptées aux seniors. Le yoga favorise la relaxation, l’équilibre et la flexibilité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        categoryName: "Jeux de mémoire",
        description: "Jeux de mémoire comme le Memory ou le jeu des paires. Ces jeux permettent de stimuler la mémoire et l’attention.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        categoryName: "Mots croisés et mots cachés",
        description: "Séances de mots croisés et de mots cachés. Ces jeux de lettres sont idéaux pour travailler les capacités de concentration et de raisonnement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        categoryName: "Quiz thématiques",
        description: "Quiz thématiques sur des sujets variés comme l’histoire, la géographie, la musique ou le cinéma. Les quiz favorisent la curiosité et la réflexion.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        categoryName: "Activités artistiques",
        description: "Activités artistiques comme la peinture, le dessin ou la sculpture. Ces activités stimulent la créativité et favorisent l’expression artistique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        categoryName: "Atelier de cuisine",
        description: "Ateliers de cuisine où les seniors pourront participer à la préparation de plats simples et savoureux. Ces moments de partage et de convivialité favorisent les échanges.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        categoryName: "Club de lecture",
        description: "Créez un club de lecture où les seniors pourront se retrouver régulièrement pour discuter de leurs lectures. Les discussions littéraires permettent d’échanger des idées et de partager des émotions.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        categoryName: "Spectacles et concerts",
        description: "Sorties au théâtre, au cinéma ou à des concerts. Les sorties culturelles permettent de découvrir de nouvelles œuvres et de partager des moments agréables.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        categoryName: "Activités intergénérationnelles",
        description: "Rencontres intergénérationnelles entre les seniors et les plus jeunes, comme des ateliers de bricolage ou des jeux de société. Ces échanges favorisent les liens entre les générations et apportent une source de joie et de partage.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        categoryName: "Atelier d’aromathérapie",
        description: "Ateliers d’aromathérapie où les seniors pourront découvrir les bienfaits des huiles essentielles. Ces ateliers permettent de stimuler l’odorat et de favoriser la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        categoryName: "Musicothérapie",
        description: "Séances de musicothérapie où les seniors pourront écouter de la musique apaisante et participer à des activités musicales. La musique favorise la relaxation et stimule l’ouïe.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        categoryName: "Jardinage",
        description: "Activités de jardinage où les seniors pourront planter des fleurs, cultiver des légumes ou simplement profiter du contact avec la nature. Le jardinage stimule le toucher et favorise la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        categoryName: "Atelier de cuisine sensorielle",
        description: "Ateliers de cuisine sensorielle où les seniors pourront découvrir de nouvelles saveurs et textures. Ces ateliers stimulent le goût et favorisent les échanges autour de la nourriture.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
    ],
    skipDuplicates: true
  });
}

seedCategoryTypes()
.then(() => {
  console.log(`✅ Catégories d'activités seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories d'activités`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

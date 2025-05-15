import { CategoryChapter, CategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.category.deleteMany();
  await prisma.category.createMany({
    data: [
      {
        categoryName: "Séance de gym douce",
        description: "Séance de gym douce adaptée aux capacités physiques des seniors. Utilisez des exercices simples et doux pour travailler l’équilibre, la souplesse et la force musculaire.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.PHYSICAL
      },
      {
        categoryName: "Marche en groupe",
        description: "Sorties en groupe pour des promenades dans le quartier ou dans un parc. La marche est une activité physique douce et bénéfique pour la santé cardiovasculaire.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.PHYSICAL
      },
      {
        categoryName: "Jeux de ballon",
        description: "Jeux de ballon adaptés aux capacités des seniors, comme le ballon assis ou le mini-golf. Ces jeux stimulent la coordination et la motricité.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.PHYSICAL
      },
      {
        categoryName: "Yoga",
        description: "Séances de yoga adaptées aux seniors. Le yoga favorise la relaxation, l’équilibre et la flexibilité.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.PHYSICAL
      },
      {
        categoryName: "Jeux de mémoire",
        description: "Jeux de mémoire comme le Memory ou le jeu des paires. Ces jeux permettent de stimuler la mémoire et l’attention.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.COGNITIVE
      },
      {
        categoryName: "Mots croisés et mots cachés",
        description: "Séances de mots croisés et de mots cachés. Ces jeux de lettres sont idéaux pour travailler les capacités de concentration et de raisonnement.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.COGNITIVE
      },
      {
        categoryName: "Quiz thématiques",
        description: "Quiz thématiques sur des sujets variés comme l’histoire, la géographie, la musique ou le cinéma. Les quiz favorisent la curiosité et la réflexion.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.COGNITIVE
      },
      {
        categoryName: "Activités artistiques",
        description: "Activités artistiques comme la peinture, le dessin ou la sculpture. Ces activités stimulent la créativité et favorisent l’expression artistique.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.COGNITIVE
      },
      {
        categoryName: "Atelier de cuisine",
        description: "Ateliers de cuisine où les seniors pourront participer à la préparation de plats simples et savoureux. Ces moments de partage et de convivialité favorisent les échanges.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SOCIAL
      },
      {
        categoryName: "Club de lecture",
        description: "Créez un club de lecture où les seniors pourront se retrouver régulièrement pour discuter de leurs lectures. Les discussions littéraires permettent d’échanger des idées et de partager des émotions.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SOCIAL
      },
      {
        categoryName: "Spectacles et concerts",
        description: "Sorties au théâtre, au cinéma ou à des concerts. Les sorties culturelles permettent de découvrir de nouvelles œuvres et de partager des moments agréables.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SOCIAL
      },
      {
        categoryName: "Activités intergénérationnelles",
        description: "Rencontres intergénérationnelles entre les seniors et les plus jeunes, comme des ateliers de bricolage ou des jeux de société. Ces échanges favorisent les liens entre les générations et apportent une source de joie et de partage.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SOCIAL
      },
      {
        categoryName: "Atelier d’aromathérapie",
        description: "Ateliers d’aromathérapie où les seniors pourront découvrir les bienfaits des huiles essentielles. Ces ateliers permettent de stimuler l’odorat et de favoriser la détente.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SENSORY
      },
      {
        categoryName: "Musicothérapie",
        description: "Séances de musicothérapie où les seniors pourront écouter de la musique apaisante et participer à des activités musicales. La musique favorise la relaxation et stimule l’ouïe.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SENSORY
      },
      {
        categoryName: "Jardinage",
        description: "Activités de jardinage où les seniors pourront planter des fleurs, cultiver des légumes ou simplement profiter du contact avec la nature. Le jardinage stimule le toucher et favorise la détente.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SENSORY
      },
      {
        categoryName: "Atelier de cuisine sensorielle",
        description: "Ateliers de cuisine sensorielle où les seniors pourront découvrir de nouvelles saveurs et textures. Ces ateliers stimulent le goût et favorisent les échanges autour de la nourriture.",
        typeId: CategoryType.ACTIVITY,
        chapterId: CategoryChapter.SENSORY
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


// id                   Int                    @id @default(autoincrement())
// categoryName         String
// description          String?
// typeId               Int                    @map("type_id")
// chapterId            Int                    @map("chapter_id")

// { id: 1, name: 'ACTIVITY' },
// { id: 2, name: 'BADGE' },
// { id: 3, name: 'COGNITIVE' },
// { id: 4, name: 'FORUM' },
// { id: 5, name: 'HELP' },
// { id: 6, name: 'NUTRITIONAL' },
// { id: 7, name: 'PROGRAM' },
// { id: 8, name: 'PROJECT' },
// { id: 9, name: 'RESOURCE' },
// { id: 10, name: 'SERVICE' },
// { id: 11, name: 'SKILL' },
// { id: 12, name: 'URBAN_ISSUE' },
// { id: 13, name: 'WELLNESS' },

// chapterId: 1, chapterName: "Activités physiques"
// chapterId: 2, chapterName: "Activités cognitives"
// chapterId: 3, chapterName: "Activités sociales"
// chapterId: 3, chapterName: "Activités sensorielles"

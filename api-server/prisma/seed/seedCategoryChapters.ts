import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedCategoryChapters() {
  await prisma.categoryChapter.deleteMany();
  await prisma.categoryChapter.createMany({
    data: [
      { chapterId: 1, chapterName: "Activités physiques", chapterDescription: "Les activités physiques sont essentielles pour maintenir la santé et la mobilité des seniors. Voici quelques idées d’animations pour leur permettre de bouger tout en s’amusant." },
      { chapterId: 2, chapterName: "Activités cognitives", chapterDescription:"Les activités cognitives sont importantes pour maintenir les capacités intellectuelles des seniors. Voici quelques idées d’animations pour stimuler leur cerveau." },
      { chapterId: 3, chapterName: "Activités sociales", chapterDescription:"Les activités sociales sont essentielles pour maintenir la vie sociale des seniors et éviter l’isolement. Voici quelques idées d’animations pour favoriser les échanges et les rencontres." },
      { chapterId: 4, chapterName: "Activités sensorielles", chapterDescription:"Les activités sensorielles permettent de stimuler les sens des seniors et de favoriser leur bien-être. Voici quelques idées d’animations pour éveiller leurs sens." },
    ],
    skipDuplicates: true
  });
}

seedCategoryChapters()
.then(() => {
  console.log('✅ Chapitres seedés');
})
.catch((err) => {
  console.error('❌ Erreur lors du seed des category chapters', err);
})
.finally(async () => {
  await prisma.$disconnect();
});

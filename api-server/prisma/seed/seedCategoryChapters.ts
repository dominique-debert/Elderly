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
      { chapterId: 5, chapterName: "Bien-être physique", chapterDescription:"Le bien-être physique constitue une dimension essentielle du bien-être global. Il comprend l’activité physique, l’alimentation saine et le sommeil. Ces éléments sont majeurs pour maintenir une bonne santé physique et améliorer la qualité de vie." },
      { chapterId: 6, chapterName: "Bien-être émotionnel", chapterDescription:"Le bien-être émotionnel concerne la santé mentale, la gestion du stress et la capacité à éprouver de la compassion et de l’empathie. Il s’agit d’un élément clé pour maintenir un équilibre mental et une vie satisfaisante." },
      { chapterId: 7, chapterName: "Bien-être social", chapterDescription:"Le bien-être social est étroitement lié à la qualité des interactions et des relations avec les autres. Il englobe plusieurs aspects majeurs pour maintenir une vie riche et équilibrée." },
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

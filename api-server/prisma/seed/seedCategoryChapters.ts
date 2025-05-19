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
      { chapterId: 8, chapterName: "Bien-être intellectuel", chapterDescription:"Le bien-être intellectuel se retrouve dans les pratiques à adopter au quotidien, qui vous permettront de nourrir votre esprit en lui fournissant une source constante de connaissance." },
      { chapterId: 9, chapterName: "Bien-être financier", chapterDescription:"Pour parvenir à ce bien-être financier, il est essentiel d’apprendre à gérer votre argent de manière efficace. En adoptant des habitudes saines, vous pourrez non seulement assurer votre sécurité financière, mais aussi vous permettre de réaliser vos aspirations et vos rêves." },
      { chapterId: 10, chapterName: "Bien-être environnemental", chapterDescription:"Le bien-être environnemental est étroitement lié aux espaces qui nous entourent, mais sa qualité ne se résume pas à la beauté visuelle de ces lieux. En réalité, le bien-être environnemental est plutôt défini par la manière dont nous nous sentons dans cet environnement."},
      { chapterId: 11, chapterName: "Bien-être spirituel", chapterDescription:"Le bien-être spirituel est beaucoup moins abordé, mais est tout aussi essentiel. Il se manifeste dans notre capacité à comprendre et apprécier différentes cultures, nécessitant ainsi une ouverture d’esprit. Nos valeurs éthiques jouent également un rôle important dans notre bien-être spirituel, influençant notre relation avec le monde qui nous entoure et avec nous-mêmes."},
      { chapterId: 12, chapterName: "Activité cognitive", chapterDescription:"Les activités cognitives stimulent les fonctions intellectuelles telles que la mémoire, l’attention, le raisonnement, la résolution de problèmes ou encore la créativité. Elles contribuent à maintenir un esprit alerte, à développer de nouvelles compétences mentales et à favoriser la concentration. Elles sont essentielles pour la santé mentale et le bien-être global."},
      { chapterId: 13, chapterName: "Bien-être cognitif", chapterDescription:"Le bien-être cognitif fait référence à la capacité à penser clairement, à se concentrer, à résoudre des problèmes et à prendre des décisions de manière efficace. Il englobe les fonctions mentales telles que la mémoire, l’attention, la créativité et la flexibilité mentale. Favoriser le bien-être cognitif consiste à stimuler l'esprit à travers des activités intellectuelles, des apprentissages continus, une bonne hygiène de vie (sommeil, alimentation, exercice) et la gestion du stress. Il contribue à maintenir l’autonomie, l’estime de soi et la qualité de vie au quotidien."},
      { chapterId: 14, chapterName: "Problématiques urbaines", chapterDescription: "Les enjeux liés aux infrastructures et à l’urbanisme pour une ville inclusive et adaptée à tous." },
      { chapterId: 15, chapterName: "Mobilité et transports", chapterDescription: "Favoriser l’accessibilité et la mobilité des personnes via des solutions de transport adaptées." },
      { chapterId: 16, chapterName: "Environnement urbain", chapterDescription: "Améliorer le cadre de vie à travers l’aménagement d’espaces verts et la lutte contre la pollution." },
      { chapterId: 17, chapterName: "Services communautaires", chapterDescription: "Regroupe les services utiles au quotidien pour la population locale (centres sociaux, bibliothèques, etc.)." },
      { chapterId: 18, chapterName: "Gestion des déchets", chapterDescription: "Systèmes de tri, recyclage et réduction des déchets pour une ville plus propre." },
      { chapterId: 19, chapterName: "Innovation et technologie", chapterDescription: "Projets innovants intégrant la technologie au service de la société et du développement durable." },
      { chapterId: 20, chapterName: "Construction et aménagement", chapterDescription: "Amélioration ou création d’infrastructures pour répondre aux besoins sociaux et environnementaux." },
      { chapterId: 21, chapterName: "Projets durables", chapterDescription: "Actions concrètes en faveur de l’écologie et du développement durable." },
      { chapterId: 22, chapterName: "Projets collaboratifs", chapterDescription: "Initiatives impliquant plusieurs acteurs travaillant ensemble pour un objectif commun." },
      { chapterId: 23, chapterName: "Développement personnel", chapterDescription: "Outils et activités pour se connaître, évoluer et s’épanouir." },
      { chapterId: 24, chapterName: "Guides et manuels", chapterDescription: "Ressources écrites pour accompagner l’apprentissage ou la mise en œuvre de projets." },
      { chapterId: 25, chapterName: "Vidéos éducatives", chapterDescription: "Supports visuels pour transmettre des connaissances de manière ludique." },
      { chapterId: 26, chapterName: "Articles et études", chapterDescription: "Contenus écrits scientifiques ou vulgarisés sur des sujets d’intérêt." },
      { chapterId: 27, chapterName: "Podcasts et interviews", chapterDescription: "Contenus audio informatifs ou inspirants sur des thématiques variées." },
      { chapterId: 28, chapterName: "Infographies", chapterDescription: "Représentations visuelles de données pour faciliter la compréhension." },
      { chapterId: 29, chapterName: "Services médicaux", chapterDescription: "Soins de santé, prévention, consultations et accès aux professionnels médicaux." },
      { chapterId: 30, chapterName: "Éducation et formations", chapterDescription: "Programmes d’apprentissage, ateliers et formations pour tous les âges." },
      { chapterId: 31, chapterName: "Aides quotidiennes", chapterDescription: "Assistance pour les tâches ménagères, les courses, etc." },
      { chapterId: 32, chapterName: "Soutien social", chapterDescription: "Accompagnement humain et écoute dans les situations de vulnérabilité." },
      { chapterId: 33, chapterName: "Aide administrative", chapterDescription: "Aide à la gestion de documents, démarches juridiques ou fiscales." },
      { chapterId: 34, chapterName: "Soutien psychologique", chapterDescription: "Accompagnement émotionnel et psychologique pour faire face aux difficultés." },
      { chapterId: 35, chapterName: "Aide médicale", chapterDescription: "Premiers secours, soins d'urgence, assistance de santé immédiate." },
      { chapterId: 36, chapterName: "Aide au logement", chapterDescription: "Solutions d’hébergement temporaire ou durable en cas de besoin." },
      { chapterId: 37, chapterName: "Aide alimentaire", chapterDescription: "Distribution de repas ou de produits alimentaires pour les personnes en difficulté." },
      { chapterId: 38, chapterName: "Urgence et secours", chapterDescription: "Services d’urgence pour intervenir rapidement en cas de danger ou d’accident." },
      { chapterId: 39, chapterName: "Programme sportif", chapterDescription: "Activités physiques encadrées dans un but de santé ou de loisir." },
      { chapterId: 40, chapterName: "Entraînement cognitif", chapterDescription: "Exercices et programmes pour améliorer ou maintenir les capacités mentales." },
      { chapterId: 41, chapterName: "Programme nutritionnel", chapterDescription: "Accompagnement alimentaire pour une meilleure santé." },
      { chapterId: 42, chapterName: "Programme social", chapterDescription: "Initiatives pour renforcer le lien social et favoriser la participation." },
      { chapterId: 43, chapterName: "Action environnementale", chapterDescription: "Activités visant à protéger la planète et sensibiliser les citoyens." },
      { chapterId: 44, chapterName: "Badge physique", chapterDescription: "Récompenses liées à des objectifs d’activités physiques atteints." },
      { chapterId: 45, chapterName: "Badge cognitif", chapterDescription: "Récompenses pour la réalisation d’exercices cognitifs ou intellectuels." },
      { chapterId: 46, chapterName: "Badge nutrition", chapterDescription: "Récompenses liées à de bonnes pratiques alimentaires." },
      { chapterId: 47, chapterName: "Badge social", chapterDescription: "Récompenses pour des actions sociales ou communautaires." },
      { chapterId: 48, chapterName: "Badge environnement", chapterDescription: "Récompenses pour des engagements environnementaux." },
      { chapterId: 49, chapterName: "Activité environnementale", chapterDescription: "Animations et projets visant à sensibiliser à la nature et l’écologie." },
      { chapterId: 50, chapterName: "Discussions générales", chapterDescription: "Espace d’échange libre sur divers sujets entre participants." },
      { chapterId: 51, chapterName: "Forum développement personnel", chapterDescription: "Discussions autour de la connaissance de soi et de l’épanouissement personnel." },
      { chapterId: 52, chapterName: "Forum nutrition", chapterDescription: "Discussions et partages autour de l’alimentation et de la santé." },
      { chapterId: 53, chapterName: "Forum social", chapterDescription: "Discussions autour du lien social, de la solidarité et des interactions humaines." },
      { chapterId: 54, chapterName: "Forum environnemental", chapterDescription: "Espace d’échange sur les questions environnementales et écologiques." },
      { chapterId: 55, chapterName: "Bien-être mental", chapterDescription: "Regroupe les aspects liés à la santé mentale et au bon fonctionnement psychique." }
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

import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedCategoryTypes() {
  await prisma.category.deleteMany();
  await prisma.category.createMany({
    data: [
      {
        id: 1,
        categoryName: "Séance de gym douce",
        description: "Séance de gym douce adaptée aux capacités physiques des seniors. Utilisez des exercices simples et doux pour travailler l’équilibre, la souplesse et la force musculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 2,
        categoryName: "Marche en groupe",
        description: "Sorties en groupe pour des promenades dans le quartier ou dans un parc. La marche est une activité physique douce et bénéfique pour la santé cardiovasculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 3,
        categoryName: "Jeux de ballon",
        description: "Jeux de ballon adaptés aux capacités des seniors, comme le ballon assis ou le mini-golf. Ces jeux stimulent la coordination et la motricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 4,
        categoryName: "Yoga",
        description: "Séances de yoga adaptées aux seniors. Le yoga favorise la relaxation, l’équilibre et la flexibilité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 5,
        categoryName: "Jeux de mémoire",
        description: "Jeux de mémoire comme le Memory ou le jeu des paires. Ces jeux permettent de stimuler la mémoire et l’attention.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 6,
        categoryName: "Mots croisés et mots cachés",
        description: "Séances de mots croisés et de mots cachés. Ces jeux de lettres sont idéaux pour travailler les capacités de concentration et de raisonnement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 7,
        categoryName: "Quiz thématiques",
        description: "Quiz thématiques sur des sujets variés comme l’histoire, la géographie, la musique ou le cinéma. Les quiz favorisent la curiosité et la réflexion.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 8,
        categoryName: "Activités artistiques",
        description: "Activités artistiques comme la peinture, le dessin ou la sculpture. Ces activités stimulent la créativité et favorisent l’expression artistique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 9,
        categoryName: "Atelier de cuisine",
        description: "Ateliers de cuisine où les seniors pourront participer à la préparation de plats simples et savoureux. Ces moments de partage et de convivialité favorisent les échanges.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 10,
        categoryName: "Club de lecture",
        description: "Créez un club de lecture où les seniors pourront se retrouver régulièrement pour discuter de leurs lectures. Les discussions littéraires permettent d’échanger des idées et de partager des émotions.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 11,
        categoryName: "Spectacles et concerts",
        description: "Sorties au théâtre, au cinéma ou à des concerts. Les sorties culturelles permettent de découvrir de nouvelles œuvres et de partager des moments agréables.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 12,
        categoryName: "Activités intergénérationnelles",
        description: "Rencontres intergénérationnelles entre les seniors et les plus jeunes, comme des ateliers de bricolage ou des jeux de société. Ces échanges favorisent les liens entre les générations et apportent une source de joie et de partage.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 13,
        categoryName: "Atelier d’aromathérapie",
        description: "Ateliers d’aromathérapie où les seniors pourront découvrir les bienfaits des huiles essentielles. Ces ateliers permettent de stimuler l’odorat et de favoriser la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 14,
        categoryName: "Musicothérapie",
        description: "Séances de musicothérapie où les seniors pourront écouter de la musique apaisante et participer à des activités musicales. La musique favorise la relaxation et stimule l’ouïe.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 15,
        categoryName: "Jardinage",
        description: "Activités de jardinage où les seniors pourront planter des fleurs, cultiver des légumes ou simplement profiter du contact avec la nature. Le jardinage stimule le toucher et favorise la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 16,
        categoryName: "Atelier de cuisine sensorielle",
        description: "Ateliers de cuisine sensorielle où les seniors pourront découvrir de nouvelles saveurs et textures. Ces ateliers stimulent le goût et favorisent les échanges autour de la nourriture.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 17,
        categoryName: "Activités physiques",
        description: "Les activités physiques, qu’il s’agisse de sports, de marche ou de yoga, jouent un rôle fondamental. Elles augmentent l’énergie, améliorent l’humeur et réduisent le risque de maladies chroniques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 18,
        categoryName: "Alimentation saine",
        description: "L’alimentation joue un rôle majeur dans le bien-être physique. Une alimentation équilibrée fournit les nutriments nécessaires pour le bon fonctionnement du corps.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 19,
        categoryName: "Sommeil",
        description: "Le sommeil est souvent négligé, mais il est essentiel pour la régénération du corps et de l’esprit.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 20,
        categoryName: "Santé mentale",
        description: "La santé mentale est indissociable du bien-être émotionnel. Elle implique la capacité à gérer les émotions positives et négatives.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 21,
        categoryName: "Gestion du stress",
        description: "La gestion du stress est fondamentale pour éviter l’épuisement émotionnel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 22,
        categoryName: "Compassion et empathie",
        description: "Éprouver de la compassion et de l’empathie enrichit les relations interpersonnelles et renforce le bien-être émotionnel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 23,
        categoryName: "Relations positives",
        description: "Les relations positives sont un pilier du bien-être social. Elles se caractérisent par des échanges respectueux et bienveillants.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 24,
        categoryName: "Sentiment d’appartenance à une communauté",
        description: "Le sentiment d’appartenance à une communauté renforce le bien-être social.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 25,
        categoryName: "Qualité de vie et interactions",
        description: "La qualité de vie est influencée par la nature et la qualité des interactions sociales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },      
      {
        id: 26,
        categoryName: "Mémoire",
        description: "Activités qui stimulent la mémoire à court ou long terme.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 27,
        categoryName: "Concentration",
        description: "Activités qui favorisent l'attention soutenue et la focalisation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 28,
        categoryName: "Raisonnement",
        description: "Activités qui sollicitent la logique, la résolution de problèmes et la pensée critique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 29,
        categoryName: "Langage",
        description: "Activités qui mobilisent la compréhension, l’expression orale ou écrite.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 30,
        categoryName: "Vitesse de traitement",
        description: "Activités qui renforcent la rapidité d’analyse ou de réaction.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 31,
        categoryName: "Perception",
        description: "Activités qui entraînent l’interprétation des informations sensorielles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 32,
        categoryName: "Fonctions exécutives",
        description: "Activités mobilisant la planification, l’organisation, la flexibilité mentale.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 33,
        categoryName: "Apprentissage",
        description: "Activités qui favorisent l'acquisition de nouvelles connaissances ou compétences.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 34,
        categoryName: "Créativité",
        description: "Activités qui stimulent l'imagination et l'innovation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 35,
        categoryName: "Prise de décision",
        description: "Activités qui aident à évaluer des options et à faire des choix éclairés.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },      
      {
        id: 36,
        categoryName: "Stimulation cognitive",
        description: "Ressources ou contextes favorisant une cognition active et saine.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 37,
        categoryName: "Repos mental",
        description: "Activités qui permettent de reposer le cerveau et de limiter la surcharge cognitive.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 38,
        categoryName: "Gestion de l’information",
        description: "Stratégies ou outils pour mieux traiter, filtrer ou hiérarchiser les informations.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 39,
        categoryName: "Équilibre émotionnel",
        description: "Pratiques qui aident à maintenir un état émotionnel stable et positif.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 40,
        categoryName: "Hygiène mentale",
        description: "Habitudes et routines qui soutiennent la santé mentale globale.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 41,
        categoryName: "Relaxation",
        description: "Techniques pour réduire le stress et favoriser la détente.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 42,
        categoryName: "Socialisation",
        description: "Activités qui encouragent les interactions sociales positives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 43,
        categoryName: "Environnement sain",
        description: "Contextes physiques ou sociaux qui favorisent le bien-être cognitif.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 44,
        categoryName: "Nutrition cérébrale",
        description: "Alimentation et habitudes qui soutiennent la santé du cerveau.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 45,
        categoryName: "Exercice physique",
        description: "Activités physiques qui améliorent la fonction cognitive et le bien-être mental.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },      
      {
        id: 46,
        categoryName: "Marche régulière",
        description: "Badge obtenu après avoir marché un certain nombre de pas pendant plusieurs jours.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },      
      {
        id: 47,
        categoryName: "Exercices cardiovasculaires",
        description: "Récompense pour la pratique régulière d’activités comme le jogging ou la natation.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },      
      {
        id: 48,
        categoryName: "Renforcement musculaire",
        description: "Badge pour la pratique d’exercices de musculation ou de gainage.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },      
      {
        id: 49,
        categoryName: "Souplesse et étirements",
        description: "Récompense pour des séances régulières d’étirements ou de yoga.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },      
      {
        id: 50,
        categoryName: "Jeux de mémoire",
        description: "Badge pour avoir complété des exercices de mémoire ou de concentration.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },      
      {
        id: 51,
        categoryName: "Résolution de problèmes",
        description: "Récompense pour avoir complété des jeux de logique ou de stratégie.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },      
      {
        id: 52,
        categoryName: "Apprentissage continu",
        description: "Badge obtenu après avoir lu ou étudié régulièrement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },      
      {
        id: 53,
        categoryName: "Créativité",
        description: "Récompense pour des activités artistiques ou créatives (dessin, musique, écriture).",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },      
      {
        id: 54,
        categoryName: "Hydratation",
        description: "Badge obtenu pour avoir respecté des objectifs d’hydratation sur plusieurs jours.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },      
      {
        id: 55,
        categoryName: "Repas équilibrés",
        description: "Récompense pour avoir consommé des repas sains et variés régulièrement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },      
      {
        id: 56,
        categoryName: "Réduction du sucre",
        description: "Badge pour avoir limité la consommation de sucres ajoutés.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },      
      {
        id: 57,
        categoryName: "Planification des repas",
        description: "Récompense pour l’organisation proactive des repas sur la semaine.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },      
      {
        id: 58,
        categoryName: "Aide à autrui",
        description: "Badge pour avoir apporté son aide à une personne dans le besoin.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },      
      {
        id: 59,
        categoryName: "Activités en groupe",
        description: "Récompense pour la participation à des activités collectives.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },      
      {
        id: 60,
        categoryName: "Communication positive",
        description: "Badge pour des interactions sociales bienveillantes et constructives.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },      
      {
        id: 61,
        categoryName: "Implication communautaire",
        description: "Récompense pour l’engagement dans une association ou un projet collectif.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },      
      {
        id: 62,
        categoryName: "Réduction des déchets",
        description: "Badge obtenu pour des gestes écoresponsables comme le tri ou le zéro déchet.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },      
      {
        id: 63,
        categoryName: "Mobilité douce",
        description: "Récompense pour avoir privilégié la marche, le vélo ou les transports en commun.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },      
      {
        id: 64,
        categoryName: "Consommation responsable",
        description: "Badge pour des achats locaux, durables ou en vrac.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },      
      {
        id: 65,
        categoryName: "Économie d’énergie",
        description: "Récompense pour des efforts visant à réduire sa consommation d’eau ou d’électricité.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },      
      {
        id: 66,
        categoryName: "Ateliers de recyclage",
        description: "Récompense pour des efforts visant à réduire sa consommation d’eau ou d’électricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },      
      {
        id: 67,
        categoryName: "Jardinage écologique",
        description: "Récompense pour des efforts visant à réduire sa consommation d’eau ou d’électricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },      
      {
        id: 68,
        categoryName: "Sensibilisation à l’environnement",
        description: "Récompense pour des efforts visant à réduire sa consommation d’eau ou d’électricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },      
      {
        id: 69,
        categoryName: "Nettoyage de la nature",
        description: "Récompense pour des efforts visant à réduire sa consommation d’eau ou d’électricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },      
    ],
    skipDuplicates: true
  });
}

seedCategoryTypes()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

// URBAN ISSUES
//   {
//     name: "Accessibilité urbaine",
//     description: "Réflexions et projets sur l’accessibilité des espaces publics pour les personnes en situation de handicap ou à mobilité réduite.",
//     chapterId: 14,
//   },
//   {
//     name: "Mobilité et transport",
//     description: "Discussions et activités autour des transports durables, sûrs et adaptés à tous.",
//     chapterId: 14,
//   },
//   {
//     name: "Aménagement inclusif",
//     description: "Projets d’aménagement de quartiers, de parcs ou de bâtiments pensés pour tous les âges et capacités.",
//     chapterId: 14,
//   },
//   {
//     name: "Participation citoyenne",
//     description: "Ateliers pour impliquer les citoyens dans les décisions d’urbanisme local.",
//     chapterId: 14,
//   },
//   {
//     name: "Sécurité et confort urbain",
//     description: "Activités visant à identifier et améliorer les points noirs en ville : éclairage, signalisation, mobilier urbain.",
//     chapterId: 14,
//   }


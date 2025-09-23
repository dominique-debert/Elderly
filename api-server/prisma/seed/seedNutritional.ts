import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedNutritional() {
  await prisma.category.createMany({
    data: [
      
      // 6. NUTRITIONAL
      // --------------
      // 🍏 Catégories nutritionnelles (alimentation, diététique)
      
      // 🏃 PHYSICAL (Activités physiques et sportives)
      {
        id: 864,
        categoryName: "Nutrition sportive adaptée",
        description: "Alimentation optimisée pour l’endurance, la force ou la récupération.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 865,
        categoryName: "Hydratation avant/après effort",
        description: "Conseils sur les besoins en eau selon l’activité.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 866,
        categoryName: "Collations énergétiques",
        description: "Sélection d’encas sains et riches pour soutenir l’effort.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 867,
        categoryName: "Programmes alimentaires pour performance",
        description: "Plans diététiques selon les objectifs physiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 868,
        categoryName: "Complémentation nutritionnelle",
        description: "Information sur les suppléments utiles et sûrs.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL
      },
      
      // 🧠 COGNITIVE (Fonctions cognitives et intellectuelles)
      {
        id: 869,
        categoryName: "Aliments pour la mémoire",
        description: "Nutriments favorisant la concentration et la rétention.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 870,
        categoryName: "Diète neuroprotectrice",
        description: "Alimentation favorisant la prévention des troubles cognitifs.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 871,
        categoryName: "Micronutriments et cerveau",
        description: "Focus sur vitamines/minéraux clés pour le cerveau.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 872,
        categoryName: "Stabilité glycémique et concentration",
        description: "Éviter les pics de glycémie pour une attention soutenue.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 873,
        categoryName: "Oméga-3 et cognition",
        description: "Rôle des acides gras dans la performance mentale.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE
      },
      
      // 🤝 SOCIAL (Activités sociales et communautaires)
      {
        id: 874,
        categoryName: "Repas partagés et équilibrés",
        description: "Encouragement à cuisiner sainement en groupe.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 875,
        categoryName: "Éducation nutritionnelle communautaire",
        description: "Ateliers et discussions autour de l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 876,
        categoryName: "Accès équitable à l’alimentation",
        description: "Soutien aux pratiques alimentaires saines pour tous.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 877,
        categoryName: "Cultures alimentaires et inclusion",
        description: "Respect des habitudes diététiques diverses.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 878,
        categoryName: "Cuisine participative",
        description: "Activités collectives pour favoriser l’équilibre alimentaire.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL
      },
      
      // 👁️👂 SENSORY (Activités sensorielles)
      {
        id: 878,
        categoryName: "Expérience gustative consciente",
        description: "Stimulation des sens via l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 879,
        categoryName: "Aliments et textures adaptées",
        description: "Préparation pour personnes à besoins sensoriels particuliers.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 880,
        categoryName: "Éducation au goût",
        description: "Apprendre à reconnaître et apprécier des saveurs variées.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 881,
        categoryName: "Repas multisensoriels",
        description: "Intégration de couleurs, odeurs, sons dans l’expérience alimentaire.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 882,
        categoryName: "Adaptation alimentaire pour troubles sensoriels",
        description: "Solutions pour hypersensibilités.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SENSORY
      },
      
      // 🧘‍♂️ PHYSICAL_WELLNESS (Bien-être physique)
      {
        id: 883,
        categoryName: "Alimentation anti-fatigue",
        description: "Diète favorisant énergie et vitalité.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 884,
        categoryName: "Routine nutritionnelle pour le sommeil",
        description: "Choix alimentaires favorisant l’endormissement.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 885,
        categoryName: "Équilibre acido-basique",
        description: "Approche pour prévenir douleurs musculaires ou inflammations.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 886,
        categoryName: "Régulation du transit",
        description: "Fibres et hydratation pour un bon confort digestif.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 887,
        categoryName: "Nutrition anti-inflammatoire",
        description: "Aliments favorisant la récupération physique.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      
      // 😊 EMOTIONAL_WELLNESS (Bien-être émotionnel)
      {
        id: 888,
        categoryName: "Aliments et humeur",
        description: "Comprendre les effets du sucre, magnésium, tryptophane.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 889,
        categoryName: "Diète contre le stress",
        description: "Alimentation calmante et stabilisante.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 890,
        categoryName: "Routine nutritionnelle apaisante",
        description: "Intégration d’aliments réconfortants sains.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 891,
        categoryName: "Lien entre nutrition et anxiété",
        description: "Focus sur les carences impactant l’émotionnel.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 892,
        categoryName: "Éviter l’alimentation émotionnelle",
        description: "Prévention des comportements compensatoires.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 🤗 SOCIAL_WELLNESS (Bien-être social)
      {
        id: 893,
        categoryName: "Repas inclusifs",
        description: "Adapter les repas aux régimes et croyances de chacun.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 894,
        categoryName: "Cuisiner ensemble pour tisser des liens",
        description: "Activités collectives autour de l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 895,
        categoryName: "Moments conviviaux autour de la nutrition",
        description: "Pique-niques et repas communautaires équilibrés.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 896,
        categoryName: "Transmission des savoirs culinaires",
        description: "Partage intergénérationnel autour de recettes saines.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 897,
        categoryName: "Cuisines du monde équilibrées",
        description: "Valorisation des traditions culinaires nutritives.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      
      // 🧩 INTELLECTUAL_WELLNESS (Bien-être intellectuel)
      {
        id: 898,
        categoryName: "Lecture sur la diététique",
        description: "Ressources pour apprendre à bien manger.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 899,
        categoryName: "Éducation à l’autonomie alimentaire",
        description: "Apprendre à faire ses choix diététiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 900,
        categoryName: "Culture et alimentation",
        description: "Comprendre les liens entre connaissances et nutrition.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 901,
        categoryName: "Planification alimentaire réfléchie",
        description: "Outils pour mieux organiser ses repas.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 902,
        categoryName: "Critique de l’information nutritionnelle",
        description: "Déconstruire les mythes alimentaires.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      
      // 💰 FINANCIAL_WELLNESS (Bien-être financier)
      {
        id: 903,
        categoryName: "Bien manger avec un petit budget",
        description: "Conseils pour des choix économiques et sains.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 904,
        categoryName: "Batch cooking économique",
        description: "Préparer en avance pour éviter le gaspillage.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 905,
        categoryName: "Courses intelligentes",
        description: "Planification et listes selon les besoins réels.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 906,
        categoryName: "Produits de saison et économies",
        description: "Consommer local et pas cher.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 907,
        categoryName: "Éviter les achats impulsifs alimentaires",
        description: "Stratégies de gestion.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      
      // 🌱 ENVIRONMENTAL_WELLNESS (Bien-être environnemental)
      {
        id: 908,
        categoryName: "Nutrition durable",
        description: "Réduire son empreinte carbone via son alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 909,
        categoryName: "Réduction des déchets alimentaires",
        description: "Organisation et conservation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 910,
        categoryName: "Favoriser les circuits courts",
        description: "Manger local pour l’environnement.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 911,
        categoryName: "Moins de viande, plus de légumes",
        description: "Bénéfices écologiques et diététiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 912,
        categoryName: "Alimentation biologique et éthique",
        description: "Consommation consciente.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // COGNITIVE_ACTIVITY (Stimulation mentale et apprentissage)
      {
        id: 913,
        categoryName: "Alimentation pour la concentration",
        description: "Diète adaptée aux périodes d’apprentissage intense.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 914,
        categoryName: "Rythme alimentaire et productivité mentale",
        description: "Impact du moment des repas sur les performances cognitives.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 915,
        categoryName: "Collations cérébrales",
        description: "Encadrer les pauses avec des aliments riches en nutriments cognitifs.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 916,
        categoryName: "Nutrition et plasticité cérébrale",
        description: "Focus sur les nutriments stimulant les capacités d’apprentissage.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 917,
        categoryName: "Boissons stimulantes et modération",
        description: "Informer sur l’usage raisonné du café, thé, etc.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      
      // 🧠 EMOTIONAL_WELLNESS (Gestion des émotions et expression)
      {
        id: 917,
        categoryName: "Nutrition et régulation émotionnelle",
        description: "Choix alimentaires stabilisant l’humeur.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 918,
        categoryName: "Éviter les compulsions alimentaires",
        description: "Prévention de la compensation émotionnelle par la nourriture.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 919,
        categoryName: "Aliments réconfortants équilibrés",
        description: "Alternatives saines aux envies émotionnelles.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 920,
        categoryName: "Apports émotionnels du repas en groupe",
        description: "Renforcement des liens affectifs via l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 921,
        categoryName: "Routine alimentaire et stabilité émotionnelle",
        description: "Apprendre à structurer ses repas pour le bien-être.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 💬 DISCUSSION (Débats, échanges, dialogue)
      {
        id: 922,
        categoryName: "Sensibilisation à la nutrition",
        description: "Discussions sur les enjeux alimentaires contemporains.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 923,
        categoryName: "Fake news nutritionnelles",
        description: "Distinguer informations fiables et mythes.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 924,
        categoryName: "Éthique alimentaire",
        description: "Débats sur végétarisme, production locale, etc.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 925,
        categoryName: "Préférences alimentaires et dialogue",
        description: "Apprendre à respecter les choix nutritionnels des autres.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 926,
        categoryName: "Ateliers participatifs sur la nutrition",
        description: "Encourager les discussions autour de l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      
      // 🏡 NUTRITIONAL_SKILL (Vie domestique, autonomie)
      {
        id: 927,
        categoryName: "Cuisine maison saine",
        description: "Apprendre à cuisiner équilibré à la maison.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 928,
        categoryName: "Organisation des repas",
        description: "Planification hebdomadaire pour une alimentation stable.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 929,
        categoryName: "Faire les courses intelligemment",
        description: "Choix nutritifs, éthiques et économiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 930,
        categoryName: "Conservation des aliments",
        description: "Réduire le gaspillage par de bonnes pratiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 931,
        categoryName: "Éducation nutritionnelle en famille",
        description: "Transmission de bonnes habitudes alimentaires.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      
      // 💡 INNOVATION (Créativité et technologie)
      {
        id: 932,
        categoryName: "Nouvelles formes de nutrition",
        description: "Aliments du futur (algues, protéines alternatives…).",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 933,
        categoryName: "Tech pour une alimentation personnalisée",
        description: "Apps de suivi diététique ou d’intolérances.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 934,
        categoryName: "Agriculture urbaine et innovation alimentaire",
        description: "Intégrer la production locale à l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 935,
        categoryName: "Impression 3D alimentaire",
        description: "Expérimenter la nutrition via des technologies avancées.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 936,
        categoryName: "Innovations en diététique durable",
        description: "Produits innovants à faible impact environnemental.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.INNOVATION
      },
      
      // 🧮 EDUCATION (Éducation, apprentissage formel)
      {
        id: 937,
        categoryName: "Programme d’alimentation scolaire équilibrée",
        description: "Introduction à la diététique dès l’école.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 938,
        categoryName: "Cantine et apprentissage nutritionnel",
        description: "Utiliser les repas pour l’éducation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 939,
        categoryName: "Supports pédagogiques alimentaires",
        description: "Livres et outils pour comprendre la nutrition.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 940,
        categoryName: "Éducation à la lecture d’étiquettes",
        description: "Décrypter les emballages alimentaires.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 941,
        categoryName: "Projet éducatif autour de la nutrition",
        description: "Ateliers ou exposés sur l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.EDUCATION
      },
      
      // 🌱 ENVIRONMENT (Écologie, nature, développement durable)
      {
        id: 942,
        categoryName: "Alimentation à faible impact écologique",
        description: "Choix respectueux de l’environnement.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 943,
        categoryName: "Saisonnalité et circuits courts",
        description: "Favoriser les produits locaux et de saison.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 944,
        categoryName: "Réduction de la consommation de viande",
        description: "Équilibre environnemental et santé.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 945,
        categoryName: "Zéro déchet alimentaire",
        description: "Astuces pour ne rien jeter.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 946,
        categoryName: "Potager écoresponsable",
        description: "Autonomie et lien avec la nature.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      
      // ❤️‍🩹 HEALTHCARE (Prévention, soin, hygiène)
      {
        id: 947,
        categoryName: "Nutrition préventive",
        description: "Alimentation pour réduire les risques de maladie.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 948,
        categoryName: "Diététique thérapeutique",
        description: "Adaptation aux pathologies spécifiques.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 949,
        categoryName: "Hygiène alimentaire",
        description: "Bonnes pratiques de conservation, cuisson, préparation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 950,
        categoryName: "Suivi nutritionnel personnalisé",
        description: "Plans adaptés aux besoins médicaux.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 951,
        categoryName: "Lutte contre la dénutrition ou l’obésité",
        description: "Éducation équilibrée sans stigmatisation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      
      // 🎗️ SOCIAL_ENGAGEMENT (Aide, insertion, solidarité)
      {
        id: 952,
        categoryName: "Aide alimentaire",
        description: "Accès facilité à des repas sains pour tous.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 953,
        categoryName: "Cuisine solidaire",
        description: "Ateliers de cuisine collective et inclusive.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 954,
        categoryName: "Parcours de réinsertion par la nutrition",
        description: "Formations et emplois liés à l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 955,
        categoryName: "Nutrition en milieu précaire",
        description: "Solutions pour les foyers à ressources limitées.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 956,
        categoryName: "Partage alimentaire intergénérationnel",
        description: "Transmission de recettes et de valeurs.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      
      // 🧓 ELDERLY_SUPPORT (Soutien aux personnes âgées)
      {
        id: 957,
        categoryName: "Alimentation adaptée à l’âge",
        description: "Textures modifiées, enrichissement nutritionnel.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 958,
        categoryName: "Prévention de la dénutrition",
        description: "Surveillance et accompagnement diététique.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 959,
        categoryName: "Maintien de l’autonomie alimentaire",
        description: "Aides techniques et pratiques adaptées.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 960,
        categoryName: "Rituels alimentaires et mémoire",
        description: "Favoriser la stimulation mnésique par l’alimentation.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 961,
        categoryName: "Moments conviviaux autour des repas",
        description: "Rompre l’isolement via des repas partagés.",
        typeId: ECategoryType.NUTRITIONAL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      
    ],
    skipDuplicates: true
  });
}

seedNutritional()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

export default seedNutritional;
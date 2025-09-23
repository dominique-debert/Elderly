import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedResources() {
  await prisma.category.createMany({
    data: [

      // 9. RESOURCE
      // ------------
      // 📚 Ressources documentaires, guides, supports pédagogiques
      // 1. PHYSICAL (Activités physiques et sportives)
      {
        id: 1185,
        categoryName: "Fiches d'entraînement",
        description: "Programmes écrits pour guider les séances sportives à la maison ou en salle.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1186,
        categoryName: "Guides d'étirement",
        description: "Consultation ou pétition.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1187,
        categoryName: "Manuels de condition physique",
        description: "Documents pédagogiques expliquant les bases de l’endurance, force, souplesse.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1188,
        categoryName: "Plans d’entraînement personnalisables",
        description: "Modèles de planning pour structurer ses activités sportives.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1189,
        categoryName: "Supports sur la prévention des blessures",
        description: "Fiches pratiques sur les postures et échauffements à adopter.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      
      // 2. COGNITIVE (Fonctions cognitives et intellectuelles)
      {
        id: 1190,
        categoryName: "Jeux de stimulation mentale",
        description: "Recueils de jeux cognitifs pour entraîner la mémoire et la logique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1191,
        categoryName: "Guides d’exercices de concentration",
        description: "Méthodes pratiques pour améliorer l’attention et la concentration.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1192,
        categoryName: "Supports sur les fonctions exécutives",
        description: "Documents explicatifs sur l’organisation, planification, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1193,
        categoryName: "Fiches pédagogiques sur la mémoire",
        description: "Outils pour comprendre et entraîner les différents types de mémoire.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1194,
        categoryName: "Ressources sur la neuroplasticité",
        description: "Articles et résumés vulgarisés sur le cerveau et ses capacités d’adaptation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE
      },
      
      // 3. SOCIAL (Activités sociales et communautaires)
      {
        id: 1195,
        categoryName: "Kits d’organisation d’événements",
        description: "Documents pour planifier des activités de groupe ou communautaires.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 1196,
        categoryName: "Guides d’animation de groupes",
        description: "Techniques pour animer des discussions ou ateliers participatifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 1197,
        categoryName: "Supports sur la communication non violente",
        description: "Ressources pour favoriser des échanges respectueux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 1198,
        categoryName: "Outils de cohésion sociale",
        description: "Fiches d’activités favorisant la coopération et l’inclusion.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 1199,
        categoryName: "Boîtes à idées pour projets collectifs",
        description: "Recueils de suggestions d’initiatives sociales à lancer en groupe.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL
      },
      
      // 4. SENSORY (Activités sensorielles)
      {
        id: 1200,
        categoryName: "Cartes sensorielles",
        description: "Supports illustrés pour explorer les cinq sens.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1201,
        categoryName: "Fiches d’activités sensorielles",
        description: "Expériences à réaliser à la maison ou en atelier.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1202,
        categoryName: "Guides de relaxation multisensorielle",
        description: "Ressources combinant sons, lumières, textures apaisantes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1203,
        categoryName: "Outils pour la stimulation tactile et visuelle",
        description: "Matériels et idées pour solliciter les sens de manière ludique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1204,
        categoryName: "Supports pour troubles sensoriels",
        description: "Documents adaptés pour comprendre et accompagner l’hypersensibilité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SENSORY
      },
      
      // 5. PHYSICAL_WELLNESS (Bien-être physique)
      {
        id: 1205,
        categoryName: "Guides de sommeil",
        description: "Conseils et routines pour améliorer la qualité du sommeil.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 1206,
        categoryName: "Supports sur l’ergonomie au quotidien",
        description: "Ressources pour améliorer le confort corporel au travail ou à la maison.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 1207,
        categoryName: "Manuels de respiration",
        description: "Exercices guidés pour la gestion du souffle et la détente.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 1208,
        categoryName: "Fiches d’auto-massage",
        description: "Techniques simples pour soulager les tensions physiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 1209,
        categoryName: "Documents de suivi de bien-être corporel",
        description: "Outils pour évaluer et noter son état physique global.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      
      // 6. EMOTIONAL_WELLNESS (Bien-être émotionnel)
      {
        id: 1210,
        categoryName: "Guides de gestion du stress",
        description: "Méthodes pratiques pour réduire le stress au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1211,
        categoryName: "Fiches sur les émotions",
        description: "Outils pour identifier, nommer et réguler ses émotions.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1212,
        categoryName: "Carnets de gratitude",
        description: "Supports d’écriture pour cultiver la reconnaissance et les émotions positives.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1213,
        categoryName: "Supports de pleine conscience",
        description: "Exercices guidés pour favoriser l’ancrage dans le présent.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1214,
        categoryName: "Manuels d’auto-compassion",
        description: "Ressources pour développer une relation bienveillante avec soi-même.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 7. SOCIAL_WELLNESS (Bien-être social)
      {
        id: 1215,
        categoryName: "Fiches d'écoute active",
        description: "Techniques pour améliorer la qualité des interactions sociales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1216,
        categoryName: "Supports pour développer l'empathie",
        description: "Exercices et jeux pour mieux comprendre les autres.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1217,
        categoryName: "Guides pour créer des liens sociaux",
        description: "Conseils pour sortir de l’isolement et tisser du lien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1218,
        categoryName: "Documents sur les dynamiques de groupe",
        description: "Compréhension des rôles et interactions dans les collectifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1219,
        categoryName: "Outils d’évaluation du bien-être social",
        description: "Grilles et questionnaires pour mesurer son intégration sociale.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      
      // 8. INTELLECTUAL_WELLNESS (Bien-être intellectuel)
      {
        id: 1220,
        categoryName: "Guides de stimulation intellectuelle",
        description: "Activités pour nourrir la curiosité et le développement mental.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1221,
        categoryName: "Ressources pour l’auto-apprentissage",
        description: "Méthodologies pour apprendre seul efficacement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1222,
        categoryName: "Supports pour la lecture critique",
        description: "Outils pour analyser les contenus de manière objective.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1223,
        categoryName: "Fiches sur la créativité intellectuelle",
        description: "Techniques pour générer des idées et innover.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1224,
        categoryName: "Outils d’évaluation de la satisfaction cognitive",
        description: "Tests pour mesurer le sentiment de stimulation mentale.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      
      // 9. FINANCIAL_WELLNESS (Bien-être financier)
      {
        id: 1225,
        categoryName: "Guides de gestion budgétaire",
        description: "Fiches pratiques pour suivre et équilibrer ses dépenses.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1226,
        categoryName: "Supports d’éducation financière",
        description: "Ressources pour comprendre les bases de l’économie personnelle.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1227,
        categoryName: "Fiches de planification d’épargne",
        description: "Modèles de tableau pour se fixer des objectifs financiers.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1228,
        categoryName: "Ressources sur les aides sociales",
        description: "Documentation sur les dispositifs de soutien financier.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1229,
        categoryName: "Manuels de prévention du surendettement",
        description: "Outils pour repérer les signaux d’alerte et agir en amont.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      
      // 10. ENVIRONMENTAL_WELLNESS (Bien-être environnemental)
      {
        id: 1230,
        categoryName: "Guides d’écogestes",
        description: "Fiches pratiques pour réduire son impact au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1231,
        categoryName: "Supports sur l’impact environnemental",
        description: "Infographies et données pour comprendre les enjeux écologiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1232,
        categoryName: "Fiches sur le lien nature-bien-être",
        description: "Ressources sur les bienfaits psychologiques du contact avec la nature.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1233,
        categoryName: "Carnets d’observation environnementale",
        description: "Outils pour documenter ses interactions avec l’environnement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1234,
        categoryName: "Outils pour évaluer son empreinte écologique",
        description: "Calculatrices et tableaux pour mesurer son impact.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // 11. SPIRITUAL_WELLNESS (Bien-être spirituel)
      {
        id: 1235,
        categoryName: "Guides d’introspection personnelle",
        description: "Outils pour réfléchir à ses valeurs, croyances et objectifs de vie.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 1236,
        categoryName: "Supports de méditation spirituelle",
        description: "Textes et audios pour favoriser la connexion intérieure.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 1237,
        categoryName: "Fiches sur les traditions spirituelles",
        description: "Présentations synthétiques des différentes approches spirituelles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 1238,
        categoryName: "Carnets de quête de sens",
        description: "Supports d’écriture pour explorer son chemin de vie.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 1239,
        categoryName: "Outils pour cultiver la gratitude",
        description: "Exercices pratiques pour renforcer un état d’esprit positif et reconnaissant.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      
      // 12. COGNITIVE_ACTIVITY (Activités cognitives spécifiques)
      {
        id: 1240,
        categoryName: "Fiches de jeux de mémoire",
        description: "Activités ludiques pour renforcer la mémorisation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 1241,
        categoryName: "Supports d'entraînement à la logique",
        description: "Exercices pour développer la pensée analytique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 1242,
        categoryName: "Guides de résolution de problèmes",
        description: "Méthodologies pour aborder les défis cognitifs avec méthode.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 1243,
        categoryName: "Ressources sur les fonctions exécutives",
        description: "Documents expliquant l’attention, la flexibilité mentale et l’inhibition.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 1244,
        categoryName: "Outils de stimulation mentale personnalisée",
        description: "Programmes adaptatifs selon le profil cognitif.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      
      // 13. COGNITIVE_WELLNESS (Bien-être cognitif)
      {
        id: 1245,
        categoryName: "Guides de prévention du déclin cognitif",
        description: "Bonnes pratiques pour entretenir ses fonctions mentales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 1246,
        categoryName: "Supports de relaxation mentale",
        description: "Exercices visant à réduire la surcharge cognitive.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 1247,
        categoryName: "Fiches de suivi des performances cognitives",
        description: "Grilles d’auto-évaluation des capacités mentales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 1248,
        categoryName: "Outils pour équilibrer stimulation et repos mental",
        description: "Conseils pour gérer la fatigue cognitive.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 1249,
        categoryName: "Documents sur les liens entre émotions et cognition",
        description: "Comprendre l’impact du stress sur les capacités mentales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      
      // 14. URBAN_INFRASTRUCTURE (Problématiques d’infrastructures urbaines)
      {
        id: 1250,
        categoryName: "Guides de diagnostic d’accessibilité urbaine",
        description: "Fiches pour évaluer les équipements et leur accessibilité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 1251,
        categoryName: "Supports sur l’aménagement des espaces publics",
        description: "Documents explicatifs sur la conception urbaine inclusive.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 1252,
        categoryName: "Fiches de sensibilisation à l’urbanisme durable",
        description: "Informations sur la construction éco-responsable.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 1253,
        categoryName: "Documents sur les inégalités urbaines",
        description: "Analyses et données sur l’accès inégal aux services.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 1254,
        categoryName: "Outils de cartographie participative",
        description: "Ressources pour documenter les infrastructures locales avec les habitants.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      
      // 15. TRANSPORTATION (Mobilité et transports urbains)
      {
        id: 1255,
        categoryName: "Guides sur la mobilité douce",
        description: "Informations sur la marche, le vélo, et les transports collectifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 1256,
        categoryName: "Supports d’éducation à la sécurité routière",
        description: "Ressources pour tous âges sur les règles de circulation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 1257,
        categoryName: "Fiches sur l’accessibilité des transports",
        description: "État des lieux et solutions pour les publics à besoins spécifiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 1258,
        categoryName: "Documents sur la mobilité inclusive",
        description: "Études de cas et bonnes pratiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 1259,
        categoryName: "Ressources pour planifier ses trajets",
        description: "Outils de gestion de la mobilité quotidienne.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      
      // 16. URBAN_ENVIRONMENT (Espaces verts et environnement urbain)
      {
        id: 1260,
        categoryName: "Guides sur la biodiversité urbaine",
        description: "Ressources pour identifier et préserver la faune et flore locales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 1261,
        categoryName: "Supports pédagogiques sur le verdissement des villes",
        description: "Fiches pour comprendre les enjeux écologiques urbains.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 1262,
        categoryName: "Fiches d’aménagement de jardins partagés",
        description: "Outils pour créer et animer un espace vert collaboratif.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 1263,
        categoryName: "Ressources sur l’agriculture urbaine",
        description: "Informations pour cultiver sur balcons, toits ou friches.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 1264,
        categoryName: "Documents de sensibilisation à la pollution urbaine",
        description: "Supports éducatifs sur l’air, les sols et les nuisances.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      
      // 17. COMMUNITY_SERVICES (Services communautaires urbains)
      {
        id: 1265,
        categoryName: "Guides d’accès aux services de proximité",
        description: "Répertoires des structures sociales, éducatives et médicales locales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 1266,
        categoryName: "Supports de coordination citoyenne",
        description: "Outils pour organiser entraide et actions collectives dans le quartier.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 1267,
        categoryName: "Fiches explicatives des droits sociaux",
        description: "Documents simplifiés sur les prestations accessibles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 1268,
        categoryName: "Ressources sur les lieux d’accueil communautaires",
        description: "Informations sur maisons de quartier, centres sociaux, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 1269,
        categoryName: "Outils de participation locale",
        description: "Kits pour organiser des conseils citoyens ou réunions publiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      
      // 18. WASTE_MANAGEMENT (Gestion des déchets urbains)
      {
        id: 1270,
        categoryName: "Guides de tri sélectif",
        description: "Documents pratiques adaptés aux règlements locaux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 1271,
        categoryName: "Supports sur la réduction des déchets",
        description: "Conseils pour adopter un mode de vie zéro déchet.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 1272,
        categoryName: "Fiches pédagogiques sur le recyclage",
        description: "Informations sur les filières et processus de traitement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 1273,
        categoryName: "Documents sur le compostage urbain",
        description: "Ressources pour mettre en place un compost partagé ou individuel.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 1274,
        categoryName: "Outils d’audit des pratiques de consommation",
        description: "Grilles pour évaluer et réduire sa production de déchets.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      
      // 19. INNOVATION (Projets d’innovation et technologie)
      {
        id: 1275,
        categoryName: "Guides sur la méthodologie de projet innovant",
        description: "Étapes clés pour concevoir et mener un projet créatif.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1276,
        categoryName: "Supports d’initiation à la technologie",
        description: "Ressources pour comprendre les bases du numérique, de l’IA ou de l’IoT.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1277,
        categoryName: "Fiches de cas sur des projets innovants réussis",
        description: "Exemples inspirants de solutions sociales ou techniques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1278,
        categoryName: "Documents de veille technologique",
        description: "Ressources pour se tenir à jour sur les nouvelles tendances.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1279,
        categoryName: "Outils de brainstorming et créativité collective",
        description: "Méthodes pour faire émerger des idées nouvelles en groupe.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INNOVATION
      },
      
      // 20. CONSTRUCTION (Projets de construction et aménagement)
      {
        id: 1280,
        categoryName: "Guides de base en architecture participative",
        description: "Ressources pour impliquer les usagers dans les projets.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 1281,
        categoryName: "Supports pédagogiques sur les matériaux durables",
        description: "Informations sur les choix écologiques en construction.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 1282,
        categoryName: "Fiches sur l’aménagement inclusif",
        description: "Outils pour penser l’accessibilité et l’adaptation des espaces.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 1283,
        categoryName: "Documents sur la réglementation urbaine",
        description: "Textes simplifiés sur les normes et permis.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 1284,
        categoryName: "Ressources sur les métiers du bâtiment",
        description: "Présentations des différentes professions et formations.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      
      // 21. SUSTAINABILITY (Projets environnementaux et durables)
      {
        id: 1285,
        categoryName: "Guides pratiques de développement durable",
        description: "Ressources pour intégrer des pratiques responsables au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 1286,
        categoryName: "Supports sur l’économie circulaire",
        description: "Documents explicatifs sur la réutilisation, le recyclage et la réduction des déchets.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 1287,
        categoryName: "Fiches pédagogiques sur la transition écologique",
        description: "Informations accessibles pour sensibiliser tout public.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 1288,
        categoryName: "Outils d’évaluation d’impact écologique",
        description: "Méthodologies pour mesurer l’empreinte environnementale d’un projet.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 1289,
        categoryName: "Documents de projets écoresponsables inspirants",
        description: "Études de cas sur des initiatives durables locales ou globales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      
      // 22. COLLABORATION (Projets collaboratifs)
      {
        id: 1290,
        categoryName: "Kits de co-construction de projet",
        description: "Outils pour structurer et animer des projets à plusieurs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 1291,
        categoryName: "Supports sur la gouvernance partagée",
        description: "Fiches pour comprendre et mettre en œuvre la prise de décision collective.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 1292,
        categoryName: "Ressources sur les outils collaboratifs numériques",
        description: "Guides pour utiliser des plateformes de travail en ligne.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 1293,
        categoryName: "Fiches sur les dynamiques de groupe",
        description: "Outils pour améliorer la communication et la coopération.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 1294,
        categoryName: "Exemples de projets collaboratifs réussis",
        description: "Retours d’expérience illustrant les bonnes pratiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COLLABORATION
      },
      
      // 23. PERSONAL_DEVELOPMENT (Projets personnels de développement)
      {
        id: 1295,
        categoryName: "Guides de planification personnelle",
        description: "Outils pour fixer des objectifs et organiser son temps.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 1296,
        categoryName: "Supports sur la connaissance de soi",
        description: "Fiches d’introspection, tests de personnalité, exercices réflexifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 1297,
        categoryName: "Ressources sur l’auto-apprentissage",
        description: "Méthodes et plateformes pour apprendre en autonomie.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 1298,
        categoryName: "Fiches pratiques pour le suivi de progression",
        description: "Tableaux et grilles d’auto-évaluation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 1299,
        categoryName: "Documents de motivation et de résilience",
        description: "Conseils pour surmonter les obstacles et rester engagé.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      
      // 24. GUIDES (Guides et manuels)
      {
        id: 1300,
        categoryName: "Guides thématiques par domaines",
        description: "Manuels pratiques pour la vie quotidienne, la santé, le numérique, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 1301,
        categoryName: "Supports illustrés pas à pas",
        description: "Instructions visuelles pour apprendre une compétence ou un processus.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 1302,
        categoryName: "Manuels à destination des aidants",
        description: "Ressources spécifiques pour accompagner une personne en difficulté.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 1303,
        categoryName: "Fiches de survie urbaine ou domestique",
        description: "Conseils pratiques pour faire face aux imprévus.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 1304,
        categoryName: "Guides multilingues simplifiés",
        description: "Ressources traduites pour favoriser l’inclusion des non-francophones.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GUIDES
      },
      
      // 25. VIDEOS (Vidéos éducatives)
      {
        id: 1305,
        categoryName: "Séries de vidéos thématiques",
        description: "Cours en ligne ou tutoriels organisés par sujet.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 1306,
        categoryName: "Vidéos d’experts",
        description: "Interventions de spécialistes sur des thématiques précises.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 1307,
        categoryName: "Capsules courtes de vulgarisation",
        description: "Contenus accessibles pour expliquer un concept rapidement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 1308,
        categoryName: "Vidéos interactives ou avec quiz",
        description: "Supports engageants pour apprendre en s’amusant.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 1309,
        categoryName: "Ressources vidéo pour personnes en difficulté de lecture",
        description: "Adaptations pédagogiques visuelles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.VIDEOS
      },
      
      // 26. ARTICLES (Articles et études)
      {
        id: 1310,
        categoryName: "Articles de vulgarisation scientifique",
        description: "Explications accessibles de concepts complexes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 1311,
        categoryName: "Études de cas sectorielles",
        description: "Exemples concrets d’initiatives dans divers domaines.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 1312,
        categoryName: "Revues spécialisées en ligne",
        description: "Sélections d’articles classés par thématique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 1313,
        categoryName: "Synthèses de rapports institutionnels",
        description: "Résumés simplifiés des grandes publications publiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 1314,
        categoryName: "Analyses comparatives internationales",
        description: "Perspectives croisées entre différents pays.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTICLES
      },
      
      // 27. PODCASTS (Podcasts et interviews)
      {
        id: 1315,
        categoryName: "Entretiens avec des experts",
        description: "Témoignages audio de professionnels sur des sujets clés.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 1316,
        categoryName: "Séries thématiques audio",
        description: "Podcasts structurés en épisodes éducatifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 1317,
        categoryName: "Podcasts de sensibilisation sociale",
        description: "Récits et réflexions sur des problématiques humaines.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 1318,
        categoryName: "Chroniques de terrain",
        description: "Capsules racontant des expériences concrètes ou des projets locaux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 1319,
        categoryName: "Ressources pour l'apprentissage linguistique",
        description: "Podcasts conçus pour améliorer sa compréhension orale.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PODCASTS
      },
      
      // 28. INFOGRAPHICS (Infographies et données visuelles)
      {
        id: 1320,
        categoryName: "Schémas explicatifs illustrés",
        description: "Visuels pour simplifier les idées complexes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 1321,
        categoryName: "Tableaux comparatifs",
        description: "Représentations visuelles pour mieux comprendre les différences entre options.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 1322,
        categoryName: "Cartographies thématiques",
        description: "Données géographiques illustrant des problématiques locales ou globales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 1323,
        categoryName: "Chronologies illustrées",
        description: "Frises pour visualiser l’évolution historique d’un sujet.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 1324,
        categoryName: "Statistiques visuelles sur les besoins sociaux",
        description: "Données clés présentées de manière attractive.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      
      // 29. HEALTHCARE (Services médicaux et santé)
      {
        id: 1325,
        categoryName: "Brochures sur la prévention santé",
        description: "Documents informatifs sur les gestes de prévention.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1326,
        categoryName: "Fiches pratiques de premiers secours",
        description: "Réactions à adopter face à des urgences courantes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1327,
        categoryName: "Guides d’accès aux soins",
        description: "Informations pour comprendre les démarches médicales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1328,
        categoryName: "Documents sur les droits des patients",
        description: "Textes expliquant les règles de confidentialité, consentement, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1329,
        categoryName: "Supports sur les maladies chroniques",
        description: "Explications simplifiées pour patients et proches aidants.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      
      // 30. EDUCATION (Services éducatifs et formations)
      {
        id: 1330,
        categoryName: "Programmes éducatifs modulaires",
        description: "Parcours d’apprentissage en plusieurs niveaux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1331,
        categoryName: "Supports pédagogiques pour formateurs",
        description: "Fiches d’activités, documents à imprimer.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1332,
        categoryName: "Ressources pour l’éducation inclusive",
        description: "Contenus adaptés aux besoins spécifiques (troubles DYS, etc.).",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1333,
        categoryName: "Fiches métiers",
        description: "Descriptions claires et complètes de nombreuses professions.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1334,
        categoryName: "Outils d’évaluation des compétences",
        description: "Tests, grilles et indicateurs pour suivre les progrès.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EDUCATION
      },
      
      // 31. DAILY_HELP (Aides quotidiennes - courses, ménage)
      {
        id: 1335,
        categoryName: "Guides pour organiser ses courses",
        description: "Astuces pour planifier et optimiser les achats.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 1336,
        categoryName: "Manuels d’entretien domestique",
        description: "Instructions pas à pas pour le ménage efficace.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 1337,
        categoryName: "Listes de contrôle pour les tâches ménagères",
        description: "Outils pour ne rien oublier au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 1338,
        categoryName: "Tutoriels vidéo de techniques de nettoyage",
        description: "Vidéos explicatives sur différentes méthodes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 1339,
        categoryName: "Conseils pour gérer son temps à la maison",
        description: "Stratégies pour mieux équilibrer tâches et repos.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      
      // 32. SOCIAL_SUPPORT (Services sociaux et accompagnement)
      {
        id: 1340,
        categoryName: "Guides d’accès aux services sociaux",
        description: "Informations sur les démarches et aides disponibles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 1341,
        categoryName: "Documents sur le droit social",
        description: "Explications des droits des bénéficiaires.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 1342,
        categoryName: "Ressources pour l’insertion professionnelle",
        description: "Conseils et formations pour retrouver un emploi.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 1343,
        categoryName: "Manuels pour accompagnants familiaux",
        description: "Supports pour aider au mieux les proches en difficulté.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 1344,
        categoryName: "Fiches sur la prévention de l’isolement social",
        description: "Moyens et actions pour maintenir le lien social.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      
      // 33. ADMINISTRATIVE_HELP (Services administratifs et juridiques)
      {
        id: 1345,
        categoryName: "Modèles de lettres administratives",
        description: "Documents types pour démarches courantes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1346,
        categoryName: "Guides explicatifs sur les procédures administratives",
        description: "Étapes détaillées pour diverses demandes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1347,
        categoryName: "Ressources sur les droits et obligations juridiques",
        description: "Synthèses accessibles sur le droit civil et social.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1348,
        categoryName: "Informations sur l’aide juridictionnelle",
        description: "Comment bénéficier d’un soutien légal gratuit ou à moindre coût.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1349,
        categoryName: "Tutoriels sur l’utilisation des services en ligne publics",
        description: "Pas à pas pour naviguer sur les plateformes gouvernementales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      
      // 34. PSYCHOLOGICAL_SUPPORT (Soutien psychologique et émotionnel)
      {
        id: 1350,
        categoryName: "Guides de gestion du stress et de l’anxiété",
        description: "Techniques pour mieux vivre au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 1351,
        categoryName: "Ressources sur les troubles psychiques",
        description: "Explications claires pour comprendre différentes pathologies.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 1352,
        categoryName: "Fiches sur les méthodes de relaxation et méditation",
        description: "Exercices pratiques à réaliser seul.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 1353,
        categoryName: "Informations sur les réseaux d’écoute et d’accompagnement",
        description: "Où et comment trouver de l’aide.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 1354,
        categoryName: "Manuels pour proches aidants",
        description: "Comment soutenir un proche en souffrance psychologique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      
      // 35. MEDICAL_AID (Aide médicale et premiers secours)
      {
        id: 1355,
        categoryName: "Guides de premiers secours",
        description: "Procédures d’urgence en cas d’accident ou malaise.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 1356,
        categoryName: "Documents sur la gestion des maladies courantes",
        description: "Conseils pratiques pour soigner à domicile.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 1357,
        categoryName: "Fiches techniques sur les traitements médicaux",
        description: "Explications des protocoles de soins.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 1358,
        categoryName: "Informations sur les dispositifs d’urgence médicale",
        description: "Comment utiliser les défibrillateurs, appeler les secours.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 1359,
        categoryName: "Ressources pour la prévention des accidents domestiques",
        description: "Astuces pour sécuriser son environnement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      
      // 36. HOUSING_SUPPORT (Aide au logement d’urgence)
      {
        id: 1360,
        categoryName: "Guides pour trouver un logement temporaire",
        description: "Ressources pour accéder rapidement à un hébergement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1361,
        categoryName: "Manuels sur les droits des locataires en situation d’urgence",
        description: "Explications claires des protections légales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1362,
        categoryName: "Listes de contacts d’organismes d’aide au logement",
        description: "Adresses et numéros utiles en cas de besoin.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1363,
        categoryName: "Informations sur les aides financières au logement",
        description: "Aides sociales, allocations et subventions possibles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1364,
        categoryName: "Fiches pratiques pour l’installation et l’aménagement provisoire",
        description: "Conseils pour un logement temporaire fonctionnel.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      
      // 37. FOOD_AID (Aide alimentaire)
      {
        id: 1365,
        categoryName: "Guides d’accès aux banques alimentaires",
        description: "Où et comment obtenir une aide alimentaire.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 1366,
        categoryName: "Documents sur la nutrition en situation de précarité",
        description: "Conseils pour manger équilibré avec un budget limité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 1367,
        categoryName: "Fiches sur la conservation et la préparation des aliments donnés",
        description: "Pour éviter le gaspillage et assurer la sécurité alimentaire.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 1368,
        categoryName: "Listes des distributions alimentaires locales",
        description: "Calendriers et lieux d’aide alimentaire.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 1369,
        categoryName: "Informations sur les programmes de repas gratuits ou à prix réduit",
        description: "Cantines sociales et associations caritatives.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.FOOD_AID
      },
      
      // 38. EMERGENCY_SERVICES (Services d’urgence et intervention rapide)
      {
        id: 1370,
        categoryName: "Guides sur les numéros d’urgence à connaître",
        description: "Informations essentielles pour réagir rapidement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 1371,
        categoryName: "Manuels de procédure en cas d’incendie ou d’accident",
        description: "Étapes à suivre pour assurer la sécurité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 1372,
        categoryName: "Fiches sur la gestion des catastrophes naturelles",
        description: "Conseils de préparation et de réaction.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 1373,
        categoryName: "Ressources sur les gestes qui sauvent",
        description: "Techniques de premiers secours adaptées aux situations d’urgence.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 1374,
        categoryName: "Informations sur les services d’intervention spécialisés",
        description: "Pompiers, police, secours médicaux et leurs rôles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      
      // 39. PHYSICAL_ACTIVITY (Programmes sportifs et bien-être physique)
      {
        id: 1375,
        categoryName: "Guides d’exercices physiques adaptés à tous niveaux",
        description: "Programmes simples pour rester actif.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1376,
        categoryName: "Manuels sur la prévention des blessures sportives",
        description: "Conseils pour pratiquer en sécurité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1377,
        categoryName: "Fiches d’échauffement et de récupération musculaire",
        description: "Techniques pour optimiser l’effort.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1378,
        categoryName: "Ressources sur les bienfaits du sport pour la santé",
        description: "Explications scientifiques et témoignages.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 1379,
        categoryName: "Informations sur les clubs et associations sportives locales",
        description: "Comment s’inscrire et participer.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      
      // 40. COGNITIVE_TRAINING (Programmes cognitifs et développement mental)
      {
        id: 1380,
        categoryName: "Guides d’entraînement cérébral",
        description: "Exercices pour améliorer mémoire, attention et logique.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 1381,
        categoryName: "Manuels sur les techniques de stimulation cognitive",
        description: "Méthodes variées pour garder un esprit actif.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 1382,
        categoryName: "Fiches sur les jeux éducatifs et puzzles",
        description: "Activités ludiques pour entraîner le cerveau.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 1383,
        categoryName: "Ressources sur la prévention du déclin cognitif",
        description: "Conseils pour maintenir ses capacités mentales.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 1384,
        categoryName: "Informations sur les ateliers et formations en développement intellectuel",
        description: "Où et comment participer.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      
      // 41. NUTRITION (Programmes nutritionnels)
      {
        id: 1385,
        categoryName: "Guides alimentaires équilibrés",
        description: "Plans de repas adaptés aux différents besoins.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1386,
        categoryName: "Manuels sur les régimes spécifiques",
        description: "Végétarien, sans gluten, diabète, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1387,
        categoryName: "Fiches pratiques sur la lecture des étiquettes nutritionnelles",
        description: "Comprendre ce que l’on mange.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1388,
        categoryName: "Ressources sur la préparation de repas sains et économiques",
        description: "Astuces pour cuisiner facilement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1389,
        categoryName: "Informations sur les recommandations nutritionnelles officielles",
        description: "Apports journaliers et conseils.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION
      },
      
      // 42. SOCIAL_ENGAGEMENT (Programmes sociaux et communautaires)
      {
        id: 1390,
        categoryName: "Guides pour participer à des actions bénévoles",
        description: "Comment s’engager dans sa communauté.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 1391,
        categoryName: "Manuels sur la création et la gestion d’associations",
        description: "Démarches administratives et bonnes pratiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 1392,
        categoryName: "Fiches sur l’organisation d’événements communautaires",
        description: "Conseils pour réussir ses initiatives.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 1393,
        categoryName: "Ressources sur le développement de réseaux sociaux locaux",
        description: "Faciliter les échanges et l’entraide.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 1394,
        categoryName: "Informations sur les dispositifs de soutien à l’engagement citoyen",
        description: "Subventions, formations, accompagnement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      
      // 43. ENVIRONMENTAL_ACTION (Programmes environnementaux)
      {
        id: 1395,
        categoryName: "Guides de sensibilisation à l’écologie",
        description: "Actions simples à mettre en œuvre au quotidien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 1396,
        categoryName: "Manuels sur la réduction des déchets et le recyclage",
        description: "Bonnes pratiques et astuces.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 1397,
        categoryName: "Fiches sur la plantation et l’entretien d’espaces verts",
        description: "Jardins partagés, compostage, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 1398,
        categoryName: "Ressources pour organiser des campagnes de nettoyage",
        description: "Logistique, communication, mobilisation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 1399,
        categoryName: "Informations sur les aides pour projets durables",
        description: "Financements, partenariats et conseils.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      
      // 44. PHYSICAL_ACHIEVEMENTS (Badges de performance physique)
      {
        id: 1400,
        categoryName: "Guides sur les critères d’obtention des badges",
        description: "Objectifs à atteindre et niveaux de performance.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 1401,
        categoryName: "Manuels d’entraînement pour progresser",
        description: "Exercices et programmes recommandés.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 1402,
        categoryName: "Fiches explicatives des différentes catégories de badges",
        description: "Course, endurance, force, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 1403,
        categoryName: "Ressources sur la reconnaissance officielle des performances",
        description: "Certifications et validité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 1404,
        categoryName: "Informations sur les événements sportifs liés aux badges",
        description: "Compétitions, challenges et clubs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      
      // 45. COGNITIVE_ACHIEVEMENTS (Badges cognitifs)
      {
        id: 1405,
        categoryName: "Guides sur les compétences évaluées pour chaque badge",
        description: "Mémoire, logique, créativité, etc.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 1406,
        categoryName: "Manuels pour améliorer ses performances intellectuelles",
        description: "Exercices ciblés et techniques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 1407,
        categoryName: "Fiches sur les différents niveaux et paliers de badges",
        description: "Débutant, intermédiaire, avancé.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 1408,
        categoryName: "Ressources sur la valorisation des badges dans le parcours personnel",
        description: "CV, réseaux sociaux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 1409,
        categoryName: "Informations sur les concours et défis cognitifs",
        description: "Participation, règles, récompenses.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      
      // 46. NUTRITION_ACHIEVEMENTS (Badges nutritionnels)
      {
        id: 1410,
        categoryName: "Guides pour comprendre les critères de chaque badge",
        description: "Apports nutritifs, régularité, diversité alimentaire.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 1411,
        categoryName: "Manuels pour adopter des habitudes alimentaires saines",
        description: "Conseils pour équilibrer ses repas.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 1412,
        categoryName: "Fiches pratiques sur le suivi des objectifs nutritionnels",
        description: "Journaux alimentaires, applications recommandées.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 1413,
        categoryName: "Ressources pour évaluer son progrès nutritionnel",
        description: "Tests, auto-évaluations, conseils personnalisés.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 1414,
        categoryName: "Informations sur les challenges et programmes récompensés",
        description: "Initiatives communautaires, événements thématiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      
      // 47. SOCIAL_ACHIEVEMENTS (Badges sociaux)
      {
        id: 1415,
        categoryName: "Guides d’évaluation des compétences sociales",
        description: "Communication, empathie, leadership.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 1416,
        categoryName: "Manuels pour développer ses compétences relationnelles",
        description: "Ateliers, jeux de rôle, exercices pratiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 1417,
        categoryName: "Fiches sur les critères d’attribution des badges",
        description: "Participation, impact social, bénévolat.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 1418,
        categoryName: "Ressources pour valoriser les badges sociaux dans la vie professionnelle",
        description: "CV, lettre de motivation, réseaux.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 1419,
        categoryName: "Informations sur les événements sociaux valorisant les badges",
        description: "Rencontres, conférences, groupes d’échange.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      
      // 48. ENVIRONMENTAL_ACHIEVEMENTS (Badges environnementaux)
      {
        id: 1420,
        categoryName: "Guides sur les critères pour gagner un badge environnemental",
        description: "Actions écologiques, réduction d’empreinte, engagement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 1421,
        categoryName: "Manuels sur les bonnes pratiques écologiques à adopter",
        description: "Tri, économies d’énergie, mobilité douce.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 1422,
        categoryName: "Fiches sur les différents niveaux et types de badges",
        description: "Local, régional, national.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 1423,
        categoryName: "Ressources pour organiser et participer à des actions environnementales",
        description: "Événements, projets, sensibilisation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 1424,
        categoryName: "Informations sur la reconnaissance officielle des badges environnementaux",
        description: "Certification, partenariats.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      
      // 49. ENVIRONMENTAL (Activités environnementales)
      {
        id: 1425,
        categoryName: "Guides pour la mise en place d’ateliers de sensibilisation",
        description: "Contenus, méthodes pédagogiques, publics cibles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 1426,
        categoryName: "Manuels pour organiser des activités de nettoyage",
        description: "Logistique, sécurité, communication.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 1427,
        categoryName: "Fiches pratiques sur la gestion durable des espaces verts",
        description: "Plantation, entretien, biodiversité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 1428,
        categoryName: "Ressources pour le compostage domestique et collectif",
        description: "Techniques, équipements, suivi.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 1429,
        categoryName: "Informations sur les dispositifs de soutien aux initiatives environnementales",
        description: "Subventions, formations, accompagnement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      
      // 50. GENERAL (Discussions générales)
      {
        id: 1430,
        categoryName: "Guides pour animer des discussions ouvertes",
        description: "Techniques d’animation, gestion des conflits, écoute active.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 1431,
        categoryName: "Manuels pour créer des espaces de débat respectueux",
        description: "Règles, modération, outils numériques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 1432,
        categoryName: "Fiches sur les thématiques générales à aborder",
        description: "Société, culture, actualité, technologie.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 1433,
        categoryName: "Ressources pour encourager la participation active",
        description: "Jeux, sondages, retours d’expérience.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.GENERAL
      },
      
      // 55. MENTAL_HEALTH (Bien-être mental et cognitif)
      {
        id: 1434,
        categoryName: "Guides pour créer des espaces de parole sécurisés sur la santé mentale",
        description: "Confidentialité, écoute, soutien.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 1435,
        categoryName: "Manuels sur les techniques de gestion du stress et de l’anxiété",
        description: "Exercices, méditation, ressources.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 1436,
        categoryName: "Fiches pratiques sur la reconnaissance des troubles psychiques",
        description: "Symptômes, aides disponibles, conseils.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 1437,
        categoryName: "Ressources pour orienter vers des professionnels de santé mentale",
        description: "Annuaires, contacts, modes d’accès.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 1438,
        categoryName: "Informations sur les groupes de soutien et activités collectives",
        description: "Rencontres, ateliers, partages d’expérience.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      
      // 56. MANUAL_SKILL (Compétences manuelles)
      {
        id: 1438,
        categoryName: "Guides pour apprendre la menuiserie et bricolage",
        description: "Outils, techniques, sécurité.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 1439,
        categoryName: "Manuels d’initiation à la couture et au textile",
        description: "Matériel, bases, projets simples.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 1440,
        categoryName: "Fiches pratiques sur la réparation et entretien d’objets quotidiens",
        description: "Appareils électroménagers, vélos.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 1441,
        categoryName: "Ressources pour développer la créativité manuelle",
        description: "Tutoriels, inspirations, challenges.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 1442,
        categoryName: "Informations sur les ateliers et formations en artisanat",
        description: "Lieux, inscriptions, programmes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      
      // 57. NUTRITIONAL_SKILL (Compétences nutritionnelles)
      {
        id: 1442,
        categoryName: "Guides pour apprendre la planification des repas équilibrés",
        description: "Principes, outils, exemples.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 1443,
        categoryName: "Manuels sur la lecture des étiquettes alimentaires",
        description: "Comprendre les ingrédients et additifs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 1444,
        categoryName: "Fiches pratiques pour cuisiner sain et économique",
        description: "Recettes, astuces, substitution d’ingrédients.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 1445,
        categoryName: "Ressources pour éduquer aux régimes spécifiques",
        description: "Végétarien, sans gluten, diabète.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 1446,
        categoryName: "Informations sur les formations en diététique et nutrition",
        description: "Cursus, certifications, webinars.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      
      // 58. CREATIVE_SKILL (Compétences créatives)
      {
        id: 1447,
        categoryName: "Guides pour initier au dessin et à la peinture",
        description: "Techniques, matériaux, styles.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 1448,
        categoryName: "Manuels d’écriture créative et storytelling",
        description: "Exercices, structures narratives, ateliers.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 1449,
        categoryName: "Fiches pratiques pour la photographie et retouche d’images",
        description: "Bases, logiciels, conseils.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 1450,
        categoryName: "Ressources pour la musique et composition",
        description: "Théorie, instruments, production.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 1451,
        categoryName: "Informations sur les cours et événements créatifs",
        description: "Stages, concours, expositions.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      
      // 59. MEDICAL_CARE (Soins médicaux)
      {
        id: 1452,
        categoryName: "Guides sur les premiers secours et gestes d’urgence",
        description: "Protocoles, pratiques, mises à jour.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 1453,
        categoryName: "Manuels pour la gestion des maladies chroniques",
        description: "Suivi, traitements, adaptations.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 1454,
        categoryName: "Fiches pratiques sur la prévention et dépistage",
        description: "Vaccinations, bilans, campagnes.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 1455,
        categoryName: "Ressources pour la téléconsultation et accès aux soins",
        description: "Plateformes, démarches, remboursements.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 1456,
        categoryName: "Informations sur les centres de santé et professionnels médicaux",
        description: "Coordonnées, spécialités, horaires.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      
      // 60. ARTISTIC (Activités artistiques)
      {
        id: 1457,
        categoryName: "Guides pour découvrir la sculpture et le modelage",
        description: "Matériaux, outils, techniques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1458,
        categoryName: "Manuels sur le théâtre et la performance",
        description: "Improvisation, mise en scène, expression corporelle.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1459,
        categoryName: "Fiches pratiques pour la danse et le mouvement",
        description: "Styles, entraînements, bienfaits.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1460,
        categoryName: "Ressources pour les arts visuels numériques",
        description: "Dessin digital, animation, logiciels.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1461,
        categoryName: "Informations sur les événements artistiques locaux et internationaux",
        description: "Festivals, expositions, concours.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.ARTISTIC
      },
      
      // 61. DISCUSSIONS (Discussions générales)
      {
        id: 1462,
        categoryName: "Guides pour modérer des forums et groupes de discussion",
        description: "Règles, outils, gestion des conflits.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1463,
        categoryName: "Manuels sur l’éthique et la bienveillance en ligne",
        description: "Communication, respect, prévention du harcèlement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1464,
        categoryName: "Fiches pratiques pour animer des débats constructifs",
        description: "Techniques, sujets, synthèses.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1465,
        categoryName: "Ressources pour créer des espaces de parole inclusifs",
        description: "Diversité, accessibilité, langage.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1466,
        categoryName: "Informations sur les plateformes et outils de discussion",
        description: "Fonctionnalités, usages, innovations.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      
      // 62. CREATIVE (Activités créatives)
      {
        id: 1467,
        categoryName: "Guides pour organiser des ateliers artistiques",
        description: "Planification, matériel, animation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 1468,
        categoryName: "Manuels sur l’écriture, poésie et création littéraire",
        description: "Styles, techniques, publication.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 1469,
        categoryName: "Fiches pratiques pour les arts plastiques et manuels",
        description: "Peinture, collage, assemblage.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 1470,
        categoryName: "Ressources pour les projets multimédias et numériques",
        description: "Vidéos, podcasts, blogs.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 1471,
        categoryName: "Informations sur les concours et appels à projets créatifs",
        description: "Critères, candidatures, récompenses.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.CREATIVE
      },
      
      // 63. INCLUSION (Inclusion sociale)
      {
        id: 1472,
        categoryName: "Guides pour promouvoir l’accessibilité et l’égalité des chances",
        description: "Bonnes pratiques, outils, législation.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1473,
        categoryName: "Manuels sur la sensibilisation aux discriminations",
        description: "Formations, ateliers, ressources pédagogiques.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1474,
        categoryName: "Fiches pratiques pour favoriser l’intégration des personnes en situation de handicap",
        description: "Adaptations, technologies, accompagnement.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1475,
        categoryName: "Ressources pour les initiatives communautaires inclusives",
        description: "Projets, financements, partenariats.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1476,
        categoryName: "Informations sur les droits et aides sociales",
        description: "Dispositifs, démarches, contacts.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      
      // 64. ELDERLY_SUPPORT (Soutien aux personnes âgées)
      {
        id: 1477,
        categoryName: "Guides pour accompagner le maintien à domicile",
        description: "Aménagement, aides techniques, soins.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1478,
        categoryName: "Manuels sur la prévention de la dépendance",
        description: "Exercices, alimentation, suivi médical.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1479,
        categoryName: "Ressources pour le soutien psychologique des personnes âgées",
        description: "Ecoute, groupes, interventions.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1480,
        categoryName: "Informations sur les structures d’accueil et services spécialisés",
        description: "Maisons de retraite, services d’aide, coordonnées.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1481,
        categoryName: "Informations sur les plateformes et outils pour discussions en ligne",
        description: "Forums, chats, visioconférences.",
        typeId: ECategoryType.RESOURCE,
        chapterId: ECategoryChapter.INCLUSION
      },

    ],
    skipDuplicates: true
  });
}

seedResources()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

export default seedResources;
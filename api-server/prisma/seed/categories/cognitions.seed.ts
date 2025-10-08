import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedCognitions() {
  await prisma.category.createMany({
    data: [
      // 3. COGNITIVE
      // ------------

      // 🏃 PHYSICAL – Activités physiques et sportives
      {
        id: 322,
        categoryName: "Stratégie sportive",
        description:
          "Analyse et planification tactique dans les sports collectifs ou individuels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 323,
        categoryName: "Mémoire motrice",
        description:
          "Apprentissage et répétition de séquences gestuelles complexes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 324,
        categoryName: "Anticipation visuo-motrice",
        description: "Réaction rapide basée sur des indices visuels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 325,
        categoryName: "Concentration en mouvement",
        description: "Maintien de l'attention en contexte d’effort physique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 326,
        categoryName: "Coordination cognitive-motrice",
        description: "Intégration entre la pensée et l'action corporelle.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },

      // 🤝 SOCIAL – Activités sociales et communautaires
      {
        id: 327,
        categoryName: "Compréhension sociale",
        description: "Lecture des émotions et intentions d’autrui.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 328,
        categoryName: "Empathie cognitive",
        description: "Capacité à se représenter les pensées d'autrui.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 329,
        categoryName: "Négociation collaborative",
        description: "Résolution de conflits par le dialogue et le compromis.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 330,
        categoryName: "Communication assertive",
        description: "Exprimer ses idées de manière claire et respectueuse.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 331,
        categoryName: "Jugement moral",
        description: "Évaluation éthique de situations sociales complexes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 👁️👂 SENSORY – Activités sensorielles
      {
        id: 331,
        categoryName: "Intégration multisensorielle",
        description:
          "Traitement combiné des signaux visuels, auditifs et tactiles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 332,
        categoryName: "Discrimination perceptive",
        description:
          "Identifier des différences fines entre stimuli sensoriels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 333,
        categoryName: "Reconnaissance de motifs",
        description: "Percevoir et mémoriser des configurations sensorielles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 334,
        categoryName: "Imagerie mentale sensorielle",
        description: "Évoquer mentalement des sons, images ou sensations.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 335,
        categoryName: "Attention sélective sensorielle",
        description:
          "Concentration sur un stimulus précis malgré les distractions.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 🧘‍♂️ PHYSICAL_WELLNESS – Bien-être physique
      {
        id: 336,
        categoryName: "Conscience corporelle",
        description:
          "Évaluation cognitive de son état physique (tensions, douleurs).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 337,
        categoryName: "Régulation de la fatigue",
        description: "Planification et adaptation de l’effort.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 338,
        categoryName: "Biofeedback cognitif",
        description: "Interprétation mentale des signaux physiologiques.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 339,
        categoryName: "Visualisation kinesthésique",
        description:
          "Utilisation d’images mentales pour optimiser la performance.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 340,
        categoryName: "Planification du repos",
        description: "Organisation réfléchie des cycles de récupération.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // 😊 EMOTIONAL_WELLNESS – Bien-être émotionnel et gestion du stress
      {
        id: 341,
        categoryName: "Régulation émotionnelle consciente",
        description:
          "Utilisation de stratégies cognitives pour moduler ses émotions.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 342,
        categoryName: "Réévaluation cognitive",
        description:
          "Modifier la perception d’une situation stressante pour réduire son impact émotionnel.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 343,
        categoryName: "Connaissance de soi émotionnelle",
        description:
          "Identifier et nommer avec précision ses propres états affectifs.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 344,
        categoryName: "Anticipation émotionnelle",
        description:
          "Prévoir l’effet émotionnel de futurs événements pour mieux les gérer.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 345,
        categoryName: "Décentration",
        description:
          "Prise de recul cognitive face aux pensées automatiques ou négatives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🤗 SOCIAL_WELLNESS – Bien-être social et sentiment d’appartenance
      {
        id: 346,
        categoryName: "Mentalisation",
        description:
          "Compréhension des états mentaux des autres dans les interactions sociales.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 347,
        categoryName: "Mémoire sociale",
        description:
          "Se souvenir d’informations pertinentes sur les personnes et les relations.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 348,
        categoryName: "Jugement social",
        description:
          "Évaluer correctement les dynamiques d’un groupe ou d’un réseau social.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 349,
        categoryName: "Synchronisation cognitive-sociale",
        description: "Ajuster son comportement en fonction du contexte social.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 350,
        categoryName: "Théorie de l’esprit",
        description:
          "Capacité à attribuer des croyances et intentions aux autres.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🧩 INTELLECTUAL_WELLNESS – Bien-être intellectuel et cognitif
      {
        id: 351,
        categoryName: "Curiosité cognitive",
        description:
          "Motivation intrinsèque à explorer et apprendre de nouveaux savoirs.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 352,
        categoryName: "Esprit critique",
        description:
          "Capacité à évaluer objectivement les informations et leurs sources.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 353,
        categoryName: "Organisation de l’information",
        description:
          "Structuration mentale logique de connaissances complexes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 354,
        categoryName: "Apprentissage métacognitif",
        description: "Réflexion sur sa propre façon d’apprendre.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 355,
        categoryName: "Souplesse intellectuelle",
        description: "Adaptation à des idées ou perspectives nouvelles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 💰 FINANCIAL_WELLNESS – Bien-être financier
      {
        id: 356,
        categoryName: "Planification financière cognitive",
        description: "Établir un budget et prévoir des dépenses avec logique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 357,
        categoryName: "Décision économique raisonnée",
        description:
          "Analyser les coûts-bénéfices de ses choix de consommation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 358,
        categoryName: "Compréhension des risques",
        description: "Évaluer cognitivement les incertitudes économiques.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 359,
        categoryName: "Mémoire de gestion",
        description:
          "Se souvenir de transactions, échéances et engagements financiers.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 360,
        categoryName: "Anticipation financière",
        description:
          "Prévoir les conséquences économiques de comportements actuels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 🌱 ENVIRONMENTAL_WELLNESS – Bien-être environnemental
      {
        id: 361,
        categoryName: "Conscience écosystémique",
        description:
          "Comprendre les relations causales entre comportements humains et nature.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 362,
        categoryName: "Décision écoresponsable",
        description:
          "Choisir des actions bénéfiques pour l’environnement après réflexion.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 363,
        categoryName: "Projection à long terme",
        description: "Imaginer les impacts environnementaux futurs.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 364,
        categoryName: "Évaluation des alternatives écologiques",
        description: "Comparer des options sur la base de critères durables.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 365,
        categoryName: "Réflexion systémique",
        description: "Penser en termes d’interdépendances environnementales.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // 🕉️ SPIRITUAL_WELLNESS – Bien-être spirituel
      {
        id: 366,
        categoryName: "Réflexion existentielle",
        description:
          "Capacité à réfléchir sur le sens de la vie, la mort et la place de l’individu dans le monde.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 367,
        categoryName: "Pensée symbolique",
        description:
          "Compréhension des métaphores, rituels et récits spirituels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 368,
        categoryName: "Introspection profonde",
        description:
          "Exploration cognitive de son identité, ses valeurs et croyances.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 369,
        categoryName: "Élaboration de systèmes de croyance",
        description:
          "Construction personnelle de repères spirituels cohérents.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 370,
        categoryName: "Pensée transcendantale",
        description:
          "Capacité à conceptualiser l’infini, la transcendance ou des réalités non tangibles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // 🧮 COGNITIVE_ACTIVITY – Activités cognitives spécifiques
      {
        id: 371,
        categoryName: "Résolution de casse-têtes",
        description:
          "Activités impliquant logique, raisonnement spatial ou mathématique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 372,
        categoryName: "Jeux de stratégie mentale",
        description:
          "Échecs, go, jeux nécessitant planification et anticipation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 373,
        categoryName: "Mémorisation active",
        description:
          "Exercices de mémoire à court et long terme (mots, chiffres, objets).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 374,
        categoryName: "Entraînement attentionnel",
        description:
          "Activités ciblées pour renforcer concentration et vigilance.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 375,
        categoryName: "Défis logico-mathématiques",
        description:
          "Résolution de problèmes numériques ou logiques complexes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // 🧘‍♀️ COGNITIVE_WELLNESS – Bien-être cognitif
      {
        id: 376,
        categoryName: "Prévention du déclin cognitif",
        description:
          "Activités visant à maintenir ou améliorer les fonctions mentales.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 377,
        categoryName: "Suivi de la performance cognitive",
        description: "Mesure régulière des capacités (tests, applications).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 378,
        categoryName: "Équilibre mental",
        description:
          "Capacité à alterner stimulation cognitive et repos mental.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 379,
        categoryName: "Optimisation cognitive",
        description:
          "Stratégies d’apprentissage, de mémorisation ou de concentration.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 380,
        categoryName: "Cohérence cognitive",
        description: "Alignement entre pensées, valeurs et comportements.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },

      // 🏙️ URBAN_INFRASTRUCTURE – Infrastructures urbaines
      {
        id: 381,
        categoryName: "Lecture de plans et cartes",
        description:
          "Compréhension cognitive de l’espace urbain et de sa structure.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 382,
        categoryName: "Orientation spatiale",
        description:
          "Capacité à se repérer et à planifier des trajets en ville.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 383,
        categoryName: "Anticipation urbaine",
        description: "Visualisation mentale de projets d’aménagement.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 384,
        categoryName: "Évaluation de besoins publics",
        description: "Analyse rationnelle des infrastructures collectives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 385,
        categoryName: "Organisation d’espaces publics",
        description:
          "Planification cognitive de lieux optimisés pour les usagers.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },

      // 🚦 TRANSPORTATION – Mobilité et transports urbains
      {
        id: 386,
        categoryName: "Planification d’itinéraires",
        description:
          "Choix optimal de trajets en fonction de contraintes cognitives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 387,
        categoryName: "Gestion multitâche en déplacement",
        description: "Maintien de l’attention lors d’activités de transport.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 388,
        categoryName: "Apprentissage de codes routiers",
        description: "Mémorisation des règles et comportements en circulation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 389,
        categoryName: "Coordination spatio-temporelle",
        description:
          "Adapter ses déplacements dans un environnement dynamique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 390,
        categoryName: "Adaptabilité en transport",
        description:
          "Réagir cognitivement aux imprévus (retards, changements).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // 🌿 URBAN_ENVIRONMENT – Espaces verts et environnement urbain
      {
        id: 391,
        categoryName: "Cartographie mentale des espaces verts",
        description:
          "Capacité à représenter cognitivement les lieux naturels en ville.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 392,
        categoryName: "Compréhension des enjeux écologiques urbains",
        description:
          "Raisonnement sur la gestion de la biodiversité, pollution et qualité de l’air.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 393,
        categoryName: "Perception de l’impact environnemental",
        description:
          "Évaluation cognitive des conséquences des activités humaines sur l’environnement urbain.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 394,
        categoryName: "Planification de trajets verts",
        description:
          "Choisir consciemment des itinéraires qui incluent ou favorisent les espaces naturels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 395,
        categoryName: "Observation environnementale",
        description:
          "Capacité à repérer et interpréter les signaux naturels ou urbains (changement de saisons, pollution visuelle…).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },

      // 🏢 COMMUNITY_SERVICES – Services communautaires urbains
      {
        id: 396,
        categoryName: "Identification des besoins collectifs",
        description:
          "Raisonnement basé sur l’analyse des besoins sociaux locaux.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 397,
        categoryName: "Structuration des services publics",
        description:
          "Compréhension des circuits d’aide et de leur organisation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 398,
        categoryName: "Navigation administrative",
        description:
          "Capacité à s’orienter dans des systèmes complexes d’accès aux services.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 399,
        categoryName: "Analyse des ressources communautaires",
        description:
          "Évaluation logique de l’adéquation entre ressources disponibles et besoins réels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 400,
        categoryName: "Éducation civique cognitive",
        description:
          "Intégration des connaissances liées à la citoyenneté et la participation collective.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // ♻️ WASTE_MANAGEMENT – Gestion des déchets urbains
      {
        id: 401,
        categoryName: "Tri cognitif des déchets",
        description:
          "Reconnaissance et catégorisation correcte des types de déchets.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 402,
        categoryName: "Visualisation des cycles de recyclage",
        description: "Compréhension mentale des processus de transformation.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 403,
        categoryName: "Évaluation d’impact écologique",
        description:
          "Jugement cognitif des pratiques individuelles sur l’environnement.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 404,
        categoryName: "Planification de réduction des déchets",
        description: "Élaboration de stratégies personnelles ou collectives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 405,
        categoryName: "Apprentissage de l’économie circulaire",
        description:
          "Intégration conceptuelle du principe de réutilisation et durabilité.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // 🚀 INNOVATION – Projets d’innovation et technologie
      {
        id: 406,
        categoryName: "Pensée divergente",
        description:
          "Capacité à produire plusieurs idées originales pour un même problème.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 407,
        categoryName: "Évaluation critique des technologies",
        description:
          "Analyse rationnelle de leur utilité, efficacité et éthique.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 408,
        categoryName: "Modélisation mentale",
        description:
          "Créer des représentations abstraites de systèmes ou concepts innovants.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 409,
        categoryName: "Résolution créative de problèmes",
        description:
          "Approche cognitive non conventionnelle pour surmonter des obstacles.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 410,
        categoryName: "Transfert de compétences",
        description:
          "Application de connaissances acquises dans de nouveaux contextes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 🛠️ CONSTRUCTION – Projets de construction et aménagement
      {
        id: 411,
        categoryName: "Visualisation en 3D mentale",
        description:
          "Capacité à imaginer des structures à partir de plans ou schémas.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 412,
        categoryName: "Lecture technique",
        description:
          "Compréhension cognitive des plans, consignes et normes de sécurité.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 413,
        categoryName: "Organisation séquentielle de tâches",
        description:
          "Planification logique des étapes d’un chantier ou projet.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 414,
        categoryName: "Anticipation des contraintes",
        description: "Prédiction des problèmes techniques ou logistiques.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 415,
        categoryName: "Analyse des besoins fonctionnels",
        description:
          "Réflexion structurée sur les besoins des usagers et leur traduction en solutions concrètes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },

      // 🌍 SUSTAINABILITY – Projets environnementaux et durables
      {
        id: 416,
        categoryName: "Raisonnement systémique",
        description:
          "Comprendre les interconnexions entre environnement, économie et société.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 417,
        categoryName: "Projection à long terme",
        description:
          "Anticiper cognitivement les impacts des décisions durables sur les générations futures.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 418,
        categoryName: "Évaluation de solutions écoresponsables",
        description:
          "Analyser logiquement les avantages et inconvénients d’une action verte.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 419,
        categoryName: "Réflexion éthique sur l’environnement",
        description:
          "Jugement moral et cognitif sur la responsabilité individuelle et collective.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 420,
        categoryName: "Décodage des labels et normes écologiques",
        description:
          "Identifier et interpréter correctement les informations de durabilité.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },

      // 🤝 COLLABORATION – Projets collaboratifs
      {
        id: 421,
        categoryName: "Partage cognitif d’objectifs",
        description:
          "Capacité à intégrer et coordonner les objectifs d’un groupe.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 422,
        categoryName: "Gestion des conflits d’idées",
        description: "Résolution cognitive des divergences de point de vue.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 423,
        categoryName: "Prise de décision collective raisonnée",
        description:
          "Analyser et peser les options dans un cadre participatif.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 424,
        categoryName: "Communication constructive",
        description:
          "Structuration de discours visant à faire avancer un groupe.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 425,
        categoryName: "Organisation mentale du travail d’équipe",
        description: "Répartition logique des rôles et responsabilités.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.COLLABORATION,
      },

      // 🎯 PERSONAL_DEVELOPMENT – Projets personnels de développement
      {
        id: 426,
        categoryName: "Auto-analyse cognitive",
        description:
          "Capacité à réfléchir sur ses comportements, pensées et schémas mentaux.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 427,
        categoryName: "Fixation d’objectifs SMART",
        description:
          "Planification raisonnée d’objectifs spécifiques, mesurables, atteignables…",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 428,
        categoryName: "Réflexion métacognitive",
        description: "Réflexion sur sa manière d’apprendre et de penser.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 429,
        categoryName: "Gestion mentale du changement",
        description: "Ajustement cognitif face à de nouveaux défis personnels.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 430,
        categoryName: "Planification d’habitudes",
        description:
          "Organisation mentale pour maintenir des routines constructives.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // 📖 GUIDES – Guides et manuels
      {
        id: 431,
        categoryName: "Lecture active",
        description:
          "Capacité à interagir cognitivement avec les contenus (questionnement, reformulation).",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 432,
        categoryName: "Extraction d’informations clés",
        description: "Identification mentale rapide des données pertinentes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 433,
        categoryName: "Schématisation mentale",
        description:
          "Création de structures internes à partir de consignes écrites.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 434,
        categoryName: "Application de procédures",
        description: "Traduction des étapes d’un guide en actions concrètes.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 435,
        categoryName: "Contrôle de compréhension",
        description:
          "Vérification cognitive de l’assimilation correcte du contenu.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.GUIDES,
      },

      // 🎥 VIDEOS – Vidéos éducatives
      {
        id: 436,
        categoryName: "Traitement multimodal de l’information",
        description: "Intégration simultanée de l’image, du son et du texte.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 437,
        categoryName: "Attention sélective",
        description:
          "Concentration cognitive sur les éléments pertinents de la vidéo.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 438,
        categoryName: "Prise de notes mentale",
        description:
          "Mémorisation structurée des idées principales en temps réel.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 439,
        categoryName: "Déduction à partir d’exemples visuels",
        description: "Inférences cognitives à partir de démonstrations.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.VIDEOS,
      },

      // 👴 ELDERLY_SUPPORT (Soutien aux personnes âgées)
      {
        id: 440,
        categoryName: "Entraînement mémoire senior",
        description: "Activités cognitives adaptées au vieillissement.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 441,
        categoryName: "Cognition spatiale pour l’autonomie",
        description: "Aider à mieux se repérer dans l’espace.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 442,
        categoryName: "Stimulation des fonctions exécutives",
        description: "Maintenir la capacité à organiser ou planifier.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 443,
        categoryName: "Exercices de rappel et d’association",
        description: "Favoriser la récupération d’informations.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 444,
        categoryName: "Stratégies de compensation mnésique",
        description: "Utilisation d’outils pour renforcer la mémoire.",
        typeId: ECategoryType.COGNITIVE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
    ],
    skipDuplicates: true,
  });
}

seedCognitions()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedCognitions };

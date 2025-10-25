import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedForum() {
  await prisma.category.createMany({
    data: [
      // 4. FORUM
      // --------

      // 🏃 PHYSICAL – Activités physiques et sportives
      {
        id: 445,
        categoryName: "Aide à la rééducation physique",
        description:
          "Assistance pour la reprise progressive d'activités motrices.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 446,
        categoryName: "Soutien aux exercices adaptés",
        description: "Conseils personnalisés pour pratiquer sans risque.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 447,
        categoryName: "Accompagnement aux déplacements",
        description: "Aide à la mobilité dans les espaces publics et privés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 448,
        categoryName: "Aide à l'équipement sportif adapté",
        description: "Conseils et accès à du matériel spécifique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 449,
        categoryName: "Soutien aux activités physiques en groupe",
        description:
          "Organisation et accompagnement dans des séances collectives.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // 🧠 COGNITIVE – Fonctions cognitives et intellectuelles
      {
        id: 450,
        categoryName: "Aide à la stimulation cognitive",
        description:
          "Activités pour entretenir la mémoire et la concentration.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 451,
        categoryName: "Soutien aux troubles cognitifs",
        description:
          "Accompagnement spécialisé pour déceler et gérer les troubles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 452,
        categoryName: "Aide à la gestion du quotidien",
        description:
          "Stratégies pour structurer ses tâches et son emploi du temps.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 453,
        categoryName: "Soutien à l'apprentissage de nouvelles compétences",
        description: "Méthodes adaptées pour l'acquisition progressive.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 454,
        categoryName: "Accompagnement à la prise de décision",
        description: "Aide à analyser les choix et leurs conséquences.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // 🤝 SOCIAL – Activités sociales et communautaires
      {
        id: 455,
        categoryName: "Soutien à la réinsertion sociale",
        description: "Aide à retrouver des liens sociaux et familiaux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 456,
        categoryName: "Accompagnement aux événements sociaux",
        description: "Aide pour participer aux rencontres et sorties.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 457,
        categoryName: "Aide à la communication interpersonnelle",
        description: "Techniques pour mieux s'exprimer et écouter.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 458,
        categoryName: "Médiation dans les conflits sociaux",
        description: "Intervention pour résoudre des tensions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 459,
        categoryName: "Soutien à la participation associative",
        description: "Facilitation de l'engagement dans des groupes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 👁️👂 SENSORY – Activités sensorielles
      {
        id: 460,
        categoryName: "Aide à la compensation sensorielle",
        description:
          "Utilisation d'aides techniques adaptées (loupes, appareils auditifs).",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 461,
        categoryName: "Soutien aux troubles sensoriels",
        description:
          "Accompagnement spécialisé pour gérer la sur- ou sous-stimulation.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 462,
        categoryName: "Accompagnement à l'orientation spatiale",
        description: "Techniques pour se repérer dans l'environnement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 463,
        categoryName: "Soutien à la communication adaptée",
        description:
          "Aide à l'utilisation de moyens alternatifs (langage des signes, pictogrammes).",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 464,
        categoryName: "Aide à la sécurité liée aux déficiences sensorielles",
        description: "Prévention des accidents domestiques ou extérieurs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 🧘‍♂️ PHYSICAL_WELLNESS – Bien-être physique
      {
        id: 465,
        categoryName: "Techniques de relaxation",
        description: "Yoga, méditation, respiration et autres méthodes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 466,
        categoryName: "Hygiène du sommeil",
        description: "Conseils pour améliorer la qualité du sommeil.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 467,
        categoryName: "Gestion du stress physique",
        description:
          "Exercices et routines pour réduire les tensions corporelles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 468,
        categoryName: "Auto-massage et bienfaits",
        description: "Pratiques simples pour se détendre au quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 469,
        categoryName: "Alimentation pour le bien-être",
        description: "Nourriture favorisant la santé physique et l'énergie.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // 😊 EMOTIONAL_WELLNESS – Bien-être émotionnel et gestion du stress
      {
        id: 470,
        categoryName: "Gestion des émotions",
        description:
          "Stratégies pour mieux comprendre et réguler ses émotions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 471,
        categoryName: "Techniques anti-stress",
        description:
          "Pratiques pour apaiser l'esprit et retrouver calme et sérénité.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 472,
        categoryName: "Soutien émotionnel",
        description: "Partage d'expériences et entraide bienveillante.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 473,
        categoryName: "Mindfulness et pleine conscience",
        description: "Exercices pour vivre le moment présent.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 474,
        categoryName: "Émotions au travail",
        description: "Gérer le stress et les relations professionnelles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🤗 SOCIAL_WELLNESS – Bien-être social et sentiment d'appartenance
      {
        id: 475,
        categoryName: "Créer du lien social",
        description:
          "Initiatives et conseils pour renforcer les réseaux sociaux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 476,
        categoryName: "Sentiment d'appartenance",
        description: "Discussions sur l'identité et l'intégration sociale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 477,
        categoryName: "Communautés bienveillantes",
        description: "Espace pour créer et maintenir des groupes positifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 478,
        categoryName: "Activités collectives",
        description: "Idées pour organiser des activités fédératrices.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 479,
        categoryName: "Prévention de l'isolement",
        description: "Moyens pour détecter et lutter contre la solitude.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🧩 INTELLECTUAL_WELLNESS – Bien-être intellectuel et cognitif
      {
        id: 480,
        categoryName: "Stimulation cognitive",
        description:
          "Exercices et activités pour entretenir ses capacités mentales.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 481,
        categoryName: "Créativité et innovation",
        description: "Favoriser l'imagination et la pensée originale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 482,
        categoryName: "Développement personnel",
        description: "Ressources pour grandir intellectuellement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 483,
        categoryName: "Culture générale",
        description: "Partage de savoirs et découvertes variées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 484,
        categoryName: "Gestion de la charge mentale",
        description:
          "Techniques pour organiser ses pensées et éviter le surmenage.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 💰 FINANCIAL_WELLNESS – Bien-être financier
      {
        id: 485,
        categoryName: "Gestion budgétaire",
        description: "Astuces pour mieux gérer ses finances personnelles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 486,
        categoryName: "Épargne et investissement",
        description: "Conseils adaptés aux débutants et aux avancés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 487,
        categoryName: "Endettement et crédits",
        description: "Informations pour éviter les pièges et gérer les dettes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 488,
        categoryName: "Aides sociales",
        description: "Échanges autour des dispositifs et aides disponibles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 489,
        categoryName: "Éducation financière",
        description: "Initiation à la finance et à l'économie au quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 🌱 ENVIRONMENTAL_WELLNESS – Bien-être environnemental
      {
        id: 490,
        categoryName: "Écologie au quotidien",
        description: "Pratiques pour réduire son impact écologique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 491,
        categoryName: "Jardinage et nature",
        description:
          "Partage d'expériences et conseils de culture urbaine ou rurale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 492,
        categoryName: "Réduction des déchets",
        description: "Idées pour limiter, trier et recycler efficacement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 493,
        categoryName: "Mobilité durable",
        description: "Solutions alternatives à la voiture individuelle.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 494,
        categoryName: "Consommation responsable",
        description: "Achats éthiques et durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // 🕉️ SPIRITUAL_WELLNESS – Bien-être spirituel
      {
        id: 495,
        categoryName: "Pratiques méditatives",
        description: "Échanges autour du yoga, du zen et autres disciplines.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 496,
        categoryName: "Philosophie de vie",
        description:
          "Discussions sur les valeurs, le sens et la quête personnelle.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 497,
        categoryName: "Spiritualités diverses",
        description:
          "Espace ouvert sur les différentes croyances et traditions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 498,
        categoryName: "Rituels et symboles",
        description:
          "Partages sur les pratiques rituelles et leurs significations.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 499,
        categoryName: "Paix intérieure",
        description: "Techniques pour atteindre un état de sérénité durable.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // 🧮 COGNITIVE_ACTIVITY – Activités cognitives spécifiques
      {
        id: 500,
        categoryName: "Jeux de mémoire",
        description:
          "Discussions autour des techniques et jeux pour améliorer la mémoire.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 501,
        categoryName: "Résolution de problèmes",
        description:
          "Partage d'exercices et méthodes pour aiguiser la réflexion logique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 502,
        categoryName: "Langues et apprentissage",
        description:
          "Échanges autour de l'apprentissage des langues étrangères.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 503,
        categoryName: "Développement des capacités analytiques",
        description: "Ressources pour cultiver l'esprit critique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 504,
        categoryName: "Activités créatives",
        description:
          "Idées pour stimuler l'imagination et la pensée divergente.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // 🧘‍♀️ COGNITIVE_WELLNESS – Bien-être cognitif
      {
        id: 505,
        categoryName: "Techniques anti-fatigue mentale",
        description: "Conseils pour lutter contre l'épuisement intellectuel.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 506,
        categoryName: "Gestion du temps et organisation",
        description: "Méthodes pour améliorer la productivité cognitive.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 507,
        categoryName: "Alimentation pour le cerveau",
        description:
          "Discussion sur les aliments bénéfiques pour la fonction cognitive.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 508,
        categoryName: "Mindfulness pour la cognition",
        description:
          "Pratiques de pleine conscience pour mieux gérer les pensées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 509,
        categoryName: "Prévention des troubles cognitifs",
        description:
          "Informations et échanges sur la prévention et la santé cérébrale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },

      // 🏙️ URBAN_INFRASTRUCTURE – Infrastructures urbaines
      {
        id: 510,
        categoryName: "Aménagement urbain",
        description: "Débats sur la planification et la conception des villes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 511,
        categoryName: "Accessibilité",
        description:
          "Discussions sur les infrastructures pour personnes à mobilité réduite.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 512,
        categoryName: "Gestion des espaces publics",
        description:
          "Échanges sur l'entretien et la sécurité des lieux communs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 513,
        categoryName: "Transports urbains",
        description: "Impact des infrastructures sur la mobilité.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 514,
        categoryName: "Innovations urbaines",
        description:
          "Nouveautés technologiques dans le domaine des infrastructures.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },

      // 🚦 TRANSPORTATION – Mobilité et transports urbains
      {
        id: 515,
        categoryName: "Transports en commun",
        description:
          "Avis et améliorations souhaitées pour bus, métro, tramway.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 516,
        categoryName: "Mobilité douce",
        description: "Vélo, trottinette, marche : aménagements et sécurité.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 517,
        categoryName: "Covoiturage et auto-partage",
        description: "Initiatives locales et plateformes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 518,
        categoryName: "Transport écologique",
        description: "Alternatives propres et innovations.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 519,
        categoryName: "Infrastructures routières",
        description: "Problèmes et projets liés aux routes et parkings.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // 🌿 URBAN_ENVIRONMENT – Espaces verts et environnement urbain
      {
        id: 520,
        categoryName: "Parcs et jardins",
        description: "Entretien, accès et activités dans les espaces verts.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 521,
        categoryName: "Biodiversité urbaine",
        description:
          "Protection et développement de la faune et flore locales.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 522,
        categoryName: "Agriculture urbaine",
        description: "Potagers, fermes urbaines et initiatives citoyennes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 523,
        categoryName: "Pollution et qualité de l'air",
        description: "Suivi, prévention et solutions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 524,
        categoryName: "Éducation à l'environnement",
        description: "Sensibilisation et actions dans la communauté.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },

      // 🏢 COMMUNITY_SERVICES – Services communautaires urbains
      {
        id: 525,
        categoryName: "Centres sociaux et culturels",
        description: "Activités, projets et événements locaux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 526,
        categoryName: "Aide aux personnes âgées",
        description: "Services, bénévolat et échanges d'expérience.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 527,
        categoryName: "Soutien aux familles",
        description: "Ressources et accompagnement parental.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 528,
        categoryName: "Insertion sociale",
        description: "Aide à l'emploi et programmes d'intégration.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 529,
        categoryName: "Accès aux services publics",
        description: "Informations pratiques et retours d'expérience.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // ♻️ WASTE_MANAGEMENT – Gestion des déchets urbains
      {
        id: 530,
        categoryName: "Tri sélectif",
        description: "Bonnes pratiques et astuces pour bien trier.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 531,
        categoryName: "Compostage",
        description:
          "Techniques et avantages du compostage domestique et collectif.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 532,
        categoryName: "Réduction des déchets",
        description: "Initiatives zéro déchet et mode de vie durable.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 533,
        categoryName: "Collectes et recyclage",
        description: "Calendriers, lieux et fonctionnement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 534,
        categoryName: "Déchets dangereux",
        description: "Gestion spécifique et prévention.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // 🚀 INNOVATION – Projets d'innovation et technologie
      {
        id: 535,
        categoryName: "Startups et nouvelles technologies",
        description: "Présentation et discussions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 536,
        categoryName: "Smart cities",
        description: "Technologies au service des villes intelligentes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 537,
        categoryName: "Énergies renouvelables",
        description: "Innovations dans le domaine énergétique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 538,
        categoryName: "Mobilité innovante",
        description: "Solutions alternatives et futuristes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 539,
        categoryName: "Tech et inclusion sociale",
        description: "Technologies pour réduire les inégalités.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 🛠️ CONSTRUCTION – Projets de construction et aménagement
      {
        id: 540,
        categoryName: "Projets immobiliers",
        description: "Présentation et débats autour des constructions neuves.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 541,
        categoryName: "Rénovation urbaine",
        description: "Suivi et impacts des projets de rénovation.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 542,
        categoryName: "Normes et sécurité",
        description: "Réglementations et pratiques dans le bâtiment.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 543,
        categoryName: "Matériaux durables",
        description: "Innovations et choix écologiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 544,
        categoryName: "Aménagements publics",
        description: "Parcs, places, équipements sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },

      // 🌍 SUSTAINABILITY – Projets environnementaux et durables
      {
        id: 545,
        categoryName: "Transition énergétique",
        description: "Initiatives pour réduire l'empreinte carbone.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 546,
        categoryName: "Économie circulaire",
        description:
          "Projets favorisant la réutilisation et réduction des déchets.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 547,
        categoryName: "Éco-quartiers",
        description: "Développement et suivi des quartiers durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 548,
        categoryName: "Sensibilisation environnementale",
        description: "Campagnes et actions citoyennes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 549,
        categoryName: "Mobilisation locale",
        description: "Forums d'échanges pour les actions collectives durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },

      // 🤝 COLLABORATION – Projets collaboratifs
      {
        id: 550,
        categoryName: "Gestion de projet",
        description:
          "Outils et méthodes pour coordonner efficacement les équipes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 551,
        categoryName: "Partage de ressources",
        description:
          "Échanges sur les plateformes et pratiques pour mutualiser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 552,
        categoryName: "Communication en équipe",
        description: "Conseils pour une collaboration fluide et transparente.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 553,
        categoryName: "Résolution de conflits",
        description:
          "Techniques pour gérer les désaccords au sein des groupes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 554,
        categoryName: "Succès collaboratifs",
        description: "Partage d'expériences et bonnes pratiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COLLABORATION,
      },

      // 🎯 PERSONAL_DEVELOPMENT – Projets personnels de développement
      {
        id: 555,
        categoryName: "Objectifs personnels",
        description: "Discussion sur la définition et le suivi des objectifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 556,
        categoryName: "Gestion du temps",
        description: "Méthodes et outils pour mieux organiser ses journées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 557,
        categoryName: "Motivation et discipline",
        description: "Techniques pour rester motivé et persévérer.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 558,
        categoryName: "Développement des compétences",
        description: "Ressources pour apprendre et progresser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 559,
        categoryName: "Bilan personnel",
        description: "Partage d'expériences et conseils pour faire le point.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // 📖 GUIDES – Guides et manuels
      {
        id: 560,
        categoryName: "Guides pratiques",
        description: "Manuels et tutoriels pour des activités variées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 561,
        categoryName: "Soutien au quotidien",
        description: "Astuces pour mieux gérer la vie de tous les jours.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 562,
        categoryName: "Guides santé et bien-être",
        description: "Conseils validés pour prendre soin de soi.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 563,
        categoryName: "Guides technologiques",
        description: "Initiation aux nouvelles technologies et outils.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 564,
        categoryName: "Guides environnementaux",
        description: "Bonnes pratiques pour un mode de vie durable.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GUIDES,
      },

      // 🎥 VIDEOS – Vidéos éducatives
      {
        id: 565,
        categoryName: "Tutoriels",
        description: "Vidéos explicatives pour apprendre pas à pas.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 566,
        categoryName: "Conférences",
        description: "Enregistrements d'événements et débats.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 567,
        categoryName: "Interviews d'experts",
        description: "Échanges avec des spécialistes de différents domaines.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 568,
        categoryName: "Vlogs de projets",
        description: "Suivi vidéo des avancées dans divers projets.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 569,
        categoryName: "Séances pratiques",
        description: "Ateliers filmés pour s'exercer concrètement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.VIDEOS,
      },

      // 📝 ARTICLES - Articles et études
      {
        id: 570,
        categoryName: "Recherches récentes",
        description: "Présentation d'études et innovations scientifiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 571,
        categoryName: "Analyses thématiques",
        description: "Articles approfondis sur des sujets variés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 572,
        categoryName: "Témoignages",
        description: "Expériences vécues partagées par les membres.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 573,
        categoryName: "Revues de presse",
        description: "Synthèses d'actualités pertinentes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 574,
        categoryName: "Critiques et débats",
        description: "Discussions autour des idées et opinions exposées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTICLES,
      },

      // 🎙️ PODCASTS - Podcasts et interviews
      {
        id: 575,
        categoryName: "Interviews inspirantes",
        description: "Rencontres avec des experts et acteurs du domaine.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 576,
        categoryName: "Histoires de vie",
        description: "Récits personnels et parcours motivants.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 577,
        categoryName: "Discussions thématiques",
        description: "Débats et échanges autour de sujets variés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 578,
        categoryName: "Conseils pratiques",
        description: "Astuces et recommandations pour le quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 579,
        categoryName: "Actualités et innovations",
        description: "Focus sur les dernières tendances et nouveautés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PODCASTS,
      },

      // 📊 INFOGRAPHICS - Infographies et données visuelles
      {
        id: 580,
        categoryName: "Visualisation de données",
        description: "Présentation claire de statistiques et résultats.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 581,
        categoryName: "Actualités et innovations",
        description: "Focus sur les dernières tendances et nouveautés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 582,
        categoryName: "Cartographies thématiques",
        description: "Représentations graphiques par zones géographiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 583,
        categoryName: "Schémas explicatifs",
        description:
          "Explications visuelles pour mieux comprendre des concepts.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 584,
        categoryName: "Tendances et évolutions",
        description: "Graphiques montrant des évolutions dans le temps.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 585,
        categoryName: "Guides visuels",
        description: "Infographies pédagogiques pour apprendre rapidement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },

      // 🏥 HEALTHCARE - Services médicaux et santé
      {
        id: 586,
        categoryName: "Conseils santé générale",
        description: "Discussions sur les bonnes pratiques à adopter.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 587,
        categoryName: "Maladies chroniques",
        description: "Espace d'échange et de soutien pour les patients.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 588,
        categoryName: "Médecines alternatives",
        description: "Informations et retours d'expérience.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 589,
        categoryName: "Santé mentale",
        description:
          "Ressources et partages autour du bien-être psychologique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 590,
        categoryName: "Prévention et dépistage",
        description: "Sensibilisation et conseils pour agir en amont.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },

      // 🧑‍🏫 EDUCATION - Services éducatifs et formations
      {
        id: 591,
        categoryName: "Méthodes pédagogiques",
        description: "Échanges sur les approches et innovations éducatives.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 592,
        categoryName: "Formations en ligne",
        description: "Partages de ressources et retours d'expérience.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 593,
        categoryName: "Apprentissage tout au long de la vie",
        description: "Conseils pour apprendre à tout âge.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 594,
        categoryName: "Éducation spécialisée",
        description: "Discussions autour des besoins spécifiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 595,
        categoryName: "Échanges entre enseignants",
        description: "Partage de pratiques et outils pédagogiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🛒 DAILY_HELP - Aides quotidiennes (courses, ménage)
      {
        id: 596,
        categoryName: "Organisation domestique",
        description: "Astuces pour gérer les tâches ménagères efficacement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 597,
        categoryName: "Aide aux courses",
        description: "Services et conseils pour faire ses courses facilement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 598,
        categoryName: "Soutien aux aidants",
        description: "Ressources pour les personnes aidant au quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 599,
        categoryName: "Partage d'expériences",
        description: "Récits et conseils pour mieux s'organiser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 600,
        categoryName: "Échanges de services",
        description: "Plateformes et idées pour s'entraider localement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // 🧑‍🤝‍🧑 SOCIAL_SUPPORT - Services sociaux et accompagnement
      {
        id: 601, // ✅ CORRIGÉ : était 600
        categoryName: "Accompagnement social",
        description: "Partage d'expériences et ressources pour l'aide sociale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 602, // ✅ CORRIGÉ : était 601
        categoryName: "Aide aux familles",
        description: "Soutien et échanges pour les familles en difficulté.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 603, // ✅ CORRIGÉ : était 602
        categoryName: "Insertion professionnelle",
        description: "Conseils pour retrouver un emploi ou se former.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 604, // ✅ CORRIGÉ : était 603
        categoryName: "Lutte contre l'exclusion",
        description: "Discussions autour de l'inclusion sociale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 605, // ✅ CORRIGÉ : était 604
        categoryName: "Bénévolat et engagement",
        description: "Opportunités et témoignages d'action solidaire.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },

      // 🏢 ADMINISTRATIVE_HELP - Services administratifs et juridiques
      {
        id: 606, // ✅ CORRIGÉ : était 605
        categoryName: "Démarches administratives",
        description: "Aide et conseils pour gérer ses papiers.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 607, // ✅ CORRIGÉ : était 606
        categoryName: "Droits et devoirs",
        description: "Informations juridiques accessibles à tous.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 608, // ✅ CORRIGÉ : était 607
        categoryName: "Accès aux aides",
        description: "Discussions sur les aides sociales et financières.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 609, // ✅ CORRIGÉ : était 608
        categoryName: "Procédures juridiques",
        description: "Échanges sur les démarches légales courantes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 610, // ✅ CORRIGÉ : était 609
        categoryName: "Médiation et résolution de conflits",
        description: "Solutions pour régler les litiges.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },

      // 🤝 PSYCHOLOGICAL_SUPPORT - Soutien psychologique et émotionnel
      {
        id: 611, // ✅ CORRIGÉ : était 610
        categoryName: "Gestion du stress",
        description: "Techniques et partages pour mieux gérer la pression.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 612, // ✅ CORRIGÉ : était 611
        categoryName: "Dépression et anxiété",
        description: "Espace d'écoute et de conseils.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 613, // ✅ CORRIGÉ : était 612
        categoryName: "Relations et émotions",
        description: "Discussions sur les liens sociaux et la communication.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 614, // ✅ CORRIGÉ : était 613
        categoryName: "Thérapies alternatives",
        description: "Informations sur différentes approches thérapeutiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 615, // ✅ CORRIGÉ : était 614
        categoryName: "Groupes de parole",
        description: "Organisation et témoignages d'ateliers de soutien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },

      // 💊 MEDICAL_AID - Aide médicale et premiers secours
      {
        id: 616, // ✅ CORRIGÉ : était 615
        categoryName: "Premiers secours",
        description: "Formation et conseils pour intervenir rapidement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 617, // ✅ CORRIGÉ : était 616
        categoryName: "Urgences médicales",
        description: "Informations pour faire face aux situations critiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 618, // ✅ CORRIGÉ : était 617
        categoryName: "Matériel médical",
        description: "Partage d'expérience sur l'utilisation d'équipements.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 619, // ✅ CORRIGÉ : était 618
        categoryName: "Soins à domicile",
        description: "Discussions sur l'accompagnement médical à la maison.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 620, // ✅ CORRIGÉ : était 619
        categoryName: "Prévention sanitaire",
        description: "Sensibilisation aux gestes et habitudes santé.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },

      // 🏠 HOUSING_SUPPORT - Aide au logement d'urgence
      {
        id: 621, // ✅ CORRIGÉ : était 620
        categoryName: "Solutions d'hébergement",
        description: "Informations sur les structures d'accueil.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 622, // ✅ CORRIGÉ : était 621
        categoryName: "Droits au logement",
        description:
          "Aide juridique et administrative pour accéder au logement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 623, // ✅ CORRIGÉ : était 622
        categoryName: "Prévention de l'exclusion",
        description: "Actions pour éviter la perte de domicile.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 624, // ✅ CORRIGÉ : était 623
        categoryName: "Accompagnement social",
        description: "Soutien et suivi pour les personnes en difficulté.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 625, // ✅ CORRIGÉ : était 624
        categoryName: "Initiatives communautaires",
        description: "Projets locaux pour le logement solidaire.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },

      // 🥖 FOOD_AID - Aide alimentaire
      {
        id: 626, // ✅ CORRIGÉ : était 625
        categoryName: "Distribution alimentaire",
        description: "Informations sur les lieux et horaires de distribution.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 627, // ✅ CORRIGÉ : était 626
        categoryName: "Cuisine solidaire",
        description: "Partage de recettes simples et économiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 628, // ✅ CORRIGÉ : était 627
        categoryName: "Nutrition et santé",
        description:
          "Conseils pour une alimentation équilibrée en situation difficile.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 629, // ✅ CORRIGÉ : était 628
        categoryName: "Collectes et dons",
        description:
          "Organisation et participation aux collectes alimentaires.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 630, // ✅ CORRIGÉ : était 629
        categoryName: "Accès aux aides alimentaires",
        description: "Informations sur les programmes et aides disponibles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.FOOD_AID,
      },

      // 📞 EMERGENCY_SERVICES - Services d'urgence et intervention rapide
      {
        id: 631, // ✅ CORRIGÉ : était 630
        categoryName: "Numéros d'urgence",
        description: "Informations pratiques et procédures à suivre.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 632, // ✅ CORRIGÉ : était 631
        categoryName: "Intervention rapide",
        description: "Témoignages et conseils pour réagir efficacement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 633, // ✅ CORRIGÉ : était 632
        categoryName: "Préparation aux catastrophes",
        description:
          "Conseils pour se préparer à différentes situations d'urgence.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 634, // ✅ CORRIGÉ : était 633
        categoryName: "Soutien aux victimes",
        description:
          "Ressources et accompagnement après un événement traumatique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 635, // ✅ CORRIGÉ : était 634
        categoryName: "Coordination des secours",
        description:
          "Discussions sur l'organisation des équipes d'intervention.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },

      // 🏃‍♂️ PHYSICAL_ACTIVITY - Programmes sportifs et bien-être physique
      {
        id: 636, // ✅ CORRIGÉ : était 635
        categoryName: "Programmes d'entraînement",
        description: "Partage de routines et conseils sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 637, // ✅ CORRIGÉ : était 636
        categoryName: "Motivation et objectifs",
        description: "Échanges pour rester motivé et atteindre ses buts.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 638, // ✅ CORRIGÉ : était 637
        categoryName: "Activités adaptées",
        description: "Sports pour tous niveaux et conditions physiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 639, // ✅ CORRIGÉ : était 638
        categoryName: "Nutrition sportive",
        description: "Conseils alimentaires pour sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 640, // ✅ CORRIGÉ : était 639
        categoryName: "Suivi et progression",
        description: "Outils et méthodes pour suivre ses performances.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },

      // 🧠 COGNITIVE_TRAINING - Programmes cognitifs et développement mental
      {
        id: 641,
        categoryName: "Exercices de mémoire",
        description: "Techniques pour améliorer la mémoire au quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 642,
        categoryName: "Résolution de problèmes",
        description: "Stratégies pour développer la pensée critique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 643,
        categoryName: "Jeux cérébraux",
        description:
          "Partage de jeux et applications pour stimuler le cerveau.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 644,
        categoryName: "Apprentissage continu",
        description: "Ressources pour apprendre tout au long de la vie.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 645,
        categoryName: "Gestion du stress mental",
        description: "Techniques pour préserver la santé cognitive.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },

      // 🥗 NUTRITION - Programmes nutritionnels
      // Nutrition pour sportifs – Conseils spécifiques pour les besoins énergétiques.
      {
        id: 646,
        categoryName: "Plans alimentaires",
        description: "Échanges sur différents types de régimes équilibrés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 647,
        categoryName: "Alimentation durable",
        description:
          "Conseils pour une nutrition respectueuse de l’environnement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 648,
        categoryName: "Allergies et intolérances",
        description: "Partage d’expériences et recettes adaptées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 649,
        categoryName: "Suppléments et vitamines",
        description: "Discussions sur les compléments alimentaires.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },

      // 🤝 SOCIAL_ENGAGEMENT - Programmes sociaux et communautaires
      {
        id: 650,
        categoryName: "Initiatives locales",
        description: "Partage et organisation de projets citoyens.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 651,
        categoryName: "Volontariat et bénévolat",
        description: "Opportunités et expériences d’engagement.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 652,
        categoryName: "Solidarité intergénérationnelle",
        description: "Actions entre jeunes et seniors.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 653,
        categoryName: "Lutte contre l’isolement",
        description: "Programmes pour renforcer le lien social.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 654,
        categoryName: "Inclusion sociale",
        description: "Discussions autour de la diversité et de l’égalité.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },

      // 🌍 ENVIRONMENTAL_ACTION - Programmes environnementaux
      {
        id: 655,
        categoryName: "Actions de nettoyage",
        description: "Organisation d’opérations locales de dépollution.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 656,
        categoryName: "Sensibilisation écologique",
        description: "Partage de ressources et d’événements.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 657,
        categoryName: "Réduction des déchets",
        description: "Conseils pour diminuer son impact personnel.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 658,
        categoryName: "Transition énergétique",
        description: "Discussions sur les alternatives durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 659,
        categoryName: "Protection de la biodiversité",
        description: "Initiatives pour préserver la faune et la flore.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },

      // 🏆 PHYSICAL_ACHIEVEMENTS - Badges de performance physique
      {
        id: 660,
        categoryName: "Marathon et courses",
        description: "Échanges sur les défis et entraînements.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 661,
        categoryName: "Objectifs personnels",
        description: "Partage des progrès et résultats sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 662,
        categoryName: "Compétitions locales",
        description: "Informations sur les événements sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 663,
        categoryName: "Endurance et force",
        description: "Discussions sur le développement physique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 664,
        categoryName: "Santé et récupération",
        description: "Conseils pour éviter les blessures.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },

      // 🧠 COGNITIVE_ACHIEVEMENTS - Badges cognitifs
      {
        id: 665,
        categoryName: "Défis intellectuels",
        description: "Organisation de quiz et concours.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 666,
        categoryName: "Apprentissage de nouvelles compétences",
        description: "Partages d’expériences.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 667,
        categoryName: "Méthodes de mémorisation",
        description: "Échanges de techniques efficaces.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 668,
        categoryName: "Résolution de problèmes",
        description: "Études de cas et solutions collaboratives.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 669,
        categoryName: "Créativité cognitive",
        description: "Encouragement à l’innovation et à la pensée divergente.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },

      // 🥗 NUTRITION_ACHIEVEMENTS - Badges nutritionnels
      {
        id: 670,
        categoryName: "Repas équilibrés",
        description: "Partage de menus sains et variés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 671,
        categoryName: "Défis alimentaires",
        description: "Participation à des challenges nutritionnels.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 672,
        categoryName: "Cuisine durable",
        description: "Recettes et astuces anti-gaspillage.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 673,
        categoryName: "Suivi nutritionnel",
        description: "Outils et conseils pour contrôler son alimentation.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 674,
        categoryName: "Éducation alimentaire",
        description: "Ressources pédagogiques pour tous âges.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },

      // 🤝 SOCIAL_ACHIEVEMENTS - Badges sociaux
      {
        id: 675,
        categoryName: "Organisation d’événements",
        description:
          "Partage d’expériences dans la création d’événements communautaires.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 676,
        categoryName: "Engagement bénévole",
        description: "Reconnaissance des actions bénévoles régulières.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 677,
        categoryName: "Médiation et résolution de conflits",
        description: "Partages de bonnes pratiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 678,
        categoryName: "Développement des réseaux sociaux",
        description: "Création et animation de groupes locaux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 679,
        categoryName: "Promotion de la diversité",
        description: "Actions pour l’inclusion et la diversité sociale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },

      // 🌍 ENVIRONMENTAL_ACHIEVEMENTS - Badges environnementaux
      {
        id: 680,
        categoryName: "Réduction de l’empreinte carbone",
        description: "Échanges sur les actions écologiques personnelles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 681,
        categoryName: "Participation à des projets verts",
        description: "Implication dans des initiatives locales ou globales.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 682,
        categoryName: "Innovation écologique",
        description: "Partage de solutions technologiques durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 683,
        categoryName: "Éducation à l'environnement",
        description: "Organisation d’ateliers et formations.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 684,
        categoryName: "Promotion du recyclage",
        description: "Actions de sensibilisation et organisation de collectes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },

      // 🌱 ENVIRONMENTAL - Activités environnementales
      {
        id: 685,
        categoryName: "Jardinage écologique",
        description: "Techniques et conseils pour un jardin durable.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 686,
        categoryName: "Observation de la nature",
        description: "Partages d’expériences et de découvertes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 687,
        categoryName: "Mobilité douce",
        description: "Échanges sur les alternatives à la voiture.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 688,
        categoryName: "Consommation responsable",
        description: "Discussions sur les achats durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 689,
        categoryName: "Protection des ressources naturelles",
        description: "Initiatives locales.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },

      // 💬 GENERAL - Discussions générales
      {
        id: 690,
        categoryName: "Actualités et événements",
        description: "Discussions sur les nouveautés et événements du moment.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 691,
        categoryName: "Questions-réponses",
        description: "Espace pour poser toutes sortes de questions.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 692,
        categoryName: "Échanges informels",
        description: "Discussions libres et conviviales.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 693,
        categoryName: "Suggestions et améliorations",
        description: "Retours et idées pour la plateforme.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 694,
        categoryName: "Présentations des membres",
        description: "Espace pour se présenter à la communauté.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.GENERAL,
      },

      // 🧠 PERSONAL_DEVELOPMENT - Discussions développement personnel
      {
        id: 695,
        categoryName: "Objectifs et motivation",
        description: "Partage d’astuces pour atteindre ses objectifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 696,
        categoryName: "Gestion du temps",
        description: "Techniques et outils pour mieux s’organiser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 697,
        categoryName: "Développement des compétences",
        description: "Ressources pour apprendre et progresser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 698,
        categoryName: "Mindfulness et méditation",
        description: "Discussions autour des pratiques de pleine conscience.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 699,
        categoryName: "Coaching et mentorat",
        description: "Échanges et conseils personnalisés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // 🥗 NUTRITION - Discussions nutrition
      {
        id: 700,
        categoryName: "Conseils alimentaires",
        description: "Partage de recommandations pour une alimentation saine.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 701,
        categoryName: "Régimes spécifiques",
        description:
          "Discussions sur végétarisme, véganisme, sans gluten, etc.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 702,
        categoryName: "Suppléments et vitamines",
        description: "Échanges autour des compléments alimentaires.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 703,
        categoryName: "Recettes et astuces cuisine",
        description: "Partage de recettes équilibrées et faciles à préparer.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 704,
        categoryName: "Nutrition et sport",
        description: "Adaptation de l’alimentation à l’activité physique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION,
      },

      // 🤝 SOCIAL - Discussions sociales
      {
        id: 705,
        categoryName: "Relations interpersonnelles",
        description: "Échanges sur l’amitié, la famille et le travail.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 706,
        categoryName: "Inclusion et diversité",
        description: "Discussions sur la lutte contre les discriminations.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 707,
        categoryName: "Événements communautaires",
        description: "Annonces et retours d’événements sociaux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 708,
        categoryName: "Soutien et entraide",
        description: "Espace d’écoute et d’aide mutuelle.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 709,
        categoryName: "Culture et loisirs",
        description: "Partage autour des passions communes et activités.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 🌍 ENVIRONMENTAL - Discussions environnementales
      {
        id: 710,
        categoryName: "Changements climatiques",
        description: "Informations et débats sur le réchauffement global.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 711,
        categoryName: "Actions locales",
        description: "Organisation et suivi d’initiatives de terrain.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 712,
        categoryName: "Énergies renouvelables",
        description: "Partage d’infos sur solaire, éolien, biomasse, etc.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 713,
        categoryName: "Zéro déchet",
        description:
          "Conseils pratiques pour réduire ses déchets au quotidien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 714,
        categoryName: "Biodiversité",
        description:
          "Discussions sur la protection des espèces et des habitats.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },

      // 🧠 MENTAL - Bien-être mental et cognitif
      {
        id: 715,
        categoryName: "Gestion du stress",
        description: "Techniques et expériences pour mieux gérer le stress.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 716,
        categoryName: "Anxiété et dépression",
        description: "Partage d’informations et soutien.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 717,
        categoryName: "Techniques de relaxation",
        description: "Exercices et conseils pour se détendre.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 718,
        categoryName: "Développement cognitif",
        description: "Jeux et activités pour stimuler le cerveau.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 719,
        categoryName: "Soutien psychologique",
        description: "Ressources et échanges autour de l’aide professionnelle.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },

      // MANUAL_SKILL - Compétences manuelles
      {
        id: 720,
        categoryName: "Bricolage et DIY",
        description: "Projets, astuces et tutoriels pour les amateurs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 721,
        categoryName: "Travaux manuels créatifs",
        description: "Peinture, sculpture, couture et plus.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 722,
        categoryName: "Jardinage et horticulture",
        description: "Conseils pratiques et partages d’expériences.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 723,
        categoryName: "Réparation et maintenance",
        description: "Discussions sur la réparation d’objets et appareils.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 724,
        categoryName: "Apprentissage technique",
        description: "Partage de ressources et formations.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },

      // NUTRITIONAL_SKILL (57) - Compétences nutritionnelles
      {
        id: 725,
        categoryName: "Cuisiner sainement",
        description: "Techniques pour préparer des repas équilibrés.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 726,
        categoryName: "Planification des repas",
        description: "Organisation hebdomadaire pour une alimentation variée.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 727,
        categoryName: "Connaissances des nutriments",
        description: "Comprendre les vitamines, minéraux et macronutriments.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 728,
        categoryName: "Alimentation adaptée",
        description: "Nutrition spécifique pour enfants, seniors ou sportifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 729,
        categoryName: "Éducation alimentaire",
        description: "Sensibilisation aux choix alimentaires durables.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },

      // CREATIVE_SKILL (58) - Compétences créatives
      {
        id: 730,
        categoryName: "Techniques artistiques",
        description: "Dessin, peinture, collage et autres médias.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 731,
        categoryName: "Écriture créative",
        description: "Atelier d’écriture, poésie et storytelling.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 732,
        categoryName: "Musique et composition",
        description: "Partage d’idées et création musicale.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 733,
        categoryName: "Design et graphisme",
        description: "Apprentissage des outils et styles graphiques.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 734,
        categoryName: "DIY créatif",
        description: "Projets manuels artistiques et innovations maison.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },

      // MEDICAL_CARE (59) - Soins médicaux
      {
        id: 735,
        categoryName: "Premiers secours",
        description: "Techniques d’urgence et prévention.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 736,
        categoryName: "Suivi des maladies chroniques",
        description: "Conseils et expériences partagées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 737,
        categoryName: "Pharmacologie",
        description: "Informations sur les médicaments et leurs effets.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 738,
        categoryName: "Prévention santé",
        description: "Vaccination, dépistage et hygiène de vie.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 739,
        categoryName: "Santé mentale",
        description: "Échanges sur le soutien psychologique et psychiatrique.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },

      // ARTISTIC (60) - Artistique
      {
        id: 740,
        categoryName: "Expositions et événements",
        description: "Annonces et retours sur manifestations culturelles.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 740,
        categoryName: "Partage d’œuvres",
        description: "Galerie virtuelle des créations des membres.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 741,
        categoryName: "Critiques constructives",
        description: "Feedback bienveillant sur les œuvres.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 742,
        categoryName: "Collaboration artistique",
        description: "Projets communs et partenariats créatifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 743,
        categoryName: "Formation artistique",
        description: "Ressources pour apprendre et progresser.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ARTISTIC,
      },

      // DISCUSSIONS (61) - Discussions générales thématiques
      {
        id: 744,
        categoryName: "Actualités et débats",
        description: "Échanges sur les sujets d’actualité.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 745,
        categoryName: "Technologie et innovation",
        description: "Discussions sur les nouvelles technologies.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 746,
        categoryName: "Philosophie et société",
        description: "Réflexions et débats autour des valeurs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 747,
        categoryName: "Culture et loisirs",
        description: "Partage d’idées sur livres, films, voyages.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 748,
        categoryName: "Questions diverses",
        description: "Espace libre pour tous types de sujets.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // CREATIVE (62) - Créatif
      {
        id: 749,
        categoryName: "Projets artistiques",
        description: "Partage et organisation de projets créatifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 750,
        categoryName: "Ateliers en ligne",
        description: "Sessions de création collaborative.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 751,
        categoryName: "Inspiration et idées",
        description: "Sources d’inspiration pour tous les artistes.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 752,
        categoryName: "Techniques mixtes",
        description: "Combinaison de différentes formes d’art.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 753,
        categoryName: "Concours et challenges",
        description: "Participation à des défis créatifs.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.CREATIVE,
      },

      // 👴 ELDERLY_SUPPORT (Soutien aux personnes âgées)
      {
        id: 754,
        categoryName: "Soins à domicile",
        description:
          "Partage de conseils et d’astuces pour accompagner les aînés chez eux.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 755,
        categoryName: "Prévention santé seniors",
        description:
          "Discussions sur les bonnes pratiques pour rester en bonne santé en vieillissant.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 756,
        categoryName: "Isolement et lien social",
        description:
          "Solutions pour maintenir une vie sociale active chez les personnes âgées.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 757,
        categoryName: "Aidants familiaux",
        description:
          "Espace d’échange pour les proches aidants, leurs besoins et leurs défis.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 758,
        categoryName: "Droits et démarches",
        description:
          "Informations pratiques sur les aides, retraites, et dispositifs accessibles aux seniors.",
        typeId: ECategoryType.FORUM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
    ],
    skipDuplicates: true,
  });
}

seedForum()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedForum };

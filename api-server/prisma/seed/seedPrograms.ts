import {
  ECategoryChapter,
  ECategoryType,
} from "@/types/data/categories/ECategory";
import { PrismaClient } from "@/prisma/client";

const prisma = new PrismaClient();

async function seedPrograms() {
  await prisma.category.createMany({
    data: [
      // 7. PROGRAM
      // ----------
      // 📅 Programmes ou challenges planifiés

      // 🏃 PHYSICAL
      {
        id: 962,
        categoryName: "Programme remise en forme",
        description: "Planification progressive d’activités physiques.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 963,
        categoryName: "Challenge 10.000 pas par jour",
        description: "Objectif quotidien pour favoriser la mobilité.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 964,
        categoryName: "Routine matinale d’activation corporelle",
        description: "Étirements et mouvements doux chaque matin.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 965,
        categoryName: "Entraînement cardio hebdomadaire",
        description: "Séances organisées pour renforcer l’endurance.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 966,
        categoryName: "Parcours de motricité planifié",
        description:
          "Programme structuré pour améliorer coordination et équilibre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },

      // 🧠 COGNITION
      {
        id: 967,
        categoryName: "Programme de stimulation cognitive",
        description:
          "Exercices réguliers pour entretenir les capacités mentales.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 968,
        categoryName: "Challenge mémoire 30 jours",
        description: "Activités quotidiennes pour améliorer la mémoire.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 969,
        categoryName: "Plan d’entraînement attentionnel",
        description: "Exercices progressifs pour la concentration.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 970,
        categoryName: "Programme de flexibilité mentale",
        description: "Jeux pour développer l’adaptabilité cognitive.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 971,
        categoryName: "Routine de raisonnement logique",
        description: "Série structurée d’énigmes/logiques.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // 🧘 SPIRITUAL_WELLNESS
      {
        id: 972,
        categoryName: "Défi bien-être 21 jours",
        description: "Activités quotidiennes pour se reconnecter à soi.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 973,
        categoryName: "Programme d’auto-soin hebdomadaire",
        description: "Pratiques régulières pour prendre soin de soi.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 974,
        categoryName: "Plan détente et relaxation",
        description: "Séances programmées de gestion du stress.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 975,
        categoryName: "Routine de gratitude",
        description:
          "Exercice quotidien d’identification des aspects positifs.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 976,
        categoryName: "Cycle de gestion des émotions",
        description: "Programme d’observation et de régulation émotionnelle.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🧠 EMOTIONAL_WELLNESS
      {
        id: 977,
        categoryName: "Challenge émotion positive",
        description: "Identifier et cultiver les émotions agréables.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 978,
        categoryName: "Programme de régulation émotionnelle",
        description:
          "Séances structurées pour comprendre et moduler ses émotions.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 979,
        categoryName: "Plan d’expression émotionnelle",
        description:
          "Activités programmées pour libérer et nommer ses ressentis.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 980,
        categoryName: "Routine journalière d’humeur",
        description: "Auto-évaluation quotidienne des émotions.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 981,
        categoryName: "Cycle d’éducation émotionnelle",
        description: "Modules d’apprentissage progressif des émotions.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🦻 SENSORY
      {
        id: 982,
        categoryName: "Programme éveil des 5 sens",
        description: "Activités planifiées autour de chaque sens.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 983,
        categoryName: "Challenge sensoriel quotidien",
        description: "Une stimulation sensorielle différente par jour.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 984,
        categoryName: "Routine multisensorielle",
        description: "Combinaisons de stimulations régulières.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 985,
        categoryName: "Plan d’exploration sensorielle",
        description: "Découverte progressive de sons, textures, goûts, etc.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 986,
        categoryName: "Cycle de rééducation sensorielle",
        description:
          "Programme pour affiner ou restaurer certaines perceptions.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 🫂 SOCIAL_WELLNESS
      {
        id: 987,
        categoryName: "Défi “1 lien par jour”",
        description: "Recréer du lien social quotidiennement.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 988,
        categoryName: "Programme d’interaction progressive",
        description: "Planifier des rencontres graduées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 989,
        categoryName: "Routine de conversation",
        description: "Activités régulières de communication orale.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 990,
        categoryName: "Challenge d’ouverture sociale",
        description: "Engager avec des inconnus dans des cadres sécurisants.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 991,
        categoryName: "Programme d’empathie",
        description:
          "Séances guidées pour développer l’écoute et la compréhension de l’autre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🎨 CREATIVE (ID: CREATIVE)
      {
        id: 992,
        categoryName: "Challenge artistique mensuel",
        description: "Un projet créatif par semaine.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 993,
        categoryName: "Programme d’écriture créative",
        description: "Séquences guidées pour développer l’imagination.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 994,
        categoryName: "Routine artistique du soir",
        description:
          "Rituel quotidien de création (dessin, musique, écriture).",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 995,
        categoryName: "Cycle découverte artistique",
        description: "Explorer différentes formes d’art de façon structurée.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 996,
        categoryName: "Plan “1 jour, 1 création”",
        description: "Favoriser l’expression libre et régulière.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.CREATIVE,
      },

      // 🧪 INNOVATION
      {
        id: 997,
        categoryName: "Challenge innovation locale",
        description: "Proposer une amélioration par semaine.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 998,
        categoryName: "Programme de résolution créative de problème",
        description: "Exercices de pensée divergente.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 999,
        categoryName: "Cycle “créer pour changer”",
        description: "Séances orientées vers la transformation sociale.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1000,
        categoryName: "Routine invention/détournement",
        description: "Réutiliser ou améliorer un objet existant.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1001,
        categoryName: "Plan d’expérimentation autonome",
        description: "Tester des idées originales sur une période donnée.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 🤝 HELP
      {
        id: 1002,
        categoryName: "Programme de tutorat solidaire",
        description: "Planifier des sessions d’aide entre pairs.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1002,
        categoryName: "Challenge “aider chaque jour”",
        description: "Une action bienveillante quotidienne.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1003,
        categoryName: "Routine de soutien mutuel",
        description: "Activités d’entraide programmées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1004,
        categoryName: "Cycle d’écoute active",
        description: "Ateliers pour mieux comprendre et accompagner l’autre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1005,
        categoryName: "Plan d’intervention sociale",
        description: "Participer à des actions concrètes pour autrui.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // 🥗 NUTRITIONAL
      {
        id: 1006,
        categoryName: "Défi “manger sain 30 jours”",
        description: "Objectifs nutritionnels quotidiens.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1007,
        categoryName: "Programme de rééquilibrage alimentaire",
        description: "Séances hebdomadaires d’ajustement diététique.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1008,
        categoryName: "Routine planification des repas",
        description: "Préparer les menus de la semaine.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1009,
        categoryName: "Cycle découverte des aliments",
        description: "Thématique nutritionnelle chaque jour.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1010,
        categoryName: "Plan nutrition-santé",
        description:
          "Intégration de recommandations médicales dans les habitudes alimentaires.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.NUTRITION,
      },

      // 📚 EDUCATION
      {
        id: 1011,
        categoryName: "Programme d’apprentissage progressif",
        description: "Développement de nouvelles compétences par paliers.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1012,
        categoryName: "Challenge lecture 10 min par jour",
        description: "Favoriser la concentration et la culture.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1013,
        categoryName: "Cycle de découverte de savoirs",
        description: "Exploration de nouveaux domaines.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1014,
        categoryName: "Routine cognitive quotidienne",
        description: "Structurer la journée autour d’un moment de stimulation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1015,
        categoryName: "Plan d’auto-formation",
        description: "Séquencement d’un parcours d’apprentissage autonome.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🎭 INTELLECTUAL_WELLNESS
      {
        id: 1016,
        categoryName: "Challenge “1 découverte culturelle/jour”",
        description: "Explorer un aspect culturel quotidiennement.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1017,
        categoryName: "Programme de visites culturelles",
        description: "Planification hebdomadaire ou mensuelle.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1018,
        categoryName: "Cycle de cinéma ou littérature",
        description: "Exploration de thèmes à travers des œuvres.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1019,
        categoryName: "Routine de médiation culturelle",
        description: "Activités régulières pour partager la culture.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1020,
        categoryName: "Plan d’immersion artistique",
        description: "Activités régulières pour partager la culture.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 🏥 HEALTHCARE
      {
        id: 1021,
        categoryName: "Programme suivi de santé",
        description: "Activités planifiées autour du bien-être médical.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1022,
        categoryName: "Challenge “hygiène de vie”",
        description: "Adopter de bonnes pratiques sur 21 ou 30 jours.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1023,
        categoryName: "Plan d’activité physique adaptée",
        description: "Structuré selon les capacités de chacun.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1024,
        categoryName: "Routine de suivi médical",
        description: "Vérification périodique des constantes ou symptômes.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1025,
        categoryName: "Cycle de prévention santé",
        description: "Séances éducatives et préventives organisées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.HEALTHCARE,
      },

      // 💬 DISCUSSIONS
      {
        id: 1026,
        categoryName: "Challenge “1 sujet par jour”",
        description: "Favoriser la parole sur des thèmes variés.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1027,
        categoryName: "Programme d’échange structuré",
        description: "Sessions planifiées de débats ou cercles de parole.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1028,
        categoryName: "Routine de discussion quotidienne",
        description: "Moments réguliers d’expression libre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1029,
        categoryName: "Cycle d’ateliers de parole",
        description: "Interactions thématiques encadrées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1030,
        categoryName: "Plan de dialogue intergénérationnel",
        description: "Favoriser le lien entre âges.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // 🧍‍♂️ PERSONAL_DEVELOPMENT
      {
        id: 1031,
        categoryName: "Défi autonomie quotidienne",
        description: "Objectifs pratiques pour développer l’indépendance.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1032,
        categoryName: "Programme d’auto-organisation",
        description: "Planification d’activités auto-gérées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1033,
        categoryName: "Routine des tâches de la vie courante",
        description: "Activités pratiques hebdomadaires.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1034,
        categoryName: "Cycle de développement personnel",
        description: "Séances pour renforcer la prise d’initiative.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1035,
        categoryName: "Plan de montée en autonomie",
        description: "Suivi progressif d’autonomisation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // 🧾 ADMINISTRATIVE_HELP
      {
        id: 1036,
        categoryName: "Challenge administratif",
        description: "Une démarche administrative par jour/semaine.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1037,
        categoryName: "Programme d’aide aux démarches",
        description: "Sessions guidées pour formalités diverses.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1038,
        categoryName: "Routine de gestion personnelle",
        description: "Organisation des papiers et des finances.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1039,
        categoryName: "Cycle de formation administrative",
        description: "Comprendre les droits et les procédures.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1040,
        categoryName: "Plan de simplification des documents",
        description: "Classement et accessibilité des infos clés.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },

      // 🏘️ ENVIRONMENTAL_ACTION
      {
        id: 1041,
        categoryName: "Challenge écolo 21 jours",
        description: "Un geste vert chaque jour.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1042,
        categoryName: "Programme de jardinage durable",
        description: "Séances de culture planifiées.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1043,
        categoryName: "Cycle d’éducation écologique",
        description: "Ateliers pour comprendre l’impact environnemental.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1044,
        categoryName: "Routine de réduction des déchets",
        description: "Actions régulières pour limiter son empreinte.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1045,
        categoryName: "Plan de nettoyage collectif",
        description: "Activités en groupe pour un environnement propre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },

      // 🧒 SOCIAL_ENGAGEMENT
      {
        id: 1046,
        categoryName: "Challenge engagement jeunesse",
        description: "Impliquer les jeunes dans une mission.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1047,
        categoryName: "Programme mentorat jeune",
        description: "Accompagnement structuré.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1048,
        categoryName: "Routine éducative hebdomadaire",
        description: "Activités ludiques et formatrices.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1049,
        categoryName: "Cycle “confiance en soi” pour jeunes",
        description: "Activités de valorisation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1050,
        categoryName: "Plan d’implication communautaire",
        description: "Actions sociales planifiées pour les jeunes.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },

      // 🧓 ELDERLY_SUPPORT (ID: ELDERLY_SUPPORT)
      {
        id: 1051,
        categoryName: "Programme d’éveil quotidien",
        description: "Activités légères et régulières.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1052,
        categoryName: "Challenge autonomie senior",
        description: "Encouragement de l’indépendance.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1053,
        categoryName: "Routine cognitive douce",
        description: "Exercices adaptés.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1054,
        categoryName: "Cycle intergénérationnel",
        description: "Rencontres planifiées avec d’autres tranches d’âge.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1055,
        categoryName: "Plan de soutien mémoire",
        description: "Suivi structuré de stimulation mnésique.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },

      // 🤝 INCLUSION (ID: INCLUSION)
      {
        id: 1056,
        categoryName: "Challenge inclusion active",
        description: "Engager des actions inclusives concrètes.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1057,
        categoryName: "Programme d’adaptation des activités",
        description: "Organisation équitable.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1058,
        categoryName: "Routine d’ouverture à la différence",
        description: "Moments dédiés à la diversité.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1059,
        categoryName: "Cycle de sensibilisation",
        description: "Séances pédagogiques.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1060,
        categoryName: "Plan de participation universelle",
        description: "Inclusion dans les instances et activités.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.INCLUSION,
      },

      // 🛒 FINANCIAL_WELLNESS
      {
        id: 1061,
        categoryName: "Challenge consommation responsable",
        description: "Réduction volontaire sur 30 jours.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1062,
        categoryName: "Programme d'achats durables",
        description: "Accompagnement dans le choix éthique.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1063,
        categoryName: "Routine d’évaluation des besoins",
        description: "Réflexion avant consommation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1064,
        categoryName: "Cycle d’éducation à la consommation",
        description: "Comprendre les impacts de ses achats.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1065,
        categoryName: "Plan de sobriété volontaire",
        description: "Planification d’une période sans excès.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 📢 SOCIAL_WELLNESS
      {
        id: 1066,
        categoryName: "Challenge citoyenneté active",
        description: "Une action citoyenne chaque semaine.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1067,
        categoryName: "Programme de participation locale",
        description: "Engagement dans la vie publique.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1068,
        categoryName: "Routine civique mensuelle",
        description: "Suivi de la vie démocratique.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1069,
        categoryName: "Cycle de droits et devoirs",
        description: "Séances éducatives.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1070,
        categoryName: "Plan d’implication associative",
        description: "Soutien structuré d’une organisation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🧠 MENTAL_HEALTH
      {
        id: 1071,
        categoryName: "Challenge “prendre soin de son esprit”",
        description: "Une attention mentale par jour.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1072,
        categoryName: "Programme psycho-éducatif",
        description: "Séances encadrées autour de la santé mentale.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1073,
        categoryName: "Routine d’auto-observation",
        description: "Noter et comprendre ses états mentaux.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1074,
        categoryName: "Cycle de résilience",
        description: "Développer sa capacité d’adaptation.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1075,
        categoryName: "Plan de stabilisation émotionnelle",
        description: "Activités pour retrouver l’équilibre.",
        typeId: ECategoryType.PROGRAM,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
    ],
    skipDuplicates: true,
  });
}

seedPrograms()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default seedPrograms;

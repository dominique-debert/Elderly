import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedProjects() {
  await prisma.category.createMany({
    data: [
       
      // 8. PROJECT
      // ----------
      // 🏗️ Projets collaboratifs ou personnels
      
      // 🏃 PHYSICAL
      {
        id: 1076,
        categoryName: "Projet d’entraînement collectif",
        description: "Création d’un plan sportif en groupe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 1077,
        categoryName: "Projet randonnée / trek",
        description: "Planification et réalisation en équipe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 1078,
        categoryName: "Projet de tournoi sportif",
        description: "Organisation locale de compétitions amicales.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 1079,
        categoryName: "Projet “forme au quotidien”",
        description: "Objectifs personnels progressifs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 1080,
        categoryName: "Projet de sensibilisation à l’activité physique",
        description: "Ateliers et campagnes internes.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.PHYSICAL
      },
      
      // 🧠 COGNITIVE
      {
        id: 1081,
        categoryName: "Projet de jeu de société collaboratif",
        description: "Création et test en groupe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1082,
        categoryName: "Projet lecture partagée",
        description: "Club de lecture avec échanges réguliers.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1083,
        categoryName: "Projet de quiz culturel",
        description: "Création et animation de quiz cognitifs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1084,
        categoryName: "Projet de défi mémoire",
        description: "Conception d’activités stimulantes.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 1085,
        categoryName: "Projet “je développe ma logique”",
        description: "Objectifs d’apprentissage personnel.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.COGNITIVE
      },
      
      // ❤️ EMOTIONAL
      {
        id: 1086,
        categoryName: "Projet journal émotionnel",
        description: "Suivi personnel guidé.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1087,
        categoryName: "Projet de cercle de confiance",
        description: "Groupe d’expression émotionnelle.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1088,
        categoryName: "Projet artistique émotionnel",
        description: "Création sur le thème du ressenti.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1089,
        categoryName: "Projet de partage bienveillant",
        description: "Activité d’écoute entre pairs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1090,
        categoryName: "Projet “cultiver la gratitude”",
        description: "Actions positives planifiées.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 🤝 SOCIAL_WELLNESS
      {
        id: 1091,
        categoryName: "Projet de lien interpersonnel",
        description: "Activités visant à tisser des relations.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1092,
        categoryName: "Projet de communauté locale",
        description: "Développement de réseau de proximité.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1093,
        categoryName: "Projet de solidarité interne",
        description: "Actions d’entraide collectives.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1094,
        categoryName: "Projet de binôme ou parrainage",
        description: "Soutien d’un pair dans le temps.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1095,
        categoryName: "Projet de réseau social privé",
        description: "Espace numérique de partage.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      
      // 🌈 SENSORY (ID: SENSORY)
       {
        id: 1096,
        categoryName: "Projet jardin sensoriel",
        description: "Création collective d’un espace immersif.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1097,
        categoryName: "Projet sonore collectif",
        description: "Production d’univers audio (podcast, playlist).",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1098,
        categoryName: "Projet artistique multisensoriel",
        description: "Œuvre ou expo collaborative.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1099,
        categoryName: "Projet d’expériences sensorielles",
        description: "Série d’ateliers découverte.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 1100,
        categoryName: "Projet “sensation du jour”",
        description: "Exploration quotidienne guidée.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SENSORY
      },
      
      // 🧘 EMOTIONAL_WELLNESS
      {
        id: 1101,
        categoryName: "Projet routine bien-être",
        description: "Construction d’un programme personnel.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1102,
        categoryName: "Projet de méditation collective",
        description: "Séances guidées planifiées.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1103,
        categoryName: "Projet de ressourcement",
        description: "Activités individuelles de régulation.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1104,
        categoryName: "Projet d’atelier bien-être",
        description: "Conception d’un atelier participatif.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 1105,
        categoryName: "Projet “paix intérieure”",
        description: "Défis et réflexions sur le calme intérieur.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 🏞️ ENVIRONMENTAL_WELLNESS
      {
        id: 1106,
        categoryName: "Projet potager collectif",
        description: "Cultiver ensemble un jardin.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1107,
        categoryName: "Projet sentier nature",
        description: "Création ou entretien d’un chemin local.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1108,
        categoryName: "Projet de recyclage créatif",
        description: "Transformer objets usagés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1109,
        categoryName: "Projet biodiversité",
        description: "Étude et protection de la faune/flore.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1110,
        categoryName: "Projet “vivre avec la nature”",
        description: "Intégration dans le quotidien.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // 🧪 INTELLECTUAL_WELLNESS
      {
        id: 1110,
        categoryName: "Projet d’observation scientifique",
        description: "Expérience à long terme en groupe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1111,
        categoryName: "Projet de vulgarisation",
        description: "Création de contenus pédagogiques.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1112,
        categoryName: "Projet météo ou environnemental",
        description: "Collecte et suivi de données.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1113,
        categoryName: "Projet technologique DIY",
        description: "Création d’un objet ou outil ensemble.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 1114,
        categoryName: "Projet de club scientifique",
        description: "Réunions et défis collaboratifs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      
      // 💡 INNOVATION
      {
        id: 1115,
        categoryName: "Projet d’application mobile",
        description: "Création ou maquettage d’une idée utile.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1116,
        categoryName: "Projet de prototype collectif",
        description: "Invention partagée et testée.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1117,
        categoryName: "Projet “hack la routine”",
        description: "Amélioration créative du quotidien.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1118,
        categoryName: "Projet idées folles",
        description: "Brainstorming libre suivi de réalisation.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 1119,
        categoryName: "Projet d’ateliers créatifs",
        description: "Projets mensuels collaboratifs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INNOVATION
      },
      
      // 🧍 INCLUSION
      {
        id: 1120,
        categoryName: "Projet d’inclusion numérique",
        description: "Former ou accompagner les publics éloignés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1121,
        categoryName: "Projet de valorisation des talents",
        description: "Mettre en avant chacun.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1122,
        categoryName: "Projet d’événement inclusif",
        description: "Organisation accessible à tous.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1123,
        categoryName: "Projet “personne isolée = 0”",
        description: "Activités pour recréer du lien.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1124,
        categoryName: "Projet binômes solidaires",
        description: "Jumelage solidaire volontaire.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      
      // ELDERLY_SUPPORT (ID: ELDERLY_SUPPORT)
      {
        id: 1125,
        categoryName: "Projet intergénérationnel",
        description: "Activités créées entre jeunes et aînés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 1126,
        categoryName: "Projet de récit de vie",
        description: "Collecte et valorisation d’histoires personnelles.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 1127,
        categoryName: "Projet de groupe mémoire",
        description: "Exercices et jeux adaptés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 1128,
        categoryName: "Projet d’accompagnement quotidien",
        description: "Soutien planifié dans les gestes du jour.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 1129,
        categoryName: "Projet “dialogue des âges”",
        description: "Création d’un espace d’échange structuré.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      
      // 🏥 HEALTHCARE
      {
        id: 1130,
        categoryName: "Projet de sensibilisation santé",
        description: "Création d’actions éducatives.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1131,
        categoryName: "Projet de suivi de soins",
        description: "Organisation personnelle ou collective.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1132,
        categoryName: "Projet d’éducation thérapeutique",
        description: "Modules de vulgarisation médicale.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1133,
        categoryName: "Projet d’accueil médical humain",
        description: "Réflexion collective sur l’empathie.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 1134,
        categoryName: "Projet sur l’accessibilité santé",
        description: "Proposer des améliorations concrètes.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      
      // 🧬 INCLUSION
      {
        id: 1135,
        categoryName: "Projet d’inclusion accessible",
        description: "Conception d’activités universelles.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1136,
        categoryName: "Projet outil adapté",
        description: "Création de solutions ergonomiques.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1137,
        categoryName: "Projet de sensibilisation au handicap",
        description: "Témoignages et actions pédagogiques.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1138,
        categoryName: "Projet accompagnement pair",
        description: "Soutien entre personnes concernées.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      {
        id: 1139,
        categoryName: "Projet “changer les regards”",
        description: "Réalisation d’une campagne positive.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.INCLUSION
      },
      
      // 🏘️ HOUSING_SUPPORT
      {
        id: 1140,
        categoryName: "Projet cohabitation solidaire",
        description: "Création de binômes intergénérationnels.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1141,
        categoryName: "Projet d’aménagement participatif",
        description: "Réflexion collective sur les espaces.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1142,
        categoryName: "Projet de colocation engagée",
        description: "Partage de valeurs et responsabilités.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1143,
        categoryName: "Projet d’aide au logement",
        description: "Accompagnement dans les démarches.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 1144,
        categoryName: "Projet “chez moi autrement”",
        description: "Réinventer son espace de vie.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      
      // 💬 DISCUSSIONS
      {
        id: 1145,
        categoryName: "Projet café-débat",
        description: "Organisation de rencontres thématiques.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1146,
        categoryName: "Projet podcast collaboratif",
        description: "Création de contenus parlés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1147,
        categoryName: "Projet de médiation sociale",
        description: "Mise en place de groupes de dialogue.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1148,
        categoryName: "Projet carnet d’opinions",
        description: "Écriture collective de réflexions.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 1149,
        categoryName: "Projet “paroles libres”",
        description: "Espace d’expression sécurisé.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      
      // 🍽️ NUTRITION
      {
        id: 1150,
        categoryName: "Projet cuisine collective",
        description: "Préparation et partage en groupe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1151,
        categoryName: "Projet défi nutrition",
        description: "Objectifs équilibrés à plusieurs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1152,
        categoryName: "Projet potager pédagogique",
        description: "Cultiver et comprendre.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1153,
        categoryName: "Projet sensibilisation alimentaire",
        description: "Campagnes d’info santé.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 1154,
        categoryName: "Projet recettes solidaires",
        description: "Création d’un livre de cuisine locale.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.NUTRITION
      },
      
      // 🎓 EDUCATION (ID: EDUCATION)
      {
        id: 1155,
        categoryName: "Projet de tutorat",
        description: "Partage de savoirs interpersonnel.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1156,
        categoryName: "Projet pédagogique collectif",
        description: "Création d’un support éducatif.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1157,
        categoryName: "Projet de bibliothèque partagée",
        description: "Accès collaboratif au savoir.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1158,
        categoryName: "Projet d’apprentissage autonome",
        description: "Plan personnel d’acquisition.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 1159,
        categoryName: "Projet “apprendre à apprendre”",
        description: "Parcours de réflexion pédagogique.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.EDUCATION
      },
      
      // 🎨 ARTISTIC (ID: ARTISTIC)
      {
        id: 1160,
        categoryName: "Projet d’exposition collective",
        description: "Montage et mise en valeur d’œuvres.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1161,
        categoryName: "Projet de fresque murale",
        description: "Création artistique dans l’espace public.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1162,
        categoryName: "Projet création sonore ou musicale",
        description: "Œuvre partagée.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1163,
        categoryName: "Projet de performance artistique",
        description: "Répétition et présentation.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 1164,
        categoryName: "Projet carnet d’expression libre",
        description: "Écriture, dessin, collage libre.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ARTISTIC
      },
      
      // 💼 ADMINISTRATIVE (ID: ADMINISTRATIVE)
      {
        id: 1165,
        categoryName: "Projet d’accompagnement aux démarches",
        description: "Entraide administrative.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1166,
        categoryName: "Projet “dossier parfait”",
        description: "Atelier d’organisation personnelle.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1167,
        categoryName: "Projet de simplification locale",
        description: "Propositions citoyennes.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1168,
        categoryName: "Projet outil-guide administratif",
        description: "Création d’un livret simplifié.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 1169,
        categoryName: "Projet “remplir ensemble”",
        description: "Sessions de co-remplissage.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      
      // 🧾 FINANCIAL_WELLNESS
      {
        id: 1170,
        categoryName: "Projet budget collaboratif",
        description: "Outil ou méthode en groupe.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1171,
        categoryName: "Projet défi épargne",
        description: "Objectifs mensuels partagés.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1172,
        categoryName: "Projet sensibilisation financière",
        description: "Éducation populaire.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1173,
        categoryName: "Projet entraide monétaire",
        description: "Caisse solidaire ou prêt amical.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 1174,
        categoryName: "Projet d’achat groupé",
        description: "Économie d’échelle locale.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      
      // 🌍 ENVIRONMENTAL_WELLNESS
      {
        id: 1175,
        categoryName: "Projet nettoyage nature",
        description: "Actions collectives régulières.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1176,
        categoryName: "Projet zéro déchet",
        description: "Défis progressifs.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1177,
        categoryName: "Projet écoconstruction",
        description: "Atelier d’habitat durable.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1178,
        categoryName: "Projet sensibilisation climatique",
        description: "Conférences, affiches, débats.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 1179,
        categoryName: "Projet “agir pour la planète”",
        description: "Projets locaux à impact concret.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // 🧭 SOCIAL_WELLNESS
      {
        id: 1180,
        categoryName: "Projet citoyen local",
        description: "Participation à une action de quartier.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1181,
        categoryName: "Projet d’engagement collectif",
        description: "Campagne ou initiative civique.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1182,
        categoryName: "Projet intergénérationnel civique",
        description: "Activité croisée jeune/senior.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1183,
        categoryName: "Projet “je m’engage”",
        description: "Défi individuel avec suivi.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 1184,
        categoryName: "Projet d’initiative démocratique",
        description: "Consultation ou pétition.",
        typeId: ECategoryType.PROJECT,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },

    ],
    skipDuplicates: true
  });
}

seedProjects()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

export default seedProjects;
import { PrismaClient } from "../../index.js";
import {
  ECategoryChapter,
  ECategoryType,
} from "../../../types/data/categories/ECategory";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function seedServices() {
  await prisma.category.createMany({
    data: [
      // 10. SERVICES
      // ------------
      // 🛎️ Services proposés ou accessibles

      // PHYSICAL (1)
      {
        id: 1482,
        categoryName: "Rééducation physique",
        description: "Assistance pour exercices et thérapies physiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1483,
        categoryName: "Soutien mobilité",
        description: "Aide à la mobilité et équipements adaptés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1484,
        categoryName: "Activités sportives adaptées",
        description: "Organisation de séances sportives personnalisées.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1485,
        categoryName: "Accompagnement kinésithérapeutique",
        description: "Support lors des séances de kiné.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1486,
        categoryName: "Ergonomie et posture",
        description: "Conseils pour améliorer posture au quotidien.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // COGNITIVE (2)
      {
        id: 1487,
        categoryName: "Soutien mémoire et concentration",
        description: "Exercices et activités pour stimuler la mémoire.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1488,
        categoryName: "Aide à la planification",
        description: "Assistance dans la gestion du temps et organisation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1489,
        categoryName: "Aide aux troubles cognitifs",
        description:
          "Accompagnement pour troubles spécifiques (TDAH, Alzheimer).",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1490,
        categoryName: "Soutien à la prise de décision",
        description: "Coaching cognitif et appui psychologique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1491,
        categoryName: "Accompagnement apprentissage",
        description: "Aide à la lecture, écriture, calcul.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // SOCIAL (3)
      {
        id: 1492,
        categoryName: "Accompagnement social",
        description: "Aide pour la participation à la vie sociale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1493,
        categoryName: "Médiation sociale",
        description: "Résolution de conflits et accompagnement relationnel.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1494,
        categoryName: "Soutien à la parentalité",
        description: "Conseils et aides pour les parents.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1495,
        categoryName: "Intégration communautaire",
        description: "Aide à l’insertion dans un nouveau milieu.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1496,
        categoryName: "Organisation d’événements sociaux",
        description: "Facilitation des rencontres et activités collectives.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // SENSORY (4)
      {
        id: 1497,
        categoryName: "Soutien auditif",
        description:
          "Services pour malentendants (aides techniques, interprètes).",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1498,
        categoryName: "Soutien visuel",
        description: "Accompagnement pour malvoyants (guide, matériel adapté).",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1499,
        categoryName: "Stimulation sensorielle",
        description: "Activités pour développer les sens (toucher, odorat).",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1500,
        categoryName: "Adaptations sensorielles",
        description: "Aménagements des espaces de vie et travail.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1501,
        categoryName: "Aide à la communication alternative",
        description: "Utilisation d’outils pour déficiences sensorielles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SENSORY,
      },

      // PHYSICAL_WELLNESS (5)
      {
        id: 1502,
        categoryName: "Coaching sommeil",
        description: "Conseils et suivi pour améliorer la qualité du sommeil.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1503,
        categoryName: "Techniques de relaxation",
        description: "Ateliers de méditation, yoga, sophrologie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1504,
        categoryName: "Gestion de la douleur",
        description: "Services pour soulager douleurs chroniques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1505,
        categoryName: "Bien-être corporel",
        description: "Massages, soins corporels.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1506,
        categoryName: "Conseils d’hygiène de vie",
        description: "Accompagnement nutritionnel et activité physique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // EMOTIONAL_WELLNESS (6)
      {
        id: 1507,
        categoryName: "Soutien psychologique",
        description: "Aide par des professionnels en santé mentale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1508,
        categoryName: "Groupes de parole",
        description: "Sessions collectives pour exprimer ses émotions.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1509,
        categoryName: "Gestion du stress",
        description: "Techniques et ateliers pour réduire le stress.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1510,
        categoryName: "Soutien en situation de crise",
        description: "Interventions rapides en cas de détresse.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1511,
        categoryName: "Développement de la résilience",
        description: "Programmes d’accompagnement personnel.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // SOCIAL_WELLNESS (7)
      {
        id: 1512,
        categoryName: "Création de liens sociaux",
        description: "Ateliers et rencontres pour combattre l’isolement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1513,
        categoryName: "Soutien aux aidants",
        description: "Aide aux proches aidants et soutien psychologique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1514,
        categoryName: "Activités intergénérationnelles",
        description: "Programmes favorisant les échanges entre générations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1515,
        categoryName: "Soutien à l’inclusion",
        description: "Facilitation de l’accès aux activités sociales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1516,
        categoryName: "Accompagnement dans le logement partagé",
        description: "Aide pour colocations solidaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // INTELLECTUAL_WELLNESS (8)
      {
        id: 1517,
        categoryName: "Ateliers culturels",
        description: "Organisation de conférences, lectures, débats.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1518,
        categoryName: "Stimulation intellectuelle",
        description: "Jeux, quiz, activités cérébrales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1519,
        categoryName: "Cours et formations",
        description: "Offres de formation continue et développement personnel.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1520,
        categoryName: "Soutien à la créativité",
        description: "Ateliers artistiques et d’expression.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1521,
        categoryName: "Bibliothèques et ressources",
        description: "Accès à des ressources intellectuelles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // FINANCIAL_WELLNESS (9)
      {
        id: 1522,
        categoryName: "Conseil budgétaire",
        description: "Aide à la gestion financière personnelle.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1523,
        categoryName: "Aide aux démarches administratives",
        description: "Accompagnement pour les aides sociales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1524,
        categoryName: "Formation à la finance personnelle",
        description: "Ateliers pour mieux gérer son argent.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1525,
        categoryName: "Microcrédit et prêts solidaires",
        description: "Facilitation d’accès aux financements.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1526,
        categoryName: "Soutien en cas de surendettement",
        description: "Accompagnement vers des solutions durables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // ENVIRONMENTAL_WELLNESS (10)
      {
        id: 1527,
        categoryName: "Sensibilisation écologique",
        description: "Ateliers et campagnes de sensibilisation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1528,
        categoryName: "Aide au tri et recyclage",
        description: "Services d’information et de collecte.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1529,
        categoryName: "Jardinage urbain",
        description: "Soutien à la création d’espaces verts.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1530,
        categoryName: "Réduction de la consommation d’énergie",
        description: "Conseils pour économiser l’énergie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1531,
        categoryName: "Promotion de modes de vie durables",
        description: "Accompagnement à l’éco-consommation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // SPIRITUAL_WELLNESS (11)
      {
        id: 1532,
        categoryName: "Soutien spirituel",
        description: "Accompagnement selon diverses traditions.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1533,
        categoryName: "Méditation et pleine conscience",
        description: "Programmes pour le bien-être spirituel.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1534,
        categoryName: "Groupes de soutien spirituel",
        description: "Cercles de discussion et prière.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1535,
        categoryName: "Ateliers de réflexion",
        description: "Échanges sur le sens de la vie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1536,
        categoryName: "Retraites et séjours spirituels",
        description: "Organisation de moments de ressourcement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // COMMUNITY_SERVICES (17)
      {
        id: 1537,
        categoryName: "Aide administrative locale",
        description: "Soutien aux démarches auprès des collectivités.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1538,
        categoryName: "Services d’accueil et orientation",
        description: "Information et guidage pour les habitants.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1539,
        categoryName: "Médiation de quartier",
        description: "Résolution de conflits et animation sociale locale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1540,
        categoryName: "Aide à l’emploi local",
        description: "Accompagnement vers des emplois et stages.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1541,
        categoryName: "Services de transport communautaire",
        description: "Mise en place de navettes et co-voiturage.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // DAILY_HELP (31)
      {
        id: 1542,
        categoryName: "Aide aux courses",
        description: "Accompagnement pour faire les courses.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1543,
        categoryName: "Aide ménagère",
        description: "Services de nettoyage et entretien du domicile.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1544,
        categoryName: "Aide à la cuisine",
        description: "Assistance pour préparer les repas.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1545,
        categoryName: "Soutien aux démarches quotidiennes",
        description: "Aide à la gestion du courrier, rendez-vous.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1546,
        categoryName: "Aide à l’entretien du linge",
        description: "Lavage et repassage.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // SOCIAL_SUPPORT (32)
      {
        id: 1547,
        categoryName: "Accompagnement social individualisé",
        description: "Soutien et suivi personnalisé.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1548,
        categoryName: "Soutien aux familles",
        description: "Aide sociale pour familles en difficulté.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1549,
        categoryName: "Soutien aux personnes isolées",
        description: "Visites à domicile, appels réguliers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1550,
        categoryName: "Aide à l’intégration sociale",
        description: "Activités et formation pour s’intégrer.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1551,
        categoryName: "Accompagnement dans les démarches sociales",
        description: "Aide pour l’accès aux droits.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },

      // ADMINISTRATIVE_HELP (33)
      {
        id: 1552,
        categoryName: "Assistance juridique",
        description: "Conseils et soutien pour litiges et droits.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1553,
        categoryName: "Aide à la constitution de dossiers",
        description: "Support pour demandes officielles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1554,
        categoryName: "Information sur les droits",
        description: "Permanences d’information juridique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1555,
        categoryName: "Soutien aux démarches fiscales",
        description: "Aide pour déclarations et réclamations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1556,
        categoryName: "Médiation administrative",
        description: "Facilitation des relations avec l’administration.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },

      // PSYCHOLOGICAL_SUPPORT (34)
      {
        id: 1557,
        categoryName: "Consultations psychologiques",
        description: "Séances individuelles avec professionnels.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1558,
        categoryName: "Groupes de soutien émotionnel",
        description: "Ateliers et rencontres thématiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1559,
        categoryName: "Intervention en urgence",
        description: "Soutien psychologique en situation critique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1560,
        categoryName: "Conseil en gestion du stress",
        description: "Programmes spécifiques pour mieux gérer le stress.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1561,
        categoryName: "Thérapie de groupe",
        description: "Espaces d’échanges encadrés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },

      // MEDICAL_AID (35)
      {
        id: 1562,
        categoryName: "Premiers secours",
        description: "Services d’urgence et formation aux gestes de secours.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1563,
        categoryName: "Aide à la prise de médicaments",
        description: "Assistance et suivi médical à domicile.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1564,
        categoryName: "Accompagnement aux rendez-vous médicaux",
        description: "Transport et accompagnement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1565,
        categoryName: "Services infirmiers à domicile",
        description: "Soins et surveillance.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1566,
        categoryName: "Soutien aux personnes en situation de handicap",
        description: "Aide adaptée aux besoins spécifiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },

      // HOUSING_SUPPORT (36)
      {
        id: 1567,
        categoryName: "Aide au logement d’urgence",
        description: "Solutions temporaires et hébergement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1568,
        categoryName: "Accompagnement dans les démarches logement",
        description: "Aide à la recherche et constitution de dossier.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1569,
        categoryName: "Soutien au maintien dans le logement",
        description: "Prévention des expulsions et aides financières.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1570,
        categoryName: "Aide à la rénovation et adaptation",
        description: "Soutien pour adapter le logement aux besoins.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1571,
        categoryName: "Médiation locative",
        description:
          "Résolution des conflits entre locataires et propriétaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },

      // FOOD_AID (37)
      {
        id: 1572,
        categoryName: "Distribution alimentaire",
        description: "Aide alimentaire régulière ou ponctuelle.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1573,
        categoryName: "Repas à domicile",
        description: "Livraison de repas adaptés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1574,
        categoryName: "Aide à la nutrition",
        description: "Conseils alimentaires et soutien diététique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1575,
        categoryName: "Banques alimentaires",
        description: "Coordination des dons et distribution.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1576,
        categoryName: "Cuisine collective solidaire",
        description: "Organisation de repas partagés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },

      // EMERGENCY_SERVICES (38)
      {
        id: 1577,
        categoryName: "Intervention rapide",
        description: "Réponse d’urgence pour diverses situations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1578,
        categoryName: "Accompagnement en situation de crise",
        description: "Soutien et coordination des secours.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1579,
        categoryName: "Soutien aux victimes",
        description: "Aide psychologique et juridique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1580,
        categoryName: "Services de protection",
        description: "Protection des personnes vulnérables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1581,
        categoryName: "Coordination avec les services publics",
        description: "Interface entre usagers et autorités.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },

      // Chapitre 17 — COMMUNITY_SERVICES (Services communautaires urbains 🏢)
      {
        id: 1582,
        categoryName: "Centres communautaires",
        description:
          "Espaces physiques dédiés aux rencontres, événements et activités pour la population locale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1583,
        categoryName: "Bibliothèques publiques",
        description:
          "Services de prêt de livres, accès à la documentation et aux ressources numériques pour tous.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1584,
        categoryName: "Services d’aide sociale",
        description:
          "Accompagnement des personnes en difficulté (aide alimentaire, orientation, insertion).",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1585,
        categoryName: "Activités culturelles locales",
        description:
          "Organisation et soutien d’événements culturels, artistiques ou festifs pour la communauté.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1586,
        categoryName: "Soutien aux associations locales",
        description:
          "Appui administratif, logistique et financier aux associations à but non lucratif.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // ♻️ WASTE_MANAGEMENT (Gestion des déchets urbains)
      {
        id: 1587,
        categoryName: "Collecte des déchets ménagers",
        description:
          "Services réguliers de ramassage des ordures domestiques dans les quartiers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1588,
        categoryName: "Tri sélectif et recyclage",
        description:
          "Mise en place et gestion des systèmes de tri pour valoriser les déchets recyclables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1589,
        categoryName: "Déchèteries municipales",
        description:
          "Espaces dédiés où les habitants peuvent déposer des déchets volumineux ou spécifiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1590,
        categoryName: "Campagnes de sensibilisation",
        description:
          "Actions éducatives pour encourager la réduction et le tri des déchets.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1591,
        categoryName: "Gestion des déchets dangereux",
        description:
          "Collecte et traitement sécurisé des déchets chimiques, électroniques ou toxiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // 🚀 INNOVATION (Projets d’innovation et technologie )
      {
        id: 1592,
        categoryName: "Incubateurs de startups",
        description:
          "Espaces et services d’accompagnement pour les jeunes entreprises innovantes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1593,
        categoryName: "Laboratoires de recherche appliquée",
        description:
          "Centres dédiés à l’expérimentation et au développement de nouvelles technologies.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1594,
        categoryName: "Financement de projets innovants",
        description:
          "Aides financières et subventions pour encourager la recherche et l’innovation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1595,
        categoryName: "Programmes de formation technologique",
        description:
          "Cours et ateliers pour développer les compétences numériques et techniques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 1596,
        categoryName: "Événements et hackathons",
        description:
          "Organisation de compétitions et rencontres pour stimuler la créativité et l’innovation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 🛠️ CONSTRUCTION (Projets de construction et aménagement)
      {
        id: 1597,
        categoryName: "Rénovation de bâtiments publics",
        description:
          "Travaux visant à moderniser et sécuriser les infrastructures publiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 1598,
        categoryName: "Aménagement urbain durable",
        description:
          "Projets intégrant des principes écologiques dans la planification des espaces urbains.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 1599,
        categoryName: "Construction de logements sociaux",
        description:
          "Réalisation de logements accessibles pour les populations à revenus modestes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 1600,
        categoryName: "Accessibilité des espaces publics",
        description:
          "Adaptation des infrastructures pour faciliter l’accès aux personnes à mobilité réduite.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 1601,
        categoryName: "Développement d’infrastructures sportives",
        description:
          "Création ou amélioration d’équipements pour les activités physiques et sportives.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },

      // 🌍 SUSTAINABILITY (Projets environnementaux et durables)
      {
        id: 1602,
        categoryName: "Promotion des énergies renouvelables",
        description:
          "Initiatives pour encourager l’utilisation de sources d’énergie propres et renouvelables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 1603,
        categoryName: "Gestion durable des ressources naturelles",
        description:
          "Projets visant à protéger et gérer les ressources comme l’eau, les sols et les forêts.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 1604,
        categoryName: "Réduction des émissions de CO2",
        description:
          "Actions concrètes pour diminuer l’empreinte carbone des activités humaines.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 1605,
        categoryName: "Sensibilisation à la consommation responsable",
        description:
          "Programmes éducatifs sur l’impact environnemental des choix quotidiens.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 1606,
        categoryName: "Développement de l’économie circulaire",
        description:
          "Mise en place de systèmes de recyclage et de réutilisation des matériaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },

      // 🤝 COLLABORATION (Projets collaboratifs)
      {
        id: 1607,
        categoryName: "Plateformes de co-création",
        description:
          "Espaces numériques favorisant la collaboration entre individus pour concevoir des projets communs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1608,
        categoryName: "Réseaux de partage de compétences",
        description:
          "Initiatives permettant d’échanger savoir-faire et expertises entre membres.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1609,
        categoryName: "Projets communautaires participatifs",
        description:
          "Actions où la communauté s’implique directement dans la réalisation de projets locaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1610,
        categoryName: "Organisation d’ateliers collaboratifs",
        description:
          "Sessions de travail collectif pour favoriser l’innovation et l’apprentissage partagé.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1611,
        categoryName: "Développement de partenariats durables",
        description:
          "Mise en place d’alliances entre organisations pour soutenir des objectifs communs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COLLABORATION,
      },

      // 🎯 PERSONAL_DEVELOPMENT (Projets personnels de développement)
      {
        id: 1612,
        categoryName: "Coaching individuel",
        description:
          "Services d’accompagnement personnalisé pour atteindre des objectifs de vie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1613,
        categoryName: "Programmes de formation en leadership",
        description:
          "Ateliers et cours pour développer ses compétences en gestion et motivation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1614,
        categoryName: "Gestion du temps et productivité",
        description:
          "Outils et méthodes pour améliorer l’organisation personnelle.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1615,
        categoryName: "Développement des compétences émotionnelles",
        description:
          "Exercices pour mieux gérer ses émotions et renforcer l’intelligence émotionnelle.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1616,
        categoryName: "Planification de carrière",
        description:
          "Conseils et accompagnement pour construire un parcours professionnel adapté.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // 📖 GUIDES (Guides et manuels)
      {
        id: 1617,
        categoryName: "Manuels pratiques sur la santé",
        description:
          "Documentation détaillée sur les bonnes pratiques pour préserver sa santé.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1618,
        categoryName: "Guides de développement personnel",
        description:
          "Ressources pour améliorer sa confiance, sa motivation et son bien-être.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1619,
        categoryName: "Tutoriels techniques",
        description:
          "Instructions pas à pas pour maîtriser des outils numériques ou artisanaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1620,
        categoryName: "Guides pour l’environnement",
        description:
          "Informations sur les gestes écoresponsables et la préservation de la nature.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1621,
        categoryName: "Manuels d’utilisation des services publics",
        description:
          "Explications claires pour accéder aux aides et services administratifs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GUIDES,
      },

      // 🎥 VIDEOS (Vidéos éducatives)
      {
        id: 1622,
        categoryName: "Cours vidéo sur la nutrition",
        description:
          "Capsules pour comprendre les bases d’une alimentation saine.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1623,
        categoryName: "Tutoriels d’activités physiques",
        description:
          "Vidéos guidant la pratique sportive à domicile ou en extérieur.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1624,
        categoryName: "Conférences sur le bien-être mental",
        description:
          "Interventions d’experts sur la gestion du stress et la santé mentale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1625,
        categoryName: "Vidéos sur l’environnement",
        description:
          "Documentaires et reportages pour sensibiliser aux enjeux écologiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1626,
        categoryName: "Ateliers créatifs filmés",
        description:
          "Séances de création artistique ou manuelle à reproduire chez soi.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.VIDEOS,
      },

      // 📝 ARTICLES (Articles et études)
      {
        id: 1627,
        categoryName: "Recherches sur les maladies chroniques",
        description: "Études scientifiques détaillant les avancées médicales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1628,
        categoryName: "Articles sur les innovations sociales",
        description:
          "Analyses des nouvelles pratiques pour améliorer la vie en communauté.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1629,
        categoryName: "Publications sur le développement durable",
        description:
          "Textes traitant des pratiques responsables et de la transition écologique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1630,
        categoryName: "Études en psychologie sociale",
        description:
          "Articles explorant les comportements et interactions humaines.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1631,
        categoryName: "Dossiers sur la nutrition et la santé",
        description:
          "Synthèses et conseils basés sur les dernières données scientifiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTICLES,
      },

      // 🎙️ PODCASTS (Podcasts et interviews)
      {
        id: 1632,
        categoryName: "Interviews d’experts en santé mentale",
        description:
          "Discussions approfondies sur la gestion du stress et la psychologie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1633,
        categoryName: "Histoires inspirantes de résilience",
        description: "Témoignages de personnes ayant surmonté des difficultés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1634,
        categoryName: "Débats sur l’environnement et le développement durable",
        description:
          "Échanges entre spécialistes sur les enjeux écologiques actuels.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1635,
        categoryName: "Conseils en développement personnel",
        description:
          "Épisodes dédiés à la motivation, à la productivité et au bien-être.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1636,
        categoryName: "Podcast sur les innovations sociales et technologiques",
        description:
          "Présentation des nouvelles idées et projets impactants dans la société.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PODCASTS,
      },

      // 📊 INFOGRAPHICS (Infographies et données visuelles)
      {
        id: 1637,
        categoryName: "Statistiques sur la santé publique",
        description:
          "Visualisations claires des données épidémiologiques et sanitaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1638,
        categoryName: "Graphiques sur la consommation durable",
        description: "Représentations visuelles des habitudes responsables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1639,
        categoryName: "Cartes des services communautaires",
        description:
          "Infographies localisant les aides disponibles dans les quartiers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1640,
        categoryName: "Données sur l’impact environnemental",
        description: "Illustrations des effets du changement climatique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1641,
        categoryName: "Schémas explicatifs pour le bien-être mental",
        description:
          "Diagrammes pour comprendre les mécanismes du stress et de l’anxiété.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },

      // 🏥 HEALTHCARE (Services médicaux et santé)
      {
        id: 1642,
        categoryName: "Consultations médicales générales",
        description: "Accès à des médecins pour des examens et diagnostics.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1643,
        categoryName: "Soins infirmiers à domicile",
        description: "Assistance pour les soins quotidiens chez soi.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1644,
        categoryName: "Programmes de prévention et dépistage",
        description: "Actions pour détecter précocement maladies et troubles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1645,
        categoryName: "Soutien aux patients chroniques",
        description: "Accompagnement spécifique pour maladies longues durées.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1646,
        categoryName: "Aide à la réhabilitation physique",
        description:
          "Services pour la récupération après une blessure ou chirurgie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },

      // 🧑‍🏫 EDUCATION (Services éducatifs et formations)
      {
        id: 1647,
        categoryName: "Cours de langues",
        description:
          "Ateliers pour apprendre ou perfectionner une langue étrangère.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1648,
        categoryName: "Formations professionnelles",
        description: "Sessions de développement des compétences métiers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1649,
        categoryName: "Soutien scolaire",
        description: "Aide aux devoirs et tutorat pour enfants et adolescents.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1650,
        categoryName: "Ateliers numériques",
        description: "Initiation à l’informatique et aux outils digitaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1651,
        categoryName: "Conférences et séminaires",
        description: "Événements éducatifs ouverts à tous les publics.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🛒 DAILY_HELP (Aides quotidiennes : courses, ménage)
      {
        id: 1652,
        categoryName: "Livraison de courses à domicile",
        description:
          "Service de préparation et livraison d’aliments et produits essentiels.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1653,
        categoryName: "Aide au ménage et entretien",
        description:
          "Intervention pour le nettoyage et l’organisation du domicile.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1654,
        categoryName: "Accompagnement pour les démarches administratives",
        description: "Soutien à la gestion de documents et formalités.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1655,
        categoryName: "Assistance pour la préparation des repas",
        description: "Aide ponctuelle ou régulière à la cuisine.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1656,
        categoryName: "Petits travaux de bricolage",
        description: "Services pour réparations légères dans la maison.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // 🧑‍🤝‍🧑 SOCIAL_SUPPORT (Services sociaux et accompagnement)
      {
        id: 1657,
        categoryName: "Accompagnement des personnes isolées",
        description: "Visites et échanges pour rompre la solitude.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1658,
        categoryName: "Soutien aux familles en difficulté",
        description: "Aide personnalisée pour surmonter des crises familiales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1659,
        categoryName: "Médiation sociale et résolution de conflits",
        description: "Intervention pour apaiser tensions et disputes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1660,
        categoryName: "Ateliers de réinsertion sociale",
        description: "Programmes pour retrouver un emploi ou un logement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1661,
        categoryName: "Orientation vers les dispositifs sociaux",
        description: "Information et aide pour accéder aux aides publiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },

      // 🏢 ADMINISTRATIVE_HELP (Services administratifs et juridiques)
      {
        id: 1662,
        categoryName: "Assistance pour les démarches fiscales",
        description: "Aide à la déclaration d’impôts et gestion des finances.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1663,
        categoryName: "Conseils juridiques de base",
        description: "Information sur les droits et recours possibles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1664,
        categoryName: "Aide à la rédaction de documents officiels",
        description:
          "Soutien pour lettres, recours ou formulaires administratifs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1665,
        categoryName: "Orientation vers les services publics",
        description: "Guidage vers les bons interlocuteurs selon les besoins.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1666,
        categoryName: "Accompagnement pour la demande de prestations sociales",
        description:
          "Aide au montage de dossiers pour allocations ou aides diverses.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },

      // 🤝 PSYCHOLOGICAL_SUPPORT (Soutien psychologique et émotionnel)
      {
        id: 1667,
        categoryName: "Consultations individuelles avec psychologues",
        description:
          "Sessions privées pour accompagner des difficultés personnelles.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1668,
        categoryName: "Groupes de parole",
        description: "Espaces d’échange et de soutien entre pairs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1669,
        categoryName: "Ateliers de gestion du stress",
        description: "Techniques et exercices pour mieux gérer l’anxiété.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1670,
        categoryName: "Soutien aux proches aidants",
        description: "Accompagnement spécifique pour les aidants familiaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1671,
        categoryName: "Interventions en situation de crise",
        description: "Aide immédiate pour personnes en détresse psychologique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },

      // 💊 MEDICAL_AID (Aide médicale et premiers secours)
      {
        id: 1672,
        categoryName: "Formation aux gestes de premiers secours",
        description: "Cours pour apprendre à réagir face à une urgence.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1673,
        categoryName: "Mise à disposition de matériel médical",
        description: "Prêt ou location d’équipements nécessaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1674,
        categoryName: "Intervention rapide en cas d’accident",
        description: "Réponse organisée pour situations d’urgence.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1675,
        categoryName: "Soutien aux personnes handicapées",
        description: "Aide adaptée aux besoins spécifiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1676,
        categoryName: "Distribution de médicaments essentiels",
        description: "Aide pour obtenir les traitements de base.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },

      // 🏠 HOUSING_SUPPORT (Aide au logement d’urgence)
      {
        id: 1677,
        categoryName: "Accueil temporaire en hébergement",
        description:
          "Offres de logement provisoire pour personnes en difficulté.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1678,
        categoryName: "Accompagnement dans la recherche de logement",
        description: "Soutien à la constitution de dossiers et visites.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1679,
        categoryName: "Aide financière pour le logement",
        description: "Prêts, subventions ou aides au paiement du loyer.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1680,
        categoryName: "Soutien pour la mise en conformité du domicile",
        description: "Travaux ou adaptations pour un logement décent.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1681,
        categoryName: "Médiation avec les propriétaires",
        description: "Assistance dans les relations locataires-bailleurs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },

      //🥖 FOOD_AID (Aide alimentaire)
      {
        id: 1682,
        categoryName: "Distribution de repas chauds",
        description: "Offres de restauration sur place ou à emporter.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1683,
        categoryName: "Banques alimentaires",
        description: "Accès à des denrées alimentaires gratuites.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1684,
        categoryName: "Aide à la préparation de paniers alimentaires",
        description: "Fourniture de produits de base pour la semaine.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1685,
        categoryName: "Ateliers nutritionnels",
        description: "Sensibilisation à une alimentation équilibrée.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1686,
        categoryName: "Soutien aux familles en situation de précarité",
        description: "Aides ciblées pour éviter la malnutrition.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.FOOD_AID,
      },

      // 📞 EMERGENCY_SERVICES (Services d’urgence et intervention rapide)
      {
        id: 1687,
        categoryName: "Numéros d’urgence disponibles 24/7",
        description: "Contacts pour police, pompiers, secours médicaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1688,
        categoryName: "Centres d’appel pour situations de crise",
        description: "Assistance téléphonique immédiate.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1689,
        categoryName: "Intervention rapide sur le terrain",
        description: "Équipes mobiles pour prise en charge urgente.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1690,
        categoryName: "Coordination avec les services hospitaliers",
        description: "Gestion des urgences médicales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1691,
        categoryName: "Soutien post-urgence",
        description: "Accompagnement après incidents ou accidents.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },

      // PHYSICAL_ACTIVITY (Activités physiques)
      {
        id: 1692,
        categoryName: "Marche quotidienne",
        description:
          "Encouragement à la marche régulière adaptée à tous les âges.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1693,
        categoryName: "Exercices d’étirement",
        description: "Programmes pour améliorer souplesse et mobilité.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1694,
        categoryName: "Renforcement musculaire",
        description: "Activités adaptées pour augmenter la force.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1695,
        categoryName: "Activités cardio",
        description: "Promouvoir le vélo, la natation, la course douce.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1696,
        categoryName: "Groupes sportifs",
        description: "Mise en relation pour pratiquer en collectif.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },

      // COGNITIVE_TRAINING (Programmes cognitifs)
      {
        id: 1697,
        categoryName: "Jeux de mémoire",
        description:
          "Exercices pour stimuler la mémoire à court et long terme.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1698,
        categoryName: "Résolution de problèmes",
        description: "Activités ludiques pour améliorer la logique.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1699,
        categoryName: "Apprentissage de langues",
        description:
          "Cours et ateliers pour développer les capacités linguistiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1700,
        categoryName: "Entraînement attentionnel",
        description: "Programmes pour améliorer la concentration.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1701,
        categoryName: "Ateliers créativité",
        description: "Stimuler l’imagination et l’innovation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },

      // NUTRITION (Programmes nutritionnels)
      {
        id: 1702,
        categoryName: "Planification des repas",
        description: "Aide à concevoir des menus équilibrés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1703,
        categoryName: "Education nutritionnelle",
        description: "Sensibilisation aux bonnes pratiques alimentaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1704,
        categoryName: "Suivi diététique personnalisé",
        description: "Accompagnement avec des spécialistes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1705,
        categoryName: "Ateliers cuisine saine",
        description: "Cours pour apprendre des recettes équilibrées.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1706,
        categoryName: "Gestion des allergies et intolérances",
        description: "Conseils adaptés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION,
      },

      // SOCIAL_ENGAGEMENT (Programmes sociaux)
      {
        id: 1707,
        categoryName: "Bénévolat local",
        description: "Mise en relation avec des associations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1708,
        categoryName: "Activités intergénérationnelles",
        description: "Rencontres entre jeunes et seniors.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1709,
        categoryName: "Clubs de discussion",
        description: "Groupes pour échanger sur divers sujets.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1710,
        categoryName: "Soutien aux nouveaux arrivants",
        description: "Aide à l’intégration sociale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1711,
        categoryName: "Organisation d’événements communautaires",
        description: "Festivals, fêtes de quartier.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },

      // ENVIRONMENTAL_ACTION (Programmes environnementaux)
      {
        id: 1712,
        categoryName: "Collectes de déchets",
        description: "Organisation de journées nettoyage.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1713,
        categoryName: "Plantations d’arbres",
        description: "Initiatives locales de reforestation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1714,
        categoryName: "Ateliers zéro déchet",
        description: "Sensibilisation et formation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1715,
        categoryName: "Promotion du recyclage",
        description: "Actions concrètes dans les quartiers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1716,
        categoryName: "Transition énergétique",
        description: "Conseils pour réduire la consommation d’énergie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },

      // PHYSICAL_ACHIEVEMENTS (Badges de performance physique)
      {
        id: 1717,
        categoryName: "Badge marcheur",
        description: "Récompense pour 100 km parcourus.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 1718,
        categoryName: "Badge endurance",
        description: "Course ou activité continue sur durée.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 1719,
        categoryName: "Badge force",
        description: "Atteinte d’objectifs de musculation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 1720,
        categoryName: "Badge régularité",
        description: "Pratique d’activité physique sur plusieurs mois.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 1721,
        categoryName: "Badge participation compétitive",
        description: "Engagement dans une compétition locale.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },

      // COGNITIVE_ACHIEVEMENTS (Badges cognitifs)
      {
        id: 1722,
        categoryName: "Badge mémoire d’or",
        description: "Résolution d’exercices complexes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 1723,
        categoryName: "Badge maître logique",
        description: "Succès dans les jeux de réflexion.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 1724,
        categoryName: "Badge polyglotte",
        description: "Acquisition d’un nouveau vocabulaire.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 1725,
        categoryName: "Badge concentration",
        description: "Achèvement de sessions de méditation ou d’attention.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 1726,
        categoryName: "Badge créativité",
        description: "Participation à un atelier artistique ou d’écriture.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },

      // NUTRITION_ACHIEVEMENTS (Badges nutritionnels)
      {
        id: 1727,
        categoryName: "Badge mangeur sain",
        description: "Adoption régulière d’aliments équilibrés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 1728,
        categoryName: "Badge cuisinier créatif",
        description: "Réalisation de recettes variées.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 1729,
        categoryName: "Badge zéro gaspillage",
        description: "Réduction notable du gaspillage alimentaire.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 1730,
        categoryName: "Badge allergie maîtrisée",
        description: "Respect rigoureux des restrictions alimentaires.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 1731,
        categoryName: "Badge éco-responsable",
        description: "Pratique du bio, local, et saisonnier.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },

      // SOCIAL_ACHIEVEMENTS (Badges sociaux)
      {
        id: 1732,
        categoryName: "Badge bénévole engagé",
        description: "Nombre d’heures de bénévolat.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 1733,
        categoryName: "Badge leader de groupe",
        description: "Animation d’un groupe ou club.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 1734,
        categoryName: "Badge facilitateur d’intégration",
        description: "Aide apportée aux nouveaux membres.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 1735,
        categoryName: "Badge organisateur d’événement",
        description: "Participation à la mise en place d’événements.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 1735,
        categoryName: "Badge ambassadeur",
        description: "Promotion des actions sociales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },

      // ENVIRONMENTAL_ACHIEVEMENTS (Badges environnementaux)
      {
        id: 1736,
        categoryName: "Badge nettoyeur",
        description: "Participation à plusieurs collectes de déchets.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 1737,
        categoryName: "Badge planteur d’arbres",
        description: "Contribution à des plantations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 1738,
        categoryName: "Badge zéro déchet",
        description: "Engagement durable dans une démarche zéro déchet.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 1739,
        categoryName: "Badge éco-énergétique",
        description: "Mise en œuvre de mesures pour économiser l’énergie.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 1740,
        categoryName: "Badge sensibilisateur",
        description: "Organisation d’ateliers ou campagnes écologiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },

      // ENVIRONMENTAL (Activités environnementales)
      {
        id: 1741,
        categoryName: "Randonnée écologique",
        description: "Balades nature pour sensibiliser à l’environnement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 1742,
        categoryName: "Ateliers compostage",
        description: "Formation à la gestion des déchets organiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 1743,
        categoryName: "Jardinage collectif",
        description: "Mise en place et entretien d’espaces verts partagés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 1744,
        categoryName: "Observation de la biodiversité",
        description: "Activités de recensement des espèces locales.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 1745,
        categoryName: "Campagnes de sensibilisation",
        description: "Actions pour informer sur les enjeux environnementaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },

      // GENERAL (Discussions générales)
      {
        id: 1746,
        categoryName: "Forum d’entraide",
        description: "Espace pour poser toutes sortes de questions.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 1747,
        categoryName: "Discussions libres",
        description: "Échanges sur des sujets variés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 1748,
        categoryName: "Partage d’expériences",
        description: "Récits et conseils entre membres.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 1749,
        categoryName: "Débats thématiques",
        description: "Organisation de débats sur des sujets d’actualité.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 1750,
        categoryName: "Annonces communautaires",
        description: "Informations et événements locaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.GENERAL,
      },

      // MENTAL_HEALTH (Bien-être mental et cognitif)
      {
        id: 1751,
        categoryName: "Techniques de relaxation",
        description: "Exercices de respiration, méditation guidée.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1752,
        categoryName: "Gestion de l’anxiété",
        description: "Stratégies pour apaiser le stress et l’angoisse.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1753,
        categoryName: "Soutien psychologique",
        description: "Échanges autour du soutien et des ressources.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1754,
        categoryName: "Amélioration de la concentration",
        description: "Conseils pour mieux se concentrer au quotidien.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 1755,
        categoryName: "Prévention du burnout",
        description: "Reconnaître les signes et agir.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },

      // MANUAL_SKILL (Compétences manuelles)
      {
        id: 1756,
        categoryName: "Ateliers bricolage",
        description: "Apprentissage et partage de techniques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 1757,
        categoryName: "Réparation d’objets",
        description: "Conseils pour réparer au lieu de jeter.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 1758,
        categoryName: "Travail du bois",
        description: "Initiation aux outils et projets simples.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 1759,
        categoryName: "DIY déco",
        description: "Créations décoratives faites main.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 1760,
        categoryName: "Jardinage et potager",
        description: "Techniques de culture et entretien.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },

      // NUTRITIONAL_SKILL (Compétences nutritionnelles)
      {
        id: 1761,
        categoryName: "Cuisine équilibrée",
        description: "Techniques culinaires pour repas sains.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 1762,
        categoryName: "Lecture des étiquettes",
        description: "Apprendre à déchiffrer les ingrédients.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 1763,
        categoryName: "Planification des repas",
        description: "Organisation hebdomadaire pour une bonne nutrition.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 1764,
        categoryName: "Conservation des aliments",
        description: "Méthodes pour éviter le gaspillage.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 1765,
        categoryName: "Alimentation durable",
        description: "Choix écologiques et responsables.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },

      // CREATIVE_SKILL (Compétences créatives)
      {
        id: 1766,
        categoryName: "Peinture et dessin",
        description: "Techniques et partage d’œuvres.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 1767,
        categoryName: "Écriture créative",
        description: "Exercices d’expression écrite.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 1768,
        categoryName: "Musique et composition",
        description: "Partage d’expériences et apprentissages.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 1769,
        categoryName: "Photographie",
        description: "Initiation aux bases et astuces.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 1770,
        categoryName: "Arts plastiques",
        description: "Créations en volume, modelage.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },

      // MEDICAL_CARE (Soins médicaux)
      {
        id: 1771,
        categoryName: "Premiers secours",
        description: "Formation et conseils pratiques.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 1772,
        categoryName: "Suivi de santé",
        description: "Organisation des rendez-vous et traitements.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 1773,
        categoryName: "Hygiène et prévention",
        description: "Bonnes pratiques au quotidien.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 1774,
        categoryName: "Gestion des médicaments",
        description: "Informations et partages d’expériences.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 1775,
        categoryName: "Accompagnement des malades",
        description: "Soutien aux proches et aidants.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },

      // ARTISTIC (Activités artistiques)
      {
        id: 1776,
        categoryName: "Théâtre et improvisation",
        description: "Ateliers et représentations.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 1777,
        categoryName: "Danse",
        description: "Styles variés et cours.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 1778,
        categoryName: "Chant",
        description: "Techniques vocales et groupes.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 1779,
        categoryName: "Sculpture",
        description: "Travail des matériaux.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 1780,
        categoryName: "Expositions",
        description: "Organisation et visites.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ARTISTIC,
      },

      // DISCUSSIONS (Discussions)
      {
        id: 1781,
        categoryName: "Échanges ouverts",
        description: "Discussions libres sur tous sujets.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1782,
        categoryName: "Débats organisés",
        description: "Thèmes choisis et modérés.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1783,
        categoryName: "Partage d’idées",
        description: "Brainstorming collectif.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1784,
        categoryName: "Questions-réponses",
        description: "Assistance et conseils.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 1785,
        categoryName: "Retour d’expérience",
        description: "Témoignages et analyses.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // CREATIVE (Créativité)
      {
        id: 1786,
        categoryName: "Ateliers d’innovation",
        description: "Techniques de brainstorming.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 1787,
        categoryName: "Projets collaboratifs",
        description: "Réalisation collective d’œuvres.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 1788,
        categoryName: "Design thinking",
        description: "Méthodes pour résoudre des problèmes créatifs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 1789,
        categoryName: "Création numérique",
        description: "Outils et ressources.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 1790,
        categoryName: "Expression libre",
        description: "Encouragement à la créativité personnelle.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.CREATIVE,
      },

      // INCLUSION (Inclusion sociale)
      {
        id: 1791,
        categoryName: "Accessibilité",
        description: "Adaptations et aménagements.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1792,
        categoryName: "Lutte contre les discriminations",
        description: "Sensibilisation et actions.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1793,
        categoryName: "Soutien aux minorités",
        description: "Écoute et accompagnement.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1794,
        categoryName: "Éducation à la diversité",
        description: "Programmes et ateliers.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 1795,
        categoryName: "Insertion professionnelle",
        description: "Aide à l’emploi et formation.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.INCLUSION,
      },

      // ELDERLY_SUPPORT (Soutien aux personnes âgées)
      {
        id: 1796,
        categoryName: "Visites à domicile",
        description: "Accompagnement et lien social.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1797,
        categoryName: "Activités adaptées",
        description: "Programmes physiques et cognitifs.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1798,
        categoryName: "Aide administrative",
        description: "Soutien dans les démarches.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1799,
        categoryName: "Soutien familial",
        description: "Ressources pour aidants.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 1800,
        categoryName: "Prévention de l’isolement",
        description: "Actions pour favoriser le lien social.",
        typeId: ECategoryType.SERVICE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
    ],
    skipDuplicates: true,
  });
}

seedServices()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedServices };

import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedBadges() {
  await prisma.category.createMany({
    data: [
      // 2. BADGE
      // ------------
      // 🏅 Distinctions ou badges obtenus

      // 🏃 Activités physiques et sportives (PHYSICAL)
      {
        id: 241,
        categoryName: "Marcheur assidu",
        description: "Récompense les utilisateurs qui marchent régulièrement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 242,
        categoryName: "Sportif du dimanche",
        description:
          "Pour ceux qui participent à des activités sportives occasionnelles.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 243,
        categoryName: "Athlète engagé",
        description:
          "Pour les utilisateurs pratiquant une activité physique intense plusieurs fois par semaine.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // 🧠 Fonctions cognitives et intellectuelles (COGNITIVE)
      {
        id: 244,
        categoryName: "Maître du Puzzle",
        description: "Pour la résolution régulière de casse-têtes cognitifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 245,
        categoryName: "Curieux de nature",
        description:
          "Pour ceux qui explorent régulièrement de nouveaux sujets intellectuels.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 246,
        categoryName: "Cerveau actif",
        description:
          "Pour la participation continue à des activités stimulantes mentalement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // 🤝 Activités sociales et communautaires (SOCIAL)
      {
        id: 247,
        categoryName: "Connecteur",
        description: "Pour avoir interagi avec plusieurs utilisateurs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 248,
        categoryName: "Bénévole actif",
        description: "Pour l’implication dans des événements communautaires.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 249,
        categoryName: "Créateur de lien",
        description: "Pour ceux qui rassemblent et animent des groupes.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 👁️👂 Activités sensorielles (SENSORY)
      {
        id: 250,
        categoryName: "Explorateur sensoriel",
        description:
          "Pour avoir participé à diverses expériences sensorielles.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 251,
        categoryName: "Maître des sens",
        description:
          "Pour l'intégration régulière d'activités impliquant les 5 sens.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 252,
        categoryName: "Détenteur de l'équilibre sensoriel",
        description:
          "Pour l’équilibre entre stimulation visuelle, sonore et tactile.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 🧘‍♂️ Bien-être physique (PHYSICAL_WELLNESS)
      {
        id: 253,
        categoryName: "Sommeil réparateur",
        description: "Pour une bonne hygiène de sommeil.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 254,
        categoryName: "Relaxation maître",
        description:
          "Pour l’utilisation régulière de techniques de relaxation.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 255,
        categoryName: "Routine saine",
        description:
          "Pour la mise en place d’habitudes favorisant le bien-être physique.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // 😊 Bien-être émotionnel (EMOTIONAL_WELLNESS)
      {
        id: 256,
        categoryName: "Gestionnaire du stress",
        description: "Pour avoir suivi des exercices de gestion du stress.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 257,
        categoryName: "Journal intime",
        description:
          "Pour ceux qui tiennent un journal émotionnel régulièrement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 258,
        categoryName: "Stabilité émotionnelle",
        description: "Pour la constance dans la gestion des émotions.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🤗 Bien-être social (SOCIAL_WELLNESS)
      {
        id: 259,
        categoryName: "Ami fidèle",
        description: "Pour les interactions sociales récurrentes.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 260,
        categoryName: "Soutien de la communauté",
        description: "Pour ceux qui apportent du soutien moral aux autres.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 261,
        categoryName: "Ambassadeur du bien-être social",
        description: "Pour les leaders d'initiatives sociales.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🧩 Bien-être intellectuel (INTELLECTUAL_WELLNESS)
      {
        id: 262,
        categoryName: "Lecteur assidu",
        description:
          "Pour les utilisateurs qui lisent des livres/articles fréquemment.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 263,
        categoryName: "Développeur d'idées",
        description:
          "Pour ceux qui partagent ou initient des idées novatrices.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 264,
        categoryName: "Curiosité sans fin",
        description: "Pour l’exploration continue de sujets nouveaux.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 💰 Bien-être financier (FINANCIAL_WELLNESS)
      {
        id: 265,
        categoryName: "Planificateur budgétaire",
        description: "Pour avoir établi et suivi un budget personnel.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 266,
        categoryName: "Épargnant malin",
        description:
          "Pour les utilisateurs qui ont atteint des objectifs financiers.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 267,
        categoryName: "Conseiller avisé",
        description: "Pour ceux qui partagent des conseils financiers utiles.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 🌱 Bien-être environnemental (ENVIRONMENTAL_WELLNESS)
      {
        id: 268,
        categoryName: "Éco-actif",
        description: "Pour des gestes réguliers en faveur de l’environnement.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 269,
        categoryName: "Recyclage pro",
        description:
          "Pour un engagement dans le tri et la gestion des déchets.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 270,
        categoryName: "Gardien de la planète",
        description: "Pour des projets environnementaux significatifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // 🕉️ Bien-être spirituel (SPIRITUAL_WELLNESS)
      {
        id: 271,
        categoryName: "Réflexion intérieure",
        description: "Pour la pratique régulière de la méditation.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 272,
        categoryName: "Quête de sens",
        description:
          "Pour la participation à des activités de développement spirituel.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 273,
        categoryName: "Sérénité profonde",
        description: "Pour une cohérence durable entre actions et valeurs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // 🧮 Activités cognitives spécifiques (COGNITIVE_ACTIVITY)
      {
        id: 274,
        categoryName: "Calculateur rapide",
        description: "Pour des jeux ou exercices de calcul mental.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 275,
        categoryName: "Mémorisateur",
        description: "Pour des activités de mémorisation fréquentes.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 276,
        categoryName: "Résolveur de problèmes",
        description: "Pour la résolution de défis cognitifs réguliers.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // 🧘‍♀️ Bien-être cognitif (COGNITIVE_WELLNESS)
      {
        id: 277,
        categoryName: "Méditation active",
        description: "Pour combiner bien-être mental et exercices cognitifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 278,
        categoryName: "Concentration stable",
        description:
          "Pour la progression dans des exercices de pleine conscience.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 279,
        categoryName: "Équilibre mental",
        description: "Pour un entretien régulier de la santé cognitive.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },

      // 🏙️ Problématiques d’infrastructures urbaines (URBAN_INFRASTRUCTURE)
      {
        id: 280,
        categoryName: "Urbaniste engagé",
        description:
          "Pour des propositions ou projets d’amélioration de l’infrastructure.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 281,
        categoryName: "Observateur urbain",
        description:
          "Pour des signalements pertinents sur l’état des infrastructures.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 282,
        categoryName: "Visionnaire urbain",
        description: "Pour des idées novatrices appliquées à la ville.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },

      // 🚦 Mobilité et transports urbains (TRANSPORTATION)
      {
        id: 283,
        categoryName: "Cycliste urbain",
        description: "Pour avoir favorisé les mobilités douces.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 284,
        categoryName: "Défenseur du transport public",
        description: "Pour la promotion des transports collectifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 285,
        categoryName: "Zéro carbone",
        description: "Pour des choix de mobilité écoresponsables.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // 🌿 Espaces verts et environnement urbain (URBAN_ENVIRONMENT)
      {
        id: 286,
        categoryName: "Jardinier citoyen",
        description: "Pour la participation à des jardins partagés.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 287,
        categoryName: "Protecteur des espaces verts",
        description: "Pour des actions en faveur de leur préservation.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 288,
        categoryName: "Ambassadeur de la biodiversité",
        description: "Pour la promotion de la faune et la flore urbaine.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },

      // 🏢 Services communautaires urbains (COMMUNITY_SERVICES)
      {
        id: 289,
        categoryName: "Citoyen impliqué",
        description: "Pour la contribution à des services locaux.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 290,
        categoryName: "Pilier de quartier",
        description: "Pour un rôle actif dans la communauté.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 291,
        categoryName: "Organisateur local",
        description: "Pour la mise en place d’initiatives collectives.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // ♻️ Gestion des déchets urbains (WASTE_MANAGEMENT)
      {
        id: 292,
        categoryName: "Recycleur modèle",
        description: "Pour des pratiques constantes de tri.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 293,
        categoryName: "Réducteur de déchets",
        description: "Pour la diminution significative des déchets produits.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 294,
        categoryName: "Zéro déchet",
        description: "Pour la mise en place d’initiatives collectives.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // 🚀 Projets d’innovation et technologie (INNOVATION)
      {
        id: 295,
        categoryName: "Innovateur",
        description: "Pour une idée originale mise en œuvre.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 296,
        categoryName: "Tech-explorateur",
        description: "Pour l’expérimentation régulière d’outils numériques.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 297,
        categoryName: "Créateur d’impact",
        description:
          "Pour un projet innovant avec portée sociale/environnementale.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 🛠️ Projets de construction et aménagement (CONSTRUCTION)
      {
        id: 298,
        categoryName: "Architecte solidaire",
        description:
          "Pour une implication dans un projet de construction utile.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 299,
        categoryName: "Bâtisseur responsable",
        description: "Pour l’utilisation de matériaux ou techniques durables.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 300,
        categoryName: "Aménageur urbain",
        description:
          "Pour la transformation ou l'amélioration d’espaces partagés.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },

      // 🌍 Projets environnementaux et durables (SUSTAINABILITY)
      {
        id: 301,
        categoryName: "Militant vert",
        description: "Pour la participation à des actions écologiques.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 302,
        categoryName: "Passeur d’écologie",
        description: "Pour avoir formé ou sensibilisé d’autres personnes.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 303,
        categoryName: "Acteur du changement",
        description: "Pour un impact durable sur la communauté.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },

      // 🧑‍🤝‍🧑 Services à la personne (DAILY_HELP)
      {
        id: 304,
        categoryName: "Aidant du quotidien",
        description:
          "Pour avoir aidé régulièrement une personne en difficulté.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 305,
        categoryName: "Compagnon solidaire",
        description: "Pour des actes de présence et de soutien moral.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 306,
        categoryName: "Pilier familial",
        description: "Pour l’aide continue apportée à des proches.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // 🗣️ Discussions, échanges et débats (DISCUSSIONS)
      {
        id: 307,
        categoryName: "Débatteur respectueux",
        description:
          "Pour la participation à des échanges d’idées constructifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 308,
        categoryName: "Écoute active",
        description:
          "Pour l’attitude bienveillante et l’écoute attentive des autres.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 309,
        categoryName: "Animateur de parole",
        description: "Pour avoir animé ou modéré des discussions.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // 🧓 Soutien aux personnes âgées (ELDERLY_SUPPORT)
      {
        id: 310,
        categoryName: "Compagnon senior",
        description:
          "Pour les visites ou temps passés avec des personnes âgées.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 311,
        categoryName: "Facilitateur de lien intergénérationnel",
        description: "Pour les interactions entre générations.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 312,
        categoryName: "Soutien autonome",
        description: "Pour l’aide à la mobilité, aux courses ou aux démarches.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },

      // ♿ Inclusion et accessibilité (INCLUSION)
      {
        id: 313,
        categoryName: "Inclusif convaincu",
        description: "Pour la mise en place d’actions visant l’accessibilité.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 314,
        categoryName: "Voix de l’équité",
        description: "Pour avoir défendu ou promu l’inclusion sociale.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 315,
        categoryName: "Éclaireur de diversité",
        description:
          "Pour des initiatives favorisant la diversité et le respect des différences.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.INCLUSION,
      },

      // 📚 Éducation et apprentissage (EDUCATION)
      {
        id: 316,
        categoryName: "Savoir partagé",
        description:
          "Pour la transmission de connaissances à d'autres utilisateurs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 317,
        categoryName: "Apprenant constant",
        description: "Pour l’engagement dans des formations ou lectures.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 318,
        categoryName: "Mentor éducatif",
        description: "Pour avoir aidé d'autres à apprendre ou progresser.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🧪 Santé et prévention (HEALTH)
      {
        id: 319,
        categoryName: "Prévention active",
        description:
          "Pour la participation à des campagnes ou gestes préventifs.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 320,
        categoryName: "Santé vigilante",
        description:
          "Pour le suivi régulier de sa santé et bien-être physique.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 321,
        categoryName: "Ambassadeur santé",
        description:
          "Pour la sensibilisation autour de la santé dans la communauté.",
        typeId: ECategoryType.BADGE,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
    ],
    skipDuplicates: true,
  });
}

seedBadges()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedBadges };

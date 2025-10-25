import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedUrbanIssues() {
  await prisma.category.createMany({
    data: [
      // 12. URBAN_ISSUE
      // ------------
      // 🌆 Problématiques urbaines ou environnementales locales

      // 1. PHYSICAL (🏃)
      {
        id: 2085,
        categoryName: "Aménagement des pistes cyclables",
        description:
          "Développement sécurisé et continu des voies cyclables pour encourager le vélo en ville.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 2086,
        categoryName: "Espaces de fitness en plein air",
        description:
          "Installation d’équipements sportifs accessibles gratuitement dans les parcs urbains.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 2087,
        categoryName: "Accessibilité des infrastructures",
        description:
          "Adaptation des bâtiments et espaces publics aux personnes à mobilité réduite.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 2088,
        categoryName: "Sécurité des terrains de sport",
        description:
          "Surveillance et entretien des terrains sportifs urbains pour prévenir les accidents.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 2089,
        categoryName: "Organisation d’événements sportifs locaux",
        description:
          "Promotion d’activités physiques communautaires et compétitions de quartier.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // 2. COGNITIVE (🧠)
      {
        id: 2090,
        categoryName: "Signalisation claire et intuitive",
        description:
          "Optimisation des panneaux et informations urbaines pour faciliter la navigation.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 2091,
        categoryName: "Espaces de détente mentale",
        description:
          "Création de zones calmes et naturelles en milieu urbain pour la concentration et la réflexion.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 2092,
        categoryName: "Bibliothèques urbaines",
        description:
          "Accès facilité à des ressources culturelles et éducatives.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 2093,
        categoryName: "Ateliers de sensibilisation environnementale",
        description: "Éducation des citoyens aux enjeux écologiques urbains.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 2094,
        categoryName: "Zones d’apprentissage interactives",
        description:
          "Installation d’équipements urbains interactifs pour stimuler la curiosité.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // 3. SOCIAL (🤝)
      {
        id: 2095,
        categoryName: "Espaces de rencontres communautaires",
        description:
          "Création de lieux dédiés aux échanges et activités sociales de proximité.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 2096,
        categoryName: "Programmes d’intégration des nouveaux arrivants",
        description:
          "Faciliter l’intégration sociale par des événements et accompagnements.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 2097,
        categoryName: "Réduction de l’isolement des personnes âgées",
        description:
          "Actions ciblées pour maintenir le lien social en milieu rural.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 2098,
        categoryName: "Initiatives de cohabitation intergénérationnelle",
        description:
          "Encouragement des projets de logement partagé entre générations.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 2099,
        categoryName: "Organisation de fêtes de quartier",
        description:
          "Dynamisation de la vie locale par des manifestations festives.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 4. SENSORY (👁️👂)
      {
        id: 2100,
        categoryName: "Réduction des nuisances sonores",
        description:
          "Mise en place de zones calmes et limitation des bruits urbains.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 2101,
        categoryName: "Amélioration de l’éclairage public",
        description:
          "Sécurisation des rues par un éclairage adapté et respectueux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 2102,
        categoryName: "Espaces verts sensoriels",
        description:
          "Jardins multisensoriels pour favoriser le bien-être et la relaxation.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 2103,
        categoryName: "Signalisation tactile pour malvoyants",
        description:
          "Adaptation des parcours piétons pour personnes déficientes visuelles.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 2104,
        categoryName: "Réduction de la pollution olfactive",
        description:
          "Gestion des déchets et industries pour limiter les odeurs désagréables.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 5. PHYSICAL_WELLNESS (🧘‍♂️)
      {
        id: 2105,
        categoryName: "Zones de méditation urbaine",
        description:
          "Création d’espaces propices à la relaxation et au ressourcement.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 2106,
        categoryName: "Programmes de relaxation en plein air",
        description: "Cours de yoga et méditation dans les parcs publics.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 2107,
        categoryName: "Promotion du sommeil sain",
        description:
          "Réglementation sur le bruit nocturne et qualité de l’air.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 2108,
        categoryName: "Stations d’hydratation publique",
        description:
          "Installation de points d’eau potable dans les espaces urbains.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 2109,
        categoryName: "Sentiers pédestres de bien-être",
        description: "Parcours dédiés à la marche et à la détente en ville.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // 6. EMOTIONAL_WELLNESS (😊)
      {
        id: 2110,
        categoryName: "Espaces de soutien émotionnel urbains",
        description:
          "Centres d’écoute et de parole pour le bien-être émotionnel des habitants.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 2111,
        categoryName: "Ateliers de gestion du stress en quartier",
        description:
          "Sessions collectives pour apprendre à gérer le stress et l’anxiété.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 2112,
        categoryName: "Programmes d’art thérapie urbaine",
        description:
          "Activités artistiques pour favoriser l’expression des émotions.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 2113,
        categoryName: "Zones de tranquillité urbaine",
        description:
          "Espaces calmes pour se détendre et retrouver son équilibre émotionnel.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 2114,
        categoryName: "Groupes de soutien communautaire",
        description:
          "Rencontres régulières pour partager expériences et renforcer la résilience.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 7. SOCIAL_WELLNESS (🤗)
      {
        id: 2115,
        categoryName: "Espaces de convivialité de proximité",
        description:
          "Bancs, cafés et jardins pour favoriser les interactions sociales.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 2116,
        categoryName: "Programmes d’entraide locale",
        description:
          "Plateformes et initiatives pour favoriser l’aide entre voisins.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 2117,
        categoryName: "Animations intergénérationnelles",
        description:
          "Activités rassemblant toutes les générations pour renforcer les liens sociaux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 2118,
        categoryName: "Ateliers de communication non-violente",
        description:
          "Formation à la gestion des conflits dans la vie de quartier.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 2119,
        categoryName: "Clubs et associations de quartier",
        description:
          "Soutien aux groupes sociaux pour dynamiser la vie locale.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 8. INTELLECTUAL_WELLNESS (🧩)
      {
        id: 2120,
        categoryName: "Espaces de co-working et créativité",
        description:
          "Lieux publics dédiés au travail intellectuel et à l’innovation.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 2121,
        categoryName: "Bibliothèques et ludothèques de quartier",
        description:
          "Accès facilité à des ressources culturelles et récréatives.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 2122,
        categoryName: "Ateliers de développement personnel",
        description: "Sessions pour apprendre, se former et évoluer.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 2123,
        categoryName: "Conférences et débats publics",
        description:
          "Organisation régulière d’événements pour nourrir l’esprit critique.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 2124,
        categoryName: "Zones de silence pour concentration",
        description:
          "Espaces urbains préservés du bruit pour favoriser la réflexion.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 9. FINANCIAL_WELLNESS (💰)
      {
        id: 2125,
        categoryName: "Aide à la gestion budgétaire locale",
        description:
          "Ateliers et conseils pour mieux gérer ses finances personnelles.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 2126,
        categoryName: "Microcrédits et financements citoyens",
        description:
          "Faciliter l’accès à des ressources financières pour les projets locaux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 2127,
        categoryName: "Espaces de conseils fiscaux gratuits",
        description: "Permanences municipales pour l’accompagnement financier.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 2128,
        categoryName: "Programmes d’insertion économique",
        description: "Soutien à l’emploi et à la formation professionnelle.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 2129,
        categoryName: "Initiatives d’économie solidaire",
        description:
          "Encouragement des circuits courts et de la consommation locale.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 10. ENVIRONMENTAL_WELLNESS (🌱)
      {
        id: 2130,
        categoryName: "Jardins partagés et communautaires",
        description:
          "Espaces verts gérés collectivement pour un contact direct avec la nature.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 2131,
        categoryName: "Actions de dépollution",
        description:
          "Organisation de nettoyages et de sensibilisation à la propreté.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 2132,
        categoryName: "Programmes de compostage collectif",
        description:
          "Mise en place de composteurs de quartier pour réduire les déchets.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 2133,
        categoryName: "Zones de biodiversité",
        description: "Création d’habitats pour la faune et la flore locales.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 2134,
        categoryName: "Ateliers de jardinage écologique",
        description: "Formation aux techniques de jardinage durable.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // 11. SPIRITUAL_WELLNESS (🕉️)
      {
        id: 2135,
        categoryName: "Espaces de méditation",
        description: "Lieux dédiés au calme et à la pratique méditative.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 2136,
        categoryName: "Groupes de discussion spirituelle",
        description:
          "Rencontres pour échanger sur le sens de la vie et la spiritualité.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 2137,
        categoryName: "Ateliers de pleine conscience",
        description:
          "Sessions pour apprendre à vivre l’instant présent au quotidien.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 2138,
        categoryName: "Retraites de bien-être",
        description: "Programmes pour se déconnecter.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // 12. COGNITIVE_ACTIVITY (🧮)
      {
        id: 2139,
        categoryName: "Jeux de logique et puzzles en clubs",
        description: "Espaces pour stimuler les capacités mentales.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 2140,
        categoryName: "Ateliers d’apprentissage accéléré",
        description:
          "Techniques et méthodes pour améliorer la mémoire et la concentration.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 2141,
        categoryName: "Cours de langues et culture locale",
        description:
          "Programmes pour découvrir de nouvelles langues et traditions.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 2142,
        categoryName: "Groupes de lecture dynamique",
        description:
          "Clubs pour lire, discuter et développer la pensée critique.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 2143,
        categoryName: "Sessions d’entrainement cérébral digital",
        description:
          "Utilisation d’applications et d'outils numériques pour le cerveau.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // 13. COGNITIVE_WELLNESS (🧘‍♀️)
      {
        id: 2144,
        categoryName: "Zones de silence et détente mentale",
        description: "Espaces sans bruit pour le repos cognitif.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 2145,
        categoryName: "Ateliers de gestion du stress mental",
        description: "Méthodes pour diminuer la surcharge cognitive.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 2146,
        categoryName: "Programmes de relaxation guidée",
        description: "Séances pour apprendre à calmer l’esprit.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 2147,
        categoryName: "Pratiques de visualisation positive",
        description: "Exercices pour renforcer la confiance en soi.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 2148,
        categoryName: "Techniques de mindfulness",
        description:
          "Adaptation de la pleine conscience dans la vie rurale et citadine",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },

      // 14. URBAN_INFRASTRUCTURE (🏙️)
      {
        id: 2148,
        categoryName: "Amélioration des espaces publics",
        description: "Réhabilitation des places, trottoirs et mobilier urbain.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 2149,
        categoryName: "Accessibilité pour tous",
        description:
          "Adaptations pour personnes à mobilité réduite en milieu rural.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 2150,
        categoryName: "Modernisation des réseaux énergétiques",
        description: "Installation de sources d’énergie renouvelable rurales.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 2151,
        categoryName: "Sécurisation des infrastructures",
        description:
          "Mesures pour garantir la sécurité des bâtiments et installations.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 2152,
        categoryName: "Optimisation de la gestion des ressources",
        description: "Systèmes intelligents pour réduire les gaspillages.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },

      // 15. TRANSPORTATION (🚦)
      {
        id: 2153,
        categoryName: "Développement des pistes cyclables",
        description: "Création et entretien de voies dédiées aux vélos.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 2154,
        categoryName: "Systèmes de covoiturage",
        description: "Plateformes et services pour partager les trajets.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 2155,
        categoryName: "Transport public écologique",
        description: "Bus électriques, tramways et autres solutions durables.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 2156,
        categoryName: "Parkings partagés et intelligents",
        description: "Gestion optimisée des places de stationnement.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 2157,
        categoryName: "Promotion de la marche",
        description: "Aménagements pour favoriser la mobilité piétonne.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // 16. URBAN_ENVIRONMENT (🌿)
      {
        id: 2158,
        categoryName: "Jardins partagés communautaires",
        description: "Espaces verts cultivés collectivement par les habitants.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 2159,
        categoryName: "Programmes de reforestation",
        description: "Plantation d’arbres pour améliorer la qualité de l’air.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 2160,
        categoryName: "Zones de protection de la biodiversité locale",
        description: "Espaces préservés pour la faune et la flore.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 2161,
        categoryName: "Initiatives de réduction des îlots de chaleur",
        description: "Actions pour rafraîchir les zones bétonnées.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 2162,
        categoryName: "Collecte et compostage des déchets verts",
        description: "Systèmes pour valoriser les déchets organiques.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },

      // 17. COMMUNITY_SERVICES (🏢)
      {
        id: 2163,
        categoryName: "Centres d’accueil multi-services",
        description:
          "Lieux offrant aide sociale, information et accompagnement.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 2164,
        categoryName: "Ateliers de formation professionnelle",
        description: "Sessions pour améliorer les compétences et l’emploi.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 2165,
        categoryName: "Espaces de rencontres intergénérationnelles",
        description: "Activités réunissant jeunes et seniors.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 2166,
        categoryName: "Groupes de soutien aux familles",
        description: "Accompagnement et conseils pour la parentalité.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 2167,
        categoryName: "Services de médiation locale",
        description: "Aide à la résolution des conflits de voisinage.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // 18. WASTE_MANAGEMENT (♻️)
      {
        id: 2168,
        categoryName: "Points de collecte sélective",
        description: "Emplacements dédiés au tri des déchets recyclables.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 2169,
        categoryName: "Campagnes de sensibilisation au recyclage",
        description: "Actions éducatives pour réduire les déchets.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 2170,
        categoryName: "Programmes de réemploi et réparation",
        description: "Encouragement à la remise à neuf des objets.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 2171,
        categoryName: "Gestion intelligente des déchets organiques",
        description: "Compostage urbain et valorisation énergétique.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 2172,
        categoryName: "Contrôles et sanctions anti-déchets sauvages",
        description: "Mesures pour lutter contre les dépôts illégaux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // 19. INNOVATION (🚀)
      {
        id: 2173,
        categoryName: "Laboratoires urbains d’expérimentation",
        description: "Espaces dédiés aux projets innovants locaux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 2174,
        categoryName: "Incubateurs de startups sociales",
        description: "Soutien aux jeunes entreprises à impact social.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 2175,
        categoryName: "Solutions smart village",
        description:
          "Technologies pour améliorer la gestion rurale (capteurs, IoT).",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 2176,
        categoryName: "Projets de mobilité innovante",
        description: "Véhicules autonomes, services partagés et alternatives.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 2177,
        categoryName: "Plateformes collaboratives numériques",
        description: "Outils pour favoriser la participation citoyenne.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 20. CONSTRUCTION (🛠️)
      {
        id: 2178,
        categoryName: "Habitat écologique et durable",
        description: "Construction avec matériaux bio et basse consommation.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 2179,
        categoryName: "Réhabilitation de bâtiments anciens",
        description: "Adaptation des constructions au confort moderne.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 2180,
        categoryName: "Normes de sécurité et accessibilité",
        description: "Garantir un cadre sécurisé et inclusif.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 2181,
        categoryName: "Espaces publics multifonctions",
        description: "Aménagements flexibles pour diverses activités.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },
      {
        id: 2182,
        categoryName: "Chantiers participatifs citoyens",
        description: "Implication des habitants dans les projets locaux.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.CONSTRUCTION,
      },

      // 21. SUSTAINABILITY (🌍)
      {
        id: 2183,
        categoryName: "Programmes de réduction de l’empreinte carbone",
        description: "Actions pour limiter les émissions.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 2184,
        categoryName: "Gestion durable de l’eau",
        description: "Techniques pour économiser et recycler l’eau.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 2185,
        categoryName: "Promotion des énergies renouvelables",
        description: "Intégration solaire, éolien et autres sources vertes.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 2186,
        categoryName: "Education à la consommation responsable",
        description: "Sensibilisation aux achats durables.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },
      {
        id: 2187,
        categoryName: "Partenariats avec les ONG environnementales",
        description: "Collaboration pour des projets durables.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.SUSTAINABILITY,
      },

      // 22. COLLABORATION (🤝)
      {
        id: 2188,
        categoryName: "Plateformes d’échange entre acteurs locaux",
        description:
          "Faciliter la coopération entre associations, entreprises, citoyens.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 2189,
        categoryName: "Projets co-construits avec la population",
        description: "Consultations et ateliers participatifs.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 2190,
        categoryName: "Réseaux de partage de ressources",
        description: "Mutualisation de matériel et savoir-faire.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 2191,
        categoryName: "Initiatives interquartiers",
        description:
          "Actions communes pour renforcer la cohésion territoriale.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 2192,
        categoryName: "Journées collaboratives thématiques",
        description: "Evénements pour promouvoir le travail en commun.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.COLLABORATION,
      },

      // 26. ARTICLES (📝)
      {
        id: 2193,
        categoryName: "Études sur l’impact des espaces verts",
        description: "Recherche sur les bénéfices pour la santé.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 2194,
        categoryName: "Analyses des politiques publiques locales",
        description: "Évaluation des actions municipales.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 2195,
        categoryName: "Articles sur les nouvelles technologies sociales",
        description: "Innovations et tendances.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.ARTICLES,
      },

      // 27. PODCASTS (🎙️)
      {
        id: 2196,
        categoryName: "Podcasts sur l’écologie rurale",
        description: "Témoignages et expertises.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 2197,
        categoryName: "Interviews de leaders communautaires",
        description: "Parcours et projets inspirants.",
        typeId: ECategoryType.URBAN_ISSUE,
        chapterId: ECategoryChapter.PODCASTS,
      },
    ],
    skipDuplicates: true,
  });
}

seedUrbanIssues()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedUrbanIssues };

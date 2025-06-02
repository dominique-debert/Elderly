import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedWellness() {
  await prisma.category.createMany({
    data: [

      // 13. WELLNESS
      // ------------
      // 🧘 Bien-être général (physique, mental, émotionnel)

      // 1. PHYSICAL (🏃)
      //  : 
      //  : 
      //  : 
      //  : 
      // Stretching : Étirements pour prévenir les blessures et améliorer la mobilité.
      {
        id: 2198,
        categoryName: "Cardio training",
        description: "Exercices visant à améliorer l’endurance cardiovasculaire.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 2199,
        categoryName: "Renforcement musculaire",
        description: "Programmes pour développer la force et la tonicité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 2200,
        categoryName: "Yoga dynamique",
        description: "Séances mêlant souplesse et respiration.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 2201,
        categoryName: "Sports d’équipe",
        description: "Activités collectives favorisant l’esprit de groupe.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL
      },
      
      // 2. COGNITIVE (🧠)
      {
        id: 2202,
        categoryName: "Jeux de logique",
        description: "Activités pour stimuler le raisonnement et la résolution de problèmes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 2203,
        categoryName: "Apprentissage rapide",
        description: "Techniques pour améliorer la vitesse d’assimilation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 2204,
        categoryName: "Lecture analytique",
        description: "Exercices pour approfondir la compréhension critique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 2205,
        categoryName: "Méditation guidée",
        description: "Pratiques pour améliorer la clarté mentale.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 2206,
        categoryName: "Développement du langage",
        description: "Ateliers pour enrichir le vocabulaire et la communication.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE
      },
      
      // 3. SOCIAL (🤝)
      {
        id: 2206,
        categoryName: "Rencontres communautaires",
        description: "Événements pour favoriser les échanges sociaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 2207,
        categoryName: "Bénévolat local",
        description: "Opportunités d’engagement citoyen.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 2208,
        categoryName: "Ateliers de communication",
        description: "Formation pour mieux écouter et s’exprimer.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 2209,
        categoryName: "Groupes d’entraide",
        description: "Soutien mutuel entre membres d’une même communauté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 2210,
        categoryName: "Festivals culturels",
        description: "Activités valorisant la diversité et l’inclusion.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL
      },
      
      // 4. SENSORY (👁️👂)
      {
        id: 2211,
        categoryName: "Ateliers d’olfaction",
        description: "Exercices pour affiner le sens de l’odorat.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 2212,
        categoryName: "Musicothérapie",
        description: "Utilisation de la musique pour stimuler les sens et apaiser.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 2213,
        categoryName: "Exercices tactiles",
        description: "Activités favorisant la perception du toucher.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 2214,
        categoryName: "Jeux visuels",
        description: "Stimulations pour améliorer la vision et la reconnaissance.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 2215,
        categoryName: "Balades en nature",
        description: "Sorties pour éveiller les sens à l’environnement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SENSORY
      },
      
      // 5. PHYSICAL_WELLNESS (🧘‍♂️)
      {
        id: 2216,
        categoryName: "Relaxation musculaire",
        description: "Techniques pour dénouer les tensions physiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 2217,
        categoryName: "Hygiène du sommeil",
        description: "Conseils pour optimiser la qualité du repos nocturne.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 2218,
        categoryName: "Alimentation équilibrée",
        description: "Programmes pour un régime sain adapté au corps.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 2219,
        categoryName: "Respiration consciente",
        description: "Exercices pour calmer le système nerveux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 2220,
        categoryName: "Aromathérapie relaxante",
        description: "Utilisation des huiles essentielles pour apaiser le corps.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      
      // 6. EMOTIONAL_WELLNESS (😊)
      {
        id: 2221,
        categoryName: "Gestion des émotions",
        description: "Ateliers pour mieux identifier et exprimer ses sentiments.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 2222,
        categoryName: "Mindfulness",
        description: "Pratiques de pleine conscience pour réduire le stress.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 2223,
        categoryName: "Journal intime émotionnel",
        description: "Techniques d’écriture pour clarifier les pensées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 2224,
        categoryName: "Soutien par les pairs",
        description: "Groupes d’écoute et d’échange émotionnel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 2225,
        categoryName: "Activités artistiques",
        description: "Créations pour canaliser et libérer les émotions.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 7. SOCIAL_WELLNESS (🤗)
      {
        id: 2226,
        categoryName: "Création de réseaux sociaux locaux",
        description: "Faciliter les contacts de proximité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 2227,
        categoryName: "Activités intergénérationnelles",
        description: "Projets réunissant différentes tranches d’âge.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 2228,
        categoryName: "Cafés-rencontres",
        description: "Moments conviviaux pour tisser des liens.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 2229,
        categoryName: "Groupes de loisirs partagés",
        description: "Clubs basés sur les intérêts communs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 2230,
        categoryName: "Sensibilisation à l’inclusion",
        description: "Ateliers sur la diversité et le respect mutuel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      
      // 8. INTELLECTUAL_WELLNESS (🧩)
      {
        id: 2231,
        categoryName: "Clubs de lecture",
        description: "Partage et discussion autour d’ouvrages variés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 2232,
        categoryName: "Débats et conférences",
        description: "Espaces d’expression d’idées et d’arguments.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 2233,
        categoryName: "Cours en ligne",
        description: "Formations pour stimuler l’esprit critique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 2234,
        categoryName: "Ateliers d’écriture créative",
        description: "Exercices pour développer l’imagination.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 2235,
        categoryName: "Jeux de stratégie",
        description: "Activités ludiques pour exercer la réflexion.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      
      // 9. FINANCIAL_WELLNESS (💰)
      {
        id: 2236,
        categoryName: "Gestion de budget",
        description: "Ateliers pour apprendre à planifier ses finances.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 2237,
        categoryName: "Épargne et investissement",
        description: "Initiation aux placements financiers adaptés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 2238,
        categoryName: "Endettement responsable",
        description: "Conseils pour gérer et rembourser ses dettes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 2239,
        categoryName: "Préparation à la retraite",
        description: "Planification financière sur le long terme.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 2240,
        categoryName: "Éducation financière des jeunes",
        description: "Programmes pour sensibiliser dès le plus jeune âge.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      
      // 10. ENVIRONMENTAL_WELLNESS (🌱)
      {
        id: 2241,
        categoryName: "Jardinage rural",
        description: "Apprendre à cultiver en milieu rural.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 2242,
        categoryName: "Réduction des déchets",
        description: "Techniques pour limiter son empreinte écologique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 2243,
        categoryName: "Consommation responsable",
        description: "Ateliers pour choisir des produits durables.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 2244,
        categoryName: "Mobilité douce",
        description: "Promotion des déplacements à pied ou à vélo.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 2245,
        categoryName: "Sensibilisation à la biodiversité",
        description: "Découverte et protection de la faune locale.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // 11. SPIRITUAL_WELLNESS (🕉️)
      {
        id: 2246,
        categoryName: "Méditation spirituelle",
        description: "Pratiques de recentrage et de connexion intérieure.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 2247,
        categoryName: "Études philosophiques",
        description: "Discussions sur le sens de la vie et les valeurs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 2248,
        categoryName: "Rituels de pleine conscience",
        description: "Exercices pour vivre l’instant présent.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 2249,
        categoryName: "Cercles de parole",
        description: "Échanges sur les expériences spirituelles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 2250,
        categoryName: "Pratiques de gratitude",
        description: "Développement d’une attitude positive et reconnaissante.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      
      // 12. COGNITIVE_ACTIVITY (🧮)
      {
        id: 2251,
        categoryName: "Résolution d’énigmes",
        description: "Activités stimulantes pour le cerveau.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 2252,
        categoryName: "Cours de langues",
        description: "Apprentissage pour enrichir ses capacités linguistiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 2253,
        categoryName: "Jeux de mémoire",
        description: "Exercices pour améliorer la rétention d’information.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 2254,
        categoryName: "Programmation informatique",
        description: "Initiation au code et à la logique informatique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 2255,
        categoryName: "Ateliers de mathématiques ludiques",
        description: "Approche divertissante des concepts numériques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      
      // 13. COGNITIVE_WELLNESS (🧘‍♀️)
      {
        id: 2256,
        categoryName: "Techniques de concentration",
        description: "Méthodes pour renforcer l’attention.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 2257,
        categoryName: "Gestion du stress mental",
        description: "Exercices pour apaiser les pensées envahissantes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 2258,
        categoryName: "Sommeil réparateur",
        description: "Conseils pour un repos favorable à la cognition.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 2259,
        categoryName: "Équilibre travail-repos",
        description: "Stratégies pour éviter l’épuisement intellectuel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 2260,
        categoryName: "Développement de la créativité",
        description: "Activités pour stimuler l’imagination.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      
      // 14. URBAN_INFRASTRUCTURE (🏙️)
      {
        id: 2261,
        categoryName: "Amélioration des transports publics",
        description: "Projets pour fluidifier les déplacements.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 2262,
        categoryName: "Éclairage urbain durable",
        description: "Solutions écologiques pour la nuit.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 2263,
        categoryName: "Accessibilité universelle",
        description: "Adaptation des espaces aux personnes à mobilité réduite.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 2264,
        categoryName: "Gestion des espaces publics",
        description: "Optimisation et entretien des lieux communs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 2265,
        categoryName: "Développement de zones piétonnes",
        description: "Création d’espaces sans voiture.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      
      // 15. TRANSPORTATION (🚦)
      {
        id: 2266,
        categoryName: "Promotion du covoiturage",
        description: "Plateformes et initiatives locales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 2267,
        categoryName: "Réseaux cyclables sécurisés",
        description: "Création et amélioration des pistes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 2268,
        categoryName: "Transport électrique",
        description: "Développement des bornes de recharge.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 2269,
        categoryName: "Information en temps réel",
        description: "Applications pour optimiser les trajets.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 2270,
        categoryName: "Sécurité routière",
        description: "Campagnes de prévention et sensibilisation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      
      // 16. URBAN_ENVIRONMENT (🌿)
      {
        id: 2271,
        categoryName: "Plantations d’arbres",
        description: "Programmes de reboisement rural.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 2272,
        categoryName: "Création de jardins partagés",
        description: "Espaces verts collaboratifs pour habitants.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 2273,
        categoryName: "Nettoyage des espaces publics",
        description: "Initiatives citoyennes de propreté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 2274,
        categoryName: "Réduction des îlots de chaleur",
        description: "Solutions végétales et architecturales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      
      // 17. COMMUNITY_SERVICES (🏢)
      {
        id: 2275,
        categoryName: "Centres d’accueil de quartier",
        description: "Espaces d’entraide et de socialisation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 2276,
        categoryName: "Aide aux personnes en difficulté",
        description: "Soutien matériel et moral.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 2277,
        categoryName: "Organisation d’événements communautaires",
        description: "Fêtes, ateliers, réunions.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 2278,
        categoryName: "Programmes de bénévolat local",
        description: "Opportunités pour s’impliquer.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 2279,
        categoryName: "Soutien aux familles",
        description: "Services d’aide à la parentalité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      
      // 18. WASTE_MANAGEMENT (♻️)
      {
        id: 2279,
        categoryName: "Tri sélectif et recyclage",
        description: "Sensibilisation et facilitation du geste.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 2280,
        categoryName: "Compostage domestique",
        description: "Techniques pour valoriser les déchets organiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 2281,
        categoryName: "Réduction des plastiques",
        description: "Alternatives et actions concrètes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 2282,
        categoryName: "Collectes spéciales (déchets dangereux, électroniques)",
        description: "Organisation et accès.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 2284,
        categoryName: "Recyclage créatif",
        description: "Ateliers de réutilisation artistique des déchets.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      
      // 19. INNOVATION (🚀)
      {
        id: 2285,
        categoryName: "Laboratoires d’innovation locale",
        description: "Espaces pour tester des idées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 2286,
        categoryName: "Ateliers de prototypage rapide",
        description: "Impression 3D, bricolage tech.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 2287,
        categoryName: "Hackathons thématiques",
        description: "Compétitions pour résoudre des problèmes ruraux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 2288,
        categoryName: "Incubateurs de start-ups sociales",
        description: "Accompagnement et financement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 2289,
        categoryName: "Veille technologique",
        description: "Diffusion des dernières avancées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INNOVATION
      },
      
      // 20. CONSTRUCTION (🛠️)
      {
        id: 2289,
        categoryName: "Rénovation énergétique",
        description: "Projets pour améliorer l’isolation et réduire la consommation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 2290,
        categoryName: "Construction durable",
        description: "Usage de matériaux écologiques et techniques innovantes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 2291,
        categoryName: "Accessibilité des bâtiments",
        description: "Adaptation aux personnes à mobilité réduite.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 2292,
        categoryName: "Urbanisme participatif",
        description: "Consultation citoyenne sur les projets.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      
      // 21. SUSTAINABILITY (🌍)
      {
        id: 2293,
        categoryName: "Énergies renouvelables locales",
        description: "Installation de panneaux solaires, éoliennes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 2294,
        categoryName: "Mobilité verte",
        description: "Promotion des transports non polluants.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 2294,
        categoryName: "Éducation à l’écocitoyenneté",
        description: "Programmes scolaires et grand public.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 2295,
        categoryName: "Économie circulaire",
        description: "Encouragement à la réutilisation et réduction du gaspillage.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 2296,
        categoryName: "Gestion durable de l’eau",
        description: "Techniques d’économie et de purification.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      
      // 22. COLLABORATION (🤝)
      {
        id: 2297,
        categoryName: "Plateformes d’échange entre citoyens",
        description: "Outils pour partager ressources et compétences.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 2298,
        categoryName: "Coopératives locales",
        description: "Initiatives économiques collectives.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 2299,
        categoryName: "Projets artistiques collaboratifs",
        description: "Créations participatives en milieu rural.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 2300,
        categoryName: "Groupes de travail thématiques",
        description: "Réunions pour co-construire des solutions.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 2301,
        categoryName: "Événements de réseautage",
        description: "Favoriser les rencontres et partenariats.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COLLABORATION
      },
      
      // 23. PERSONAL_DEVELOPMENT (🎯)
      {
        id: 2302,
        categoryName: "Ateliers de gestion du temps",
        description: "Techniques pour améliorer son organisation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 2303,
        categoryName: "Formations aux soft skills",
        description: "Communication, leadership, créativité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 2304,
        categoryName: "Coaching individuel",
        description: "Accompagnement pour fixer et atteindre ses objectifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 2305,
        categoryName: "Programmes de développement personnel",
        description: "Parcours structurés d’évolution.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      {
        id: 2306,
        categoryName: "Mindfulness et méditation",
        description: "Pratiques pour le bien-être mental.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT
      },
      
      // 24. GUIDES (📖)
      {
        id: 2307,
        categoryName: "Manuels pratiques pour la vie quotidienne",
        description: "Astuces et conseils variés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 2308,
        categoryName: "Guides de santé et bien-être",
        description: "Informations fiables et accessibles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 2309,
        categoryName: "Tutoriels de bricolage et DIY",
        description: "Pas à pas pour réparer et créer.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 2310,
        categoryName: "Guides administratifs",
        description: "Explications pour démarches et droits.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GUIDES
      },
      {
        id: 2311,
        categoryName: "Guides écologiques",
        description: "Comment réduire son impact environnemental.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GUIDES
      },
      
      // 25. VIDEOS (🎥)
      {
        id: 2312,
        categoryName: "Tutoriels DIY",
        description: "Vidéos explicatives pour faire soi-même.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 2313,
        categoryName: "Interviews d’experts",
        description: "Témoignages et conseils professionnels.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 2314,
        categoryName: "Documentaires locaux",
        description: "Portraits et histoires de la communauté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 2315,
        categoryName: "Séances de sport à domicile",
        description: "Exercices guidés pour tous niveaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.VIDEOS
      },
      {
        id: 2316,
        categoryName: "Méditations guidées",
        description: "Pratiques pour la relaxation et le bien-être.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.VIDEOS
      },
      
      // 26. ARTICLES
      {
        id: 2317,
        categoryName: "Actualités communautaires",
        description: "Informations locales et événements.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 2318,
        categoryName: "Dossiers thématiques",
        description: "Analyses approfondies sur des sujets précis.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 2319,
        categoryName: "Conseils pratiques santé",
        description: "Astuces pour une meilleure hygiène de vie.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 2320,
        categoryName: "Portraits d’acteurs locaux",
        description: "Focus sur des personnes engagées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTICLES
      },
      {
        id: 2321,
        categoryName: "Nouvelles technologies",
        description: "Innovations impactant la vie urbaine.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTICLES
      },
      
      // 27. PODCASTS (🎙️)
      {
        id: 2321,
        categoryName: "Discussions sur le bien-être",
        description: "Échanges sur la santé mentale et physique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 2322,
        categoryName: "Histoires inspirantes",
        description: "Récits de réussite et d’engagement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 2323,
        categoryName: "Interviews de spécialistes",
        description: "Experts en urbanisme, écologie, etc.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 2324,
        categoryName: "Conseils pratiques",
        description: "Astuces pour améliorer son quotidien.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PODCASTS
      },
      {
        id: 2325,
        categoryName: "Débats citoyens",
        description: "Échanges sur les problématiques locales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PODCASTS
      },
      
      // 28. INFOGRAPHICS (📊)
      {
        id: 2326,
        categoryName: "Statistiques locales",
        description: "Données sur la population et les services.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 2327,
        categoryName: "Cycle de vie des déchets",
        description: "Visualisation du tri et recyclage.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 2328,
        categoryName: "Impact écologique",
        description: "Graphiques sur la consommation énergétique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 2329,
        categoryName: "Plans d’urbanisme",
        description: "Cartographies et projets en cours.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      {
        id: 2330,
        categoryName: "Guide visuel des aides",
        description: "Informations simplifiées sur les aides disponibles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.INFOGRAPHICS
      },
      
      // 29. HEALTHCARE (🏥)
      {
        id: 2330,
        categoryName: "Cliniques de proximité",
        description: "Informations sur les services accessibles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 2331,
        categoryName: "Campagnes de prévention",
        description: "Vaccinations, dépistages, etc.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 2332,
        categoryName: "Soutien aux patients chroniques",
        description: "Programmes et accompagnements.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 2333,
        categoryName: "Santé mentale",
        description: "Services dédiés et ressources.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      {
        id: 2334,
        categoryName: "Urgences et premiers secours",
        description: "Informations et formations.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HEALTHCARE
      },
      
      // 30. EDUCATION (🧑‍🏫)
      {
        id: 2335,
        categoryName: "Écoles et formations locales",
        description: "Informations et inscriptions.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 2336,
        categoryName: "Cours en ligne",
        description: "Ressources pour apprendre à distance.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 2337,
        categoryName: "Ateliers de soutien scolaire",
        description: "Aide aux devoirs et méthodologie.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 2338,
        categoryName: "Formation continue",
        description: "Programmes pour adultes et professionnels.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 2339,
        categoryName: "Éducation inclusive",
        description: "Adaptations et ressources pour tous.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EDUCATION
      },
      
      // 31. DAILY_HELP (🛒)
      {
        id: 2340,
        categoryName: "Service de courses à domicile",
        description: "Aide pour les achats alimentaires.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 2341,
        categoryName: "Aide ménagère",
        description: "Soutien pour l’entretien du logement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 2342,
        categoryName: "Livraison de médicaments",
        description: "Assistance pour la pharmacie.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 2343,
        categoryName: "Aide aux déplacements",
        description: "Transport adapté pour personnes fragiles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      {
        id: 2344,
        categoryName: "Accompagnement administratif",
        description: "Support pour démarches quotidiennes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DAILY_HELP
      },
      
      // 32. SOCIAL_SUPPORT (🧑‍🤝‍🧑)
      {
        id: 2345,
        categoryName: "Groupes d’entraide",
        description: "Soutien mutuel entre habitants.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 2346,
        categoryName: "Aide à l’insertion sociale",
        description: "Programmes pour retrouver un emploi.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 2347,
        categoryName: "Soutien aux familles monoparentales",
        description: "Services dédiés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 2348,
        categoryName: "Lutte contre l’isolement",
        description: "Actions pour rompre la solitude.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      {
        id: 2349,
        categoryName: "Accompagnement psychologique",
        description: "Consultations et ateliers.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT
      },
      
      // 33. ADMINISTRATIVE_HELP (🏢)
      {
        id: 2349,
        categoryName: "Assistance aux démarches administratives",
        description: "Aide pour remplir formulaires et papiers officiels.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 2350,
        categoryName: "Consultations juridiques gratuites",
        description: "Conseils sur les droits et procédures.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 2351,
        categoryName: "Aide à la constitution de dossiers sociaux",
        description: "Soutien pour les demandes d’aides.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 2352,
        categoryName: "Médiation et résolution de conflits",
        description: "Services pour apaiser les litiges.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      {
        id: 2353,
        categoryName: "Accompagnement aux entretiens officiels",
        description: "Préparation aux rendez-vous administratifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP
      },
      
      // 34. PSYCHOLOGICAL_SUPPORT (🤝)
      {
        id: 2354,
        categoryName: "Consultations individuelles",
        description: "Accompagnement psychologique personnalisé.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 2355,
        categoryName: "Groupes de parole",
        description: "Espaces d’échange et de soutien collectif.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 2356,
        categoryName: "Ateliers gestion du stress",
        description: "Techniques pour mieux gérer l’anxiété.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 2357,
        categoryName: "Soutien aux proches aidants",
        description: "Ressources pour les aidants familiaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      {
        id: 2358,
        categoryName: "Interventions en situation de crise",
        description: "Aide d’urgence psychologique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT
      },
      
      // 35. MEDICAL_AID (💊)
      {
        id: 2358,
        categoryName: "Premiers secours",
        description: "Formations et interventions d’urgence.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 2359,
        categoryName: "Distribution de matériel médical",
        description: "Aide à l’accès aux équipements.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 2360,
        categoryName: "Suivi des traitements",
        description: "Soutien pour la prise régulière des médicaments.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 2361,
        categoryName: "Consultations mobiles",
        description: "Visites à domicile pour les personnes isolées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      {
        id: 2362,
        categoryName: "Campagnes de vaccination",
        description: "Sensibilisation et rendez-vous.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_AID
      },
      
      // 36. HOUSING_SUPPORT (🏠)
      {
        id: 2363,
        categoryName: "Logement d’urgence",
        description: "Hébergement temporaire pour personnes en difficulté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 2364,
        categoryName: "Accompagnement dans la recherche de logement",
        description: "Aide pour trouver un logement durable.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 2365,
        categoryName: "Soutien aux démarches locatives",
        description: "Assistance pour les contrats et droits.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 2366,
        categoryName: "Rénovation et aménagement",
        description: "Aide à l’adaptation du logement pour personnes vulnérables.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      {
        id: 2367,
        categoryName: "Médiation locative",
        description: "Résolution des conflits avec les propriétaires.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.HOUSING_SUPPORT
      },
      
      // 37. FOOD_AID (🥖)
      {
        id: 2368,
        categoryName: "Distribution alimentaire",
        description: "Banques alimentaires et repas gratuits.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 2369,
        categoryName: "Ateliers nutrition",
        description: "Conseils pour bien manger avec un budget limité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 2370,
        categoryName: "Jardins partagés",
        description: "Initiatives pour cultiver des légumes locaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 2371,
        categoryName: "Aide aux familles en difficulté",
        description: "Soutien alimentaire ciblé.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FOOD_AID
      },
      {
        id: 2372,
        categoryName: "Sensibilisation au gaspillage",
        description: "Actions pour réduire le gaspillage alimentaire.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.FOOD_AID
      },
      
      // 38. EMERGENCY_SERVICES (📞)
      {
        id: 2373,
        categoryName: "Interventions rapides",
        description: "Coordination des secours en cas d’urgence.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 2374,
        categoryName: "Numéros d’urgence",
        description: "Informations et sensibilisation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 2375,
        categoryName: "Centres d’accueil d’urgence",
        description: "Hébergement et prise en charge immédiate.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 2376,
        categoryName: "Préparation aux catastrophes",
        description: "Formation et plans d’action.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      {
        id: 2377,
        categoryName: "Soutien post-crise",
        description: "Accompagnement après les événements traumatisants.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES
      },
      
      // 39. PHYSICAL_ACTIVITY (🏃‍♂️)
      {
        id: 2378,
        categoryName: "Cours collectifs sportifs",
        description: "Activités physiques encadrées en groupe.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 2379,
        categoryName: "Programmes de remise en forme",
        description: "Exercices adaptés à tous niveaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 2380,
        categoryName: "Randonnées et sorties nature",
        description: "Activités de plein air.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 2381,
        categoryName: "Compétitions locales",
        description: "Organisation et participation à des événements sportifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      {
        id: 2382,
        categoryName: "Activités pour seniors",
        description: "Programmes adaptés pour les personnes âgées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY
      },
      
      // 40. COGNITIVE_TRAINING (🧠)
      {
        id: 2383,
        categoryName: "Jeux de mémoire",
        description: "Exercices pour stimuler la mémoire.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 2384,
        categoryName: "Ateliers de réflexion",
        description: "Activités pour développer la logique et le raisonnement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 2385,
        categoryName: "Formations en informatique",
        description: "Apprentissage des outils numériques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 2386,
        categoryName: "Cours de langues",
        description: "Apprentissage et perfectionnement linguistique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      {
        id: 2387,
        categoryName: "Stimulation cognitive adaptée",
        description: "Programmes personnalisés pour les personnes âgées.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING
      },
      
      // 41. NUTRITION (🥗)
      {
        id: 2388,
        categoryName: "Ateliers de cuisine saine",
        description: "Apprendre à préparer des repas équilibrés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 2389,
        categoryName: "Conseils diététiques personnalisés",
        description: "Adaptation de l’alimentation aux besoins individuels.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 2390,
        categoryName: "Programmes de perte de poids",
        description: "Accompagnement pour un régime sain.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 2391,
        categoryName: "Sensibilisation aux allergies alimentaires",
        description: "Information et gestion des intolérances.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION
      },
      {
        id: 2392,
        categoryName: "Promotion des produits locaux",
        description: "Valorisation des aliments de proximité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION
      },
      
      // 42. SOCIAL_ENGAGEMENT (🤝)
      {
        id: 2393,
        categoryName: "Bénévolat communautaire",
        description: "Participation à des actions solidaires.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 2394,
        categoryName: "Clubs et associations locales",
        description: "Intégration dans des groupes sociaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 2395,
        categoryName: "Organisation d’événements sociaux",
        description: "Animation de rencontres et festivités.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 2396,
        categoryName: "Mentorat et tutorat",
        description: "Soutien entre générations ou groupes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      {
        id: 2397,
        categoryName: "Programmes d’inclusion sociale",
        description: "Actions pour favoriser la mixité et la cohésion.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT
      },
      
      // 43. ENVIRONMENTAL_ACTION (🌍)
      {
        id: 2397,
        categoryName: "Nettoyage de quartiers",
        description: "Mobilisation pour la propreté locale.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 2398,
        categoryName: "Plantation d’arbres",
        description: "Actions pour améliorer la couverture végétale urbaine.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 2399,
        categoryName: "Sensibilisation au tri des déchets",
        description: "Campagnes éducatives.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 2400,
        categoryName: "Promotion de la mobilité douce",
        description: "Encouragement à la marche, vélo et transports verts.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      {
        id: 2401,
        categoryName: "Ateliers de compostage",
        description: "Formation à la gestion des déchets organiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION
      },
      
      // 44. PHYSICAL_ACHIEVEMENTS (🏆)
      {
        id: 2402,
        categoryName: "Badges de distance parcourue",
        description: "Récompenses pour la marche ou la course.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 2403,
        categoryName: "Badges de participation à des événements",
        description: "Reconnaissance des engagements sportifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 2404,
        categoryName: "Badges de régularité",
        description: "Pour une pratique sportive assidue.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 2405,
        categoryName: "Badges de progression",
        description: "Amélioration des performances physiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      {
        id: 2406,
        categoryName: "Badges d’esprit d’équipe",
        description: "Engagement dans les sports collectifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS
      },
      
      // 45. COGNITIVE_ACHIEVEMENTS (🧠)
      //  : 
      //  : 
      //  : 
      //  : 
      //  : 
      {
        id: 2407,
        categoryName: "Badges de mémoire",
        description: "Récompenses pour exercices cognitifs réussis.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 2408,
        categoryName: "Badges de résolution de problèmes",
        description: "Succès dans les activités logiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 2409,
        categoryName: "Badges d’apprentissage linguistique",
        description: "Progrès en langues étrangères.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 2410,
        categoryName: "Badges de participation à ateliers",
        description: "Implication dans les formations.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      {
        id: 2411,
        categoryName: "Badges de créativité cognitive",
        description: "Innovation dans les activités intellectuelles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS
      },
      
      // 46. NUTRITION_ACHIEVEMENTS (🥗)
      {
        id: 2412,
        categoryName: "Badges d’équilibre alimentaire",
        description: "Respect d’un régime sain.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 2413,
        categoryName: "Badges de recettes partagées",
        description: "Contributions culinaires à la communauté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 2414,
        categoryName: "Badges de découverte de nouveaux aliments",
        description: "Diversification de l’alimentation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 2415,
        categoryName: "Badges de réduction du gaspillage",
        description: "Pratiques anti-gaspillage.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      {
        id: 2416,
        categoryName: "Badges d’autonomie alimentaire",
        description: "Capacités à cuisiner seul.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS
      },
      
      // 47. SOCIAL_ACHIEVEMENTS (🤝)
      {
        id: 2417,
        categoryName: "Badges d’engagement bénévole",
        description: "Participation active au bénévolat.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 2418,
        categoryName: "Badges d’organisateur d’événements",
        description: "Mise en place d’activités communautaires.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 2419,
        categoryName: "Badges de solidarité",
        description: "Actions de soutien à des personnes en difficulté.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 2420,
        categoryName: "Badges d’intégration sociale",
        description: "Participation à des groupes diversifiés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      {
        id: 2421,
        categoryName: "Badges de communication",
        description: "Aptitudes en médiation et dialogue.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS
      },
      
      // 48. ENVIRONMENTAL_ACHIEVEMENTS (🌍)
      {
        id: 2422,
        categoryName: "Badges d’action écologique",
        description: "Participation à des initiatives vertes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 2423,
        categoryName: "Badges de réduction de l’empreinte carbone",
        description: "Efforts personnels pour diminuer la pollution.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 2424,
        categoryName: "Badges de sensibilisation",
        description: "Animation de campagnes environnementales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 2425,
        categoryName: "Badges de participation à des projets durables",
        description: "Engagement dans la transition écologique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      {
        id: 2426,
        categoryName: "Badges d’innovation verte",
        description: "Propositions et réalisations innovantes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS
      },
      
      // 49. ENVIRONMENTAL (🌱)
      {
        id: 2427,
        categoryName: "Jardinage rural",
        description: "Initiatives pour cultiver ensemble.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 2428,
        categoryName: "Éducation à l’écologie",
        description: "Ateliers pour sensibiliser au développement durable.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 2429,
        categoryName: "Économies d’énergie",
        description: "Conseils pour réduire la consommation domestique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 2430,
        categoryName: "Protection de la biodiversité",
        description: "Actions pour préserver la faune et la flore locales.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      {
        id: 2431,
        categoryName: "Réduction des déchets plastiques",
        description: "Programmes pour limiter l’utilisation du plastique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ENVIRONMENTAL
      },
      
      // 50. GENERAL (💬)
      {
        id: 2432,
        categoryName: "Forums de discussion libre",
        description: "Échanges ouverts sur tous sujets.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 2433,
        categoryName: "Groupes d’entraide",
        description: "Partage de conseils et d’expériences.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 2434,
        categoryName: "Questions-réponses communautaires",
        description: "Aide et soutien par les pairs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 2435,
        categoryName: "Débats thématiques",
        description: "Discussions sur des sujets précis.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GENERAL
      },
      {
        id: 2436,
        categoryName: "Partage de ressources",
        description: "Documents, liens et outils utiles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.GENERAL
      },
      
      // 55. MENTAL_HEALTH (🧠)
      {
        id: 2437,
        categoryName: "Gestion du stress",
        description: "Techniques et exercices pratiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 2438,
        categoryName: "Soutien en cas d’anxiété",
        description: "Espace d’écoute et conseils.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 2439,
        categoryName: "Prévention de la dépression",
        description: "Informations et accompagnement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 2440,
        categoryName: "Promotion du bien-être mental",
        description: "Activités et ressources.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      {
        id: 2441,
        categoryName: "Ateliers de relaxation",
        description: "Exercices de respiration et méditation.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MENTAL_HEALTH
      },
      
      // 56. MANUAL_SKILL
      {
        id: 2442,
        categoryName: "Ateliers de bricolage",
        description: "Apprentissage des techniques manuelles.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 2443,
        categoryName: "Réparation et entretien",
        description: "Conseils pour entretenir son matériel.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 2444,
        categoryName: "Création artisanale",
        description: "Initiation à différents savoir-faire.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 2445,
        categoryName: "Travail du bois",
        description: "Techniques de base et projets simples.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      {
        id: 2446,
        categoryName: "Soudure et métal",
        description: "Initiation aux outils et méthodes.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MANUAL_SKILL
      },
      
      // 57. NUTRITIONAL_SKILL
      {
        id: 2447,
        categoryName: "Cuisine équilibrée",
        description: "Apprendre à préparer des repas sains et variés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 2448,
        categoryName: "Planification des repas",
        description: "Organisation hebdomadaire pour une alimentation équilibrée.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 2449,
        categoryName: "Techniques de conservation",
        description: "Méthodes pour préserver la qualité des aliments.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 2450,
        categoryName: "Éducation aux portions",
        description: "Comprendre les quantités adaptées selon les besoins.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      {
        id: 2451,
        categoryName: "Cuisine adaptée aux régimes spécifiques",
        description: "Techniques pour allergies, diabète, etc.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.NUTRITIONAL_SKILL
      },
      
      // 58. CREATIVE_SKILL
      {
        id: 2452,
        categoryName: "Dessin et peinture",
        description: "Initiation aux bases des arts graphiques.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 2453,
        categoryName: "Écriture créative",
        description: "Techniques pour stimuler l’imagination et raconter des histoires.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 2454,
        categoryName: "Photographie",
        description: "Apprentissage des règles de composition et prise de vue.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 2455,
        categoryName: "Musique et composition",
        description: "Bases pour créer et interpréter de la musique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      {
        id: 2456,
        categoryName: "Arts du spectacle",
        description: "Techniques d’expression corporelle et théâtrale.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE_SKILL
      },
      
      // 59. MEDICAL_CARE
      {
        id: 2457,
        categoryName: "Premiers secours",
        description: "Apprentissage des gestes d’urgence.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 2458,
        categoryName: "Soins de base à domicile",
        description: "Techniques pour prendre soin d’un proche.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 2459,
        categoryName: "Gestion des médicaments",
        description: "Organisation et compréhension des traitements.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 2460,
        categoryName: "Prévention santé",
        description: "Information sur les vaccinations et dépistages.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 2461,
        categoryName: "Accompagnement en fin de vie",
        description: "Soutien et soins palliatifs.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      
      // 60. ARTISTIC
      {
        id: 2462,
        categoryName: "Sculpture",
        description: "Initiation aux techniques de modelage et taille.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 2463,
        categoryName: "Arts plastiques",
        description: "Exploration des matériaux et médiums variés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 2464,
        categoryName: "Calligraphie",
        description: "Apprentissage des styles et techniques d’écriture artistique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 2465,
        categoryName: "Design graphique",
        description: "Bases du dessin numérique et mise en page.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 2466,
        categoryName: "Art urbain",
        description: "Techniques et projets de street art.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ARTISTIC
      },
      
      // 61. DISCUSSIONS
      {
        id: 2467,
        categoryName: "Échanges sur les actualités",
        description: "Débats et analyses des événements récents.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 2468,
        categoryName: "Discussions philosophiques",
        description: "Réflexions et partages d’idées sur le sens de la vie.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 2469,
        categoryName: "Débats culturels",
        description: "Échanges sur cinéma, littérature, musique.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 2470,
        categoryName: "Thèmes sociaux",
        description: "Discussions sur les enjeux sociétaux.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 2471,
        categoryName: "Échanges intergénérationnels",
        description: "Dialogue entre jeunes et aînés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      
      // 62. CREATIVE
      {
        id: 2472,
        categoryName: "Ateliers d’écriture",
        description: "Exercices et partages pour stimuler la créativité.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 2473,
        categoryName: "DIY et bricolage créatif",
        description: "Projets manuels pour exprimer son imagination.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 2474,
        categoryName: "Création numérique",
        description: "Initiation aux outils graphiques et multimédias.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 2475,
        categoryName: "Arts décoratifs",
        description: "Techniques pour embellir son environnement.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 2476,
        categoryName: "Improvisation artistique",
        description: "Expression libre et spontanée.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.CREATIVE
      },
      
      // 64. ELDERLY_SUPPORT
      {
        id: 2477,
        categoryName: "Accompagnement à domicile",
        description: "Services pour aider les personnes âgées dans leur quotidien.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 2478,
        categoryName: "Activités sociales et récréatives",
        description: "Programmes pour stimuler le lien social.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 2479,
        categoryName: "Soutien psychologique",
        description: "Espaces d’écoute adaptés.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 2480,
        categoryName: "Gestion de la santé",
        description: "Coordination des soins et suivi médical.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },
      {
        id: 2481,
        categoryName: "Prévention de l’isolement",
        description: "Actions pour maintenir le contact social.",
        typeId: ECategoryType.WELLNESS,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT
      },

    ],
    skipDuplicates: true
  });
}

seedWellness()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

export default seedWellness;
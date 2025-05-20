import { ECategoryChapter, ECategoryType } from '@/@types/data/categories/ECategory';
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

async function seedActivities() {
  await prisma.category.createMany({
    data: [
      // 1. ACTIVITÉS - ACTIVITY
      // -----------------------
      // 🎯 Actions ou activités à réaliser
      
      // 🏃 ACTIVITY: PHYSICAL (Activités physiques et sportives)
      {
        id: 100,
        categoryName: "Séance de gym douce",
        description: "Séance de gym douce adaptée aux capacités physiques des seniors. Utilisez des exercices simples et doux pour travailler l’équilibre, la souplesse et la force musculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 101,
        categoryName: "Marche en groupe",
        description: "Sorties en groupe pour des promenades dans le quartier ou dans un parc. La marche est une activité physique douce et bénéfique pour la santé cardiovasculaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 102,
        categoryName: "Jeux de ballon",
        description: "Jeux de ballon adaptés aux capacités des seniors, comme le ballon assis ou le mini-golf. Ces jeux stimulent la coordination et la motricité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 103,
        categoryName: "Yoga",
        description: "Séances de yoga adaptées aux seniors. Le yoga favorise la relaxation, l’équilibre et la flexibilité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 104,
        categoryName: "Marche active",
        description: "Activité physique douce pour favoriser l’endurance.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 105,
        categoryName: "Yoga dynamique",
        description: "Enchaînement fluide de postures physiques avec respiration.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 106,
        categoryName: "Sports collectifs",
        description: "Pratique de sports comme le foot, le basket ou le volley.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 107,
        categoryName: "Fitness ou musculation",
        description: "Entraînement musculaire avec ou sans équipements.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 108,
        categoryName: "Danse",
        description: "Activité physique et expressive au rythme de la musique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      {
        id: 109,
        categoryName: "Renforcement musculaire",
        description: "Exercices ciblés pour développer la force.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL
      },
      
      // 🧠 ACTIVITY: COGNITIVE (Fonctions cognitives et intellectuelles)
      {
        id: 110,
        categoryName: "Exercices de mémoire",
        description: "Jeux ou exercices ciblant la mémoire à court/long terme.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 111,
        categoryName: "Jeux de mémoire",
        description: "Jeux de mémoire comme le Memory ou le jeu des paires. Ces jeux permettent de stimuler la mémoire et l’attention.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 112,
        categoryName: "Résolution de problèmes",
        description: "Activités logiques, casse-têtes, énigmes.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 113,
        categoryName: "Prise de décision",
        description: "Simulations ou jeux renforçant les capacités de choix.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 114,
        categoryName: "Jeux de stratégie",
        description: "Activités qui impliquent planification et réflexion (échecs, go).",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 115,
        categoryName: "Lecture analytique",
        description: "Lecture active de textes avec synthèse ou résumé.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      {
        id: 116,
        categoryName: "Défis intellectuels",
        description: "Activités de type quiz ou concours.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE
      },
      
      // 🤝 ACTIVITY: SOCIAL (Activités sociales et communautaires)
      {
        id: 117,
        categoryName: "Rencontres de quartier",
        description: "Événements pour créer du lien social localement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 118,
        categoryName: "Ateliers intergénérationnels",
        description: "Activités liant enfants, adultes et aînés.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 119,
        categoryName: "Activités bénévoles",
        description: "Engagement dans une action au service des autres.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 120,
        categoryName: "Café-discussion",
        description: "Rencontres informelles autour d’un thème ou sur des enjeux de société.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 121,
        categoryName: "Jeux de société collectifs",
        description: "Activité ludique en groupe pour renforcer les liens.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      {
        id: 122,
        categoryName: "Groupes d’entraide",
        description: "Sorties ou événements partagés",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL
      },
      
      // 👁️👂 ACTIVITY: SENSORY (Activités sensorielles)
      {
        id: 123,
        categoryName: "Atelier d’aromathérapie",
        description: "Ateliers d’aromathérapie où les seniors pourront découvrir les bienfaits des huiles essentielles. Ces ateliers permettent de stimuler l’odorat et de favoriser la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 124,
        categoryName: "Ateliers d’éveil sensoriel",
        description: "Stimulation des cinq sens",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 125,
        categoryName: "Atelier de cuisine sensorielle",
        description: "Ateliers de cuisine sensorielle où les seniors pourront découvrir de nouvelles saveurs et textures. Ces ateliers stimulent le goût et favorisent les échanges autour de la nourriture.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 126,
        categoryName: "Balade en nature guidée",
        description: "Observation sensorielle en extérieur.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 127,
        categoryName: "Exploration tactile",
        description: "Ateliers de textures ou d’objets sensoriels.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 128,
        categoryName: "Jardinage",
        description: "Activités de jardinage où les seniors pourront planter des fleurs, cultiver des légumes ou simplement profiter du contact avec la nature. Le jardinage stimule le toucher et favorise la détente.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 129,
        categoryName: "Musicothérapie",
        description: "Séances de musicothérapie où les seniors pourront écouter de la musique apaisante et participer à des activités musicales. La musique favorise la relaxation et stimule l’ouïe.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 130,
        categoryName: "Parcours sensoriel",
        description: "Déambulation avec stimulations visuelles, sonores ou olfactives.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 131,
        categoryName: "Photolanguage",
        description: "Activité de verbalisation d’émotions à partir d’images.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      {
        id: 132,
        categoryName: "Stimulation auditive",
        description: "Écoute de sons, musiques ou bruits naturels.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SENSORY
      },
      
      // 🧘‍♂️ ACTIVITY: PHYSICAL_WELLNESS (Bien-être physique)
      {
        id: 133,
        categoryName: "Amélioration du sommeil",
        description: "Techniques et rituels favorisant un meilleur repos.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 134,
        categoryName: "Auto-massage",
        description: "Techniques simples pour relâcher les tensions.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 135,
        categoryName: "Bains sonores",
        description: "Séance de relaxation via sons (bols tibétains, gongs).",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 136,
        categoryName: "Étirements doux",
        description: "Routine pour détendre les muscles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 137,
        categoryName: "Hygiène du sommeil",
        description: "Apprentissage des bonnes pratiques de repos.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 138,
        categoryName: "Posturologie",
        description: "Exercices pour corriger les postures du quotidien.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 139,
        categoryName: "Relaxation musculaire",
        description: "Étirements doux, auto-massages guidés.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 140,
        categoryName: "Respiration consciente",
        description: "Apprentissage de techniques de respiration profonde.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      {
        id: 141,
        categoryName: "Sieste guidée",
        description: "Relaxation profonde avec musique ou voix.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS
      },
      
      // 😊 ACTIVITY: EMOTIONAL_WELLNESS (Bien-être émotionnel)
      {
        id: 142,
        categoryName: "Ateliers de gratitude",
        description: "Activités favorisant la reconnaissance du positif.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 143,
        categoryName: "Cercle de parole",
        description: "Partage d’expériences dans un cadre bienveillant.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 144,
        categoryName: "Écriture expressive",
        description: "Mise à plat des émotions sur papier.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 145,
        categoryName: "Journal émotionnel",
        description: "Écriture libre sur ses émotions du jour.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 146,
        categoryName: "Techniques de respiration",
        description: "Exercices pour gérer l’anxiété.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 147,
        categoryName: "Théâtre spontané",
        description: "Expression des émotions à travers le jeu de rôle.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      {
        id: 148,
        categoryName: "Visualisation positive",
        description: "Pratique mentale de situations ressourçantes.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS
      },
      
      // 🤗 ACTIVITY: SOCIAL_WELLNESS (Bien-être social)
      {
        id: 149,
        categoryName: "Activités collaboratives",
        description: "Réalisation d’un projet commun (jardin, cuisine…).",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 150,
        categoryName: "Ateliers de communication bienveillante",
        description: "Développement de l’écoute active.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 151,
        categoryName: "Création d’un groupe d’intérêt",
        description: "Activité régulière entre pairs.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 152,
        categoryName: "Création de groupes de soutien",
        description: "Échange et entraide entre pairs.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 153,
        categoryName: "Initiation au mentorat",
        description: "Transmission de savoirs et d’expériences.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 154,
        categoryName: "Jeux coopératifs",
        description: "Activités centrées sur l'entraide.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      {
        id: 155,
        categoryName: "Parrainage social",
        description: "Accompagnement d’un nouveau membre.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS
      },
      
      // 🧩 ACTIVITY: INTELLECTUAL_WELLNESS (Bien-être intellectuel)
      {
        id: 156,
        categoryName: "Atelier d’argumentation",
        description: "Renforcement de l’esprit critique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 157,
        categoryName: "Conférences interactives",
        description: "Apports théoriques suivis d’échanges.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 158,
        categoryName: "Conférence participative",
        description: "Apprentissage interactif.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 159,
        categoryName: "Défis créatifs",
        description: "Activités qui stimulent la pensée originale (design, innovation).",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 160,
        categoryName: "Écriture collaborative",
        description: "Création de contenu avec d'autres.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 161,
        categoryName: "Écriture libre",
        description: "Pratique régulière de l’expression écrite.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 162,
        categoryName: "Lectures critiques",
        description: "Analyse et débats autour de textes ou articles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 163,
        categoryName: "Podcast éducatif",
        description: "Écoute sur des sujets inspirants.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      {
        id: 164,
        categoryName: "Veille thématique",
        description: "Recherche et partage d’informations actuelles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS
      },
      
      // 💰 ACTIVITY: FINANCIAL_WELLNESS
      {
        id: 165,
        categoryName: "Atelier budget",
        description: "Apprentissage de la gestion financière.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 166,
        categoryName: "Comprendre ses droits",
        description: "Activité autour des aides disponibles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 167,
        categoryName: "Conseil épargne",
        description: "Présentation de stratégies simples.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      {
        id: 168,
        categoryName: "Simulation d’achats",
        description: "Exercices pour identifier les priorités.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS
      },
      
      // 🌱 ACTIVITY: ENVIRONMENTAL_WELLNESS
      {
        id: 169,
        categoryName: "Atelier zéro déchet",
        description: "Fabrication d’objets réutilisables.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 170,
        categoryName: "Jardinage collectif",
        description: "Activité manuelle en nature.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 171,
        categoryName: "Nettoyage participatif",
        description: "Action concrète dans le quartier.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      {
        id: 172,
        categoryName: "Sensibilisation au tri",
        description: "Activité éducative autour des déchets.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS
      },
      
      // 🕉️ ACTIVITY: SPIRITUAL_WELLNESS
      {
        id: 173,
        categoryName: "Méditation guidée",
        description: "Pratique de pleine conscience accompagnée.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 174,
        categoryName: "Cercle de silence",
        description: "Moment partagé dans la tranquillité.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 175,
        categoryName: "Lecture spirituelle",
        description: "Découverte de textes inspirants.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      {
        id: 176,
        categoryName: "Marche contemplative",
        description: "Promenade introspective dans le silence total",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS
      },
      
      // 🧮 ACTIVITY: COGNITIVE_ACTIVITY
      {
        id: 177,
        categoryName: "Ateliers mémoire",
        description: "Stimulation cognitive pour tous les âges.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 178,
        categoryName: "Puzzles complexes",
        description: "Développement des fonctions exécutives.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 179,
        categoryName: "Stratégies d’attention",
        description: "Exercices pour améliorer la concentration.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      {
        id: 180,
        categoryName: "Sudoku & logique",
        description: "Activités stimulantes pour l’esprit.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY
      },
      
      // 🧘‍♀️ ACTIVITY: COGNITIVE_WELLNESS
      {
        id: 181,
        categoryName: "Auto-évaluation mentale",
        description: "Bilan guidé de son état cognitif.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 182,
        categoryName: "Équilibre charge mentale",
        description: "Outils de priorisation.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 183,
        categoryName: "Journal cognitif",
        description: "Suivi personnel des pensées automatiques.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      {
        id: 184,
        categoryName: "Mindfulness cognitive",
        description: "Lien entre pensée, émotions et comportements.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS
      },
      
      // 🏙️ ACTIVITY: URBAN_INFRASTRUCTURE
      {
        id: 185,
        categoryName: "Atelier maquette urbaine",
        description: "Imagination de futurs espaces publics.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 186,
        categoryName: "Cartographie citoyenne",
        description: "Repérage des ressources urbaines.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 187,
        categoryName: "Diagnostic participatif",
        description: "Identification collective des besoins locaux.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      {
        id: 188,
        categoryName: "Visite d’infrastructure",
        description: "Découverte de l’environnement urbain.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE
      },
      
      // 🚦 ACTIVITY: TRANSPORTATION
      {
        id: 189,
        categoryName: "Atelier mobilité douce",
        description: "Réflexion sur les modes de déplacement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 190,
        categoryName: "Campagne de covoiturage",
        description: "Promotion des mobilités partagées.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 191,
        categoryName: "Simulation de trajet",
        description: "Scénarios d’optimisation.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      {
        id: 192,
        categoryName: "Test de parcours",
        description: "Évaluation de l’accessibilité urbaine.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.TRANSPORTATION
      },
      
      // 🌿 ACTIVITY: URBAN_ENVIRONMENT
      // Diagnostic bruit urbain : Mesure de la pollution sonore.
      // Mur végétal collectif : Création d’un espace vert.
      // Reconnaissance de plantes : Promenade botanique en ville.
      {
        id: 193,
        categoryName: "Amélioration de l’espace public",
        description: "Revalorisation participative.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 194,
        categoryName: "Diagnostic bruit urbain",
        description: "Mesure de la pollution sonore.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 195,
        categoryName: "Mur végétal collectif",
        description: "Création d’un espace vert.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      {
        id: 196,
        categoryName: "Reconnaissance de plantes",
        description: "Promenade botanique en ville ou dans le village",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT
      },
      
      // 🏢 ACTIVITY: COMMUNITY_SERVICES
      {
        id: 197,
        categoryName: "Création d’un annuaire utile",
        description: "Centralisation des aides disponibles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 198,
        categoryName: "Présentation des services publics",
        description: "Découverte des ressources locales.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 199,
        categoryName: "Rencontre interservices",
        description: "Échange entre citoyens et acteurs.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      {
        id: 200,
        categoryName: "Simulation de demande d’aide",
        description: "Apprentissage des démarches.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES
      },
      
      // ♻️ ACTIVITY: WASTE_MANAGEMENT
      {
        id: 201,
        categoryName: "Compostage collectif",
        description: "Mise en pratique dans un jardin.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 202,
        categoryName: "Création d’objets à base de produits recyclés",
        description: "Upcycling créatif.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 203,
        categoryName: "Défi zéro déchet",
        description: "Challenge individuel ou collectif.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      {
        id: 204,
        categoryName: "Tri sélectif ludique",
        description: "Jeu éducatif autour des déchets.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT
      },
      
      // 🚀 ACTIVITY: INNOVATION
      {
        id: 205,
        categoryName: "Atelier prototype",
        description: "Conception d’objets ou concepts innovants.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 206,
        categoryName: "Forum d’idées",
        description: "Brainstorming communautaire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 207,
        categoryName: "Hackathon solidaire",
        description: "Création collaborative de solutions.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INNOVATION
      },
      {
        id: 208,
        categoryName: "Test de nouvelles technologies",
        description: "Découverte pratique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.INNOVATION
      },
      
      // 🛠️ ACTIVITY: CONSTRUCTION
      {
        id: 209,
        categoryName: "Atelier bricolage",
        description: "Réparation ou création manuelle.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 210,
        categoryName: "Aménagement urbain collaboratif",
        description: "Participation à l’embellissement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 211,
        categoryName: "Maquette d’habitat",
        description: "Atelier autour des structures.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      {
        id: 212,
        categoryName: "Visite de chantier",
        description: "Immersion dans un projet local.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CONSTRUCTION
      },
      
      // 🌍 ACTIVITY: SUSTAINABILITY
      {
        id: 213,
        categoryName: "Audit d’impact personnel",
        description: "Évaluation écologique individuelle.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 214,
        categoryName: "Débat écoresponsable",
        description: "Réflexion collective.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 215,
        categoryName: "Écogestes quotidiens",
        description: "Apprentissage de routines durables.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      {
        id: 216,
        categoryName: "Parcours pédagogique nature",
        description: "Sensibilisation immersive.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.SUSTAINABILITY
      },
      
      // 🤝 ACTIVITY: COLLABORATION
      {
        id: 217,
        categoryName: "Atelier co-créatif",
        description: "Réalisation de projets à plusieurs.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 218,
        categoryName: "Jeux de coopération",
        description: "Activités sans compétition.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 219,
        categoryName: "Partage de compétences",
        description: "Transmission de savoir-faire.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COLLABORATION
      },
      {
        id: 220,
        categoryName: "Gouvernance partagée",
        description: "Décision participative.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.COLLABORATION
      },
      
      // 🧑‍🏫 ACTIVITY: EDUCATION
      {
        id: 221,
        categoryName: "Atelier d’alphabétisation",
        description: "Lecture et écriture de base.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 222,
        categoryName: "Cours en ligne guidé",
        description: "Accompagnement sur des MOOCs.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 223,
        categoryName: "Formation pratique",
        description: "Apprentissage par la mise en situation.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EDUCATION
      },
      {
        id: 224,
        categoryName: "Soutien scolaire",
        description: "Aide personnalisée aux apprentissages.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.EDUCATION
      },
      
      // 🧑‍⚕️ ACTIVITY: MEDICAL_CARE
      {
        id: 225,
        categoryName: "Atelier prévention santé",
        description: "Thèmes comme l’hygiène ou l’alimentation.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 226,
        categoryName: "Éducation thérapeutique",
        description: "Activité autour d'une pathologie.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 227,
        categoryName: "Présentation des soins locaux",
        description: "Découverte des structures de santé.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      {
        id: 228,
        categoryName: "Simulations médicales",
        description: "Apprentissage des gestes d’urgence.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.MEDICAL_CARE
      },
      
      // 💬 ACTIVITY: DISCUSSIONS
      {
        id: 229,
        categoryName: "Atelier d’écoute active",
        description: "Entraînement à l’attention bienveillante.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 230,
        categoryName: "Débat citoyen",
        description: "Échange structuré sur une problématique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 231,
        categoryName: "Discussion à thème",
        description: "Dialogue sur un sujet choisi collectivement.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      {
        id: 232,
        categoryName: "Témoignages croisés",
        description: "Partage d’expériences personnelles.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.DISCUSSIONS
      },
      
      // 🎨 ACTIVITY: ARTISTIC
      {
        id: 233,
        categoryName: "Atelier théâtre",
        description: "Improvisation et mise en scène.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 234,
        categoryName: "Création collaborative",
        description: "Œuvre collective.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 235,
        categoryName: "Écriture poétique",
        description: "Exploration créative du langage.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ARTISTIC
      },
      {
        id: 236,
        categoryName: "Peinture libre",
        description: "Expression artistique spontanée.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.ARTISTIC
      },
      
      // 📸 ACTIVITY: CREATIVE
      {
        id: 237,
        categoryName: "Carnet créatif",
        description: "Journal illustré personnel.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 238,
        categoryName: "Collage thématique",
        description: "Création artistique par découpage.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 239,
        categoryName: "Design d’objet",
        description: "Création manuelle d’un objet unique.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CREATIVE
      },
      {
        id: 240,
        categoryName: "Photographie narrative",
        description: "Raconter une histoire en images.",
        typeId: ECategoryType.ACTIVITY,
        chapterId: ECategoryChapter.CREATIVE
      },
      
    ],
    skipDuplicates: true
  });
}

seedActivities()
.then(() => {
  console.log(`✅ Catégories seedées`);
})
.catch((err) => {
  console.error(`❌ Erreur lors du seed des catégories`, err);
})
.finally(async () => {
  await prisma.$disconnect();
});

export default seedActivities;
export enum ECategoryType {
  // 🎯 Actions ou activités à réaliser
  ACTIVITY = 1,

  // 🏅 Distinctions ou badges obtenus
  BADGE = 2,

  // 🧠 Catégories liées aux fonctions cognitives
  COGNITIVE = 3,

  // 💬 Forums de discussion, échanges entre utilisateurs
  FORUM = 4,

  // 🆘 Aides, supports et assistances
  HELP = 5,

  // 🍏 Catégories nutritionnelles (alimentation, diététique)
  NUTRITION = 6,

  // 📅 Programmes ou challenges planifiés
  PROGRAM = 7,

  // 🏗️ Projets collaboratifs ou personnels
  PROJECT = 8,

  // 📚 Ressources documentaires, guides, supports pédagogiques
  RESOURCE = 9,

  // 🛎️ Services proposés ou accessibles
  SERVICE = 10,

  // 🛠️ Compétences pratiques ou savoir-faire
  SKILL = 11,

  // 🌆 Problématiques urbaines ou environnementales locales
  URBAN_ISSUE = 12,

  // 🧘 Bien-être général (physique, mental, émotionnel)
  WELLNESS = 13
}

export enum ECategoryChapter {
  // Activités physiques et sportives
  PHYSICAL = 1,               // 🏃
  // Fonctions cognitives et intellectuelles
  COGNITIVE = 2,              // 🧠
  // Activités sociales et communautaires
  SOCIAL = 3,                 // 🤝
  // Activités sensorielles
  SENSORY = 4,                // 👁️👂
  // Bien-être physique (sommeil, relaxation, etc.)
  PHYSICAL_WELLNESS = 5,      // 🧘‍♂️
  // Bien-être émotionnel et gestion du stress
  EMOTIONAL_WELLNESS = 6,     // 😊
  // Bien-être social et sentiment d’appartenance
  SOCIAL_WELLNESS = 7,        // 🤗
  // Bien-être intellectuel et cognitif
  INTELLECTUAL_WELLNESS = 8,  // 🧩
  // Bien-être financier
  FINANCIAL_WELLNESS = 9,     // 💰
  // Bien-être environnemental
  ENVIRONMENTAL_WELLNESS = 10,// 🌱
  // Bien-être spirituel
  SPIRITUAL_WELLNESS = 11,    // 🕉️

  // Activités cognitives spécifiques
  COGNITIVE_ACTIVITY = 12,    // 🧮

  // Bien-être cognitif
  COGNITIVE_WELLNESS = 13,    // 🧘‍♀️

  // Problématiques d’infrastructures urbaines
  URBAN_INFRASTRUCTURE = 14,  // 🏙️

  // Mobilité et transports urbains
  TRANSPORTATION = 15,        // 🚦

  // Espaces verts et environnement urbain
  URBAN_ENVIRONMENT = 16,     // 🌿

  // Services communautaires urbains
  COMMUNITY_SERVICES = 17,    // 🏢

  // Gestion des déchets urbains
  WASTE_MANAGEMENT = 18,      // ♻️

  // Projets d’innovation et technologie
  INNOVATION = 19,            // 🚀

  // Projets de construction et aménagement
  CONSTRUCTION = 20,          // 🛠️

  // Projets environnementaux et durables
  SUSTAINABILITY = 21,        // 🌍

  // Projets collaboratifs
  COLLABORATION = 22,         // 🤝

  // Projets personnels de développement
  PERSONAL_DEVELOPMENT = 23,  // 🎯

  // Guides et manuels
  GUIDES = 24,                // 📖

  // Vidéos éducatives
  VIDEOS = 25,                // 🎥

  // 📝 ARTICLES - Articles et études
  ARTICLES = 26,              // 

  // 🎙️ PODCASTS - Podcasts et interviews
  PODCASTS = 27,              // 🎙️

  // 📊 INFOGRAPHICS - Infographies et données visuelles
  INFOGRAPHICS = 28,          // 📊

  // 🏥 HEALTHCARE - Services médicaux et santé
  HEALTHCARE = 29,            // 🏥

  // 🧑‍🏫 EDUCATION - Services éducatifs et formations
  EDUCATION = 30,             // 🧑‍🏫

  // 🛒 DAILY_HELP - Aides quotidiennes (courses, ménage)
  DAILY_HELP = 31,            // 🛒

  // 🧑‍🤝‍🧑 SOCIAL_SUPPORT - Services sociaux et accompagnement
  SOCIAL_SUPPORT = 32,        // 🧑‍🤝‍🧑

  // 🏢 ADMINISTRATIVE_HELP - Services administratifs et juridiques
  ADMINISTRATIVE_HELP = 33,        // 🏢

  // 🤝 PSYCHOLOGICAL_SUPPORT - Soutien psychologique et émotionnel
  PSYCHOLOGICAL_SUPPORT = 34, // 🤝

  // 💊 MEDICAL_AID - Aide médicale et premiers secours
  MEDICAL_AID = 35,           // 💊

  // 🏠 HOUSING_SUPPORT - Aide au logement d’urgence
  HOUSING_SUPPORT = 36,       // 🏠

  // 🥖 FOOD_AID - Aide alimentaire
  FOOD_AID = 37,              // 🥖

  // 📞 EMERGENCY_SERVICES - Services d’urgence et intervention rapide
  EMERGENCY_SERVICES = 38,    // 📞

  // 🏃‍♂️ PHYSICAL_ACTIVITY - Programmes sportifs et bien-être physique
  PHYSICAL_ACTIVITY = 39,     // 🏃‍♂️

  // 🧠 COGNITIVE_TRAINING - Programmes cognitifs et développement mental
  COGNITIVE_TRAINING = 40,    // 🧠

  // 🥗 NUTRITION - Programmes nutritionnels
  NUTRITION = 41,             // 🥗

  // 🤝 SOCIAL_ENGAGEMENT - Programmes sociaux et communautaires
  SOCIAL_ENGAGEMENT = 42,     // 🤝

  // 🌍 ENVIRONMENTAL_ACTION - Programmes environnementaux
  ENVIRONMENTAL_ACTION = 43,  // 🌍

  // 🏆 PHYSICAL_ACHIEVEMENTS - Badges de performance physique
  PHYSICAL_ACHIEVEMENTS = 44, // 🏆

  // 🧠 COGNITIVE_ACHIEVEMENTS - Badges cognitifs
  COGNITIVE_ACHIEVEMENTS = 45,// 🧠

  // 🥗 NUTRITION_ACHIEVEMENTS - Badges nutritionnels
  NUTRITION_ACHIEVEMENTS = 46,// 🥗

  // 🤝 SOCIAL_ACHIEVEMENTS - Badges sociaux
  SOCIAL_ACHIEVEMENTS = 47,   // 🤝

  // 🌍 ENVIRONMENTAL_ACHIEVEMENTS - Badges environnementaux
  ENVIRONMENTAL_ACHIEVEMENTS = 48, // 🌍

  // 🌱 ENVIRONMENTAL - Activités environnementales
  ENVIRONMENTAL = 49,         // 🌱

  // 💬 GENERAL - Discussions générales
  GENERAL = 50,               // 💬

  // 🧠 PERSONAL_DEVELOPMENT_FORUM - Discussions développement personnel
  PERSONAL_DEVELOPMENT_FORUM = 51, // 🧠

  // 🥗 NUTRITION_FORUM - Discussions nutrition
  NUTRITION_FORUM = 52,       // 🥗

  // 🤝 SOCIAL_FORUM - Discussions sociales
  SOCIAL_FORUM = 53,          // 🤝

  // 🌍 ENVIRONMENTAL_FORUM - Discussions environnementales
  ENVIRONMENTAL_FORUM = 54,   // 🌍

  // 🧠 MENTAL - Bien-être mental et cognitif
  MENTAL_HEALTH = 55,                // 🧠

  MANUAL_SKILL = 56,
  NUTRITIONAL_SKILL = 57,
  CREATIVE_SKILL = 58,
  MEDICAL_CARE = 59,
  ARTISTIC = 60,
  DISCUSSIONS = 61,
  CREATIVE = 62,
  INCLUSION = 63,
  ELDERLY_SUPPORT = 64
}


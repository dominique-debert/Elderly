export var ECategoryType;
(function (ECategoryType) {
    // 🎯 Actions ou activités à réaliser
    ECategoryType[ECategoryType["ACTIVITY"] = 1] = "ACTIVITY";
    // 🏅 Distinctions ou badges obtenus
    ECategoryType[ECategoryType["BADGE"] = 2] = "BADGE";
    // 🧠 Catégories liées aux fonctions cognitives
    ECategoryType[ECategoryType["COGNITIVE"] = 3] = "COGNITIVE";
    // 💬 Forums de discussion, échanges entre utilisateurs
    ECategoryType[ECategoryType["FORUM"] = 4] = "FORUM";
    // 🆘 Aides, supports et assistances
    ECategoryType[ECategoryType["HELP"] = 5] = "HELP";
    // 🍏 Catégories nutritionnelles (alimentation, diététique)
    ECategoryType[ECategoryType["NUTRITION"] = 6] = "NUTRITION";
    // 📅 Programmes ou challenges planifiés
    ECategoryType[ECategoryType["PROGRAM"] = 7] = "PROGRAM";
    // 🏗️ Projets collaboratifs ou personnels
    ECategoryType[ECategoryType["PROJECT"] = 8] = "PROJECT";
    // 📚 Ressources documentaires, guides, supports pédagogiques
    ECategoryType[ECategoryType["RESOURCE"] = 9] = "RESOURCE";
    // 🛎️ Services proposés ou accessibles
    ECategoryType[ECategoryType["SERVICE"] = 10] = "SERVICE";
    // 🛠️ Compétences pratiques ou savoir-faire
    ECategoryType[ECategoryType["SKILL"] = 11] = "SKILL";
    // 🌆 Problématiques urbaines ou environnementales locales
    ECategoryType[ECategoryType["URBAN_ISSUE"] = 12] = "URBAN_ISSUE";
    // 🧘 Bien-être général (physique, mental, émotionnel)
    ECategoryType[ECategoryType["WELLNESS"] = 13] = "WELLNESS";
})(ECategoryType || (ECategoryType = {}));
export var ECategoryChapter;
(function (ECategoryChapter) {
    // Activités physiques et sportives
    ECategoryChapter[ECategoryChapter["PHYSICAL"] = 1] = "PHYSICAL";
    // Fonctions cognitives et intellectuelles
    ECategoryChapter[ECategoryChapter["COGNITIVE"] = 2] = "COGNITIVE";
    // Activités sociales et communautaires
    ECategoryChapter[ECategoryChapter["SOCIAL"] = 3] = "SOCIAL";
    // Activités sensorielles
    ECategoryChapter[ECategoryChapter["SENSORY"] = 4] = "SENSORY";
    // Bien-être physique (sommeil, relaxation, etc.)
    ECategoryChapter[ECategoryChapter["PHYSICAL_WELLNESS"] = 5] = "PHYSICAL_WELLNESS";
    // Bien-être émotionnel et gestion du stress
    ECategoryChapter[ECategoryChapter["EMOTIONAL_WELLNESS"] = 6] = "EMOTIONAL_WELLNESS";
    // Bien-être social et sentiment d’appartenance
    ECategoryChapter[ECategoryChapter["SOCIAL_WELLNESS"] = 7] = "SOCIAL_WELLNESS";
    // Bien-être intellectuel et cognitif
    ECategoryChapter[ECategoryChapter["INTELLECTUAL_WELLNESS"] = 8] = "INTELLECTUAL_WELLNESS";
    // Bien-être financier
    ECategoryChapter[ECategoryChapter["FINANCIAL_WELLNESS"] = 9] = "FINANCIAL_WELLNESS";
    // Bien-être environnemental
    ECategoryChapter[ECategoryChapter["ENVIRONMENTAL_WELLNESS"] = 10] = "ENVIRONMENTAL_WELLNESS";
    // Bien-être spirituel
    ECategoryChapter[ECategoryChapter["SPIRITUAL_WELLNESS"] = 11] = "SPIRITUAL_WELLNESS";
    // Activités cognitives spécifiques
    ECategoryChapter[ECategoryChapter["COGNITIVE_ACTIVITY"] = 12] = "COGNITIVE_ACTIVITY";
    // Bien-être cognitif
    ECategoryChapter[ECategoryChapter["COGNITIVE_WELLNESS"] = 13] = "COGNITIVE_WELLNESS";
    // Problématiques d’infrastructures urbaines
    ECategoryChapter[ECategoryChapter["URBAN_INFRASTRUCTURE"] = 14] = "URBAN_INFRASTRUCTURE";
    // Mobilité et transports urbains
    ECategoryChapter[ECategoryChapter["TRANSPORTATION"] = 15] = "TRANSPORTATION";
    // Espaces verts et environnement urbain
    ECategoryChapter[ECategoryChapter["URBAN_ENVIRONMENT"] = 16] = "URBAN_ENVIRONMENT";
    // Services communautaires urbains
    ECategoryChapter[ECategoryChapter["COMMUNITY_SERVICES"] = 17] = "COMMUNITY_SERVICES";
    // Gestion des déchets urbains
    ECategoryChapter[ECategoryChapter["WASTE_MANAGEMENT"] = 18] = "WASTE_MANAGEMENT";
    // Projets d’innovation et technologie
    ECategoryChapter[ECategoryChapter["INNOVATION"] = 19] = "INNOVATION";
    // Projets de construction et aménagement
    ECategoryChapter[ECategoryChapter["CONSTRUCTION"] = 20] = "CONSTRUCTION";
    // Projets environnementaux et durables
    ECategoryChapter[ECategoryChapter["SUSTAINABILITY"] = 21] = "SUSTAINABILITY";
    // Projets collaboratifs
    ECategoryChapter[ECategoryChapter["COLLABORATION"] = 22] = "COLLABORATION";
    // Projets personnels de développement
    ECategoryChapter[ECategoryChapter["PERSONAL_DEVELOPMENT"] = 23] = "PERSONAL_DEVELOPMENT";
    // Guides et manuels
    ECategoryChapter[ECategoryChapter["GUIDES"] = 24] = "GUIDES";
    // Vidéos éducatives
    ECategoryChapter[ECategoryChapter["VIDEOS"] = 25] = "VIDEOS";
    // 📝 ARTICLES - Articles et études
    ECategoryChapter[ECategoryChapter["ARTICLES"] = 26] = "ARTICLES";
    // 🎙️ PODCASTS - Podcasts et interviews
    ECategoryChapter[ECategoryChapter["PODCASTS"] = 27] = "PODCASTS";
    // 📊 INFOGRAPHICS - Infographies et données visuelles
    ECategoryChapter[ECategoryChapter["INFOGRAPHICS"] = 28] = "INFOGRAPHICS";
    // 🏥 HEALTHCARE - Services médicaux et santé
    ECategoryChapter[ECategoryChapter["HEALTHCARE"] = 29] = "HEALTHCARE";
    // 🧑‍🏫 EDUCATION - Services éducatifs et formations
    ECategoryChapter[ECategoryChapter["EDUCATION"] = 30] = "EDUCATION";
    // 🛒 DAILY_HELP - Aides quotidiennes (courses, ménage)
    ECategoryChapter[ECategoryChapter["DAILY_HELP"] = 31] = "DAILY_HELP";
    // 🧑‍🤝‍🧑 SOCIAL_SUPPORT - Services sociaux et accompagnement
    ECategoryChapter[ECategoryChapter["SOCIAL_SUPPORT"] = 32] = "SOCIAL_SUPPORT";
    // 🏢 ADMINISTRATIVE_HELP - Services administratifs et juridiques
    ECategoryChapter[ECategoryChapter["ADMINISTRATIVE_HELP"] = 33] = "ADMINISTRATIVE_HELP";
    // 🤝 PSYCHOLOGICAL_SUPPORT - Soutien psychologique et émotionnel
    ECategoryChapter[ECategoryChapter["PSYCHOLOGICAL_SUPPORT"] = 34] = "PSYCHOLOGICAL_SUPPORT";
    // 💊 MEDICAL_AID - Aide médicale et premiers secours
    ECategoryChapter[ECategoryChapter["MEDICAL_AID"] = 35] = "MEDICAL_AID";
    // 🏠 HOUSING_SUPPORT - Aide au logement d’urgence
    ECategoryChapter[ECategoryChapter["HOUSING_SUPPORT"] = 36] = "HOUSING_SUPPORT";
    // 🥖 FOOD_AID - Aide alimentaire
    ECategoryChapter[ECategoryChapter["FOOD_AID"] = 37] = "FOOD_AID";
    // 📞 EMERGENCY_SERVICES - Services d’urgence et intervention rapide
    ECategoryChapter[ECategoryChapter["EMERGENCY_SERVICES"] = 38] = "EMERGENCY_SERVICES";
    // 🏃‍♂️ PHYSICAL_ACTIVITY - Programmes sportifs et bien-être physique
    ECategoryChapter[ECategoryChapter["PHYSICAL_ACTIVITY"] = 39] = "PHYSICAL_ACTIVITY";
    // 🧠 COGNITIVE_TRAINING - Programmes cognitifs et développement mental
    ECategoryChapter[ECategoryChapter["COGNITIVE_TRAINING"] = 40] = "COGNITIVE_TRAINING";
    // 🥗 NUTRITION - Programmes nutritionnels
    ECategoryChapter[ECategoryChapter["NUTRITION"] = 41] = "NUTRITION";
    // 🤝 SOCIAL_ENGAGEMENT - Programmes sociaux et communautaires
    ECategoryChapter[ECategoryChapter["SOCIAL_ENGAGEMENT"] = 42] = "SOCIAL_ENGAGEMENT";
    // 🌍 ENVIRONMENTAL_ACTION - Programmes environnementaux
    ECategoryChapter[ECategoryChapter["ENVIRONMENTAL_ACTION"] = 43] = "ENVIRONMENTAL_ACTION";
    // 🏆 PHYSICAL_ACHIEVEMENTS - Badges de performance physique
    ECategoryChapter[ECategoryChapter["PHYSICAL_ACHIEVEMENTS"] = 44] = "PHYSICAL_ACHIEVEMENTS";
    // 🧠 COGNITIVE_ACHIEVEMENTS - Badges cognitifs
    ECategoryChapter[ECategoryChapter["COGNITIVE_ACHIEVEMENTS"] = 45] = "COGNITIVE_ACHIEVEMENTS";
    // 🥗 NUTRITION_ACHIEVEMENTS - Badges nutritionnels
    ECategoryChapter[ECategoryChapter["NUTRITION_ACHIEVEMENTS"] = 46] = "NUTRITION_ACHIEVEMENTS";
    // 🤝 SOCIAL_ACHIEVEMENTS - Badges sociaux
    ECategoryChapter[ECategoryChapter["SOCIAL_ACHIEVEMENTS"] = 47] = "SOCIAL_ACHIEVEMENTS";
    // 🌍 ENVIRONMENTAL_ACHIEVEMENTS - Badges environnementaux
    ECategoryChapter[ECategoryChapter["ENVIRONMENTAL_ACHIEVEMENTS"] = 48] = "ENVIRONMENTAL_ACHIEVEMENTS";
    // 🌱 ENVIRONMENTAL - Activités environnementales
    ECategoryChapter[ECategoryChapter["ENVIRONMENTAL"] = 49] = "ENVIRONMENTAL";
    // 💬 GENERAL - Discussions générales
    ECategoryChapter[ECategoryChapter["GENERAL"] = 50] = "GENERAL";
    // 🧠 PERSONAL_DEVELOPMENT_FORUM - Discussions développement personnel
    ECategoryChapter[ECategoryChapter["PERSONAL_DEVELOPMENT_FORUM"] = 51] = "PERSONAL_DEVELOPMENT_FORUM";
    // 🥗 NUTRITION_FORUM - Discussions nutrition
    ECategoryChapter[ECategoryChapter["NUTRITION_FORUM"] = 52] = "NUTRITION_FORUM";
    // 🤝 SOCIAL_FORUM - Discussions sociales
    ECategoryChapter[ECategoryChapter["SOCIAL_FORUM"] = 53] = "SOCIAL_FORUM";
    // 🌍 ENVIRONMENTAL_FORUM - Discussions environnementales
    ECategoryChapter[ECategoryChapter["ENVIRONMENTAL_FORUM"] = 54] = "ENVIRONMENTAL_FORUM";
    // 🧠 MENTAL - Bien-être mental et cognitif
    ECategoryChapter[ECategoryChapter["MENTAL_HEALTH"] = 55] = "MENTAL_HEALTH";
    ECategoryChapter[ECategoryChapter["MANUAL_SKILL"] = 56] = "MANUAL_SKILL";
    ECategoryChapter[ECategoryChapter["NUTRITIONAL_SKILL"] = 57] = "NUTRITIONAL_SKILL";
    ECategoryChapter[ECategoryChapter["CREATIVE_SKILL"] = 58] = "CREATIVE_SKILL";
    ECategoryChapter[ECategoryChapter["MEDICAL_CARE"] = 59] = "MEDICAL_CARE";
    ECategoryChapter[ECategoryChapter["ARTISTIC"] = 60] = "ARTISTIC";
    ECategoryChapter[ECategoryChapter["DISCUSSIONS"] = 61] = "DISCUSSIONS";
    ECategoryChapter[ECategoryChapter["CREATIVE"] = 62] = "CREATIVE";
    ECategoryChapter[ECategoryChapter["INCLUSION"] = 63] = "INCLUSION";
    ECategoryChapter[ECategoryChapter["ELDERLY_SUPPORT"] = 64] = "ELDERLY_SUPPORT";
})(ECategoryChapter || (ECategoryChapter = {}));

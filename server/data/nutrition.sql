-- 6. NUTRITION
-- --------------
-- 🍏 Catégories nutritionnelles (alimentation, diététique)

-- 🏃 PHYSICAL (Activités physiques et sportives)
INSERT INTO "category" ("id", "category_name", "description", "type_id", "chapter_id") VALUES
(2864, 'Nutrition sportive adaptée', 'Alimentation optimisée pour l''endurance, la force ou la récupération.', 6, 1),
(2865, 'Hydratation avant/après effort', 'Conseils sur les besoins en eau selon l''activité.', 6, 1),
(2866, 'Collations énergétiques', 'Sélection d''encas sains et riches pour soutenir l''effort.', 6, 1),
(2867, 'Programmes alimentaires pour performance', 'Plans diététiques selon les objectifs physiques.', 6, 1),
(2868, 'Complémentation nutritionnelle', 'Information sur les suppléments utiles et sûrs.', 6, 1),

-- 🧠 COGNITIVE (Fonctions cognitives et intellectuelles)
(2869, 'Aliments pour la mémoire', 'Nutriments favorisant la concentration et la rétention.', 6, 2),
(2870, 'Diète neuroprotectrice', 'Alimentation favorisant la prévention des troubles cognitifs.', 6, 2),
(2871, 'Micronutriments et cerveau', 'Focus sur vitamines/minéraux clés pour le cerveau.', 6, 2),
(2872, 'Stabilité glycémique et concentration', 'Éviter les pics de glycémie pour une attention soutenue.', 6, 2),
(2873, 'Oméga-3 et cognition', 'Rôle des acides gras dans la performance mentale.', 6, 2),

-- 🤝 SOCIAL (Activités sociales et communautaires)
(2874, 'Repas partagés et équilibrés', 'Encouragement à cuisiner sainement en groupe.', 6, 3),
(2875, 'Éducation nutritionnelle communautaire', 'Ateliers et discussions autour de l''alimentation.', 6, 3),
(2876, 'Accès équitable à l''alimentation', 'Soutien aux pratiques alimentaires saines pour tous.', 6, 3),
(2877, 'Cultures alimentaires et inclusion', 'Respect des habitudes diététiques diverses.', 6, 3),
(2878, 'Cuisine participative', 'Activités collectives pour favoriser l''équilibre alimentaire.', 6, 3),

-- 👁️👂 SENSORY (Activités sensorielles)
(2879, 'Expérience gustative consciente', 'Stimulation des sens via l''alimentation.', 6, 4),
(2880, 'Aliments et textures adaptées', 'Préparation pour personnes à besoins sensoriels particuliers.', 6, 4),
(2881, 'Éducation au goût', 'Apprendre à reconnaître et apprécier des saveurs variées.', 6, 4),
(2882, 'Repas multisensoriels', 'Intégration de couleurs, odeurs, sons dans l''expérience alimentaire.', 6, 4),
(2883, 'Adaptation alimentaire pour troubles sensoriels', 'Solutions pour hypersensibilités.', 6, 4),

-- 🧘‍♂️ PHYSICAL_WELLNESS (Bien-être physique)
(2884, 'Alimentation anti-fatigue', 'Diète favorisant énergie et vitalité.', 6, 5),
(2885, 'Routine nutritionnelle pour le sommeil', 'Choix alimentaires favorisant l''endormissement.', 6, 5),
(2886, 'Équilibre acido-basique', 'Approche pour prévenir douleurs musculaires ou inflammations.', 6, 5),
(2887, 'Régulation du transit', 'Fibres et hydratation pour un bon confort digestif.', 6, 5),
(2888, 'Nutrition anti-inflammatoire', 'Aliments favorisant la récupération physique.', 6, 5),

-- 😊 EMOTIONAL_WELLNESS (Bien-être émotionnel)
(2889, 'Aliments et humeur', 'Comprendre les effets du sucre, magnésium, tryptophane.', 6, 6),
(2890, 'Diète contre le stress', 'Alimentation calmante et stabilisante.', 6, 6),
(2891, 'Routine nutritionnelle apaisante', 'Intégration d''aliments réconfortants sains.', 6, 6),
(2892, 'Lien entre nutrition et anxiété', 'Focus sur les carences impactant l''émotionnel.', 6, 6),
(2893, 'Éviter l''alimentation émotionnelle', 'Prévention des comportements compensatoires.', 6, 6),

-- 🤗 SOCIAL_WELLNESS (Bien-être social)
(2894, 'Repas inclusifs', 'Adapter les repas aux régimes et croyances de chacun.', 6, 7),
(2895, 'Cuisiner ensemble pour tisser des liens', 'Activités collectives autour de l''alimentation.', 6, 7),
(2896, 'Moments conviviaux autour de la nutrition', 'Pique-niques et repas communautaires équilibrés.', 6, 7),
(2897, 'Transmission des savoirs culinaires', 'Partage intergénérationnel autour de recettes saines.', 6, 7),
(2898, 'Cuisines du monde équilibrées', 'Valorisation des traditions culinaires nutritives.', 6, 7),

-- 🧩 INTELLECTUAL_WELLNESS (Bien-être intellectuel)
(2899, 'Lecture sur la diététique', 'Ressources pour apprendre à bien manger.', 6, 8),
(2900, 'Éducation à l''autonomie alimentaire', 'Apprendre à faire ses choix diététiques.', 6, 8),
(2901, 'Culture et alimentation', 'Comprendre les liens entre connaissances et nutrition.', 6, 8),
(2902, 'Planification alimentaire réfléchie', 'Outils pour mieux organiser ses repas.', 6, 8),
(2903, 'Critique de l''information nutritionnelle', 'Déconstruire les mythes alimentaires.', 6, 8),

-- 💰 FINANCIAL_WELLNESS (Bien-être financier)
(2904, 'Bien manger avec un petit budget', 'Conseils pour des choix économiques et sains.', 6, 9),
(2905, 'Batch cooking économique', 'Préparer en avance pour éviter le gaspillage.', 6, 9),
(2906, 'Courses intelligentes', 'Planification et listes selon les besoins réels.', 6, 9),
(2907, 'Produits de saison et économies', 'Consommer local et pas cher.', 6, 9),
(2908, 'Éviter les achats impulsifs alimentaires', 'Stratégies de gestion.', 6, 9),

-- 🌱 ENVIRONMENTAL_WELLNESS (Bien-être environnemental)
(2909, 'Nutrition durable', 'Réduire son empreinte carbone via son alimentation.', 6, 10),
(2910, 'Réduction des déchets alimentaires', 'Organisation et conservation.', 6, 10),
(2911, 'Favoriser les circuits courts', 'Manger local pour l''environnement.', 6, 10),
(2912, 'Moins de viande, plus de légumes', 'Bénéfices écologiques et diététiques.', 6, 10),
(2913, 'Alimentation biologique et éthique', 'Consommation consciente.', 6, 10),

-- COGNITIVE_ACTIVITY (Stimulation mentale et apprentissage)
(2914, 'Alimentation pour la concentration', 'Diète adaptée aux périodes d''apprentissage intense.', 6, 11),
(2915, 'Rythme alimentaire et productivité mentale', 'Impact du moment des repas sur les performances cognitives.', 6, 11),
(2916, 'Collations cérébrales', 'Encadrer les pauses avec des aliments riches en nutriments cognitifs.', 6, 11),
(2917, 'Nutrition et plasticité cérébrale', 'Focus sur les nutriments stimulant les capacités d''apprentissage.', 6, 11),
(2918, 'Boissons stimulantes et modération', 'Informer sur l''usage raisonné du café, thé, etc.', 6, 11),

-- 🧠 EMOTIONAL_WELLNESS (Gestion des émotions et expression)
(2919, 'Nutrition et régulation émotionnelle', 'Choix alimentaires stabilisant l''humeur.', 6, 6),
(2920, 'Éviter les compulsions alimentaires', 'Prévention de la compensation émotionnelle par la nourriture.', 6, 6),
(2921, 'Aliments réconfortants équilibrés', 'Alternatives saines aux envies émotionnelles.', 6, 6),
(2922, 'Apports émotionnels du repas en groupe', 'Renforcement des liens affectifs via l''alimentation.', 6, 6),
(2923, 'Routine alimentaire et stabilité émotionnelle', 'Apprendre à structurer ses repas pour le bien-être.', 6, 6),

-- 💬 DISCUSSION (Débats, échanges, dialogue)
(2924, 'Sensibilisation à la nutrition', 'Discussions sur les enjeux alimentaires contemporains.', 6, 12),
(2925, 'Fake news nutritionnelles', 'Distinguer informations fiables et mythes.', 6, 12),
(2926, 'Éthique alimentaire', 'Débats sur végétarisme, production locale, etc.', 6, 12),
(2927, 'Préférences alimentaires et dialogue', 'Apprendre à respecter les choix nutritionnels des autres.', 6, 12),
(2928, 'Ateliers participatifs sur la nutrition', 'Encourager les discussions autour de l''alimentation.', 6, 12),

-- 🏡 NUTRITION_SKILL (Vie domestique, autonomie)
(2929, 'Cuisine maison saine', 'Apprendre à cuisiner équilibré à la maison.', 6, 13),
(2930, 'Organisation des repas', 'Planification hebdomadaire pour une alimentation stable.', 6, 13),
(2931, 'Faire les courses intelligemment', 'Choix nutritifs, éthiques et économiques.', 6, 13),
(2932, 'Conservation des aliments', 'Réduire le gaspillage par de bonnes pratiques.', 6, 13),
(2933, 'Éducation nutritionnelle en famille', 'Transmission de bonnes habitudes alimentaires.', 6, 13),

-- 💡 INNOVATION (Créativité et technologie)
(2934, 'Nouvelles formes de nutrition', 'Aliments du futur (algues, protéines alternatives…).', 6, 14),
(2935, 'Tech pour une alimentation personnalisée', 'Apps de suivi diététique ou d''intolérances.', 6, 14),
(2936, 'Agriculture urbaine et innovation alimentaire', 'Intégrer la production locale à l''alimentation.', 6, 14),
(2937, 'Impression 3D alimentaire', 'Expérimenter la nutrition via des technologies avancées.', 6, 14),
(2938, 'Innovations en diététique durable', 'Produits innovants à faible impact environnemental.', 6, 14),

-- 🧮 EDUCATION (Éducation, apprentissage formel)
(2939, 'Programme d''alimentation scolaire équilibrée', 'Introduction à la diététique dès l''école.', 6, 15),
(2940, 'Cantine et apprentissage nutritionnel', 'Utiliser les repas pour l''éducation.', 6, 15),
(2941, 'Supports pédagogiques alimentaires', 'Livres et outils pour comprendre la nutrition.', 6, 15),
(2942, 'Éducation à la lecture d''étiquettes', 'Décrypter les emballages alimentaires.', 6, 15),
(2943, 'Projet éducatif autour de la nutrition', 'Ateliers ou exposés sur l''alimentation.', 6, 15),

-- 🌱 ENVIRONMENT (Écologie, nature, développement durable)
(2944, 'Alimentation à faible impact écologique', 'Choix respectueux de l''environnement.', 6, 16),
(2945, 'Saisonnalité et circuits courts', 'Favoriser les produits locaux et de saison.', 6, 16),
(2946, 'Réduction de la consommation de viande', 'Équilibre environnemental et santé.', 6, 16),
(2947, 'Zéro déchet alimentaire', 'Astuces pour ne rien jeter.', 6, 16),
(2948, 'Potager écoresponsable', 'Autonomie et lien avec la nature.', 6, 16),

-- ❤️‍🩹 HEALTHCARE (Prévention, soin, hygiène)
(2949, 'Nutrition préventive', 'Alimentation pour réduire les risques de maladie.', 6, 17),
(2950, 'Diététique thérapeutique', 'Adaptation aux pathologies spécifiques.', 6, 17),
(2951, 'Hygiène alimentaire', 'Bonnes pratiques de conservation, cuisson, préparation.', 6, 17),
(2952, 'Suivi nutritionnel personnalisé', 'Plans adaptés aux besoins médicaux.', 6, 17),
(2953, 'Lutte contre la dénutrition ou l''obésité', 'Éducation équilibrée sans stigmatisation.', 6, 17),

-- 🎗️ SOCIAL_ENGAGEMENT (Aide, insertion, solidarité)
(2954, 'Aide alimentaire', 'Accès facilité à des repas sains pour tous.', 6, 18),
(2955, 'Cuisine solidaire', 'Ateliers de cuisine collective et inclusive.', 6, 18),
(2956, 'Parcours de réinsertion par la nutrition', 'Formations et emplois liés à l''alimentation.', 6, 18),
(2957, 'Nutrition en milieu précaire', 'Solutions pour les foyers à ressources limitées.', 6, 18),
(2958, 'Partage alimentaire intergénérationnel', 'Transmission de recettes et de valeurs.', 6, 18),

-- 🧓 ELDERLY_SUPPORT (Soutien aux personnes âgées)
(2959, 'Alimentation adaptée à l''âge', 'Textures modifiées, enrichissement nutritionnel.', 6, 19),
(2960, 'Prévention de la dénutrition', 'Surveillance et accompagnement diététique.', 6, 19),
(2961, 'Maintien de l''autonomie alimentaire', 'Aides techniques et pratiques adaptées.', 6, 19),
(2962, 'Rituels alimentaires et mémoire', 'Favoriser la stimulation mnésique par l''alimentation.', 6, 19),
(2963, 'Moments conviviaux autour des repas', 'Rompre l''isolement via des repas partagés.', 6, 19);
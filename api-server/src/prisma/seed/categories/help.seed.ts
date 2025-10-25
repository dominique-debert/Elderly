import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedHelp() {
  await prisma.category.createMany({
    data: [
      // 5. HELP
      // -------
      // 🆘 Aides, supports et assistances

      // 🏃 PHYSICAL (Activités physiques et sportives)
      {
        id: 756,
        categoryName: "Assistance aux repas équilibrés",
        description:
          "Aide à préparer des repas adaptés aux besoins énergétiques sportifs.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 757,
        categoryName: "Planification nutritionnelle sportive",
        description:
          "Élaboration de plans alimentaires spécifiques pour la performance physique.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 758,
        categoryName: "Hydratation adaptée",
        description:
          "Conseils et aide pour une hydratation optimale avant, pendant et après l’effort.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 759,
        categoryName: "Aide à la récupération nutritionnelle",
        description:
          "Fourniture d’aliments favorisant la récupération musculaire.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 760,
        categoryName: "Accompagnement en compléments alimentaires",
        description:
          "Informations sur les compléments nutritionnels pour sportifs.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // 🧠 COGNITIVE (Fonctions cognitives et intellectuelles)
      {
        id: 761,
        categoryName: "Nutrition pour la concentration",
        description:
          "Aide à choisir des aliments favorisant la concentration et la mémoire.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 762,
        categoryName: "Gestion des régimes cognitifs spécifiques",
        description:
          "Support pour suivre des régimes visant la santé cérébrale.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 763,
        categoryName: "Planification de repas anti-fatigue mentale",
        description:
          "Support pour suivre des régimes visant la santé cérébrale.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 764,
        categoryName: "Information sur les nutriments essentiels au cerveau",
        description: "Aide pour intégrer oméga-3, vitamines B, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 765,
        categoryName: "Suivi de la nutrition en cas de troubles cognitifs",
        description:
          "Accompagnement nutritionnel pour Alzheimer, démence, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // 🤝 SOCIAL (Activités sociales et communautaires)
      {
        id: 766,
        categoryName: "Aide à la préparation de repas collectifs équilibrés",
        description: "Soutien à l’organisation de repas partagés sains.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 767,
        categoryName: "Éducation nutritionnelle en groupe",
        description: "Animation d’ateliers pour sensibiliser à la nutrition.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 768,
        categoryName: "Accompagnement pour alimentation sociale adaptée",
        description:
          "Support lors de repas en communauté avec contraintes spécifiques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 769,
        categoryName:
          "Facilitation d’accès à une alimentation saine en milieu social",
        description: "Aide à l’accès aux aliments frais et nutritifs.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 770,
        categoryName: "Organisation d’événements culinaires éducatifs",
        description: "Soutien logistique et pédagogique pour ateliers cuisine.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // 👁️👂 SENSORY (Activités sensorielles)
      {
        id: 771,
        categoryName: "Aide à la découverte de nouvelles saveurs équilibrées",
        description: "Soutien sensoriel pour diversifier l’alimentation.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 772,
        categoryName: "Adaptation nutritionnelle en cas de troubles sensoriels",
        description:
          "Aide alimentaire pour personnes avec troubles du goût ou odorat.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 773,
        categoryName: "Soutien à la sensibilisation sensorielle alimentaire",
        description: "Techniques pour stimuler l’appétit par les sens.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 774,
        categoryName: "Conseils pour textures alimentaires adaptées",
        description:
          "Aide aux choix d’aliments pour troubles de mastication/déglutition.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 775,
        categoryName: "Accompagnement à la dégustation consciente",
        description: "Exercices pour améliorer la perception des aliments.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SENSORY,
      },

      // 🧘‍♂️ PHYSICAL_WELLNESS (Bien-être physique)
      {
        id: 776,
        categoryName: "Accompagnement nutritionnel pour sommeil réparateur",
        description: "Conseils alimentaires favorisant un bon sommeil.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 777,
        categoryName: "Aide à l’équilibre alimentaire anti-fatigue",
        description:
          "Support dans l’organisation de repas qui évitent les coups de barre.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 778,
        categoryName: "Soutien en alimentation pour relaxation",
        description:
          "Conseils sur aliments qui favorisent détente et bien-être.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 779,
        categoryName: "Suivi nutritionnel pour gestion du poids santé",
        description:
          "Aide personnalisée pour maintenir ou atteindre un poids équilibré.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 780,
        categoryName: "Information sur les super-aliments",
        description:
          "Aide pour intégrer des aliments bénéfiques pour le corps.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // 😊 EMOTIONAL_WELLNESS (Bien-être émotionnel)
      {
        id: 780,
        categoryName: "Aide à la gestion des envies alimentaires émotionnelles",
        description:
          "Support pour éviter les excès liés au stress ou à l’ennui.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 781,
        categoryName: "Conseils nutritionnels pour régulation de l’humeur",
        description:
          "Aide pour choisir aliments influant positivement sur l’émotion.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 782,
        categoryName:
          "Accompagnement dans les troubles alimentaires émotionnels",
        description:
          "Soutien nutritionnel en cas d’anorexie, boulimie, compulsions.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 783,
        categoryName: "Techniques de pleine conscience alimentaire",
        description: "Aide à l’écoute des signaux de faim et satiété.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 784,
        categoryName: "Planification d’alimentation pour stabiliser le moral",
        description:
          "Conseils pour éviter les pics glycémiques et leurs effets.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // 🤗 SOCIAL_WELLNESS (Bien-être social)
      {
        id: 785,
        categoryName:
          "Aide à l’inclusion alimentaire lors d’événements sociaux",
        description:
          "Support pour proposer des options nutritionnelles diverses.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 786,
        categoryName:
          "Soutien aux familles dans la préparation de repas équilibrés",
        description: "Aide pour cuisiner sainement en famille.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 787,
        categoryName:
          "Facilitation de l’accès à une alimentation collective équilibrée",
        description: "Soutien dans les cantines et repas de groupe.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 788,
        categoryName: "Éducation nutritionnelle en milieu communautaire",
        description:
          "Ateliers et conseils pour améliorer la nutrition collective.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 789,
        categoryName:
          "Promotion d’alimentation durable dans les groupes sociaux",
        description: "Aide à intégrer des choix alimentaires responsables.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🧩 INTELLECTUAL_WELLNESS (Bien-être intellectuel)
      {
        id: 790,
        categoryName: "Éducation sur la nutrition et ses effets cognitifs",
        description:
          "Ateliers d’information pour mieux comprendre l’impact de la nutrition.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 791,
        categoryName:
          "Soutien à la mise en place de routines alimentaires saines",
        description:
          "Accompagnement pour structurer ses repas de façon intelligente.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 792,
        categoryName:
          "Planification nutritionnelle pour la prévention cognitive",
        description:
          "Conseils pour retarder le déclin intellectuel par la nutrition.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 793,
        categoryName: "Diffusion de connaissances nutritionnelles actualisées",
        description: "Aide à accéder à des sources fiables et scientifiques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 794,
        categoryName: "Encouragement à l’expérimentation alimentaire saine",
        description: "Soutien à tester de nouvelles recettes bénéfiques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // 💰 FINANCIAL_WELLNESS (Bien-être financier)
      {
        id: 795,
        categoryName: "Conseils pour une alimentation saine à petit budget",
        description: "Aide pour acheter et cuisiner sain sans dépenser trop.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 796,
        categoryName: "Planification de menus économiques et nutritifs",
        description:
          "Aide à préparer des repas équilibrés avec un budget limité.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 797,
        categoryName: "Orientation vers des aides alimentaires financières",
        description: "Informations sur aides sociales, bons alimentaires, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 798,
        categoryName: "Aide à la gestion des dépenses alimentaires",
        description: "Soutien pour optimiser ses achats alimentaires.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 799,
        categoryName: "Accompagnement pour limiter le gaspillage alimentaire",
        description: "Techniques pour réduire les pertes et économiser.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // 🌱 ENVIRONMENTAL_WELLNESS (Bien-être environnemental)
      {
        id: 800,
        categoryName: "Soutien pour une alimentation locale et de saison",
        description: "Aide à choisir des aliments favorisant l’environnement.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 801,
        categoryName:
          "Accompagnement vers une alimentation végétarienne/végane",
        description:
          "Conseils pour réduire son impact écologique via la nutrition.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 802,
        categoryName: "Promotion de pratiques alimentaires zéro déchet",
        description:
          "Aide pour cuisiner en limitant les emballages et déchets.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 803,
        categoryName: "Information sur l’impact environnemental des aliments",
        description: "Sensibilisation aux choix alimentaires durables.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 804,
        categoryName: "Aide à l’adoption de jardins potagers urbains",
        description:
          "Soutien pour cultiver soi-même une partie de son alimentation.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // 🕉️ SPIRITUAL_WELLNESS (Bien-être spirituel)
      {
        id: 805,
        categoryName: "Accompagnement nutritionnel en jeûne et détox",
        description: "Aide pour des pratiques alimentaires spirituelles.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 806,
        categoryName:
          "Conseils pour une alimentation consciente et respectueuse",
        description: "Soutien à manger avec attention et gratitude.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 807,
        categoryName: "Soutien aux régimes alimentaires religieux",
        description:
          "Aide pour respecter les prescriptions alimentaires spirituelles.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 808,
        categoryName: "Encouragement à la méditation alimentaire",
        description:
          "Techniques pour intégrer la pleine conscience dans l’acte de manger.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 809,
        categoryName:
          "Information sur l’alimentation et la connexion corps-esprit",
        description: "Aide à comprendre l’impact spirituel de l’alimentation.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // 💼 SOCIAL_WELLNESS (Bien-être professionnel et engagement)
      {
        id: 810,
        categoryName: "Aide à la recherche d’emploi",
        description:
          "Soutien pour la rédaction de CV, lettre de motivation et préparation aux entretiens.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 811,
        categoryName: "Accompagnement à l’insertion professionnelle",
        description:
          "Aide à l’intégration dans un nouveau poste ou secteur d’activité.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 812,
        categoryName: "Soutien à l’équilibre vie pro/vie perso",
        description:
          "Aide à mieux concilier responsabilités professionnelles et personnelles.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 813,
        categoryName: "Organisation d’ateliers de développement professionnel",
        description:
          "Ateliers pour explorer ses talents et aspirations professionnelles.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 814,
        categoryName: "Accompagnement à la reconversion professionnelle",
        description:
          "Soutien pour changer de métier ou de projet de vie professionnelle.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // 🎨 CREATIVE (Créativité et expression artistique)
      {
        id: 815,
        categoryName: "Soutien à l’expression artistique libre",
        description:
          "Aide à la pratique du dessin, peinture, écriture ou musique.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 816,
        categoryName: "Organisation d’ateliers créatifs",
        description:
          "Animation d’activités favorisant la créativité (bricolage, théâtre, etc.).",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 817,
        categoryName: "Aide à l'exposition ou valorisation des créations",
        description: "Soutien pour présenter ses œuvres à un public.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 818,
        categoryName: "Soutien à la stimulation de l’imagination",
        description: "Activités favorisant l’exploration d’idées originales.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 819,
        categoryName: "Accompagnement à la création collaborative",
        description: "Aide à la co-création de projets artistiques en groupe.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.CREATIVE,
      },

      // 🏠 HOUSING_SUPPORT (Habitat, logement, entretien domestique)
      {
        id: 820,
        categoryName: "Aide à la recherche de logement",
        description:
          "Accompagnement dans les démarches pour trouver un logement adapté.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 821,
        categoryName: "Soutien à l’installation et emménagement",
        description:
          "Aide pour les démarches, les cartons, l’adaptation au nouvel environnement.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 822,
        categoryName: "Aide à l’entretien du logement",
        description:
          "Soutien pour le ménage, le rangement, la maintenance de base.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 823,
        categoryName: "Accompagnement à l’aménagement accessible",
        description:
          "Conseil pour adapter le logement aux besoins spécifiques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 824,
        categoryName: "Soutien administratif lié au logement",
        description:
          "Aide aux demandes d’aides au logement, bail, assurance habitation, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },

      // 🚗 TRANSPORTATION (Mobilité et déplacements)
      {
        id: 825,
        categoryName: "Aide à la planification des déplacements",
        description:
          "Soutien pour organiser les trajets quotidiens ou ponctuels.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 826,
        categoryName: "Accompagnement dans les transports publics",
        description:
          "Assistance pour comprendre les lignes, acheter des tickets, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 827,
        categoryName: "Aide à l’accessibilité des transports",
        description:
          "Conseil pour l’usage des transports adaptés ou services spécialisés.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 828,
        categoryName: "Organisation de covoiturage ou navettes",
        description: "Facilitation de solutions de transport partagé.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 829,
        categoryName: "Soutien à l’obtention du permis ou formation mobilité",
        description:
          "Accompagnement pour apprendre à se déplacer de manière autonome.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // 📚 EDUCATION (Éducation, apprentissage, scolarité)
      {
        id: 830,
        categoryName: "Soutien scolaire individualisé",
        description: "Aide aux devoirs, soutien pédagogique sur mesure.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 831,
        categoryName: "Accompagnement à la scolarisation",
        description:
          "Aide à l’intégration dans une école, démarches administratives.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 832,
        categoryName: "Aide à la formation pour adultes",
        description:
          "Soutien dans les démarches pour suivre une formation ou reprendre des études.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 833,
        categoryName: "Aide à l’inclusion scolaire",
        description:
          "Accompagnement des enfants à besoins éducatifs particuliers.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 834,
        categoryName: "Aide à la compréhension des contenus éducatifs",
        description:
          "Simplification des cours ou explications complémentaires.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🏥 HEALTH (Santé, soins médicaux, bien-être physique global)
      {
        id: 835,
        categoryName: "Aide à la prise de rendez-vous médicaux",
        description:
          "Assistance pour trouver un praticien et organiser les visites.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 836,
        categoryName: "Accompagnement aux consultations",
        description: "Présence rassurante lors de rendez-vous médicaux.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 837,
        categoryName: "Soutien à la compréhension des diagnostics",
        description:
          "Explications claires des résultats médicaux ou des traitements.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 838,
        categoryName: "Soutien à l’observance des traitements",
        description:
          "Aide à la prise régulière des médicaments ou suivis médicaux.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 839,
        categoryName: "Aide aux démarches de santé administrative",
        description: "Dossiers médicaux, remboursements, mutuelles, etc.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.HEALTHCARE,
      },

      // 🧪 INNOVATION (Utilisation des technologies et innovation sociale)
      {
        id: 839,
        categoryName: "Accompagnement au numérique",
        description:
          "Aide à l’usage des outils informatiques et plateformes numériques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 840,
        categoryName: "Soutien à l’adoption de technologies d’assistance",
        description:
          "Aide à la mise en place de dispositifs technologiques adaptés.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 841,
        categoryName: "Aide à l’exploration d’outils innovants",
        description: "Soutien pour tester de nouveaux outils ou méthodes.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 842,
        categoryName: "Organisation d’ateliers d’initiation technologique",
        description: "Formation de base à des applications utiles.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INNOVATION,
      },
      {
        id: 843,
        categoryName: "Facilitation de projets collaboratifs innovants",
        description: "Soutien aux expérimentations sociales ou technologiques.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.INNOVATION,
      },

      // 💬 DISCUSSIONS (Dialogue, débat, échange d’idées)
      //  —
      //  —
      //  —
      //  —
      //  —
      {
        id: 844,
        categoryName: "Animation de groupes de discussion",
        description:
          "Facilitation de cercles de parole sur des thématiques diverses.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 845,
        categoryName: "Soutien à l’expression d’opinions",
        description:
          "Encouragement et aide à prendre la parole sur des sujets qui comptent.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 846,
        categoryName: "Aide à la gestion des désaccords",
        description: "Accompagnement pour favoriser un dialogue respectueux.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 847,
        categoryName: "Soutien aux débats citoyens",
        description:
          "Aide à la participation à des forums, tables rondes, ou débats publics.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 848,
        categoryName: "Organisation d’échanges interculturels",
        description:
          "Facilitation du dialogue entre personnes de cultures différentes.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // 🛎️ SERVICES (Accès aux services du quotidien)
      {
        id: 849,
        categoryName: "Aide à l’orientation vers les services locaux",
        description:
          "Soutien pour identifier les ressources disponibles dans son territoire.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 850,
        categoryName: "Accompagnement aux démarches administratives",
        description:
          "Assistance pour remplir des formulaires, déclarations, inscriptions.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 851,
        categoryName: "Soutien à l’usage des services numériques",
        description:
          "Aide pour utiliser les sites web des services publics ou privés.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 852,
        categoryName: "Aide à la gestion budgétaire et sociale",
        description:
          "Conseil pour la gestion des dépenses, aides financières et prestations.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 853,
        categoryName: "Aide à la prise de rendez-vous dans les institutions",
        description:
          "Soutien pour organiser des démarches (CAF, CPAM, Pôle emploi, etc.).",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // 👵 ELDERLY_SUPPORT (Soutien au vieillissement et à la dépendance)
      {
        id: 854,
        categoryName: "Accompagnement aux actes de la vie quotidienne",
        description: "Aide à la toilette, habillage, repas, déplacements.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 855,
        categoryName: "Soutien à la stimulation cognitive",
        description:
          "Activités pour entretenir la mémoire, l’attention, et les capacités mentales.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 856,
        categoryName: "Prévention de l’isolement social",
        description:
          "Visites de courtoisie, appels, participation à des groupes sociaux.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 857,
        categoryName: "Aide à l’aménagement du domicile",
        description:
          "Conseils pour sécuriser et adapter le logement aux besoins liés à l’âge.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 858,
        categoryName: "Soutien à la relation aidant-aidé",
        description:
          "Accompagnement des proches aidants dans leur rôle et leur bien-être.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },

      // 🚨 EMERGENCY_SERVICES (Soutien en situation d’urgence ou de crise)
      {
        id: 859,
        categoryName: "Assistance en cas de danger immédiat",
        description:
          "Aide à contacter les services d’urgence et assurer la sécurité immédiate.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 860,
        categoryName: "Aide à l’hébergement temporaire",
        description:
          "Soutien pour trouver un logement d’urgence ou un lieu d’accueil.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 861,
        categoryName: "Soutien psychologique post-crise",
        description:
          "Aide à gérer le choc émotionnel après un événement difficile.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 862,
        categoryName: "Aide à la déclaration d’incident ou de violence",
        description:
          "Accompagnement dans les démarches judiciaires ou sociales.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 863,
        categoryName: "Coordination avec les secours et services d’urgence",
        description:
          "Appui logistique ou communication avec les structures d’intervention.",
        typeId: ECategoryType.HELP,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
    ],
    skipDuplicates: true,
  });
}

seedHelp()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedHelp };

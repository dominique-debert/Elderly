import { PrismaClient } from "@/prisma";
import { ECategoryChapter, ECategoryType } from "@/types";

const prisma = new PrismaClient();

async function seedSkills() {
  await prisma.category.createMany({
    data: [
      // 11. SKILL
      // ------------
      // 🛠️ Compétences pratiques ou savoir-faire

      // PHYSICAL – Compétences physiques
      {
        id: 1801,
        categoryName: "Prévention de l’isolement",
        description:
          "Développer la capacité à maintenir un effort prolongé (course, marche rapide, vélo).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1802,
        categoryName: "Force musculaire",
        description:
          "Améliorer la capacité de résistance et de levage via des exercices ciblés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1803,
        categoryName: "Coordination motrice",
        description:
          "Travailler la précision et la synchronisation des mouvements du corps.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1804,
        categoryName: "Souplesse articulaire",
        description:
          "Étirements et mobilité pour prévenir les blessures et améliorer la posture.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL,
      },
      {
        id: 1805,
        categoryName: "Équilibre corporel",
        description:
          "Exercices de maintien de stabilité pour prévenir les chutes et améliorer l'agilité.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL,
      },

      // COGNITIVE – Compétences cognitives
      {
        id: 1806,
        categoryName: "Résolution de problèmes",
        description:
          "Développer la capacité à analyser et trouver des solutions efficaces.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1807,
        categoryName: "Mémoire de travail",
        description:
          "Améliorer la capacité à retenir et manipuler temporairement des informations.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1808,
        categoryName: "Attention soutenue",
        description:
          "Renforcer la concentration sur une tâche sans se laisser distraire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1809,
        categoryName: "Pensée critique",
        description:
          "Apprendre à évaluer objectivement des situations et prendre des décisions éclairées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE,
      },
      {
        id: 1810,
        categoryName: "Flexibilité mentale",
        description:
          "S’exercer à passer d’une idée à une autre et s’adapter rapidement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE,
      },

      // SOCIAL – Compétences sociales
      {
        id: 1811,
        categoryName: "Communication interpersonnelle",
        description:
          "Améliorer sa capacité à exprimer ses idées clairement et écouter activement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1812,
        categoryName: "Empathie sociale",
        description:
          "Développer la compréhension et la sensibilité aux émotions d’autrui.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1813,
        categoryName: "Résolution de conflits",
        description:
          "Apprendre à désamorcer les tensions et rechercher des solutions gagnant-gagnant.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1814,
        categoryName: "Travail en équipe",
        description:
          "Savoir collaborer efficacement avec d'autres dans un objectif commun.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL,
      },
      {
        id: 1815,
        categoryName: "Leadership",
        description:
          "Développer des aptitudes à guider, motiver et responsabiliser un groupe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL,
      },

      // SENSORY – Compétences sensorielles
      {
        id: 1816,
        categoryName: "Perception auditive",
        description:
          "Affiner l'écoute et l’analyse des sons (musique, langues, signaux).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1817,
        categoryName: "Discrimination visuelle",
        description:
          "Détecter les différences et détails dans un environnement visuel complexe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1818,
        categoryName: "Sens du toucher",
        description:
          "Exercices de reconnaissance et de distinction tactile (textures, formes).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1819,
        categoryName: "Réactivité sensorielle",
        description: "Améliorer la vitesse de réponse aux stimuli sensoriels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SENSORY,
      },
      {
        id: 1820,
        categoryName: "Intégration multisensorielle",
        description:
          "Coordination de plusieurs sens pour une réponse cohérente (ex. lecture + écoute).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SENSORY,
      },

      // PHYSICAL_WELLNESS – Compétences de bien-être physique
      {
        id: 1821,
        categoryName: "Gestion du sommeil",
        description:
          "Apprendre à instaurer une routine et optimiser la qualité du sommeil.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1822,
        categoryName: "Techniques de relaxation",
        description:
          "Maîtriser des exercices de respiration, yoga ou étirements pour relâcher le corps.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1823,
        categoryName: "Posture et ergonomie",
        description:
          "Acquérir les bons gestes pour éviter les troubles musculo-squelettiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1824,
        categoryName: "Écoute corporelle",
        description:
          "Identifier les signaux du corps et répondre à ses besoins de repos ou d’effort.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },
      {
        id: 1825,
        categoryName: "Autogestion de la douleur",
        description:
          "Apprendre des techniques non-médicamenteuses pour gérer les douleurs chroniques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_WELLNESS,
      },

      // EMOTIONAL_WELLNESS – Compétences de bien-être émotionnel
      {
        id: 1826,
        categoryName: "Gestion du stress",
        description:
          "Apprendre à reconnaître les sources de stress et adopter des stratégies apaisantes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1827,
        categoryName: "Expression émotionnelle",
        description:
          "Développer la capacité à identifier, verbaliser et partager ses émotions.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1828,
        categoryName: "Régulation émotionnelle",
        description:
          "Techniques pour moduler l’intensité et la durée des émotions désagréables.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1829,
        categoryName: "Résilience émotionnelle",
        description:
          "Renforcer sa capacité à rebondir après un échec ou une période difficile.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },
      {
        id: 1830,
        categoryName: "Pleine conscience",
        description:
          "S’entraîner à vivre dans l’instant présent avec attention et bienveillance.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMOTIONAL_WELLNESS,
      },

      // SOCIAL_WELLNESS – Compétences de bien-être social
      {
        id: 1831,
        categoryName: "Création de liens",
        description:
          "Savoir initier et entretenir des relations positives et authentiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1832,
        categoryName: "Soutien mutuel",
        description:
          "Apprendre à offrir et demander de l’aide dans les relations sociales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1833,
        categoryName: "Affirmation de soi",
        description:
          "Exprimer ses besoins et ses limites tout en respectant les autres.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1834,
        categoryName: "Engagement communautaire",
        description:
          "Développer un sentiment d'appartenance par la participation sociale.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },
      {
        id: 1835,
        categoryName: "Communication non violente",
        description:
          "Apprendre à s’exprimer avec respect et bienveillance dans les échanges.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_WELLNESS,
      },

      // INTELLECTUAL_WELLNESS – Compétences de bien-être intellectuel
      {
        id: 1836,
        categoryName: "Curiosité intellectuelle",
        description: "Développer l’envie continue d’apprendre et de découvrir.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1837,
        categoryName: "Esprit analytique",
        description:
          "Savoir structurer, analyser et synthétiser l’information.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1838,
        categoryName: "Apprentissage autonome",
        description: "Méthodes pour apprendre efficacement par soi-même.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1839,
        categoryName: "Créativité intellectuelle",
        description:
          "Encourager l’exploration d’idées nouvelles et originales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },
      {
        id: 1840,
        categoryName: "Lecture critique",
        description:
          "Savoir lire avec discernement et réflexion, en questionnant les sources.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INTELLECTUAL_WELLNESS,
      },

      // FINANCIAL_WELLNESS – Compétences de bien-être financier
      {
        id: 1841,
        categoryName: "Gestion budgétaire",
        description:
          "Apprendre à planifier ses dépenses et équilibrer ses revenus.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1842,
        categoryName: "Épargne intelligente",
        description:
          "Développer des habitudes d’épargne et d’anticipation des imprévus.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1843,
        categoryName: "Consommation responsable",
        description:
          "Faire des choix d’achat éclairés, durables et adaptés à ses moyens.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1844,
        categoryName: "Compréhension financière",
        description:
          "Savoir lire une fiche de paie, un relevé bancaire ou un contrat.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },
      {
        id: 1845,
        categoryName: "Prévention de l’endettement",
        description:
          "Identifier les comportements à risque et mettre en place des stratégies.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FINANCIAL_WELLNESS,
      },

      // ENVIRONMENTAL_WELLNESS – Compétences de bien-être environnemental
      {
        id: 1846,
        categoryName: "Écogestes quotidiens",
        description:
          "Apprendre les gestes simples pour réduire son impact environnemental.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1847,
        categoryName: "Tri et recyclage",
        description:
          "Savoir trier efficacement ses déchets et comprendre les filières.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1848,
        categoryName: "Sobriété énergétique",
        description:
          "Adopter des habitudes pour consommer moins d’énergie au quotidien.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1849,
        categoryName: "Mobilité durable",
        description:
          "Choisir des moyens de transport plus écologiques et efficaces.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },
      {
        id: 1850,
        categoryName: "Protection de la biodiversité",
        description:
          "Comprendre l’importance des écosystèmes et comment les préserver.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_WELLNESS,
      },

      // SPIRITUAL_WELLNESS – Compétences de bien-être spirituel
      {
        id: 1851,
        categoryName: "Méditation spirituelle",
        description:
          "Pratiques de recentrage et de connexion intérieure, avec ou sans dimension religieuse.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1852,
        categoryName: "Exploration des valeurs personnelles",
        description: "Identifier ce qui est essentiel pour soi dans la vie.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1853,
        categoryName: "Rituels de gratitude",
        description:
          "Cultiver la reconnaissance au quotidien pour renforcer l'équilibre intérieur.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1854,
        categoryName: "Connexion à la nature",
        description:
          "Développer une sensibilité spirituelle à travers l’observation du vivant.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },
      {
        id: 1855,
        categoryName: "Questionnement existentiel",
        description:
          "Apprendre à réfléchir au sens de la vie, à la mort et à sa place dans le monde.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SPIRITUAL_WELLNESS,
      },

      // COGNITIVE_ACTIVITY – Compétences pour les activités cognitives spécifiques
      {
        id: 1856,
        categoryName: "Mémoire active",
        description:
          "Techniques pour entretenir et améliorer sa mémoire à court et long terme.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 1857,
        categoryName: "Jeux de logique",
        description:
          "Développer ses capacités de raisonnement et de résolution de problèmes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 1858,
        categoryName: "Attention soutenue",
        description:
          "Exercer sa concentration pour des tâches longues ou complexes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },
      {
        id: 1859,
        categoryName: "Visualisation mentale",
        description:
          "Utiliser l’imagerie mentale pour renforcer l’apprentissage ou la préparation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACTIVITY,
      },

      // COGNITIVE_WELLNESS – Compétences de bien-être cognitif
      {
        id: 1860,
        categoryName: "Hygiène mentale",
        description:
          "Prévenir la surcharge cognitive et favoriser un bon équilibre psychique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 1861,
        categoryName: "Stimulation intellectuelle",
        description: "Maintenir une activité cérébrale régulière et variée.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 1862,
        categoryName: "Souplesse cognitive",
        description:
          "Apprendre à changer de point de vue et à s’adapter à de nouvelles situations.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 1863,
        categoryName: "Gestion des distractions",
        description:
          "Maîtriser les sources d’interruption pour rester concentré.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },
      {
        id: 1864,
        categoryName: "Équilibre activité/repos mental",
        description:
          "Alterner stimulation et récupération pour un cerveau en santé.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_WELLNESS,
      },

      // URBAN_INFRASTRUCTURE – Compétences liées aux infrastructures urbaines
      {
        id: 1865,
        categoryName: "Lecture de plans urbains",
        description:
          "Savoir comprendre un plan de ville, une carte de quartier ou un plan de transport.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 1866,
        categoryName: "Signalétique urbaine",
        description:
          "Reconnaître et interpréter les panneaux d’indication et de signalisation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 1867,
        categoryName: "Accès aux équipements publics",
        description:
          "Connaître les services disponibles dans un quartier et comment y accéder.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 1868,
        categoryName: "Évaluation de l’accessibilité",
        description:
          "Savoir identifier les obstacles urbains et les besoins spécifiques (mobilité réduite, poussettes…).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },
      {
        id: 1869,
        categoryName: "Sécurité urbaine",
        description:
          "Comprendre les éléments favorisant un environnement sûr et inclusif.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_INFRASTRUCTURE,
      },

      // TRANSPORTATION – Compétences en mobilité et transport urbain
      {
        id: 1870,
        categoryName: "Utilisation des transports en commun",
        description:
          "Lire un plan, acheter un ticket, anticiper les correspondances.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 1871,
        categoryName: "Mobilité douce",
        description:
          "Apprendre à se déplacer en sécurité à pied, à vélo ou en trottinette.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 1872,
        categoryName: "Planification d’itinéraire",
        description:
          "Choisir le trajet le plus adapté selon les contraintes (temps, accessibilité, coût).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 1873,
        categoryName: "Écoconduite",
        description:
          "Adapter sa conduite pour consommer moins et réduire son impact.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },
      {
        id: 1874,
        categoryName: "Compréhension des règles de circulation",
        description:
          "Connaître les règles de base du code de la route et de la cohabitation urbaine.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.TRANSPORTATION,
      },

      // URBAN_ENVIRONMENT – Compétences liées à l’environnement urbain
      {
        id: 1875,
        categoryName: "Lecture de la qualité de l’air",
        description:
          "Comprendre les indices de pollution et leurs effets sur la santé.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 1876,
        categoryName: "Observation de la biodiversité urbaine",
        description:
          "Reconnaître les espèces végétales et animales en milieu urbain.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 1877,
        categoryName: "Participation citoyenne écologique",
        description:
          "Savoir comment signaler ou améliorer l’environnement de son quartier.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 1878,
        categoryName: "Sensibilisation au bruit",
        description:
          "Identifier les nuisances sonores et adopter des comportements préventifs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },
      {
        id: 1879,
        categoryName: "Écologie urbaine",
        description:
          "Comprendre les enjeux environnementaux dans une ville (îlots de chaleur, gestion des espaces verts…).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.URBAN_ENVIRONMENT,
      },

      // COMMUNITY_SERVICES – Compétences liées aux services de proximité
      {
        id: 1880,
        categoryName: "Identification des services publics",
        description:
          "Savoir localiser et solliciter les structures d’aide (CCAS, PMI, centres sociaux…).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1881,
        categoryName: "Connaissance des droits sociaux",
        description:
          "Comprendre ses droits et savoir vers qui se tourner pour les exercer.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1882,
        categoryName: "Navigation administrative",
        description:
          "Remplir un dossier, prendre rendez-vous, comprendre un courrier officiel.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1883,
        categoryName: "Communication avec les institutions",
        description: "Savoir s’exprimer clairement avec les services publics.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },
      {
        id: 1884,
        categoryName: "Engagement local",
        description:
          "Participer à la vie citoyenne via les conseils de quartier ou les initiatives solidaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COMMUNITY_SERVICES,
      },

      // WASTE_MANAGEMENT – Compétences liées à la gestion des déchets
      {
        id: 1885,
        categoryName: "Tri sélectif",
        description:
          "Identifier les différents types de déchets et leur mode de tri.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1886,
        categoryName: "Compostage domestique",
        description:
          "Maîtriser les bases du compostage à la maison ou en collectif.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1887,
        categoryName: "Réduction à la source",
        description:
          "Apprendre à produire moins de déchets par des choix de consommation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1888,
        categoryName: "Réemploi et réparation",
        description: "Savoir prolonger la durée de vie d’un objet.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },
      {
        id: 1889,
        categoryName: "Lecture des consignes locales",
        description:
          "Comprendre les spécificités de collecte dans son territoire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.WASTE_MANAGEMENT,
      },

      // COLLABORATION – Compétences en collaboration
      {
        id: 1890,
        categoryName: "Travail en équipe",
        description:
          "Savoir coopérer efficacement avec d’autres dans un projet commun.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1891,
        categoryName: "Écoute active",
        description:
          "Comprendre les idées des autres sans interrompre ni juger.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1892,
        categoryName: "Résolution de conflits",
        description:
          "Trouver des solutions pacifiques aux désaccords en groupe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1893,
        categoryName: "Répartition des tâches",
        description:
          "Organiser équitablement les responsabilités au sein d’une équipe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COLLABORATION,
      },
      {
        id: 1894,
        categoryName: "Communication interpersonnelle",
        description:
          "Transmettre ses idées clairement tout en respectant ses interlocuteurs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COLLABORATION,
      },

      // PERSONAL_DEVELOPMENT – Compétences en développement personnel
      {
        id: 1895,
        categoryName: "Gestion du temps",
        description:
          "Organiser ses journées et prioriser ses tâches efficacement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1896,
        categoryName: "Objectifs personnels",
        description: "Définir des objectifs atteignables et s’y tenir.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1897,
        categoryName: "Estime de soi",
        description: "Développer une image positive de soi-même.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1898,
        categoryName: "Adaptabilité",
        description: "Accepter le changement et s’y ajuster sereinement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },
      {
        id: 1899,
        categoryName: "Prise d’initiative",
        description: "Oser entreprendre sans attendre qu’on vous le demande.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PERSONAL_DEVELOPMENT,
      },

      // GUIDES – Compétences liées à l’utilisation de guides et ressources
      {
        id: 1900,
        categoryName: "Suivi de consignes écrites",
        description: "Lire et appliquer des instructions pas à pas.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1901,
        categoryName: "Recherche dans des guides",
        description: "Identifier les bonnes sections selon ses besoins.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1902,
        categoryName: "Utilisation de manuels techniques",
        description: "Comprendre des documents spécialisés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1903,
        categoryName: "Évaluation de sources fiables",
        description: "Identifier les guides pertinents et actualisés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GUIDES,
      },
      {
        id: 1904,
        categoryName: "Création de guides simplifiés",
        description: "Réécrire ou schématiser un contenu complexe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GUIDES,
      },

      // VIDEOS – Compétences liées à l’apprentissage par la vidéo
      {
        id: 1905,
        categoryName: "Visionnage actif",
        description: "Prendre des notes et retenir les points clés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1906,
        categoryName: "Pause et répétition ciblées",
        description: "Utiliser la vidéo pour mieux assimiler.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1907,
        categoryName: "Synthèse après visionnage",
        description: "Résumer les enseignements d’un contenu.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1908,
        categoryName: "Analyse critique de vidéos",
        description: "Juger la fiabilité et la qualité d’une vidéo.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.VIDEOS,
      },
      {
        id: 1909,
        categoryName: "Création de tutoriels",
        description: "Filmer une procédure claire à des fins pédagogiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.VIDEOS,
      },

      // ARTICLES – Compétences liées à la lecture d’articles
      {
        id: 1910,
        categoryName: "Lecture rapide",
        description: "Balayer un texte pour en extraire les idées principales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1911,
        categoryName: "Analyse argumentative",
        description: "Comprendre et évaluer les arguments d’un auteur.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1912,
        categoryName: "Rédaction de synthèses",
        description: "Résumer des textes complexes de manière claire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1913,
        categoryName: "Vérification des sources",
        description: "Identifier les références d’un article sérieux.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTICLES,
      },
      {
        id: 1914,
        categoryName: "Réflexion critique",
        description: "Croiser les informations pour se forger une opinion.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTICLES,
      },

      // PODCASTS – Compétences liées à l'écoute de contenus audio
      {
        id: 1915,
        categoryName: "Écoute attentive",
        description:
          "Suivre un discours sans support visuel en retenant les idées clés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1916,
        categoryName: "Prise de notes orale",
        description: "Noter des informations essentielles tout en écoutant.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1917,
        categoryName: "Analyse de contenu audio",
        description: "Identifier les arguments, le ton et le point de vue.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1918,
        categoryName: "Synthèse audio",
        description: "Résumer verbalement ou par écrit un épisode écouté.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PODCASTS,
      },
      {
        id: 1919,
        categoryName: "Création de podcasts",
        description: "Concevoir, enregistrer et structurer un contenu audio.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PODCASTS,
      },

      // INFOGRAPHICS – Compétences en lecture et création de données visuelles
      {
        id: 1920,
        categoryName: "Lecture d’infographies",
        description:
          "Interpréter rapidement des données représentées visuellement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1921,
        categoryName: "Représentation graphique",
        description: "Choisir le bon format (graphique, diagramme, etc.).",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1922,
        categoryName: "Création visuelle simplifiée",
        description: "Rendre des données accessibles à tous.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1923,
        categoryName: "Design informatif",
        description: "Associer lisibilité, esthétique et clarté.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },
      {
        id: 1924,
        categoryName: "Vérification des sources de données",
        description: "Assurer la fiabilité des informations affichées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INFOGRAPHICS,
      },

      // HEALTHCARE – Compétences liées à la santé
      {
        id: 1925,
        categoryName: "Compréhension de prescriptions",
        description: "Lire et appliquer un traitement médical.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1926,
        categoryName: "Reconnaissance des signes d’alerte",
        description: "Identifier les symptômes nécessitant une aide médicale.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1927,
        categoryName: "Hygiène de base",
        description: "Appliquer les gestes essentiels au maintien de la santé.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1928,
        categoryName: "Communication médicale",
        description: "Expliquer ses symptômes à un professionnel.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HEALTHCARE,
      },
      {
        id: 1929,
        categoryName: "Soutien à autrui",
        description: "Aider un proche à suivre un parcours de soin.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HEALTHCARE,
      },

      // 🧑‍🏫 EDUCATION
      {
        id: 1930,
        categoryName: "Formation pédagogique",
        description: "Techniques et méthodes pour enseigner efficacement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1931,
        categoryName: "Méthodes d’apprentissage",
        description:
          "Stratégies et outils pour optimiser l’acquisition de connaissances.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1932,
        categoryName: "Gestion de classe",
        description:
          "Organisation et maintien d’un environnement d’apprentissage positif.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1933,
        categoryName: "Développement des compétences",
        description:
          "Approche pour améliorer les capacités intellectuelles et pratiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EDUCATION,
      },
      {
        id: 1934,
        categoryName: "Utilisation des technologies éducatives",
        description: "Intégration d’outils numériques dans l’enseignement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EDUCATION,
      },

      // 🛒 DAILY_HELP
      {
        id: 1935,
        categoryName: "Aide aux courses",
        description: "Assistance pour faire les achats quotidiens.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1936,
        categoryName: "Entretien ménager",
        description:
          "Réalisation des tâches domestiques pour maintenir la propreté.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1937,
        categoryName: "Préparation des repas",
        description: "Organisation et réalisation des repas quotidiens.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1938,
        categoryName: "Assistance aux déplacements quotidiens",
        description: "Accompagnement pour les déplacements de routine.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DAILY_HELP,
      },
      {
        id: 1939,
        categoryName: "Gestion du budget domestique",
        description: "Suivi et organisation des dépenses familiales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DAILY_HELP,
      },

      // 🧑‍🤝‍🧑 SOCIAL_SUPPORT
      {
        id: 1940,
        categoryName: "Écoute active",
        description:
          "Techniques pour comprendre et soutenir les interlocuteurs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1941,
        categoryName: "Médiation et résolution de conflits",
        description: "Facilitation du dialogue et apaisement des tensions.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1942,
        categoryName: "Soutien émotionnel",
        description: "Accompagnement pour gérer les émotions difficiles.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1943,
        categoryName: "Animation de groupe",
        description: "Dynamisation et coordination d’activités collectives.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },
      {
        id: 1944,
        categoryName: "Accompagnement dans les démarches sociales",
        description: "Aide à l’accès aux services sociaux et administratifs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_SUPPORT,
      },

      // 🏢 ADMINISTRATIVE_HELP
      {
        id: 1945,
        categoryName: "Gestion de dossiers administratifs",
        description: "Organisation et suivi des documents officiels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1946,
        categoryName: "Assistance juridique de base",
        description: "Aide pour comprendre les aspects légaux simples.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1947,
        categoryName: "Organisation d’agendas",
        description: "Planification des rendez-vous et échéances.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1948,
        categoryName: "Compréhension des réglementations",
        description: "Explication des lois et règles applicables.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },
      {
        id: 1949,
        categoryName: "Rédaction de courriers officiels",
        description: "Élaboration de documents administratifs formels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ADMINISTRATIVE_HELP,
      },

      // 🤝 PSYCHOLOGICAL_SUPPORT
      {
        id: 1950,
        categoryName: "Techniques d’écoute thérapeutique",
        description:
          "Méthodes pour favoriser l’expression et l’écoute en contexte psychologique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1951,
        categoryName: "Gestion du stress",
        description: "Stratégies pour réduire et contrôler le stress.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1952,
        categoryName: "Accompagnement en crise",
        description: "Soutien dans des situations d’urgence émotionnelle.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1953,
        categoryName: "Méthodes de relaxation",
        description: "Techniques pour favoriser le calme mental et physique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },
      {
        id: 1954,
        categoryName: "Approche cognitive et comportementale",
        description:
          "Thérapies visant à modifier les pensées et comportements.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PSYCHOLOGICAL_SUPPORT,
      },

      // 35. MEDICAL_AID 💊
      {
        id: 1955,
        categoryName: "Premiers secours",
        description: "Intervention immédiate en cas d’accident ou malaise.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1956,
        categoryName: "Administration de médicaments",
        description:
          "Administration correcte et sécurisée des traitements prescrits.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1957,
        categoryName: "Suivi des constantes vitales",
        description: "Contrôle régulier des signes vitaux.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1958,
        categoryName: "Techniques de mobilisation des patients",
        description: "Méthodes pour déplacer et positionner les malades.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },
      {
        id: 1959,
        categoryName: "Connaissances des pathologies courantes",
        description: "Identification et gestion de maladies fréquentes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_AID,
      },

      // 🏠 HOUSING_SUPPORT
      {
        id: 1960,
        categoryName: "Aide à la recherche de logement",
        description: "Soutien pour trouver un habitat adapté.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1961,
        categoryName: "Assistance dans les démarches locatives",
        description:
          "Accompagnement pour les contrats et procédures locatives.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1962,
        categoryName: "Gestion des conflits de voisinage",
        description: "Médiation et résolution des différends entre habitants.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1963,
        categoryName: "Organisation de l’espace de vie",
        description: "Optimisation et aménagement du logement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },
      {
        id: 1964,
        categoryName: "Prévention des risques domestiques",
        description: "Sécurité et prévention des accidents à domicile.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.HOUSING_SUPPORT,
      },

      // 🥖 FOOD_AID
      {
        id: 1965,
        categoryName: "Distribution alimentaire",
        description: "Organisation et remise de denrées alimentaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1966,
        categoryName: "Nutrition de base",
        description: "Connaissances fondamentales sur une alimentation saine.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1967,
        categoryName: "Planification des repas",
        description: "Élaboration de menus équilibrés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1968,
        categoryName: "Sécurité alimentaire",
        description: "Respect des règles d’hygiène et conservation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FOOD_AID,
      },
      {
        id: 1969,
        categoryName: "Sensibilisation à l’équilibre alimentaire",
        description: "Éducation sur l’importance d’une alimentation variée.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.FOOD_AID,
      },

      // 📞 EMERGENCY_SERVICES
      {
        id: 1970,
        categoryName: "Intervention rapide",
        description: "Réponse immédiate en situation d’urgence.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1971,
        categoryName: "Coordination avec les secours",
        description: "Collaboration avec les équipes spécialisées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1972,
        categoryName: "Gestion des situations critiques",
        description: "Organisation et prise de décisions sous pression.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1973,
        categoryName: "Communication d’urgence",
        description: "Transmission claire des informations vitales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },
      {
        id: 1974,
        categoryName: "Secours aux blessés",
        description: "Assistance médicale et sécuritaire aux victimes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.EMERGENCY_SERVICES,
      },

      // 🏃‍♂️ PHYSICAL_ACTIVITY
      {
        id: 1975,
        categoryName: "Coaching sportif",
        description: "Encadrement pour améliorer les performances physiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1976,
        categoryName: "Techniques d’entraînement",
        description: "Méthodes pour développer force, endurance et souplesse.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1977,
        categoryName: "Prévention des blessures",
        description:
          "Conseils pour éviter les accidents lors d’efforts physiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1978,
        categoryName: "Animation de séances collectives",
        description: "Organisation d’activités sportives en groupe.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },
      {
        id: 1979,
        categoryName: "Suivi de la condition physique",
        description: "Évaluation régulière de la forme.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACTIVITY,
      },

      // 🧠 COGNITIVE_TRAINING
      {
        id: 1980,
        categoryName: "Exercices de mémoire",
        description: "Activités pour améliorer la rétention d’informations.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1981,
        categoryName: "Stimulation cognitive",
        description:
          "Techniques pour développer les fonctions intellectuelles.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1982,
        categoryName: "Résolution de problèmes",
        description:
          "Stratégies pour aborder et régler des situations complexes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1983,
        categoryName: "Jeux de réflexion",
        description: "Activités ludiques stimulant la pensée critique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },
      {
        id: 1984,
        categoryName: "Techniques d’attention et de concentration",
        description: "Méthodes pour améliorer la focalisation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_TRAINING,
      },

      // 🥗 NUTRITION
      {
        id: 1985,
        categoryName: "Conseils diététiques",
        description: "Recommandations pour une alimentation équilibrée.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1986,
        categoryName: "Planification nutritionnelle",
        description: "Organisation des repas selon les besoins spécifiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1987,
        categoryName: "Éducation alimentaire",
        description: "Formation sur les principes nutritionnels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1988,
        categoryName: "Gestion des allergies alimentaires",
        description: "Prise en compte des restrictions alimentaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION,
      },
      {
        id: 1989,
        categoryName: "Suivi des besoins spécifiques",
        description: "Adaptation des régimes selon conditions médicales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION,
      },

      // 🤝 SOCIAL_ENGAGEMENT
      {
        id: 1990,
        categoryName: "Mobilisation communautaire",
        description: "Organisation d’actions collectives.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1991,
        categoryName: "Organisation d’événements sociaux",
        description: "Planification d’activités pour renforcer les liens.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1992,
        categoryName: "Animation de groupes",
        description: "Dynamisation des interactions sociales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1993,
        categoryName: "Sensibilisation à la citoyenneté",
        description: "Éducation aux droits et devoirs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },
      {
        id: 1994,
        categoryName: "Développement du bénévolat",
        description: "Encouragement à l’engagement volontaire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ENGAGEMENT,
      },

      // 🌍 ENVIRONMENTAL_ACTION
      {
        id: 1995,
        categoryName: "Sensibilisation écologique",
        description: "Éducation aux enjeux environnementaux.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1996,
        categoryName: "Organisation de nettoyages",
        description: "Coordination d’actions de nettoyage local.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1997,
        categoryName: "Promotion du tri des déchets",
        description: "Encouragement au recyclage.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1998,
        categoryName: "Jardins partagés",
        description: "Création et gestion d’espaces verts collectifs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },
      {
        id: 1999,
        categoryName: "Initiatives de réduction carbone",
        description: "Actions pour diminuer l’empreinte écologique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACTION,
      },

      // 🏆 PHYSICAL_ACHIEVEMENTS
      {
        id: 2000,
        categoryName: "Évaluation des performances",
        description: "Mesure des progrès physiques réalisés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 2001,
        categoryName: "Objectifs sportifs",
        description: "Fixation de buts adaptés au niveau de chacun.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 2002,
        categoryName: "Reconnaissance de la progression",
        description: "Valorisation des efforts accomplis.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 2003,
        categoryName: "Défis physiques",
        description: "Organisation d’épreuves pour stimuler la motivation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },
      {
        id: 2004,
        categoryName: "Programmes de récompenses",
        description: "Systèmes d’incitations pour l’engagement sportif.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.PHYSICAL_ACHIEVEMENTS,
      },

      // 🧠 COGNITIVE_ACHIEVEMENTS
      {
        id: 2005,
        categoryName: "Tests cognitifs",
        description: "Évaluations pour mesurer les capacités intellectuelles.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 2006,
        categoryName: "Suivi des progrès mentaux",
        description: "Analyse des améliorations dans les fonctions cognitives.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 2007,
        categoryName: "Récompenses de concentration",
        description: "Valorisation de l’attention soutenue.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 2008,
        categoryName: "Challenges intellectuels",
        description: "Organisation de concours et jeux de réflexion.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },
      {
        id: 2009,
        categoryName: "Certifications de compétences cognitives",
        description: "Attestations des acquis intellectuels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.COGNITIVE_ACHIEVEMENTS,
      },

      // 🥗 NUTRITION_ACHIEVEMENTS
      {
        id: 2010,
        categoryName: "Atteinte d’objectifs nutritionnels",
        description: "Reconnaissance des progrès diététiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 2011,
        categoryName: "Adhésion à un plan alimentaire",
        description: "Suivi et respect des régimes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 2012,
        categoryName: "Réduction de mauvaises habitudes",
        description: "Diminution des comportements alimentaires nuisibles.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 2013,
        categoryName: "Suivi du poids et santé",
        description: "Contrôle de l’état physique lié à la nutrition.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },
      {
        id: 2014,
        categoryName: "Récompenses éducatives",
        description: "Valorisation des connaissances acquises.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_ACHIEVEMENTS,
      },

      // 🤝 SOCIAL_ACHIEVEMENTS
      {
        id: 2015,
        categoryName: "Participation à des actions sociales",
        description: "Engagement dans des projets communautaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 2016,
        categoryName: "Leadership communautaire",
        description: "Prise d’initiatives dans les groupes sociaux.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 2017,
        categoryName: "Médiation réussie",
        description: "Résolution efficace de conflits.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 2018,
        categoryName: "Organisation d’événements",
        description: "Création et gestion d’activités sociales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },
      {
        id: 2019,
        categoryName: "Reconnaissance du bénévolat",
        description: "Valorisation des actions volontaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.SOCIAL_ACHIEVEMENTS,
      },

      // 🌍 ENVIRONMENTAL_ACHIEVEMENTS
      {
        id: 2020,
        categoryName: "Actions écologiques menées",
        description: "Réalisations concrètes en faveur de l’environnement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 2021,
        categoryName: "Projets durables réalisés",
        description: "Mise en œuvre d’initiatives écologiques pérennes.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 2022,
        categoryName: "Réduction des déchets",
        description: "Diminution effective des déchets produits.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 2023,
        categoryName: "Sensibilisation communautaire",
        description: "Éducation des populations aux enjeux écologiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },
      {
        id: 2024,
        categoryName: "Prix verts",
        description:
          "Distinctions attribuées pour l’engagement environnemental.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL_ACHIEVEMENTS,
      },

      // 🌱 ENVIRONMENTAL
      {
        id: 2025,
        categoryName: "Pratiques écologiques quotidiennes",
        description: "Habitudes respectueuses de la nature.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 2026,
        categoryName: "Jardinage naturel",
        description: "Techniques de culture respectueuses de l’environnement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 2027,
        categoryName: "Utilisation responsable des ressources",
        description: "Gestion durable de l’eau, énergie, etc.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 2028,
        categoryName: "Compostage",
        description: "Valorisation des déchets organiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },
      {
        id: 2029,
        categoryName: "Protection de la biodiversité",
        description: "Actions pour préserver la faune et la flore locales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ENVIRONMENTAL,
      },

      // 💬 GENERAL
      {
        id: 2030,
        categoryName: "Communication orale",
        description: "Aptitudes à s’exprimer clairement à l’oral.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 2031,
        categoryName: "Expression écrite",
        description: "Capacité à rédiger de manière cohérente et claire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 2032,
        categoryName: "Présentation publique",
        description: "Techniques pour s’adresser à un auditoire.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 2033,
        categoryName: "Négociation",
        description: "L'art de trouver des accords favorables.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GENERAL,
      },
      {
        id: 2034,
        categoryName: "Argumentation",
        description: "Construction logique et convaincante d’idées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.GENERAL,
      },

      // 🧠 MENTAL_HEALTH
      {
        id: 2035,
        categoryName: "Gestion du stress",
        description: "Techniques pour apaiser la tension mentale.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 2036,
        categoryName: "Techniques de relaxation",
        description: "Exercices pour favoriser le calme.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 2037,
        categoryName: "Soutien psychologique",
        description: "Accompagnement émotionnel et mental.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 2038,
        categoryName: "Prévention du burn-out",
        description: "Identification et réduction des risques d’épuisement.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },
      {
        id: 2039,
        categoryName: "Méditation",
        description: "Pratiques de pleine conscience.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MENTAL_HEALTH,
      },

      // 56. MANUAL_SKILL
      {
        id: 2040,
        categoryName: "Bricolage",
        description: "Réalisation de petits travaux manuels.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 2041,
        categoryName: "Réparations domestiques",
        description: "Maintenance des équipements du domicile.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 2042,
        categoryName: "Couture",
        description: "Travaux textiles et réparation de vêtements.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 2043,
        categoryName: "Jardinage",
        description: "Entretien des espaces verts.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },
      {
        id: 2044,
        categoryName: "Travaux manuels divers",
        description: "Activités artisanales variées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MANUAL_SKILL,
      },

      // 57. NUTRITIONAL_SKILL
      {
        id: 2045,
        categoryName: "Cuisine saine",
        description: "Préparation de plats équilibrés.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 2046,
        categoryName: "Préparation de repas équilibrés",
        description: "Composition de menus nutritifs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 2047,
        categoryName: "Lecture des étiquettes nutritionnelles",
        description: "Analyse des composants alimentaires.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 2048,
        categoryName: "Conservation des aliments",
        description: "Techniques pour garder la fraîcheur.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },
      {
        id: 2049,
        categoryName: "Planification des menus",
        description: "Organisation des repas sur la semaine.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.NUTRITION_SKILL,
      },

      // 58. CREATIVE_SKILL
      {
        id: 2050,
        categoryName: "Dessin et peinture",
        description: "Expression artistique visuelle.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 2051,
        categoryName: "Musique",
        description: "Pratique instrumentale ou vocale.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 2052,
        categoryName: "Écriture créative",
        description: "Rédaction d’œuvres originales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 2053,
        categoryName: "Artisanat",
        description: "Création manuelle d’objets décoratifs.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },
      {
        id: 2054,
        categoryName: "Photographie",
        description: "Captation et retouche d’images.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE_SKILL,
      },

      // 59. MEDICAL_CARE
      {
        id: 2055,
        categoryName: "Soins de base",
        description: "Aide quotidienne aux malades.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 2056,
        categoryName: "Hygiène et prévention",
        description: "Maintien de la propreté et prévention des infections.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 2057,
        categoryName: "Assistance aux malades",
        description: "Support dans les gestes de la vie quotidienne.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 2058,
        categoryName: "Suivi des traitements",
        description: "Contrôle de l’observance médicamenteuse.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },
      {
        id: 2059,
        categoryName: "Premiers secours avancés",
        description: "Interventions médicales spécialisées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.MEDICAL_CARE,
      },

      // 60. ARTISTIC
      {
        id: 2060,
        categoryName: "Arts visuels",
        description: "Peinture, dessin, sculpture, photographie.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 2061,
        categoryName: "Musique",
        description: "Pratique instrumentale, chant, composition.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 2062,
        categoryName: "Danse et mouvement",
        description: "Expression corporelle artistique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 2063,
        categoryName: "Théâtre et arts de la scène",
        description: "Jeu d’acteur, mise en scène, improvisation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTISTIC,
      },
      {
        id: 2064,
        categoryName: "Arts numériques",
        description: "Créations artistiques assistées par ordinateur.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ARTISTIC,
      },

      // 61. DISCUSSIONS
      {
        id: 2065,
        categoryName: "Débats thématiques",
        description: "Échanges sur des sujets variés et d’actualité.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 2066,
        categoryName: "Groupes de parole",
        description: "Espaces pour partager expériences et émotions.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 2067,
        categoryName: "Forums communautaires",
        description: "Discussions en ligne sur différents centres d’intérêt.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 2068,
        categoryName: "Écoute active",
        description: "Techniques pour mieux comprendre et dialoguer.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },
      {
        id: 2069,
        categoryName: "Médiation de conflits",
        description: "Résolution constructive des différends.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.DISCUSSIONS,
      },

      // 62. CREATIVE
      {
        id: 2070,
        categoryName: "Écriture créative",
        description: "Rédaction, poésie, storytelling.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 2071,
        categoryName: "Arts manuels",
        description: "Couture, bricolage, création artisanale.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 2072,
        categoryName: "Design et graphisme",
        description: "Création visuelle et identité graphique.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 2073,
        categoryName: "Photographie artistique",
        description: "Techniques et styles photographiques.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE,
      },
      {
        id: 2074,
        categoryName: "Invention et prototypage",
        description: "Développement d’idées originales.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.CREATIVE,
      },

      // 63. INCLUSION
      {
        id: 2075,
        categoryName: "Accessibilité",
        description: "Adaptation des espaces et services aux handicaps.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 2076,
        categoryName: "Égalité et diversité",
        description: "Promotion de la non-discrimination.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 2077,
        categoryName: "Intégration sociale",
        description: "Soutien aux personnes en situation d’exclusion.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 2078,
        categoryName: "Éducation inclusive",
        description: "Méthodes pédagogiques adaptées.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INCLUSION,
      },
      {
        id: 2079,
        categoryName: "Sensibilisation interculturelle",
        description: "Valorisation des différences culturelles.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.INCLUSION,
      },

      // 64. ELDERLY_SUPPORT
      {
        id: 2080,
        categoryName: "Accompagnement à domicile",
        description: "Aide aux gestes quotidiens.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 2081,
        categoryName: "Activités de stimulation cognitive",
        description: "Jeux, exercices mentaux.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 2082,
        categoryName: "Soutien social et moral",
        description: "Visites, écoute, animation.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 2083,
        categoryName: "Prévention de la dépendance",
        description: "Programmes de maintien de l’autonomie.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
      {
        id: 2084,
        categoryName: "Aide à la mobilité",
        description: "Assistance pour déplacements et accessibilité.",
        typeId: ECategoryType.SKILL,
        chapterId: ECategoryChapter.ELDERLY_SUPPORT,
      },
    ],
    skipDuplicates: true,
  });
}

seedSkills()
  .then(() => {
    console.log(`✅ Catégories seedées`);
  })
  .catch((err) => {
    console.error(`❌ Erreur lors du seed des catégories`, err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { seedSkills };

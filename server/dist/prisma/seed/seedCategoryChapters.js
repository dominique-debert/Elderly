import { PrismaClient } from '@/prisma/client';
const prisma = new PrismaClient();
async function seedCategoryChapters() {
    await prisma.categoryChapter.deleteMany();
    await prisma.categoryChapter.createMany({
        data: [
            { chapterId: 1, chapterName: "Activités physiques", chapterDescription: "Les activités physiques sont essentielles pour maintenir la santé et la mobilité des seniors. Voici quelques idées d’animations pour leur permettre de bouger tout en s’amusant." },
            { chapterId: 2, chapterName: "Fonctions cognitives et intellectuelles", chapterDescription: "Les fonctions cognitives regroupent la mémoire, l’attention, le raisonnement ou encore le langage. Ces activités stimulent l’esprit et entretiennent les capacités mentales." },
            { chapterId: 3, chapterName: "Activités sociales et communautaires", chapterDescription: "Favoriser les liens sociaux permet de lutter contre l’isolement et de maintenir un sentiment d’appartenance. Ce chapitre regroupe les initiatives pour stimuler les interactions." },
            { chapterId: 4, chapterName: "Activités sensorielles", chapterDescription: "Les activités sensorielles permettent de stimuler les cinq sens et d’éveiller les souvenirs ou les émotions chez les seniors. Elles sont accessibles à tous et sources de bien-être." },
            { chapterId: 5, chapterName: "Bien-être physique", chapterDescription: "Ce chapitre regroupe les activités liées à la relaxation, au sommeil ou à la respiration, afin de favoriser la détente corporelle et la récupération physique." },
            { chapterId: 6, chapterName: "Bien-être émotionnel", chapterDescription: "Le bien-être émotionnel aide à gérer le stress, les émotions négatives et favorise un état d’esprit positif. Ces activités contribuent à l’équilibre psychique." },
            { chapterId: 7, chapterName: "Bien-être social", chapterDescription: "Un bon bien-être social repose sur des relations satisfaisantes et un soutien affectif. Il est essentiel pour renforcer l’estime de soi et le sentiment de sécurité." },
            { chapterId: 8, chapterName: "Bien-être intellectuel", chapterDescription: "Stimuler l’intellect permet de maintenir la vivacité d’esprit. Ce chapitre regroupe des activités éducatives, ludiques ou culturelles pour entretenir les facultés mentales." },
            { chapterId: 9, chapterName: "Bien-être financier", chapterDescription: "La sécurité financière joue un rôle clé dans la sérénité des personnes âgées. Ce chapitre vise à proposer des ressources et des conseils sur la gestion budgétaire." },
            { chapterId: 10, chapterName: "Bien-être environnemental", chapterDescription: "Un cadre de vie sain, sécurisé et agréable favorise la qualité de vie. Ce chapitre inclut des initiatives écologiques et des aménagements pour un meilleur environnement." },
            { chapterId: 11, chapterName: "Bien-être spirituel", chapterDescription: "Le bien-être spirituel concerne les valeurs, les croyances, la paix intérieure. Il est lié au sens que l’on donne à la vie et peut être nourri par des pratiques variées." },
            { chapterId: 12, chapterName: "Activités cognitives spécifiques", chapterDescription: "Ce chapitre rassemble des exercices ciblés pour stimuler les fonctions mentales telles que la mémoire, l’attention ou la logique, adaptés au profil des participants." },
            { chapterId: 13, chapterName: "Bien-être cognitif", chapterDescription: "Entretenir ses capacités mentales au quotidien participe au bien-être général. Ce chapitre offre des approches douces et variées pour préserver ses fonctions cognitives." },
            { chapterId: 14, chapterName: "Infrastructures urbaines", chapterDescription: "Ce chapitre aborde les problématiques liées à l’accessibilité, l’aménagement urbain et les équipements collectifs favorisant l’autonomie et l’inclusion." },
            { chapterId: 15, chapterName: "Transports urbains", chapterDescription: "Les moyens de transport doivent être adaptés aux besoins des personnes âgées. Ce chapitre explore les solutions favorisant leur mobilité et leur sécurité." },
            { chapterId: 16, chapterName: "Environnement urbain", chapterDescription: "Des espaces verts et un environnement agréable améliorent le quotidien. Ce chapitre valorise les projets urbains propices au bien-être et à l’interaction sociale." },
            { chapterId: 17, chapterName: "Services communautaires", chapterDescription: "Les services de proximité renforcent la cohésion et l'entraide dans les quartiers. Ce chapitre met en avant les dispositifs utiles pour les seniors au quotidien." },
            { chapterId: 18, chapterName: "Gestion des déchets", chapterDescription: "Sensibiliser à la réduction et au tri des déchets permet de préserver l’environnement et de responsabiliser chacun, à tout âge." },
            { chapterId: 19, chapterName: "Innovation et technologie", chapterDescription: "L’innovation peut améliorer le quotidien des seniors. Ce chapitre explore les outils technologiques et les initiatives innovantes à visée sociale ou médicale." },
            { chapterId: 20, chapterName: "Construction et aménagement", chapterDescription: "Ce chapitre porte sur les projets liés à l’habitat et à l’urbanisme, visant à rendre les espaces de vie plus accessibles, sûrs et adaptés." },
            { chapterId: 21, chapterName: "Projets durables", chapterDescription: "Les actions durables visent à préserver l’environnement et les ressources pour les générations futures. Ce chapitre met en valeur les projets écocitoyens." },
            { chapterId: 22, chapterName: "Projets collaboratifs", chapterDescription: "La coopération entre citoyens et institutions est une clé de réussite. Ce chapitre valorise les initiatives portées collectivement, favorisant l’engagement de chacun." },
            { chapterId: 23, chapterName: "Développement personnel", chapterDescription: "Le développement personnel contribue à l’épanouissement individuel. Il regroupe des activités de réflexion, de créativité ou d’apprentissage de soi." },
            { chapterId: 24, chapterName: "Guides et manuels", chapterDescription: "Ce chapitre regroupe des documents pratiques et pédagogiques conçus pour accompagner les utilisateurs dans leurs activités, projets ou démarches." },
            { chapterId: 25, chapterName: "Vidéos éducatives", chapterDescription: "Les contenus audiovisuels sont des supports accessibles et dynamiques pour l’apprentissage, la sensibilisation ou la stimulation cognitive." },
            { chapterId: 26, chapterName: "Articles et études", chapterDescription: "Les articles et études permettent de diffuser des connaissances et d’approfondir des thématiques autour de la santé, du bien-être ou de la société." },
            { chapterId: 27, chapterName: "Podcasts et interviews", chapterDescription: "Les podcasts offrent une écoute libre et variée, propice à la découverte, au témoignage et à l’ouverture d’esprit." },
            { chapterId: 28, chapterName: "Infographies et données visuelles", chapterDescription: "Les supports visuels facilitent la compréhension des informations complexes et rendent l’apprentissage plus intuitif et engageant." },
            { chapterId: 29, chapterName: "Santé et soins médicaux", chapterDescription: "Ce chapitre rassemble les services médicaux, les consultations et l’accompagnement thérapeutique à destination des seniors." },
            { chapterId: 30, chapterName: "Éducation et formation", chapterDescription: "L’apprentissage tout au long de la vie est bénéfique à tout âge. Ce chapitre propose des ressources pédagogiques et des formations continues." },
            { chapterId: 31, chapterName: "Aides quotidiennes", chapterDescription: "Les aides à domicile (courses, ménage…) facilitent la vie des personnes âgées et contribuent à leur maintien à domicile." },
            { chapterId: 32, chapterName: "Services sociaux", chapterDescription: "Les services d’accompagnement social permettent de répondre aux besoins fondamentaux et de soutenir les personnes en situation de vulnérabilité." },
            { chapterId: 33, chapterName: "Services administratifs", chapterDescription: "Ce chapitre regroupe les dispositifs d’aide pour les démarches administratives, juridiques et financières." },
            { chapterId: 34, chapterName: "Soutien psychologique", chapterDescription: "L’accompagnement psychologique est essentiel pour faire face à des situations de stress, de deuil ou d’isolement." },
            { chapterId: 35, chapterName: "Aide médicale", chapterDescription: "Ce chapitre recouvre les soins d’urgence, les premiers secours et les interventions médicales rapides ou préventives." },
            { chapterId: 36, chapterName: "Logement d’urgence", chapterDescription: "Le soutien en matière d’habitat temporaire ou d’urgence vise à protéger les populations fragilisées par une perte de logement." },
            { chapterId: 37, chapterName: "Aide alimentaire", chapterDescription: "Ce chapitre regroupe les dispositifs d’aide à l’alimentation équilibrée et accessible pour tous." },
            { chapterId: 38, chapterName: "Services d’urgence", chapterDescription: "Les services d’urgence regroupent les moyens mis en œuvre pour réagir rapidement aux situations critiques et assurer la sécurité des citoyens." },
            { chapterId: 39, chapterName: "Programmes sportifs", chapterDescription: "Des programmes encadrés favorisent la pratique régulière d’activités physiques pour maintenir forme et autonomie." },
            { chapterId: 40, chapterName: "Entraînement cognitif", chapterDescription: "Ce chapitre propose des programmes pour développer les fonctions mentales de manière structurée et évolutive." },
            { chapterId: 41, chapterName: "Nutrition", chapterDescription: "Une alimentation équilibrée contribue à la prévention des maladies et au bien-être global. Ce chapitre regroupe les bonnes pratiques nutritionnelles." },
            { chapterId: 42, chapterName: "Engagement social", chapterDescription: "Ce chapitre valorise la participation citoyenne et associative dans une dynamique de solidarité et de partage." },
            { chapterId: 43, chapterName: "Actions environnementales", chapterDescription: "Les actions pour la nature et la préservation de la planète peuvent être accessibles et adaptées à tous les âges." },
            { chapterId: 44, chapterName: "Badges physiques", chapterDescription: "Les badges valorisent les efforts et la progression dans les activités physiques réalisées au quotidien ou dans des programmes." },
            { chapterId: 45, chapterName: "Badges cognitifs", chapterDescription: "Les badges cognitifs récompensent les réussites dans les domaines intellectuels, logiques ou mnésiques." },
            { chapterId: 46, chapterName: "Badges nutritionnels", chapterDescription: "Ces badges soulignent l’engagement dans une alimentation saine et équilibrée." },
            { chapterId: 47, chapterName: "Badges sociaux", chapterDescription: "Ces distinctions mettent en avant les comportements bienveillants, les engagements communautaires ou les interactions sociales." },
            { chapterId: 48, chapterName: "Badges environnementaux", chapterDescription: "Les badges environnementaux récompensent les gestes écoresponsables ou les actions en faveur du développement durable." },
            { chapterId: 49, chapterName: "Activités environnementales", chapterDescription: "Ce chapitre regroupe les ateliers, animations et actions concrètes en lien avec la nature et l’écologie." },
            { chapterId: 50, chapterName: "Discussions générales", chapterDescription: "Un espace d’expression libre pour échanger autour de sujets variés, informels ou d’actualité." },
            // { chapterId: 51, chapterName: "Développement personnel", chapterDescription: "Un forum dédié aux échanges autour de l’épanouissement personnel, la connaissance de soi et les défis individuels." },
            // { chapterId: 52, chapterName: "Discussions nutrition", chapterDescription: "Un espace pour parler d’alimentation, partager des recettes ou poser des questions liées à la nutrition." },
            // { chapterId: 53, chapterName: "Discussions sociales", chapterDescription: "Un lieu d’échange sur la vie sociale, les relations, la solidarité ou les dynamiques communautaires." },
            // { chapterId: 54, chapterName: "Discussions environnementales", chapterDescription: "Un espace pour débattre des enjeux écologiques, du développement durable et partager des bonnes pratiques vertes." },
            { chapterId: 55, chapterName: "Bien-être mental", chapterDescription: "Ce chapitre regroupe les ressources liées à la santé mentale, à la relaxation mentale et à l’équilibre émotionnel." },
            { chapterId: 56, chapterName: "Compétences manuelles", chapterDescription: "Les activités manuelles stimulent la motricité fine, la concentration et la créativité." },
            { chapterId: 57, chapterName: "Compétences nutritionnelles", chapterDescription: "Apprendre à mieux s’alimenter et à comprendre l’impact de l’alimentation sur la santé." },
            { chapterId: 58, chapterName: "Compétences créatives", chapterDescription: "Développer sa créativité à travers des activités d’expression artistique ou artisanale." },
            { chapterId: 59, chapterName: "Soins médicaux", chapterDescription: "Ce chapitre aborde les soins de santé spécialisés et l'accompagnement médical adapté." },
            { chapterId: 60, chapterName: "Art", chapterDescription: "L’art est un moyen puissant d’expression et de bien-être. Ce chapitre regroupe les pratiques artistiques accessibles." },
            { chapterId: 61, chapterName: "Discussions", chapterDescription: "Un espace pour favoriser les échanges, l’écoute et la réflexion collective." },
            { chapterId: 62, chapterName: "Créativité", chapterDescription: "Ce chapitre encourage toutes les formes d’expression créative et imaginative." },
            { chapterId: 63, chapterName: "Inclusion", chapterDescription: "Favoriser l’inclusion sociale et lutter contre les discriminations sont au cœur de ce chapitre." },
            { chapterId: 64, chapterName: "Soutien aux personnes âgées", chapterDescription: "Ce chapitre est consacré aux actions spécifiques visant à accompagner les personnes âgées dans leur quotidien, santé, autonomie et bien-être global." }
        ],
        skipDuplicates: true
    });
}
seedCategoryChapters()
    .then(() => {
    console.log('✅ Chapitres seedés');
})
    .catch((err) => {
    console.error('❌ Erreur lors du seed des category chapters', err);
})
    .finally(async () => {
    await prisma.$disconnect();
});

import { PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

export async function seedForumData() {
  console.log("🌱 Starting forum topics and messages seeding...");

  // Get all users to use as authors
  const users = await prisma.user.findMany({
    select: { id: true, firstName: true, lastName: true },
  });

  if (users.length === 0) {
    console.log("⚠️  No users found. Please seed users first.");
    return;
  }

  console.log(`✅ Found ${users.length} users for forum seeding`);

  // Get all forum categories
  const categories = await prisma.category.findMany({
    where: {
      typeId: 4, // FORUM type
    },
    select: { id: true, categoryName: true },
  });

  if (categories.length === 0) {
    console.log("⚠️  No forum categories found. Please seed categories first.");
    return;
  }

  console.log(`✅ Found ${categories.length} forum categories`);

  // Helper function to get random user
  const getRandomUser = () => users[Math.floor(Math.random() * users.length)];

  // Helper function to get random category
  const getRandomCategory = () =>
    categories[Math.floor(Math.random() * categories.length)];

  // Helper function to get random past date within last 6 months
  const getRandomPastDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
    return date;
  };

  // Forum topics data with realistic French content
  const topicsData = [
    {
      title: "Comment rester actif après 65 ans ?",
      pinned: true,
      status: "open",
      messages: [
        {
          content:
            "Bonjour à tous ! Je cherche des conseils pour maintenir une activité physique régulière maintenant que je suis à la retraite. Quelles activités me recommandez-vous ?",
          solutionMessage: false,
        },
        {
          content:
            "Personnellement, je fais de la marche nordique 3 fois par semaine. C'est excellent pour le cardio et les articulations ! Je recommande vivement.",
          solutionMessage: false,
        },
        {
          content:
            "La natation est aussi très bonne. J'y vais tous les mardis et jeudis matin. L'eau soutient le corps et c'est moins traumatisant pour les genoux.",
          solutionMessage: false,
        },
        {
          content:
            "Pour ma part, j'ai découvert le yoga doux pour seniors. Cela m'aide beaucoup avec ma souplesse et mon équilibre. Je me sens beaucoup mieux depuis que j'ai commencé.",
          solutionMessage: true,
        },
        {
          content:
            "Merci pour tous ces conseils ! Je vais essayer la marche nordique et le yoga. Avez-vous des associations à recommander dans la région parisienne ?",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Meilleurs exercices de mémoire au quotidien",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Quels exercices faites-vous pour entretenir votre mémoire ? J'ai l'impression d'oublier de plus en plus de choses...",
          solutionMessage: false,
        },
        {
          content:
            "Je fais des mots croisés tous les matins avec mon café. Ça me permet de rester alerte et c'est devenu un rituel agréable.",
          solutionMessage: false,
        },
        {
          content:
            "Les applications comme Lumosity ou Peak sont excellentes. J'y passe 15 minutes par jour et je vois vraiment une différence.",
          solutionMessage: false,
        },
        {
          content:
            "Apprendre une nouvelle langue est le meilleur exercice ! Je me suis mis à l'italien il y a 6 mois et ma mémoire s'est nettement améliorée.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Organisation d'une sortie culturelle collective",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Bonjour ! J'aimerais organiser une sortie au musée pour un groupe de 10-15 personnes. Des conseils pour bien s'organiser ?",
          solutionMessage: false,
        },
        {
          content:
            "Pensez à réserver à l'avance, surtout pour les grands musées. Certains ont des tarifs de groupe intéressants. Le Louvre propose des visites guidées pour seniors.",
          solutionMessage: false,
        },
        {
          content:
            "N'oubliez pas de vérifier l'accessibilité si certains participants ont des difficultés de mobilité. Tous les musées ne sont pas équipés.",
          solutionMessage: true,
        },
        {
          content:
            "Excellente idée ! Je serais intéressée pour participer. Tenez-nous au courant des dates proposées.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Partage de recettes saines et économiques",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'ouvre ce sujet pour qu'on puisse partager nos meilleures recettes à la fois bonnes pour la santé et pour le portefeuille !",
          solutionMessage: false,
        },
        {
          content:
            "Ma recette préférée : soupe de lentilles corail avec carottes et cumin. 2€ pour 4 portions, délicieux et plein de protéines !",
          solutionMessage: false,
        },
        {
          content:
            "Le curry de pois chiches aux épinards est excellent aussi. Très économique et on peut le congeler en portions.",
          solutionMessage: false,
        },
        {
          content:
            "Pour le petit-déjeuner, je fais mon propre granola maison. C'est 3 fois moins cher que celui du commerce et beaucoup meilleur pour la santé !",
          solutionMessage: false,
        },
        {
          content:
            "Merci pour ces idées ! Est-ce que quelqu'un aurait une recette de pain maison facile ?",
          solutionMessage: false,
        },
        {
          content:
            "Oui ! Pain sans pétrissage : mélangez 500g de farine, 1 sachet de levure, 1 c.à.c de sel et 400ml d'eau tiède. Laissez reposer 12h, façonnez et enfournez. Simple et économique !",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Jardinage urbain : vos astuces pour petit balcon",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'ai un petit balcon de 4m² et j'aimerais y faire pousser quelques légumes. Par où commencer ?",
          solutionMessage: false,
        },
        {
          content:
            "Les tomates cerises en pot marchent très bien ! Choisissez des variétés compactes comme 'Tiny Tim'.",
          solutionMessage: false,
        },
        {
          content:
            "Les herbes aromatiques sont parfaites pour débuter : basilic, persil, ciboulette. Elles ne prennent pas beaucoup de place.",
          solutionMessage: false,
        },
        {
          content:
            "Pensez à installer un système de culture verticale pour optimiser l'espace. On trouve des tours de plantation pas chères en jardinerie.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Gestion du stress et de l'anxiété - vos techniques",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Depuis ma retraite, je ressens beaucoup plus d'anxiété qu'avant. Comment gérez-vous le stress au quotidien ?",
          solutionMessage: false,
        },
        {
          content:
            "La respiration profonde m'aide énormément. Je pratique la cohérence cardiaque 3 fois par jour (respirer 6 fois par minute pendant 5 minutes).",
          solutionMessage: false,
        },
        {
          content:
            "La méditation de pleine conscience a changé ma vie. J'utilise l'application Petit Bambou depuis 1 an.",
          solutionMessage: true,
        },
        {
          content:
            "Marcher dans la nature me fait beaucoup de bien aussi. Je vais au parc tous les matins.",
          solutionMessage: false,
        },
        {
          content:
            "N'hésitez pas à consulter un professionnel si l'anxiété persiste. Un psychologue peut vraiment aider.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Applications utiles pour seniors - recommandations",
      pinned: true,
      status: "open",
      messages: [
        {
          content:
            "Quelles applications mobiles trouvez-vous vraiment utiles au quotidien ? Je viens d'avoir un smartphone et je suis un peu perdu...",
          solutionMessage: false,
        },
        {
          content:
            "Google Maps est indispensable pour se déplacer ! Et WhatsApp pour garder contact avec la famille.",
          solutionMessage: false,
        },
        {
          content:
            "MediSafe pour gérer mes médicaments, c'est très pratique avec les rappels.",
          solutionMessage: false,
        },
        {
          content:
            "Pour la santé : Doctolib pour prendre RDV, et MyTherapy pour suivre les traitements. Pour le cerveau : Peak ou Lumosity. Pour la détente : Calm ou Petit Bambou.",
          solutionMessage: true,
        },
        {
          content:
            "Merci ! Je vais essayer MyTherapy, j'oublie souvent mes médicaments.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Aide pour comprendre ma facture d'électricité",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Ma facture a doublé ce mois-ci et je ne comprends pas pourquoi. Quelqu'un peut m'aider à décrypter tout ça ?",
          solutionMessage: false,
        },
        {
          content:
            "As-tu vérifié tes relevés de compteur ? Parfois il y a des estimations qui sont corrigées ensuite.",
          solutionMessage: false,
        },
        {
          content:
            "Les tarifs ont augmenté récemment aussi. Regarde la partie 'prix du kWh' sur ta facture.",
          solutionMessage: false,
        },
        {
          content:
            "Je te conseille d'appeler le service client avec ta facture sous les yeux. Ils peuvent t'expliquer ligne par ligne. Tu peux aussi demander un échéancier si c'est difficile à payer.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Bénévolat : vos expériences et associations",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Je cherche à m'investir dans du bénévolat. Quelles sont vos expériences ? Quelles associations recommandez-vous ?",
          solutionMessage: false,
        },
        {
          content:
            "Je fais du bénévolat aux Restos du Cœur depuis 3 ans. C'est très enrichissant humainement.",
          solutionMessage: false,
        },
        {
          content:
            "La Croix-Rouge a toujours besoin de bénévoles. Ils offrent aussi des formations gratuites.",
          solutionMessage: false,
        },
        {
          content:
            "Selon tes centres d'intérêt : associations caritatives (Secours Populaire, Emmaus), culturelles (médiathèques), environnementales (nettoyage de plages), ou aide scolaire (accompagnement aux devoirs). Le site www.jeveuxaider.gouv.fr liste toutes les missions près de chez toi.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Problèmes de sommeil - conseils et solutions",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Je dors très mal depuis plusieurs mois. Je me réveille plusieurs fois par nuit. Des conseils ?",
          solutionMessage: false,
        },
        {
          content:
            "Évite les écrans 2h avant le coucher, ça aide vraiment. La lumière bleue perturbe la mélatonine.",
          solutionMessage: false,
        },
        {
          content:
            "Une tisane de camomille ou de tilleul le soir peut aider à se détendre.",
          solutionMessage: false,
        },
        {
          content:
            "J'ai eu le même problème. Ce qui m'a aidé : horaires réguliers de coucher/lever, chambre fraîche (18°C), pas de sieste après 15h, activité physique en journée mais pas le soir, et éviter café/alcool. Si ça persiste, consulte ton médecin pour éliminer l'apnée du sommeil.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Transports en commun : carte senior, bons plans",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Quels sont les avantages des cartes senior dans les transports ? Est-ce vraiment rentable ?",
          solutionMessage: false,
        },
        {
          content:
            "À Paris, la carte Navigo Senior donne 50% de réduction et elle est gratuite si tu as plus de 65 ans !",
          solutionMessage: false,
        },
        {
          content:
            "Pour la SNCF, la carte Avantage Senior coûte 49€/an mais tu as 30% de réduction sur tous les trains. Rentable dès 3-4 voyages.",
          solutionMessage: true,
        },
        {
          content:
            "Dans ma région, on a aussi des bus gratuits pour les plus de 60 ans. Renseigne-toi auprès de ta mairie.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Clubs de lecture pour seniors - création et organisation",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'aimerais créer un club de lecture dans mon quartier. Des conseils pour bien démarrer ?",
          solutionMessage: false,
        },
        {
          content:
            "Commence petit avec 5-6 personnes. Une réunion par mois suffit au début.",
          solutionMessage: false,
        },
        {
          content:
            "Choisissez ensemble le premier livre. Important que tout le monde participe au choix !",
          solutionMessage: false,
        },
        {
          content:
            "Voici ma méthode testée : fixez un jour fixe (ex: 1er jeudi du mois), alternez les genres littéraires, prévoyez 1h30 de discussion, et pourquoi pas un goûter partagé. La bibliothèque municipale peut vous accueillir gratuitement et propose souvent des lots de livres.",
          solutionMessage: true,
        },
        {
          content:
            "Super idée ! Je serais intéressée pour rejoindre si c'est dans le 13ème.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Douleurs articulaires : vos remèdes naturels",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'ai des douleurs aux genoux et aux mains. Quels remèdes naturels avez-vous essayé ?",
          solutionMessage: false,
        },
        {
          content:
            "Le curcuma en gélules m'a bien aidé. Anti-inflammatoire naturel.",
          solutionMessage: false,
        },
        {
          content:
            "Les compresses chaudes soulagent bien. J'utilise aussi une bouillotte.",
          solutionMessage: false,
        },
        {
          content:
            "ATTENTION : consulte d'abord un médecin pour le diagnostic. Ensuite, ce qui aide : curcuma + poivre noir (biodisponibilité), oméga-3 (huile de poisson), glucosamine/chondroïtine, exercices doux (natation, vélo), maintenir un poids santé. Évite l'auto-médication.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Apprendre l'informatique après 60 ans - vos parcours",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Je veux apprendre à utiliser un ordinateur mais je ne sais pas par où commencer. C'est possible à 67 ans ?",
          solutionMessage: false,
        },
        {
          content:
            "Bien sûr que c'est possible ! J'ai commencé à 70 ans. Cherche des ateliers dans ta médiathèque.",
          solutionMessage: false,
        },
        {
          content:
            "Les CCAS (Centre Communal d'Action Sociale) proposent souvent des formations gratuites pour seniors.",
          solutionMessage: false,
        },
        {
          content:
            "Commence par les bases : allumer/éteindre, souris/clavier, internet/email. Ressources : ateliers municipaux (gratuits), associations comme 'Emmaüs Connect', vidéos YouTube 'Le petit CoMiX', site 'Xyoos' (cours en ligne gratuits). Important : vas-y à ton rythme, note tout, et n'aie pas peur de faire des erreurs !",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Voyage en groupe pour seniors - destinations recommandées",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "On aimerait organiser un voyage en groupe (8 personnes, 65-75 ans). Destinations sympas et accessibles en Europe ?",
          solutionMessage: false,
        },
        {
          content:
            "Le Portugal est magnifique et très abordable. Lisbonne et Porto sont bien accessibles.",
          solutionMessage: false,
        },
        {
          content:
            "La Toscane en Italie ! Paysages superbes, bonne cuisine, et pas trop fatigant.",
          solutionMessage: false,
        },
        {
          content:
            "Top destinations seniors : Portugal (doux, pas cher), Andalousie (culture, soleil), Provence (proche, accessible), croisière sur le Danube (tout inclus, reposant). Agences spécialisées : Voyageurs du Monde Senior, Club Med Senior, ou groupe local avec guide. Prévoyez assurance annulation et vérifiez accessibilité des hébergements.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Prévention des chutes à domicile",
      pinned: true,
      status: "open",
      messages: [
        {
          content:
            "Suite à une mauvaise chute, je voudrais sécuriser mon appartement. Quels aménagements sont prioritaires ?",
          solutionMessage: false,
        },
        {
          content:
            "Enlève tous les tapis qui glissent ! C'est la cause principale de chutes.",
          solutionMessage: false,
        },
        {
          content:
            "Fais installer des barres d'appui dans la douche et près des toilettes.",
          solutionMessage: false,
        },
        {
          content:
            "Checklist sécurité : 1) Éclairage suffisant partout + veilleuses nocturnes, 2) Barres d'appui salle de bain, 3) Tapis antidérapants ou les supprimer, 4) Fils électriques rangés, 5) Hauteur WC adaptée, 6) Téléphone accessible. L'ergothérapeute peut faire un bilan gratuit à domicile (prescription médecin). Aides financières possibles via CARSAT.",
          solutionMessage: true,
        },
        {
          content:
            "Merci ! Je ne savais pas pour l'ergothérapeute. Je vais demander à mon médecin.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Activités créatives : peinture, poterie, couture...",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Je voudrais me mettre à une activité créative. Vous pratiquez quoi comme loisirs créatifs ?",
          solutionMessage: false,
        },
        {
          content:
            "La peinture aquarelle ! C'est relaxant et on peut commencer avec peu de matériel.",
          solutionMessage: false,
        },
        {
          content:
            "Je fais de la couture. J'ai appris via YouTube, c'est gratuit et il y a plein de tutos.",
          solutionMessage: false,
        },
        {
          content: "La poterie à l'atelier municipal. Très créatif et social !",
          solutionMessage: false,
        },
        {
          content:
            "Pour débuter : aquarelle (pas cher, zen), tricot/crochet (utile, social), scrapbooking (souvenirs), modelage argile (sensoriel). Où ? MJC, associations, ateliers municipaux (tarifs réduits seniors), cours en ligne (Skilleos Senior). Bienfaits : créativité, motricité fine, lien social.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Maintien du lien avec les petits-enfants à distance",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Mes petits-enfants habitent loin. Comment gardez-vous le contact avec les vôtres entre les visites ?",
          solutionMessage: false,
        },
        {
          content:
            "WhatsApp vidéo tous les dimanches. Ils adorent me montrer leurs dessins.",
          solutionMessage: false,
        },
        {
          content:
            "J'envoie des cartes postales et des lettres. À l'ère du numérique, ils trouvent ça spécial !",
          solutionMessage: false,
        },
        {
          content:
            "Idées testées : 1) Visio régulière (Skype, WhatsApp, FaceTime), 2) Jeux en ligne ensemble (mots fléchés, échecs), 3) Lecture d'histoires en visio, 4) Courrier traditionnel (lettres, photos, petits cadeaux), 5) Album photo partagé (Google Photos), 6) Projet commun (herbier, collection). L'important : régularité + adapter selon leur âge.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Réduction des déchets - vos astuces zéro déchet",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "Je voudrais réduire mes déchets au quotidien. Par quoi commencer ?",
          solutionMessage: false,
        },
        {
          content:
            "Utilise des sacs réutilisables pour les courses. Simple mais efficace !",
          solutionMessage: false,
        },
        {
          content:
            "Achète en vrac quand c'est possible. Céréales, pâtes, fruits secs...",
          solutionMessage: false,
        },
        {
          content:
            "Je composte mes épluchures, ça réduit beaucoup le volume de poubelle.",
          solutionMessage: false,
        },
        {
          content:
            "Plan d'action progressif : Semaine 1 - Sacs réutilisables, gourde. Semaine 2 - Refuser publicités, acheter vrac. Semaine 3 - Compost, bocaux verre. Semaine 4 - Produits ménagers maison (vinaigre blanc). Kits débutant : sacs tissus, bee-wrap, savon solide, brosse à dents bambou. Sites utiles : 'Famille Zéro Déchet'.",
          solutionMessage: true,
        },
      ],
    },
    {
      title: "Gestion de la solitude après le veuvage",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'ai perdu mon mari il y a 6 mois et je me sens très seule. Comment avez-vous surmonté cette épreuve ?",
          solutionMessage: false,
        },
        {
          content:
            "Toutes mes condoléances. Rejoindre des groupes de parole m'a beaucoup aidée.",
          solutionMessage: false,
        },
        {
          content:
            "Garde un rythme : sors tous les jours, même juste pour une promenade.",
          solutionMessage: false,
        },
        {
          content:
            "Je suis passée par là. Ce qui aide : 1) Groupe de parole deuil (hôpitaux, assos), 2) Maintenir routine quotidienne, 3) Accepter et exprimer émotions, 4) Activités sociales douces (club, bénévolat), 5) Psychologue si besoin. Numéros utiles : SOS Amitié (09 72 39 40 50), Croix-Rouge Écoute (0 800 858 858). Le temps aide mais n'hésite pas à demander soutien professionnel.",
          solutionMessage: true,
        },
        {
          content: "Merci pour ces ressources. Je vais appeler SOS Amitié.",
          solutionMessage: false,
        },
      ],
    },
    {
      title: "Petits travaux à domicile : qui solliciter ?",
      pinned: false,
      status: "open",
      messages: [
        {
          content:
            "J'ai besoin de faire quelques petits travaux (changer ampoules en hauteur, fixer étagère...). Vers qui me tourner ?",
          solutionMessage: false,
        },
        {
          content:
            "Les services d'aide à domicile proposent souvent ce type de prestations.",
          solutionMessage: false,
        },
        {
          content:
            "Regarde aussi les plateformes comme 'Frizbiz' ou 'AlloVoisins' pour trouver quelqu'un près de chez toi.",
          solutionMessage: false,
        },
        {
          content:
            "Solutions selon budget : 1) Gratuit/faible coût - voisins, famille, SEL (Système d'Échange Local), associations solidaires, 2) Payant - 'Bien chez moi' (Petits Frères des Pauvres), services aide à domicile (crédit d'impôt 50%), artisans locaux, plateformes (vérifier avis). CCAS peut orienter vers aides financières si revenus modestes.",
          solutionMessage: true,
        },
      ],
    },
  ];

  // Create topics and messages
  let topicCount = 0;
  let messageCount = 0;

  for (const topicData of topicsData) {
    try {
      const author = getRandomUser();
      const category = getRandomCategory();
      const createdDate = getRandomPastDate(180); // Up to 6 months ago

      // Create topic
      const topic = await prisma.forumTopic.create({
        data: {
          categoryId: category.id,
          authorId: author.id,
          title: topicData.title,
          pinned: topicData.pinned,
          status: topicData.status,
          views: Math.floor(Math.random() * 500) + 50,
          createdAt: createdDate,
          updatedAt: new Date(),
        },
      });

      topicCount++;
      console.log(`✅ Topic created: "${topic.title}"`);

      // Create messages for this topic
      for (let i = 0; i < topicData.messages.length; i++) {
        const messageData = topicData.messages[i];
        const messageAuthor = i === 0 ? author : getRandomUser(); // First message by topic author
        const messageDate = new Date(createdDate);
        messageDate.setHours(messageDate.getHours() + i * 4); // Messages spread over time

        await prisma.forumMessage.create({
          data: {
            topicId: topic.id,
            authorId: messageAuthor.id,
            content: messageData.content,
            solutionMessage: messageData.solutionMessage,
            createdAt: messageDate,
            updatedAt: messageDate,
          },
        });

        messageCount++;
      }

      console.log(
        `  ✅ Created ${topicData.messages.length} messages for this topic`
      );
    } catch (error) {
      console.error(`❌ Error creating topic "${topicData.title}":`, error);
    }
  }

  // Additional random topics for more diversity
  const additionalTopicsTitles = [
    "Partage de photos de voyages",
    "Meilleurs films classiques à revoir",
    "Recettes de grand-mère à transmettre",
    "Aide pour déclaration d'impôts en ligne",
    "Groupes de marche dans votre ville",
    "Cours de langue pour débutants",
    "Astuces pour économiser sur les courses",
    "Clubs d'échecs ou de bridge",
    "Vélo électrique : vos retours d'expérience",
    "Associations culturelles locales",
    "Ateliers mémoire : témoignages",
    "Prévention canicule en été",
    "Animations en maison de quartier",
    "Chant choral pour seniors",
    "Échanges de services entre voisins",
    "Initiation aux réseaux sociaux",
    "Randonnées adaptées en groupe",
    "Cours de danse de salon",
    "Aide pour choisir une tablette",
    "Bibliothèques et services pour seniors",
    "Gymnastique douce en vidéo",
    "Partage de podcasts intéressants",
    "Lutte contre l'isolement social",
    "Cafés séniors dans votre région",
    "Conseils pour économiser l'énergie",
    "Ateliers cuisine collective",
    "Soins naturels pour la peau mature",
    "Organisation de lotos et belote",
    "Écriture de mémoires et autobiographie",
    "Promenades nature et découvertes",
  ];

  const genericMessages = [
    "Quelqu'un a-t-il des informations à ce sujet ?",
    "Je suis intéressé(e), merci de partager vos expériences.",
    "C'est une excellente initiative ! Comment y participer ?",
    "Je peux vous recommander quelques ressources si ça vous intéresse.",
    "Merci pour ce partage, c'est très utile.",
    "Pouvez-vous donner plus de détails ?",
    "Je participe régulièrement et je recommande vivement !",
    "Il y a aussi des alternatives intéressantes, je vous explique...",
    "Attention aux arnaques, assurez-vous que c'est fiable.",
    "Mon expérience personnelle a été très positive.",
  ];

  for (const title of additionalTopicsTitles) {
    try {
      const author = getRandomUser();
      const category = getRandomCategory();
      const createdDate = getRandomPastDate(180);
      const numMessages = Math.floor(Math.random() * 5) + 2; // 2-6 messages

      const topic = await prisma.forumTopic.create({
        data: {
          categoryId: category.id,
          authorId: author.id,
          title: title,
          pinned: Math.random() < 0.05, // 5% chance of being pinned
          status: "open",
          views: Math.floor(Math.random() * 300) + 10,
          createdAt: createdDate,
          updatedAt: new Date(),
        },
      });

      topicCount++;

      // Create messages
      for (let i = 0; i < numMessages; i++) {
        const messageAuthor = i === 0 ? author : getRandomUser();
        const messageDate = new Date(createdDate);
        messageDate.setHours(messageDate.getHours() + i * 6);

        const content =
          i === 0
            ? `Bonjour à tous, j'aimerais échanger avec vous sur ce sujet. ${
                genericMessages[
                  Math.floor(Math.random() * genericMessages.length)
                ]
              }`
            : genericMessages[
                Math.floor(Math.random() * genericMessages.length)
              ];

        await prisma.forumMessage.create({
          data: {
            topicId: topic.id,
            authorId: messageAuthor.id,
            content: content,
            solutionMessage: i === numMessages - 1 && Math.random() < 0.3, // 30% chance last message is solution
            createdAt: messageDate,
            updatedAt: messageDate,
          },
        });

        messageCount++;
      }
    } catch (error) {
      console.error(`❌ Error creating topic "${title}":`, error);
    }
  }

  console.log(`🎉 Forum seeding completed!`);
  console.log(`   ✅ ${topicCount} topics created`);
  console.log(`   ✅ ${messageCount} messages created`);
}

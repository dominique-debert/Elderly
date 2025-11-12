import { PrismaClient } from "../index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const authorId = "cmhvrbegp00000t6clypmvbvh";

  // Helper function to create dates in the past
  const daysAgo = (days: number, hoursOffset = 0) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    date.setHours(date.getHours() - hoursOffset);
    return date;
  };

  // Fetch all topics to get their IDs
  const topics = await prisma.forumTopic.findMany({
    orderBy: { createdAt: "asc" },
  });

  const messages: Array<{
    content: string;
    topicId: string;
    authorId: string;
    createdAt: Date;
    solutionMessage?: boolean;
  }> = [];

  // Helper to add messages for a topic
  const addMessages = (
    topicIndex: number,
    messageData: Array<{
      content: string;
      createdAt: Date;
      solutionMessage?: boolean;
    }>
  ) => {
    if (topics[topicIndex]) {
      messageData.forEach((msg) => {
        messages.push({
          ...msg,
          topicId: topics[topicIndex].id,
          authorId,
        });
      });
    }
  };

  // Messages for Topic 0: Règlement du forum
  addMessages(0, [
    {
      content: `# Règlement du Forum Communautaire

Bienvenue sur notre forum ! Pour garantir un espace convivial et respectueux, merci de suivre ces quelques règles :

## 1. Respect et courtoisie
- Soyez respectueux envers tous les membres
- Pas d'insultes, de propos discriminatoires ou de harcèlement
- Acceptez les opinions différentes avec bienveillance

## 2. Contenu approprié
- Pas de spam ou de publicité non autorisée
- Évitez le langage vulgaire
- Restez dans le sujet de chaque section

## 3. Vie privée
- Ne partagez pas d'informations personnelles sensibles
- Respectez la confidentialité des autres membres

## 4. Entraide
- Soyez patient avec les débutants
- Partagez vos connaissances généreusement
- Signalez les contenus inappropriés aux modérateurs

Merci de contribuer à une communauté agréable pour tous ! 🌟`,
      createdAt: daysAgo(90, 0),
    },
    {
      content:
        "Merci pour ces règles claires ! C'est rassurant d'avoir un cadre bien défini.",
      createdAt: daysAgo(89, 5),
    },
    {
      content:
        "Tout à fait d'accord, le respect avant tout. Belle initiative ! 👍",
      createdAt: daysAgo(88, 12),
    },
  ]);

  // Messages for Topic 1: Bienvenue sur notre nouveau forum
  addMessages(1, [
    {
      content: `🎉 Chers membres,

C'est avec une grande joie que nous vous accueillons sur notre tout nouveau forum communautaire !

Cet espace a été conçu pour vous permettre de :
- Échanger avec d'autres membres de la communauté
- Partager vos expériences et connaissances
- Trouver de l'aide et des conseils
- Créer des liens d'amitié

N'hésitez pas à vous présenter dans la section "Bienvenue & Présentations" et à explorer les différentes catégories.

Bonne navigation à tous !`,
      createdAt: daysAgo(85, 0),
    },
    {
      content:
        "Super initiative ! J'ai hâte de découvrir tout ça et de faire des rencontres.",
      createdAt: daysAgo(84, 8),
    },
  ]);

  // Messages for Topic 2: Mise à jour novembre 2025
  addMessages(2, [
    {
      content: `Bonjour à tous,

Nous avons effectué plusieurs améliorations ce mois-ci :
- Interface plus claire et accessible
- Fonction de recherche améliorée
- Notifications personnalisables
- Nouveau système de messagerie privée

N'hésitez pas à nous faire part de vos retours !`,
      createdAt: daysAgo(5, 0),
    },
    {
      content:
        "Les notifications fonctionnent beaucoup mieux maintenant, merci !",
      createdAt: daysAgo(4, 14),
    },
  ]);

  // Messages for Topic 3: Nouvelle venue du Var
  addMessages(3, [
    {
      content: `Bonjour à toutes et à tous !

Je m'appelle Marie, j'ai 68 ans et j'habite dans le Var depuis ma retraite. Ancienne institutrice, je suis maintenant passionnée par la lecture, la cuisine provençale et les balades en bord de mer.

Je cherche à rencontrer d'autres personnes de ma région et à échanger sur nos activités quotidiennes.

Au plaisir d'échanger avec vous ! ☀️`,
      createdAt: daysAgo(2, 0),
    },
    {
      content:
        "Bienvenue Marie ! Le Var est magnifique. Quelle chance d'habiter là-bas ! 🌴",
      createdAt: daysAgo(2, 3),
    },
    {
      content:
        "Bonjour et bienvenue ! Je suis aussi retraitée de l'enseignement. On pourra échanger nos expériences !",
      createdAt: daysAgo(2, 5),
    },
    {
      content:
        "Bienvenue parmi nous Marie ! N'hésite pas à partager tes recettes provençales dans la section Vie quotidienne 😊",
      createdAt: daysAgo(1, 20),
    },
  ]);

  // Messages for Topic 6: Recettes cuisine d'hiver
  addMessages(6, [
    {
      content: `L'hiver arrive ! Quelles sont vos meilleures recettes réconfortantes pour les journées froides ?

Je commence : ma soupe aux légumes d'hiver avec butternut, carottes, poireaux et pommes de terre. Un régal ! 🍲`,
      createdAt: daysAgo(15, 0),
    },
    {
      content: `Moi je fais un pot-au-feu traditionnel. Je le laisse mijoter toute la journée, la maison sent bon et ça me rappelle mon enfance chez mes grands-parents.`,
      createdAt: daysAgo(15, 6),
    },
    {
      content: `Ma spécialité : le gratin dauphinois ! Pommes de terre, crème, lait, ail et muscade. Au four pendant 1h à 180°. Parfait avec une salade verte.`,
      createdAt: daysAgo(14, 18),
    },
    {
      content: `Quelqu'un aurait une bonne recette de blanquette de veau ? J'aimerais la refaire mais j'ai oublié comment ma mère la préparait...`,
      createdAt: daysAgo(14, 12),
    },
    {
      content: `Pour la blanquette : veau, carottes, oignons, bouquet garni. Cuire 1h30. Faire une sauce avec le bouillon, jaune d'œuf et crème. C'est délicieux !`,
      createdAt: daysAgo(13, 22),
      solutionMessage: true,
    },
    {
      content: `Merci pour la recette ! Je vais essayer ce weekend 😊`,
      createdAt: daysAgo(13, 15),
    },
  ]);

  // Messages for Topic 10: Conseils pour mieux dormir
  addMessages(10, [
    {
      content: `Je dors de plus en plus mal ces derniers temps. Réveil fréquents, difficultés à m'endormir... Avez-vous des astuces qui fonctionnent pour vous ?`,
      createdAt: daysAgo(25, 0),
    },
    {
      content: `J'ai eu le même problème. Ce qui m'aide :
- Pas d'écran 1h avant le coucher
- Tisane de camomille ou tilleul
- Lecture de quelques pages
- Température fraîche dans la chambre (18-19°)`,
      createdAt: daysAgo(25, 4),
    },
    {
      content: `Moi je fais 30 minutes de marche tous les après-midis. Depuis, je dors beaucoup mieux ! L'activité physique c'est vraiment important.`,
      createdAt: daysAgo(24, 20),
    },
    {
      content: `La méditation avant de dormir m'aide énormément. Il y a des applications gratuites avec des exercices guidés de 10-15 minutes.`,
      createdAt: daysAgo(24, 15),
    },
    {
      content: `Évitez le café après 16h ! J'ai mis du temps à comprendre que c'était ça qui m'empêchait de dormir.`,
      createdAt: daysAgo(23, 18),
    },
    {
      content: `Merci à tous pour vos conseils ! Je vais essayer la marche et la tisane pour commencer 😊`,
      createdAt: daysAgo(23, 10),
    },
  ]);

  // Messages for Topic 11: Exercices doux mobilité
  addMessages(11, [
    {
      content: `Quels exercices faites-vous pour entretenir votre mobilité ? Mon médecin m'a conseillé de bouger plus mais sans forcer.`,
      createdAt: daysAgo(18, 0),
    },
    {
      content: `La gymnastique douce en groupe, 2 fois par semaine. C'est parfait et en plus l'ambiance est sympathique !`,
      createdAt: daysAgo(17, 22),
    },
    {
      content: `Moi je fais du yoga adapté. Il existe des cours spécialement pour seniors, c'est très progressif et sans danger.`,
      createdAt: daysAgo(17, 16),
    },
    {
      content: `La piscine ! Aquagym ou simple nage, l'eau porte le corps et on ne se fait pas mal aux articulations.`,
      createdAt: daysAgo(17, 10),
    },
  ]);

  // Messages for Topic 17: Comment installer WhatsApp
  addMessages(17, [
    {
      content: `Bonjour, mes petits-enfants me demandent d'installer WhatsApp pour qu'on puisse communiquer plus facilement. Quelqu'un peut m'expliquer comment faire sur tablette ? J'ai une Samsung.`,
      createdAt: daysAgo(35, 0),
    },
    {
      content: `C'est très simple ! Voici les étapes :

1. Ouvrez le Play Store (icône avec un triangle coloré)
2. Tapez "WhatsApp" dans la barre de recherche
3. Cliquez sur "Installer"
4. Une fois installé, ouvrez l'application
5. Entrez votre numéro de téléphone
6. Vous recevrez un code par SMS, entrez-le
7. C'est prêt !

N'hésitez pas si vous bloquez quelque part !`,
      createdAt: daysAgo(35, 3),
      solutionMessage: true,
    },
    {
      content: `Merci beaucoup ! J'ai réussi à l'installer. Par contre je ne vois pas mes contacts, c'est normal ?`,
      createdAt: daysAgo(34, 20),
    },
    {
      content: `Il faut autoriser WhatsApp à accéder à vos contacts. Une fenêtre a dû s'afficher au démarrage pour demander cette autorisation. Si vous avez cliqué sur "Refuser", allez dans Paramètres > Applications > WhatsApp > Autorisations et activez "Contacts".`,
      createdAt: daysAgo(34, 18),
    },
    {
      content: `Parfait, ça marche maintenant ! Merci pour votre aide précieuse 🙏`,
      createdAt: daysAgo(34, 15),
    },
  ]);

  // Messages for Topic 18: Ordinateur lent
  addMessages(18, [
    {
      content: `Mon ordinateur est devenu très lent depuis quelques semaines. Il met une éternité à démarrer et les programmes se figent souvent. Que puis-je faire ?`,
      createdAt: daysAgo(14, 0),
    },
    {
      content: `Quelques vérifications de base :
- Regardez si le disque dur n'est pas saturé (il faut garder au moins 10% d'espace libre)
- Vérifiez dans le gestionnaire de tâches quels programmes consomment beaucoup de mémoire
- Passez un antivirus au cas où`,
      createdAt: daysAgo(14, 5),
    },
    {
      content: `J'ai eu le même problème. Windows s'encombre avec le temps. J'ai fait un grand nettoyage :
- Désinstaller les programmes inutiles
- Vider la corbeille
- Utiliser l'outil de nettoyage de disque Windows
Ça a bien amélioré les choses !`,
      createdAt: daysAgo(13, 20),
    },
    {
      content: `Si votre ordinateur a plusieurs années, ajouter de la mémoire RAM peut vraiment aider. Un informaticien peut faire ça facilement.`,
      createdAt: daysAgo(13, 16),
    },
  ]);

  // Messages for Topic 21: Club de lecture
  addMessages(21, [
    {
      content: `Quel livre êtes-vous en train de lire ? Je viens de terminer "La tresse" de Laetitia Colombani, magnifique !`,
      createdAt: daysAgo(17, 0),
    },
    {
      content: `Je lis "Où on va papa ?" de Jean-Louis Fournier. C'est touchant et drôle à la fois.`,
      createdAt: daysAgo(16, 22),
    },
    {
      content: `Moi je relis les classiques. Actuellement "L'Étranger" de Camus. Ça prend une autre dimension avec l'âge.`,
      createdAt: daysAgo(16, 18),
    },
    {
      content: `Je découvre les polars nordiques. Je suis accro à la série Millénium !`,
      createdAt: daysAgo(16, 12),
    },
    {
      content: `Quelqu'un a lu "La vie devant soi" de Romain Gary ? On me l'a recommandé.`,
      createdAt: daysAgo(15, 20),
    },
    {
      content: `Oh oui, c'est un chef-d'œuvre ! L'histoire de Momo et Madame Rosa est bouleversante. Je le recommande vraiment.`,
      createdAt: daysAgo(15, 16),
    },
  ]);

  // Messages for Topic 24: Weekend Bretagne
  addMessages(24, [
    {
      content: `Nous prévoyons un weekend en Bretagne le mois prochain. Des recommandations de lieux à visiter ? Nous aimons les balades en bord de mer et les petits villages typiques.`,
      createdAt: daysAgo(21, 0),
    },
    {
      content: `La côte de Granit Rose est magnifique ! Perros-Guirec, Ploumanac'h... Des paysages à couper le souffle.`,
      createdAt: daysAgo(20, 20),
    },
    {
      content: `Ne manquez pas Dinan, une ville médiévale très bien préservée. Et Cancale pour les fruits de mer !`,
      createdAt: daysAgo(20, 16),
    },
    {
      content: `Le GR34 (sentier des douaniers) offre des balades accessibles avec des vues splendides. Vous pouvez en faire juste des petits bouts.`,
      createdAt: daysAgo(20, 10),
    },
    {
      content: `Merci pour toutes ces idées ! On va se faire un beau programme 🌊`,
      createdAt: daysAgo(19, 18),
    },
  ]);

  // Messages for Topic 28: Rester proche petits-enfants
  addMessages(28, [
    {
      content: `Mes petits-enfants habitent à 500 km. Comment garder le lien et rester présent dans leur quotidien malgré la distance ?`,
      createdAt: daysAgo(33, 0),
    },
    {
      content: `Les appels vidéo réguliers, c'est génial ! Tous les dimanches, on prend le petit-déjeuner "ensemble" en visio. Les enfants adorent.`,
      createdAt: daysAgo(32, 22),
    },
    {
      content: `J'envoie des lettres avec des petits dessins ou autocollants. Les enfants adorent recevoir du courrier, c'est devenu rare !`,
      createdAt: daysAgo(32, 18),
    },
    {
      content: `On a créé un rituel : je leur lis une histoire le mercredi soir en visio. Ils choisissent le livre et je le lis devant la caméra.`,
      createdAt: daysAgo(32, 12),
    },
    {
      content: `Pour leur anniversaire, j'envoie un colis surprise préparé avec amour. Pas besoin que ce soit cher, c'est l'attention qui compte.`,
      createdAt: daysAgo(31, 20),
    },
    {
      content: `Merci pour ces belles idées ! Je vais mettre tout ça en place 💕`,
      createdAt: daysAgo(31, 15),
    },
  ]);

  // Messages for Topic 33: APA démarches
  addMessages(33, [
    {
      content: `Guide pratique pour demander l'APA (Allocation Personnalisée d'Autonomie) :

📋 **Documents nécessaires :**
- Pièce d'identité
- Justificatif de domicile
- Dernier avis d'imposition
- RIB

📍 **Où faire la demande :**
- Conseil départemental de votre lieu de résidence
- CCAS (Centre Communal d'Action Sociale)
- Point d'information local dédié aux personnes âgées

⏱️ **Délais :**
- Visite d'évaluation à domicile sous 1 mois
- Décision dans les 2 mois suivant le dépôt du dossier

💡 **Conseils :**
- Ne pas hésiter à se faire aider pour remplir le dossier
- Bien préparer la visite d'évaluation
- Conserver tous les justificatifs

Des questions ? N'hésitez pas !`,
      createdAt: daysAgo(55, 0),
    },
    {
      content: `Merci pour ces informations très claires ! Est-ce que l'APA est cumulable avec d'autres aides ?`,
      createdAt: daysAgo(54, 20),
    },
    {
      content: `Oui, l'APA est cumulable avec la retraite, les allocations logement, et d'autres prestations sociales. Elle n'est pas soumise à récupération sur succession (sauf si vous êtes en établissement).`,
      createdAt: daysAgo(54, 16),
      solutionMessage: true,
    },
    {
      content: `La visite d'évaluation s'est bien passée pour moi. La personne était très à l'écoute et bienveillante.`,
      createdAt: daysAgo(53, 18),
    },
  ]);

  // Messages for Topic 47: Bonjour du jour (Café)
  addMessages(47, [
    {
      content: `☕ Bonjour à tous ! Comment démarrez-vous cette nouvelle journée ?

Ici dans le Sud-Ouest, le soleil brille, ça fait du bien ! J'ai prévu une petite balade au marché ce matin.

Et vous, quoi de prévu aujourd'hui ?`,
      createdAt: daysAgo(1, 0),
    },
    {
      content: `Bonjour ! Ici en Normandie il pleut 🌧️ mais c'est pas grave, j'ai prévu de faire de la pâtisserie avec mes petits-enfants qui viennent cet après-midi !`,
      createdAt: daysAgo(1, 2),
    },
    {
      content: `Bonjour à tous ! Journée tranquille pour moi : lecture, petit jardin et promenade du chien. La routine mais j'adore ça 😊`,
      createdAt: daysAgo(1, 4),
    },
    {
      content: `Hello ! J'ai mon cours de gym ce matin puis déjeuner avec des amies. Belle journée à tous !`,
      createdAt: daysAgo(1, 5),
    },
    {
      content: `Bonjour ! Ici à Paris le temps est gris mais l'ambiance est bonne. Petite visite au musée cet après-midi 🎨`,
      createdAt: daysAgo(1, 7),
    },
    {
      content: `Bonne journée à tous ! Moi c'est repos, j'ai eu une semaine chargée. Canapé, thé et série télé au programme 📺`,
      createdAt: daysAgo(1, 9),
    },
  ]);

  // Messages for Topic 48: Météo weekend
  addMessages(48, [
    {
      content: `Quel temps est annoncé chez vous ce weekend ? J'hésite à prévoir une sortie en extérieur...`,
      createdAt: daysAgo(3, 0),
    },
    {
      content: `En Bretagne on annonce de la pluie bien sûr 😅 Mais bon, on a l'habitude !`,
      createdAt: daysAgo(3, 4),
    },
    {
      content: `Dans le Sud beau soleil prévu ! 18-20 degrés, parfait pour une balade.`,
      createdAt: daysAgo(3, 6),
    },
    {
      content: `En Alsace il va faire frais, mais sec. Idéal pour une marche en forêt 🍂`,
      createdAt: daysAgo(2, 22),
    },
  ]);

  // Messages for Topic 50: Petites joies du quotidien
  addMessages(50, [
    {
      content: `Quelle est votre petite joie du jour ? Ces petits riens qui rendent la vie belle...

Pour moi ce matin : mon café au soleil sur la terrasse en écoutant les oiseaux 🐦`,
      createdAt: daysAgo(12, 0),
    },
    {
      content: `Mon petit-fils qui m'a appelée spontanément juste pour me dire bonjour. Ça m'a réchauffé le cœur 💕`,
      createdAt: daysAgo(12, 5),
    },
    {
      content: `Une voisine que je ne connaissais pas m'a proposé de m'aider à porter mes courses. Les gens sont bons !`,
      createdAt: daysAgo(11, 20),
    },
    {
      content: `J'ai réussi ma tarte aux pommes du premier coup ! Simple mais je suis fière 😊`,
      createdAt: daysAgo(11, 16),
    },
    {
      content: `La première fleur de mon orchidée qui s'ouvre après des mois d'attente 🌸`,
      createdAt: daysAgo(11, 10),
    },
    {
      content: `Ces partages font du bien. On oublie trop souvent d'apprécier ces petits moments...`,
      createdAt: daysAgo(10, 22),
    },
  ]);

  // Add more diverse messages for other topics
  addMessages(4, [
    {
      content: `Bonjour ! Je suis nouveau sur le forum. Je m'appelle Pierre, 72 ans, ancien ingénieur informatique. Je vis en Alsace et je suis passionné de randonnée et de photographie de nature. Ravi de vous rejoindre !`,
      createdAt: daysAgo(7, 0),
    },
    {
      content: `Bienvenue Pierre ! L'Alsace est magnifique pour la photo. Tu as un appareil ou tu utilises ton téléphone ?`,
      createdAt: daysAgo(7, 3),
    },
    {
      content: `Merci ! J'ai un reflex Canon mais j'utilise aussi mon smartphone pour les photos spontanées. Les nouveaux téléphones sont bluffants !`,
      createdAt: daysAgo(6, 20),
    },
  ]);

  addMessages(7, [
    {
      content: `Comment organisez-vous vos courses ? Moi je fais une liste précise et je vais au supermarché le mardi matin, c'est plus calme.`,
      createdAt: daysAgo(8, 0),
    },
    {
      content: `Je me fais livrer maintenant, c'est tellement pratique ! Plus besoin de porter les packs d'eau.`,
      createdAt: daysAgo(7, 22),
    },
    {
      content: `Moi je privilégie le marché pour les fruits et légumes. C'est frais et on discute avec les producteurs. Le supermarché juste pour le reste.`,
      createdAt: daysAgo(7, 18),
    },
  ]);

  addMessages(15, [
    {
      content: `Quelqu'un a des conseils pour réduire sa facture d'électricité ? La mienne a bien augmenté cet hiver...`,
      createdAt: daysAgo(45, 0),
    },
    {
      content: `Quelques astuces qui marchent :
- Baisser le chauffage d'1 degré (ça fait 7% d'économie)
- Dégivrer régulièrement le congélateur
- Éteindre complètement les appareils en veille
- Utiliser des multiprises avec interrupteur`,
      createdAt: daysAgo(44, 20),
      solutionMessage: true,
    },
    {
      content: `Les ampoules LED aussi ! Ça consomme vraiment beaucoup moins.`,
      createdAt: daysAgo(44, 16),
    },
  ]);

  await prisma.forumMessage.createMany({
    data: messages,
  });

  console.log(`✅ ${messages.length} forum messages successfully seeded!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

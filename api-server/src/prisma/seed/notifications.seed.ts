import { PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

export async function seedNotifications() {
  const userId = "cmgy0dgpm00000thdsaofguft";
  await prisma.notification.deleteMany();
  await prisma.notification.createMany({
    data: [
      {
        userId,
        type: "INFO",
        content: "Bienvenue sur Helpy !",
        read: false,
        actionLink: null,
      },
      {
        userId,
        type: "ALERT",
        content: "Nouvelle mise à jour disponible.",
        read: false,
        actionLink: "/updates",
      },
      {
        userId,
        type: "REMINDER",
        content: "N'oubliez pas de vérifier vos paramètres de notification.",
        read: true,
        actionLink: "/settings/notifications",
      },
      {
        userId,
        type: "INFO",
        content: "Vous avez atteint un nouveau niveau de contribution.",
        read: false,
        actionLink: "/profile/achievements",
      },
      {
        userId,
        type: "ALERT",
        content: "Une tâche urgente est en attente.",
        read: false,
        actionLink: "/tasks",
      },
      {
        userId,
        type: "REMINDER",
        content: "Rappel : votre abonnement expire bientôt.",
        read: true,
        actionLink: "/billing",
      },
      {
        userId,
        type: "INFO",
        content: "Une nouvelle fonctionnalité est disponible.",
        read: false,
        actionLink: "/features",
      },
      {
        userId,
        type: "ALERT",
        content: "Problème détecté sur votre compte.",
        read: false,
        actionLink: "/support",
      },
      {
        userId,
        type: "REMINDER",
        content: "Pensez à inviter vos amis pour gagner des points.",
        read: true,
        actionLink: "/referral",
      },
      {
        userId,
        type: "INFO",
        content: "Votre profil a été mis à jour avec succès.",
        read: true,
        actionLink: "/profile",
      },
      {
        userId,
        type: "ALERT",
        content: "Un administrateur vous a mentionné dans un commentaire.",
        read: false,
        actionLink: "/notifications/mentions",
      },
      {
        userId,
        type: "REMINDER",
        content: "Votre rapport hebdomadaire est prêt.",
        read: false,
        actionLink: "/reports/weekly",
      },
      {
        userId,
        type: "INFO",
        content: "Succès déverrouillé : 7 jours de connexion.",
        read: true,
        actionLink: "/profile/achievements",
      },
      {
        userId,
        type: "ALERT",
        content: "Activité inhabituelle détectée sur votre compte.",
        read: false,
        actionLink: "/security",
      },
      {
        userId,
        type: "REMINDER",
        content: "Nouveau sondage disponible : donnez votre avis.",
        read: true,
        actionLink: "/surveys",
      },
    ],
  });

  console.log("✅ 15 notifications seeded avec succès.");
}

seedNotifications()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

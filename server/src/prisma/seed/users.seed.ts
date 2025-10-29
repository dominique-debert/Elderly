import { PrismaClient } from "@/prisma";
import * as argon2 from "argon2";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Hash the common password
  const passwordHash = await argon2.hash("12345678");

  // Create avatars directory if it doesn't exist
  // avatars are stored in server/public/images/users relative to repo root
  const avatarsDir = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "images",
    "users"
  );
  if (!fs.existsSync(avatarsDir)) {
    fs.mkdirSync(avatarsDir, { recursive: true });
  }

  const users = [
    {
      email: "jean.dupont@gmail.com",
      firstName: "Jean",
      lastName: "Dupont",
      profession: "Infirmière",
      city: "Paris",
      postalCode: "75001",
      phone: "06 12 34 56 78",
      description: "Passionnée par les soins et l'aide aux personnes âgées.",
      latitude: "48.856614",
      longitude: "2.352222",
      birthDate: new Date("1963-03-15"),
      avatarSource: "/server/public/images/1.png",
    },
    {
      email: "sophie.fabre@gmail.com",
      firstName: "Sophie",
      lastName: "Fabre",
      profession: "Retraité",
      city: "Lyon",
      postalCode: "69001",
      phone: "06 23 45 67 89",
      description: "Ancien professeur, j'aime partager mes connaissances.",
      latitude: "45.764043",
      longitude: "4.835659",
      birthDate: new Date("1958-07-22"),
      avatarSource: "/server/public/images/users/2.png",
    },
    {
      email: "emilien.bernard@gmail.com",
      firstName: "Emilien",
      lastName: "Bernard",
      profession: "Bénévole",
      city: "Marseille",
      postalCode: "13001",
      phone: "06 34 56 78 90",
      description: "Active dans plusieurs associations locales.",
      latitude: "43.296482",
      longitude: "5.36978",
      birthDate: new Date("1961-11-08"),
      avatarSource: "/server/public/images/users/3.png",
    },
    {
      email: "veronica.dubois@gmail.com",
      firstName: "Veronica",
      lastName: "Dubois",
      profession: "Médecin",
      city: "Toulouse",
      postalCode: "31000",
      phone: "06 45 67 89 01",
      description: "Médecin généraliste depuis 30 ans.",
      latitude: "43.604652",
      longitude: "1.444209",
      birthDate: new Date("1964-02-14"),
      avatarSource: "/server/public/images/users/4.png",
    },
    {
      email: "eric.petit@gmail.com",
      firstName: "Eric",
      lastName: "Petit",
      profession: "Aide-soignante",
      city: "Nice",
      postalCode: "06000",
      phone: "06 56 78 90 12",
      description: "Dévouée aux soins à domicile.",
      latitude: "43.710173",
      longitude: "7.261953",
      birthDate: new Date("1965-05-30"),
      avatarSource: "/server/public/images/users/5.png",
    },
    {
      email: "eva.robert@gmail.com",
      firstName: "Eva",
      lastName: "Robert",
      profession: "Retraité",
      city: "Nantes",
      postalCode: "44000",
      phone: "06 67 89 01 23",
      description: "Amateur de jardinage et bricolage.",
      latitude: "47.218371",
      longitude: "-1.553621",
      birthDate: new Date("1960-09-12"),
      avatarSource: "/server/public/images/users/6.png",
    },
    {
      email: "christine.richard@gmail.com",
      firstName: "Christine",
      lastName: "Richard",
      profession: "Psychologue",
      city: "Strasbourg",
      postalCode: "67000",
      phone: "06 78 90 12 34",
      description: "Spécialisée en gérontologie.",
      latitude: "48.573405",
      longitude: "7.752111",
      birthDate: new Date("1962-12-25"),
      avatarSource: "/server/public/images/users/7.png",
    },
    {
      email: "joseph.simon@gmail.com",
      firstName: "Joseph",
      lastName: "Simon",
      profession: "Kinésithérapeute",
      city: "Bordeaux",
      postalCode: "33000",
      phone: "06 89 01 23 45",
      description: "Spécialiste en rééducation.",
      latitude: "44.837789",
      longitude: "-0.57918",
      birthDate: new Date("1959-04-18"),
      avatarSource: "/server/public/images/users/8.png",
    },
    {
      email: "thierry.moreau@gmail.com",
      firstName: "Thierry",
      lastName: "Moreau",
      profession: "Coach de vie",
      city: "Lille",
      postalCode: "59000",
      phone: "06 90 12 34 56",
      description: "Accompagnement vers le bien-être.",
      latitude: "50.62925",
      longitude: "3.057256",
      birthDate: new Date("1966-08-03"),
      avatarSource: "/server/public/images/users/9.png",
    },
    {
      email: "laurent.leroy@gmail.com",
      firstName: "Laurent",
      lastName: "Leroy",
      profession: "Animateur social",
      city: "Rennes",
      postalCode: "35000",
      phone: "06 01 23 45 67",
      description: "Organisation d'activités pour seniors.",
      latitude: "48.117266",
      longitude: "-1.677793",
      birthDate: new Date("1963-01-20"),
      avatarSource: "/server/public/images/users/10.png",
    },
    {
      email: "jacques.girard@gmail.com",
      firstName: "Jacques",
      lastName: "Girard",
      profession: "Nutritionniste",
      city: "Montpellier",
      postalCode: "34000",
      phone: "06 12 34 56 78",
      description: "Conseils en alimentation santé.",
      latitude: "43.610769",
      longitude: "3.876716",
      birthDate: new Date("1961-06-07"),
      avatarSource: "/server/public/images/users/11.png",
    },
    {
      email: "alain.roux@gmail.com",
      firstName: "Alain",
      lastName: "Roux",
      profession: "Coach sportif",
      city: "Grenoble",
      postalCode: "38000",
      phone: "06 23 45 67 89",
      description: "Activités physiques adaptées.",
      latitude: "45.188529",
      longitude: "5.724524",
      birthDate: new Date("1964-10-11"),
      avatarSource: "/server/public/images/users/12.png",
    },
    {
      email: "mamadou.nguer@gmail.com",
      firstName: "Mamadou",
      lastName: "N'Guer",
      profession: "Commerçante",
      city: "Dijon",
      postalCode: "21000",
      phone: "06 34 56 78 90",
      description: "Comportement inapproprié.",
      latitude: "47.322047",
      longitude: "5.04148",
      birthDate: new Date("1965-03-28"),
      avatarSource: "/server/public/images/users/13.png",
    },
    {
      email: "josie.gauthier@gmail.com",
      firstName: "Josie",
      lastName: "Gauthier",
      profession: "Informaticien",
      city: "Angers",
      postalCode: "49000",
      phone: "06 45 67 89 01",
      description: "Spam répété.",
      latitude: "47.478419",
      longitude: "-0.563166",
      birthDate: new Date("1962-11-15"),
      avatarSource: "/server/public/images/users/14.png",
    },
    {
      email: "monique.mercier@gmail.com",
      firstName: "Monique",
      lastName: "Mercier",
      profession: "Retraitée",
      city: "Tours",
      postalCode: "37000",
      phone: "06 56 78 90 12",
      description: "Messages non sollicités.",
      latitude: "47.394144",
      longitude: "0.68484",
      birthDate: new Date("1960-05-05"),
      avatarSource: "/server/public/images/users/15.png",
    },
  ];

  for (const userData of users) {
    try {
      // Copy avatar file if it exists
      let avatarFilename: string | null = null;

      if (userData.avatarSource) {
        // Normalize avatarSource: strip leading slashes and optional leading "server/" segment,
        // then resolve relative to server root (two levels up from this seed file)
        let relativeSource = userData.avatarSource.replace(/^\/+/, "");
        relativeSource = relativeSource.replace(/^server[\/\\]/, "");
        const sourceAvatarPath = path.join(
          __dirname,
          "..",
          "..",
          relativeSource
        );

        if (fs.existsSync(sourceAvatarPath)) {
          const ext = path.extname(userData.avatarSource);
          avatarFilename = `${userData.firstName.toLowerCase()}-${userData.lastName.toLowerCase()}${ext}`;
          const destAvatarPath = path.join(avatarsDir, avatarFilename);

          // Copy the file
          fs.copyFileSync(sourceAvatarPath, destAvatarPath);
          console.log(`✅ Avatar copied: ${avatarFilename}`);
        } else {
          console.log(`⚠️  Avatar not found: ${sourceAvatarPath}`);
        }
      }

      // Create user
      const user = await prisma.user.create({
        data: {
          email: userData.email,
          passwordHash: passwordHash,
          firstName: userData.firstName,
          lastName: userData.lastName,
          birthDate: userData.birthDate,
          profession: userData.profession,
          city: userData.city,
          postalCode: userData.postalCode,
          address: "", // Empty by default
          description: userData.description,
          phone: userData.phone,
          latitude: userData.latitude,
          longitude: userData.longitude,
          avatar: avatarFilename,
          registrationDate: new Date(),
          accountVerified: true, // Pre-verified for seeding
          helpPoints: 0,
          reducedMobility: false,
          activityLevel: "active",
          status: "active",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      console.log(
        `✅ User created: ${user.firstName} ${user.lastName} (${user.email})`
      );

      // Create user preferences
      await prisma.userPreferences.create({
        data: {
          userId: user.id,
          notificationMessages: true,
          notificationForum: true,
          notificationActivities: true,
          emailUpdates: true,
          smsUpdates: false,
          frequencyInstant: true,
          frequencyDaily: false,
          fontSize: "normal",
          highContrast: false,
          statusVisibilityEverybody: true,
          statusVisibilityFriends: true,
          statusVisibilityNoOne: false,
          messagesFromEverybody: true,
          messagesFromFriends: true,
          messagesFromNoOne: false,
          dataSharing: false,
        },
      });

      console.log(`✅ User preferences created for ${user.firstName}`);

      // Create user statistics
      await prisma.userStatistics.create({
        data: {
          userId: user.id,
          servicesProvided: 0,
          servicesReceived: 0,
          activitiesParticipated: 0,
          activitiesOrganized: 0,
          forumMessages: 0,
          totalHelpPoints: 0,
          networkSize: 0,
        },
      });

      console.log(`✅ User statistics created for ${user.firstName}`);

      // Create notification preferences
      await prisma.notificationPreferences.create({
        data: {
          userId: user.id,
          messageNotification: true,
          activityNotification: true,
          helpNotification: true,
          forumNotification: true,
          emailNotification: true,
          smsNotification: false,
          pushNotification: true,
          quietHoursStart: null,
          quietHoursEnd: null,
        },
      });

      console.log(`✅ Notification preferences created for ${user.firstName}`);
    } catch (error) {
      console.error(`❌ Error creating user ${userData.email}:`, error);
    }
  }

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

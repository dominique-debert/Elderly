// prisma/seed.ts
import { PrismaClient } from "../index.js";
import argon2 from "argon2";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash("12345678");

  // Create test users
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@helpy.dev" },
    update: {},
    create: {
      email: "admin@helpy.dev",
      passwordHash: password,
      firstName: "Admin",
      lastName: "Helpy",
      description: "Administrateur de la plateforme Helpy",
      latitude: "45.8782369390931",
      longitude: "4.275273449092379",
      isAdmin: true,
    },
  });

  const seniorUser1 = await prisma.user.upsert({
    where: { email: "marie@helpy.dev" },
    update: {},
    create: {
      email: "marie@helpy.dev",
      passwordHash: password,
      firstName: "Marie",
      lastName: "Dupont",
      description: "Amatrice de jardinage et de lecture",
      latitude: "45.764043",
      longitude: "4.835659",
      isAdmin: false,
    },
  });

  const seniorUser2 = await prisma.user.upsert({
    where: { email: "jean@helpy.dev" },
    update: {},
    create: {
      email: "jean@helpy.dev",
      passwordHash: password,
      firstName: "Jean",
      lastName: "Martin",
      description: "Passionné de technologie et d'aide mutuelle",
      latitude: "45.750000",
      longitude: "4.850000",
      isAdmin: false,
    },
  });

  const seniorUser3 = await prisma.user.upsert({
    where: { email: "sophie@helpy.dev" },
    update: {},
    create: {
      email: "sophie@helpy.dev",
      passwordHash: password,
      firstName: "Sophie",
      lastName: "Bernard",
      description: "Ancienne enseignante, aime partager ses connaissances",
      latitude: "45.770000",
      longitude: "4.840000",
      isAdmin: false,
    },
  });

  console.log("✅ Utilisateurs créés");

  console.log("\n📊 Résumé du seed:");
  console.log("- 4 utilisateurs créés (1 admin + 3 seniors)");
}

main()
  .catch((e) => {
    console.error("❌ Erreur pendant le seed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

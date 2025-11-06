// Seed file specifically for forum topics and messages
import dotenv from "dotenv";
import { PrismaClient } from "@/prisma";
import { seedForumData } from "./seed/forumData.seed";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting forum data seeding...");
  console.log(
    "⚠️  Make sure you have run the main seed first to create users and categories!"
  );
  console.log("");

  try {
    await seedForumData();
    console.log("");
    console.log("✅ Forum data seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during forum seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Fatal error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

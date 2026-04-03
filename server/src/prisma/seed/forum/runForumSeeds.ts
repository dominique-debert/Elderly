import { PrismaClient } from "../../index.js";
import dotenv from "dotenv";
import { execSync } from "child_process";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting forum seeding process...\n");

  try {
    // Step 0: Clear ALL existing forum data (messages, topics, sections)
    console.log("🧹 Clearing existing forum data...");
    console.log("   Deleting messages...");
    const deletedMessages = await prisma.forumMessage.deleteMany();
    console.log(`   ✓ Deleted ${deletedMessages.count} messages`);

    console.log("   Deleting topics...");
    const deletedTopics = await prisma.forumTopic.deleteMany();
    console.log(`   ✓ Deleted ${deletedTopics.count} topics`);

    console.log("   Deleting sections...");
    const deletedSections = await prisma.forumSection.deleteMany();
    console.log(`   ✓ Deleted ${deletedSections.count} sections`);
    console.log("✅ All existing forum data cleared!\n");

    // Step 1: Seed forum sections
    console.log("📁 Seeding forum sections...");
    execSync("node --import=tsx src/prisma/seed/forumSections.seed.ts", {
      stdio: "inherit",
    });

    // Step 2: Seed forum topics
    console.log("\n📝 Seeding forum topics...");
    execSync("node --import=tsx src/prisma/seed/forumTopics.seed.ts", {
      stdio: "inherit",
    });

    // Step 3: Seed forum messages
    console.log("\n💬 Seeding forum messages...");
    execSync("node --import=tsx src/prisma/seed/forumMessages.seed.ts", {
      stdio: "inherit",
    });

    console.log("\n✨ All forum data successfully seeded!");
    console.log("\n📊 Summary:");

    const sectionCount = await prisma.forumSection.count();
    const topicCount = await prisma.forumTopic.count();
    const messageCount = await prisma.forumMessage.count();

    console.log(`  - Forum Sections: ${sectionCount}`);
    console.log(`  - Forum Topics: ${topicCount}`);
    console.log(`  - Forum Messages: ${messageCount}`);
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

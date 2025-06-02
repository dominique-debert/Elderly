// prisma/seed.ts
import { PrismaClient } from './client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('12345678');

  const user = await prisma.user.upsert({
    where: { email: 'admin@helpy.dev' },
    update: {},
    create: {
      email: 'admin@helpy.dev',
      passwordHash: password,
      firstName: 'Admin',
      lastName: 'Helpy',
    },
  });

  console.log('✅ Utilisateur de test injecté :', user);
}

main()
  .catch((e) => {
    console.error('❌ Erreur pendant le seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

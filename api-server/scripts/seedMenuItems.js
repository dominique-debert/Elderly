// scripts/seedMenuItems.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const menuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'mdi:view-dashboard',
    order: 1,
    isActive: true,
    roles: ['admin', 'user'],
  },
  {
    label: 'Admin',
    path: '/admin',
    icon: 'mdi:shield-account',
    order: 2,
    isActive: true,
    roles: ['admin'],
    children: [
      {
        label: 'Users',
        path: '/admin/users',
        icon: 'mdi:account-group',
        order: 1,
        isActive: true,
        roles: ['admin'],
      },
      {
        label: 'Settings',
        path: '/admin/settings',
        icon: 'mdi:cog',
        order: 2,
        isActive: true,
        roles: ['admin'],
      },
    ],
  },
];

async function seedMenuItems() {
  console.log('🌱 Seeding menu items...');

  for (const item of menuItems) {
    const { children, ...menuItemData } = item;

    const createdItem = await prisma.menuItem.upsert({
      where: { path: menuItemData.path },
      update: menuItemData,
      create: menuItemData,
    });

    if (children && children.length > 0) {
      for (const child of children) {
        await prisma.menuItem.upsert({
          where: { path: child.path },
          update: { ...child, parentId: createdItem.id },
          create: { ...child, parentId: createdItem.id },
        });
      }
    }
  }

  console.log('✅ Menu items seeded successfully');
}

seedMenuItems()
  .catch((e) => {
    console.error('Error seeding menu items:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

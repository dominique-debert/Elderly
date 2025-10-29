import { PrismaClient } from '@/prisma/client';
const prisma = new PrismaClient();
const seedMenuItems = async () => {
    const items = [
        { label: 'Humeurs', icon: 'mdiHeartSettingsOutline', key: 'mood' },
        { label: 'Activités', icon: 'mdiRunFast', key: 'activity' },
        { label: 'Badges', icon: 'mdiBadgeAccountOutline', key: 'badge' },
        { label: 'Cognition', icon: 'mdiBrain', key: 'cognitive' },
        { label: 'Forum', icon: 'mdiForumOutline', key: 'forum' },
        { label: 'Aide', icon: 'mdiHelpCircleOutline', key: 'help' },
        { label: 'Nutrition', icon: 'mdiFoodAppleOutline', key: 'nutritional' },
        { label: 'Programmes', icon: 'mdiCalendarCheckOutline', key: 'program' },
        { label: 'Projets', icon: 'mdiLightbulbOnOutline', key: 'project' },
        { label: 'Ressources', icon: 'mdiBookOpenPageVariantOutline', key: 'resource' },
        { label: 'Services', icon: 'mdiHandHeartOutline', key: 'service' },
        { label: 'Compétences', icon: 'mdiAccountTieHatOutline', key: 'skill' },
        { label: 'Problème urbain', icon: 'mdiMapMarkerAlertOutline', key: 'urban_issue' },
        { label: 'Bien-être', icon: 'mdiSpaOutline', key: 'wellness' },
    ];
    try {
        await prisma.menuItem.deleteMany();
        await prisma.menuItem.createMany({
            data: items,
        });
        console.log('✅ Seed des items du menu terminé.');
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
    }
};
seedMenuItems();

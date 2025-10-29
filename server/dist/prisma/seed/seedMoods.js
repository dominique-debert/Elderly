import { PrismaClient } from '../client';
const prisma = new PrismaClient();
const moods = [
    { name: 'Heureux', valence: 'positive', intensity: 4, color: '#FFD700', description: 'Sentiment de joie et de satisfaction' }, // jaune or
    { name: 'Épanoui', valence: 'positive', intensity: 4, color: '#FFCC00', description: 'Sensation de plénitude et de bien-être' },
    { name: 'Serein', valence: 'positive', intensity: 3, color: '#A2D5F2', description: 'Calme intérieur et apaisement' },
    { name: 'Enthousiaste', valence: 'positive', intensity: 5, color: '#FF8C00', description: 'Élan de joie et d’énergie' },
    { name: 'Amoureux', valence: 'positive', intensity: 5, color: '#FF69B4', description: 'État émotionnel intense lié à l’amour' },
    { name: 'Reconnaissant', valence: 'positive', intensity: 3, color: '#90EE90', description: 'Sentiment de gratitude' },
    { name: 'Confiant', valence: 'positive', intensity: 4, color: '#4CAF50', description: 'Sensation de sécurité et d’assurance' },
    { name: 'Triste', valence: 'negative', intensity: 3, color: '#708090', description: 'Peine ou mélancolie' }, // gris bleuté
    { name: 'Déprimé', valence: 'negative', intensity: 5, color: '#2F4F4F', description: 'État de profonde tristesse' },
    { name: 'Anxieux', valence: 'negative', intensity: 4, color: '#B22222', description: 'Inquiétude ou stress' },
    { name: 'Stressé', valence: 'negative', intensity: 3, color: '#CD5C5C', description: 'Tension mentale ou physique' },
    { name: 'En colère', valence: 'negative', intensity: 5, color: '#DC143C', description: 'Forte irritation ou rage' }, // rouge vif
    { name: 'Irrité', valence: 'negative', intensity: 3, color: '#E57373', description: 'Agacement ou frustration' },
    { name: 'Fatigué', valence: 'negative', intensity: 3, color: '#A9A9A9', description: 'Manque d’énergie' },
    { name: 'Découragé', valence: 'negative', intensity: 4, color: '#808080', description: 'Perte de motivation' },
    { name: 'Pensif', valence: 'neutre', intensity: 2, color: '#D3D3D3', description: 'Absorbé par ses pensées' }, // gris clair
    { name: 'Curieux', valence: 'neutre', intensity: 3, color: '#ADD8E6', description: 'Désir d’apprendre ou de comprendre' }, // bleu clair
    { name: 'Rêveur', valence: 'neutre', intensity: 2, color: '#EEE8AA', description: 'Disposition à l’imagination' }, // beige pâle
    { name: 'Indifférent', valence: 'neutre', intensity: 2, color: '#C0C0C0', description: 'Manque d’intérêt ou de réaction' },
    { name: 'Apathique', valence: 'neutre', intensity: 3, color: '#B0B0B0', description: 'Absence de motivation ou d’émotion' },
    { name: 'Nostalgique', valence: 'neutre', intensity: 3, color: '#D8BFD8', description: 'Regret tendre du passé' }, // lilas
];
async function seedMoods() {
    await prisma.mood.deleteMany();
    await prisma.mood.createMany({ data: moods.map(mood => ({ ...mood, valence: mood.valence })) });
    console.log('✅ Seed des humeurs avec couleurs terminé.');
}
seedMoods()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => prisma.$disconnect());

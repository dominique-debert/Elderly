import { PrismaClient, Valence } from '../client';

const prisma = new PrismaClient();

const moods = [
  { nom: 'Heureux', valence: 'positive' as Valence, intensite: 4, description: 'Sentiment de joie et de satisfaction' },
  { nom: 'Épanoui', valence: 'positive' as Valence, intensite: 4, description: 'Sensation de plénitude et de bien-être' },
  { nom: 'Serein', valence: 'positive' as Valence, intensite: 3, description: 'Calme intérieur et apaisement' },
  { nom: 'Enthousiaste', valence: 'positive' as Valence, intensite: 5, description: 'Élan de joie et d’énergie' },
  { nom: 'Amoureux', valence: 'positive' as Valence, intensite: 5, description: 'État émotionnel intense lié à l’amour' },
  { nom: 'Reconnaissant', valence: 'positive' as Valence, intensite: 3, description: 'Sentiment de gratitude' },
  { nom: 'Confiant', valence: 'positive' as Valence, intensite: 4, description: 'Sensation de sécurité et d’assurance' },

  { nom: 'Triste', valence: 'negative' as Valence, intensite: 3, description: 'Peine ou mélancolie' },
  { nom: 'Déprimé', valence: 'negative' as Valence, intensite: 5, description: 'État de profonde tristesse' },
  { nom: 'Anxieux', valence: 'negative' as Valence, intensite: 4, description: 'Inquiétude ou stress' },
  { nom: 'Stressé', valence: 'negative' as Valence, intensite: 3, description: 'Tension mentale ou physique' },
  { nom: 'En colère', valence: 'negative' as Valence, intensite: 5, description: 'Forte irritation ou rage' },
  { nom: 'Irrité', valence: 'negative' as Valence, intensite: 3, description: 'Agacement ou frustration' },
  { nom: 'Fatigué', valence: 'negative' as Valence, intensite: 3, description: 'Manque d’énergie' },
  { nom: 'Découragé', valence: 'negative' as Valence, intensite: 4, description: 'Perte de motivation' },

  { nom: 'Pensif', valence: 'neutre' as Valence, intensite: 2, description: 'Absorbé par ses pensées' },
  { nom: 'Curieux', valence: 'neutre' as Valence, intensite: 3, description: 'Désir d’apprendre ou de comprendre' },
  { nom: 'Rêveur', valence: 'neutre' as Valence, intensite: 2, description: 'Disposition à l’imagination' },
  { nom: 'Indifférent', valence: 'neutre' as Valence, intensite: 2, description: 'Manque d’intérêt ou de réaction' },
  { nom: 'Apathique', valence: 'neutre' as Valence, intensite: 3, description: 'Absence de motivation ou d’émotion' },
  { nom: 'Nostalgique', valence: 'neutre' as Valence, intensite: 3, description: 'Regret tendre du passé' },
];

async function main() {
  await prisma.mood.deleteMany(); // clean slate
  await prisma.mood.createMany({ data: moods });
  console.log('✅ Seed des humeurs terminé.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

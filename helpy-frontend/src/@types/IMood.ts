enum EValence {
  Positive = 'Positive',
  Neutral = 'Neutral',
  Negative = 'Negative',
}

export interface IMood {
  id: number;
  name: string;
  description?: string;
  valence: EValence;
  intensity: number;
  color: string;
};
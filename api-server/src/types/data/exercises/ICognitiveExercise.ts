export interface ICognitiveExercise {
  name: string;
  categoryId: number;
  difficultyLevel: number;
  durationMinutes: number;
  description?: string;
  image?: string;
}

export default interface ICognitiveExercise {
  name: string;
  categoryId: string;
  difficultyLevel: number;
  durationMinutes: number;
  description?: string;
  image?: string;
}

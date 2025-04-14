export default interface ICognitiveExercise {
  name: string;
  category: string;
  difficulty_level: string;
  duration_minutes: number;
  description?: string;
  image?: string;
}

export default interface ICognitiveExercise {
  name: string;
  category_id: string;
  difficulty_level: number;
  duration_minutes: number;
  description?: string;
  image?: string;
}

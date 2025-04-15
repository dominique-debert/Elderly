export default interface IExerciseProgram {
  name: string;
  category_id: string;
  difficulty_level: number;
  adapted_for_reduced_mobility: boolean;
  duration_minutes: number;
  description?: string;
  video_link?: string;
  image?: string;
}

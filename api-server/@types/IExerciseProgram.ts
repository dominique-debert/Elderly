export default interface IExerciseProgram {
  name: string;
  category: string;
  difficulty_level: string;
  adapted_for_reduced_mobility: boolean;
  duration_minutes: number;
  description?: string;
  video_link?: string;
  image?: string;
}

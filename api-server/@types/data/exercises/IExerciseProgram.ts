export default interface IExerciseProgram {
  name: string;
  categoryId: string;
  difficultyLevel: number;
  adaptedForReducedMobility: boolean;
  durationMinutes: number;
  description?: string;
  videoLink?: string;
  image?: string;
}

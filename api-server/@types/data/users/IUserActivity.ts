export default interface IUserActivity {
  id?: string
  userId: string
  completionDate: Date
  exerciseProgramId?: string
  cognitiveExerciseId?: string
  durationMinutes?: number
  perceivedDifficultyLevel?: number
  enjoymentLevel?: number
  comment?: string
  createdAt?: Date
  updatedAt?: Date
}

// id                       String             @id @default(cuid())
// userId                   String             @map("user_id")
// completionDate           DateTime           @map("completion_date") @db.Date
// exerciseProgramId        String?            @map("exercise_program_id")
// cognitiveExerciseId      String?            @map("cognitive_exercise_id")
// durationMinutes          Int?               @map("duration_minutes")
// perceivedDifficultyLevel Int?               @map("perceived_difficulty_level")
// enjoymentLevel           Int?               @map("enjoyment_level")
// comment                  String?
// createdAt                DateTime           @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt                DateTime?          @map("updated_at") @db.Timestamp(6)
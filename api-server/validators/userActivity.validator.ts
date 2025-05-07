import Joi from "joi"

export const userActivitySchema = Joi.object({
  userId: Joi.string().required(),
  completionDate: Joi.date().required(),
  exerciseProgramId: Joi.string(),
  cognitiveExerciseId: Joi.string(),
  durationMinutes: Joi.number(),
  perceivedDifficultyLevel: Joi.number(),
  enjoymentLevel: Joi.number(),
  comment: Joi.string(),
})

export const idParamUserActivitySchema = Joi.object({
  id: Joi.string().required()
});

// userId                   String             @map("user_id")
// completionDate           DateTime           @map("completion_date") @db.Date
// exerciseProgramId        String?            @map("exercise_program_id")
// cognitiveExerciseId      String?            @map("cognitive_exercise_id")
// durationMinutes          Int?               @map("duration_minutes")
// perceivedDifficultyLevel Int?               @map("perceived_difficulty_level")
// enjoymentLevel           Int?               @map("enjoyment_level")
// comment                  String?

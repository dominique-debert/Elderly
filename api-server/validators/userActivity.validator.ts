import Joi from "joi";

export const userActivitySchema = Joi.object({
  userId: Joi.string().required(),
  completionDate: Joi.date().required(),
  exerciseProgramId: Joi.string(),
  cognitiveExerciseId: Joi.string(),
  durationMinutes: Joi.number(),
  perceivedDifficultyLevel: Joi.number(),
  enjoymentLevel: Joi.number(),
  comment: Joi.string(),
});

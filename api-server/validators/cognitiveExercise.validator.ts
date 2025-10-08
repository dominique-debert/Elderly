import Joi from "joi";

export const cognitiveExerciseSchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().allow(null, ""),
  difficultyLevel: Joi.string().required(),
  durationMinutes: Joi.number().integer().min(0).allow(null),
  description: Joi.string().allow("", null),
  image: Joi.string().allow("", null),
});

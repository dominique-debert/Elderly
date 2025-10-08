import Joi from "joi";

export const exerciseProgramSchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().allow(null, ""),
  difficultyLevel: Joi.number().allow(0),
  adaptedForReducedMobility: Joi.boolean().default(false),
  durationMinutes: Joi.boolean().allow(0),
  description: Joi.string().allow(null, ""),
  videoLink: Joi.string().allow(null, ""),
  image: Joi.string().allow(null, ""),
});

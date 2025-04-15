import Joi from 'joi';

export const cognitiveExerciseSchema = Joi.object({
  name: Joi.string().uuid().required(),
  category: Joi.string().required(),
  difficultyLevel: Joi.string().required(),
  durationMinutes: Joi.number().integer().min(0).allow(null),
  description: Joi.string().allow('', null),
  image: Joi.string().allow('', null)
});

export const idParamCognitiveExerciseSchema = Joi.object({
  id: Joi.string().uuid().required()
});

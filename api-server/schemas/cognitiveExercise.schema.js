import Joi from 'joi';

export const cognitiveExerciseSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  icon: Joi.string().allow(null, ''),
  category: Joi.string().allow(null, ''),
  level: Joi.number().integer().min(0).allow(null)
});

export const idParamCognitiveExerciseSchema = Joi.object({
  id: Joi.string().required()
});

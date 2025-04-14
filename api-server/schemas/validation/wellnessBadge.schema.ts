import Joi from 'joi';

export const wellnessBadgeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow('', null),
  category: Joi.string().required(),
  image: Joi.string().allow('', null),
  level: Joi.number().required().min(1).max(3),
});

export const idParamWellnessBadgeSchema = Joi.object({
  id: Joi.string().required()
});

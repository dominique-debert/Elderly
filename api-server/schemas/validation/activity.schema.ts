import Joi from 'joi';

export const activitySchema = Joi.object({
  creator_id: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  icon: Joi.string().allow(null, ''),
  category: Joi.string().allow(null, ''),
  level: Joi.number().integer().min(0).allow(null)
});

export const idParamActivitySchema = Joi.object({
  id: Joi.string().required()
});

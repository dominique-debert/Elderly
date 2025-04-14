import Joi from 'joi';

export const skillSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().allow('', null)
});

export const idParamSkillSchema = Joi.object({
  id: Joi.string().required()
});

import Joi from 'joi';

export const nutritionalAdviceSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('', null),
  category: Joi.string().required(),
  season: Joi.string().required(),
  image: Joi.string().allow('', null)
});

export const idParamNutritionalAdviceSchema = Joi.object({
  id: Joi.string().required()
});

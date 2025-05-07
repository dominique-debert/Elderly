import Joi from 'joi';

export const categorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  typeId: Joi.string().required()
});

export const idParamCategorySchema = Joi.object({
  id: Joi.string().required()
});

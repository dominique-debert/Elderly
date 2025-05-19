import Joi from 'joi';

export const categorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  typeId: Joi.string().required(),
  chapterId: Joi.number().required()
});

export const idParamCategorySchema = Joi.object({
  id: Joi.number().required()
});

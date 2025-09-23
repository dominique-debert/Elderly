import Joi from 'joi';

export const nutritionalAdviceSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('', null),
  categoryId: Joi.string().allow(null, ''),
  season: Joi.string().required(),
  image: Joi.string().allow('', null)
});

export const idParamNutritionalAdviceSchema = Joi.object({
  id: Joi.string().required()
});

// title               String               @db.Text
// description         String?
// categoryId          String?              @map("category_id")
// season              String               @db.Text
// image               String?              @db.Text
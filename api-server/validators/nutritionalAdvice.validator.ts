import Joi from "joi";

export const nutritionalAdviceSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("", null),
  categoryId: Joi.string().allow(null, ""),
  season: Joi.string().required(),
  image: Joi.string().allow("", null),
});

import Joi from "joi";

export const wellnessBadgeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow("", null),
  categoryId: Joi.string().allow(null, ""),
  image: Joi.string().allow("", null),
  level: Joi.number().required().min(1).max(3),
});

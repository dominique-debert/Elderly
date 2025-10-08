import Joi from "joi";

export const badgeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null, ""),
  icon: Joi.string().allow(null, ""),
  categoryId: Joi.string().allow(null, ""),
  level: Joi.number().integer().min(0).allow(null),
});

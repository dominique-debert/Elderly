import Joi from "joi";

export const forumCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(null, ""),
  parentCategoryId: Joi.string().allow(null, ""),
});

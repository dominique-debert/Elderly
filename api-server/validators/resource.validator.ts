import Joi from "joi";

export const resourceSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().allow("", null),
  type: Joi.string().required(),
  categoryId: Joi.string().allow("", null),
  authorId: Joi.string().required(),
  adminValidated: Joi.boolean().default(false),
});

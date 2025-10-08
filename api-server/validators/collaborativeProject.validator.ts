import Joi from "joi";

export const projectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("", null),
  creatorId: Joi.string().required(),
  creationDate: Joi.date().required(),
  categoryId: Joi.string().allow(null, ""),
  difficultyLevel: Joi.string().required(),
  status: Joi.string().allow("", null),
});

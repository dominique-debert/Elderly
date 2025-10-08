import Joi from "joi";

export const forumTopicSchema = Joi.object({
  categoryId: Joi.string().required(),
  authorId: Joi.string().required(),
  title: Joi.string().required(),
  pinned: Joi.boolean().default(false),
  status: Joi.string().allow(null, ""),
  views: Joi.number().default(0),
});

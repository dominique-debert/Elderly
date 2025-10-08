import Joi from "joi";

export const forumMessageSchema = Joi.object({
  topicId: Joi.string().required(),
  authorId: Joi.string().required(),
  content: Joi.string().allow(null, ""),
  solutionMessage: Joi.boolean().default(false),
});

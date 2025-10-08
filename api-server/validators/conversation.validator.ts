import Joi from "joi";

export const conversationSchema = Joi.object({
  type: Joi.string().required(),
  title: Joi.string().required(),
});

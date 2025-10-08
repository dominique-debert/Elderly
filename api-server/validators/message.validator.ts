import Joi from "joi";

export const messageSchema = Joi.object({
  conversationId: Joi.string().required(),
  senderId: Joi.string().required(),
  content: Joi.string().required(),
  sendDate: Joi.date().required(),
  type: Joi.string().allow(null, ""),
  read: Joi.boolean().default(false),
});

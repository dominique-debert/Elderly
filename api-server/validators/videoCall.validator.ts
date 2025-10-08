import Joi from "joi";

export const videoCallSchema = Joi.object({
  conversationId: Joi.string().required(),
  initiatorId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  status: Joi.string().required(),
});

import Joi from "joi";

export const conversationParticipantSchema = Joi.object({
  conversationId: Joi.string().required(),
  userId: Joi.string().required(),
  dateAdded: Joi.date().allow(null),
  administrator: Joi.boolean().default(false),
  lastAccess: Joi.date().required(),
});

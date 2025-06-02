import Joi from "joi";

export const conversationSchema = Joi.object({
  type: Joi.string().required(),
  title: Joi.string().required(),
});

export const idParamConversationSchema = Joi.object({
  id: Joi.string().required()
});

// type                    String                   @db.VarChar(255)
// title                   String                   @db.VarChar(255)
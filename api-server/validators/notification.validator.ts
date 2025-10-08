import Joi from "joi";

export const notificationSchema = Joi.object({
  userId: Joi.string().required(),
  type: Joi.string().required(),
  content: Joi.string().required(),
  read: Joi.boolean().default(false),
  actionLink: Joi.string().allow(null, ""),
});

import Joi from "joi";

export const notificationPreferencesSchema = Joi.object({
  userId: Joi.string().required(),
  messageNotification: Joi.boolean().default(false),
  activityNotification: Joi.boolean().default(false),
  helpNotification: Joi.boolean().default(false),
  forumNotification: Joi.boolean().default(false),
  emailNotification: Joi.boolean().default(false),
  smsNotification: Joi.boolean().default(false),
  pushNotification: Joi.boolean().default(false),
  quietHoursStart: Joi.date().allow(null),
  quietHoursEnd: Joi.date().allow(null),
});

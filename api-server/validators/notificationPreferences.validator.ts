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

export const idParamNotificationPreferencesSchema = Joi.object({
  id: Joi.string().required()
});

// userId               String    @id @map("user_id")
// messageNotification  Boolean?  @default(false) @map("message_notification")
// activityNotification Boolean?  @default(false) @map("activity_notification")
// helpNotification     Boolean?  @default(false) @map("help_notification")
// forumNotification    Boolean?  @default(false) @map("forum_notification")
// emailNotification    Boolean?  @default(false) @map("email_notification")
// smsNotification      Boolean?  @default(false) @map("sms_notification")
// pushNotification     Boolean?  @default(false) @map("push_notification")
// quietHoursStart      DateTime? @map("quiet_hours_start") @db.Time(6)
// quietHoursEnd        DateTime? @map("quiet_hours_end") @db.Time(6)
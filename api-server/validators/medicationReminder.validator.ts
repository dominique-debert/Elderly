import Joi from "joi";

export const medicationReminderSchema = Joi.object({
  userId: Joi.string().required(),
  medicationName: Joi.string().required(),
  dosage: Joi.string().allow(null, ""),
  morningReminderTime: Joi.date(),
  noonReminderTime: Joi.date(),
  eveningReminderTime: Joi.date(),
  nightReminderTime: Joi.date(),
  daysOfWeek: Joi.string().allow(null, ""),
  instructions: Joi.string().allow(null, ""),
  active: Joi.boolean().default(true),
  startDate: Joi.date(),
  endDate: Joi.date(),
});

import Joi from "joi";

export const healthIndicatorSchema = Joi.object({
  userId: Joi.string().required(),
  recordingDate: Joi.date().required(),
  stepCount: Joi.number().default(0),
  sleepDurationMinutes: Joi.number().default(0),
  sleepQuality: Joi.number().default(0),
  weight: Joi.number().precision(2).default(0),
  moodId: Joi.number().required(),
  notes: Joi.string().allow(null, ""),
});

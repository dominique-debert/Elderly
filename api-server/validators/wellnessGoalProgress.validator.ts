import Joi from "joi";

export const wellnessGoalProgressSchema = Joi.object({
  goalId: Joi.string().required(),
  recordingDate: Joi.date().required(),
  achievedValue: Joi.number().required(),
  goalAchieved: Joi.boolean().required().default(false),
});

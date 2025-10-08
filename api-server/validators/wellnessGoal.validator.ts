import Joi from "joi";

export const wellnessGoalSchema = Joi.object({
  id: Joi.string(),
  userId: Joi.string().required(),
  title: Joi.string().required(),
  categoryId: Joi.string().required(),
  targetValue: Joi.number().required(),
  unit: Joi.string().required(),
  frequency: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  active: Joi.boolean().required(),
});

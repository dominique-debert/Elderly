import Joi from "joi";

export const satisfactionSurveySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("", null),
  startDate: Joi.date(),
  endDate: Joi.date(),
  active: Joi.boolean().default(false),
});

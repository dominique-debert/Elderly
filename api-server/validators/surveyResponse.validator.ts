import Joi from "joi";

export const surveyResponseSchema = Joi.object({
  surveyId: Joi.string().required(),
  userId: Joi.string().required(),
  responses: Joi.object().allow(null, ""),
  responseDate: Joi.date().allow(null, ""),
});

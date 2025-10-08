import Joi from "joi";

export const urbanIssueReportSchema = Joi.object({
  userId: Joi.string().required(),
  categoryId: Joi.string(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  gpsCoordinates: Joi.string(),
  reportDate: Joi.date().required(),
  status: Joi.string(),
  cityReference: Joi.string(),
});

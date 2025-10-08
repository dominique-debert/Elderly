import Joi from "joi";

export const helpRequestSchema = Joi.object({
  creatorId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ""),
  neededDate: Joi.date().required(),
  estimatedDuration: Joi.number().default(0).min(0),
  location: Joi.string().allow(null, ""),
  gpsCoordinates: Joi.string().allow(null, ""),
  categoryId: Joi.string().required(),
  recurring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, ""),
  status: Joi.string().allow(null, ""),
  pointsOffered: Joi.number().default(0).min(0),
});

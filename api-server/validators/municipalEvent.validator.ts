import Joi from "joi";

export const municipalEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(null, ""),
  startDate: Joi.date().allow(null, ""),
  endDate: Joi.date().allow(null, ""),
  location: Joi.string().allow(null, ""),
  gpsCoordinates: Joi.string().allow(null, ""),
  organizer: Joi.string().allow(null, ""),
  contact: Joi.string().allow(null, ""),
  officialLink: Joi.string().allow(null, ""),
});

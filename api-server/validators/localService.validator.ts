import Joi from "joi";

export const localServiceSchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().allow(null, ""),
  address: Joi.string().required(),
  gpsCoordinates: Joi.string().allow(null, ""),
  phone: Joi.string().allow(null, ""),
  hours: Joi.string().allow(null, ""),
  website: Joi.string().allow(null, ""),
  seniorFriendly: Joi.boolean().required().default(false),
});

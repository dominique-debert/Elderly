import Joi from "joi";

export const helpOfferSchema = Joi.object({
  requestId: Joi.string().required(),
  helperId: Joi.string().required(),
  offerDate: Joi.date().required(),
  message: Joi.string().allow(null, ""),
  status: Joi.string().allow(null, ""),
});

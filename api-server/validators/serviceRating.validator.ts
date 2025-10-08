import Joi from "joi";

export const serviceRatingSchema = Joi.object({
  serviceId: Joi.string().required(),
  userId: Joi.string().required(),
  rating: Joi.number().required(),
  comment: Joi.string(),
  ratingDate: Joi.date(),
});

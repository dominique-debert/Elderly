import Joi from "joi";

export const serviceCompletedSchema = Joi.object({
  requestId: Joi.string().required(),
  helperId: Joi.string().required(),
  completionDate: Joi.date(),
  actualDuration: Joi.number(),
  creatorComment: Joi.string(),
  helperComment: Joi.string(),
  creatorRating: Joi.number(),
  helperRating: Joi.number(),
  pointsExchanged: Joi.number(),
});

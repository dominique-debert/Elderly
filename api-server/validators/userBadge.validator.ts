import Joi from "joi";

export const userBadgeSchema = Joi.object({
  userId: Joi.string().required(),
  badgeId: Joi.string().required(),
  achievementDate: Joi.date().required(),
});

import Joi from "joi";

export const userStatisticsSchema = Joi.object({
  userId: Joi.string().required(),
  servicesProvided: Joi.number(),
  servicesReceived: Joi.number(),
  activitiesParticipated: Joi.number(),
  activitiesOrganized: Joi.number(),
  forumMessages: Joi.number(),
  totalHelpPoints: Joi.number(),
  networkSize: Joi.number(),
});

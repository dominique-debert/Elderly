import Joi from 'joi';

export const activitySchema = Joi.object({
});

export const idParamActivitySchema = Joi.object({
  id: Joi.string().required()
});

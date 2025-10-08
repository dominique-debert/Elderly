import Joi from "joi";

export const offlineUserSchema = Joi.object({
  userId: Joi.string().required(),
  cachedData: Joi.string().allow(null, ""),
  lastSync: Joi.date().allow(null),
});

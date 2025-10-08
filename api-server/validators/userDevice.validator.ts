import Joi from "joi";

export const userDeviceSchema = Joi.object({
  userId: Joi.string().required(),
  deviceType: Joi.string().required(),
  deviceName: Joi.string(),
  operatingSystem: Joi.string(),
  notificationToken: Joi.string().required(),
  lastConnection: Joi.date().required(),
});

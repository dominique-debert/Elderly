import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string().required(),
  passwordHash: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  birthDate: Joi.date().required(),
  address: Joi.string().allow('', null),
  gpsCoordinates: Joi.string().allow('', null),
  phone: Joi.string().allow('', null),
  profilePicture: Joi.string().allow('', null),
  registrationDate: Joi.date().allow('', null),
  accountVerified: Joi.boolean().default(false),
  interfacePreferences: Joi.string().allow('', null),
  twoFactorAuthentication: Joi.boolean().default(false),
  helpPoints: Joi.number().allow(0).default(0),
  reducedMobility: Joi.boolean().default(false),
  activityLevel: Joi.string().allow('', null).default('active'),
  status: Joi.string().allow('', null).default('active'),
  isAdmin: Joi.boolean().default(false),
});

export const idParamUserSchema = Joi.object({
  id: Joi.string().required()
});

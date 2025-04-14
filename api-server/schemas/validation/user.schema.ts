import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string().required(),
  password_hash: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  birth_date: Joi.date().required(),
  address: Joi.string().allow('', null),
  gps_coordinates: Joi.string().allow('', null),
  phone: Joi.string().allow('', null),
  profile_picture: Joi.string().allow('', null),
  registration_date: Joi.string().allow('', null),
  account_verified: Joi.boolean().default(false),
  interface_preferences: Joi.string().allow('', null),
  two_factor_authentication: Joi.boolean().default(false),
  help_points: Joi.number().allow(0).default(0),
  reduced_mobility: Joi.boolean().default(false),
  activity_level: Joi.string().allow('', null).default('active'),
  emergency_contact_name: Joi.string().allow('', null),
  emergency_contact_phone: Joi.string().allow('', null),
  status: Joi.string().allow('', null).default('active'),
});

export const idParamUserSchema = Joi.object({
  id: Joi.string().required()
});

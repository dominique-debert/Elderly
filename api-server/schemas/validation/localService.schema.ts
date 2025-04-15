import Joi from 'joi';

export const localServiceSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  address: Joi.string().required(),
  gps_coordinates: Joi.string().allow(null, ''),
  phone: Joi.string().allow(null, ''),
  hours: Joi.string().allow(null, ''),
  website: Joi.string().allow(null, ''),
  senior_friendly: Joi.boolean().required().default(false),
});

export const idParamLocalServiceSchema = Joi.object({
  id: Joi.string().required()
});

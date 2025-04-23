import Joi from 'joi';

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  avatar: Joi.string().uri().optional(),
  birthdate: Joi.date().iso().required(), // par exemple au format YYYY-MM-DD
  isAdmin: Joi.boolean().default(false),
});

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
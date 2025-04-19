import Joi from 'joi';

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional()
});

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
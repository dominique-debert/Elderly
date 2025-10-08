import Joi from "joi";

export const trustedContactSchema = Joi.object({
  userId: Joi.string().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().required(),
  relationship: Joi.string(),
  shareMedications: Joi.boolean().default(false),
  shareHealthIndicators: Joi.boolean().default(false),
  shareWellnessActivities: Joi.boolean().default(false),
  emergencyAlerts: Joi.boolean().default(false),
});

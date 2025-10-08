import Joi from "joi";

export const trustedContactSchema = Joi.object({
  lastName: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
  }),
  firstName: Joi.string().required().messages({
    "string.base": "Le prénom doit être une chaîne de caractères.",
    "string.empty": "Le prénom est requis.",
  }),
  email: Joi.string().email().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.empty": "L'email est requis.",
    "string.email": "L'email doit être une adresse email valide.",
  }),
  phone: Joi.string().required().messages({
    "string.base": "Le téléphone doit être une chaîne de caractères.",
    "string.empty": "Le téléphone est requis.",
  }),
  relationship: Joi.string().messages({
    "string.base": "La relation doit être une chaîne de caractères.",
  }),
  shareMedications: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'shareMedications' doit être un booléen.",
  }),
  shareHealthIndicators: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'shareHealthIndicators' doit être un booléen.",
  }),
  shareWellnessActivities: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'shareWellnessActivities' doit être un booléen.",
  }),
  emergencyAlerts: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'emergencyAlerts' doit être un booléen.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

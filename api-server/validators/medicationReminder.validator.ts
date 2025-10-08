import Joi from "joi";

export const medicationReminderSchema = Joi.object({
  medicationName: Joi.string().required().messages({
    "string.base": "Le nom du médicament doit être une chaîne de caractères.",
    "string.empty": "Le nom du médicament est requis.",
    "any.required": "Le nom du médicament est obligatoire.",
  }),
  dosage: Joi.string().required().messages({
    "string.base": "Le dosage doit être une chaîne de caractères.",
    "string.empty": "Le dosage est requis.",
    "any.required": "Le dosage est obligatoire.",
  }),
  morningReminderTime: Joi.date().messages({
    "date.base": "L'heure du rappel du matin doit être une date valide.",
  }),
  noonReminderTime: Joi.date().messages({
    "date.base": "L'heure du rappel de midi doit être une date valide.",
  }),
  eveningReminderTime: Joi.date().messages({
    "date.base": "L'heure du rappel du soir doit être une date valide.",
  }),
  nightReminderTime: Joi.date().messages({
    "date.base": "L'heure du rappel de nuit doit être une date valide.",
  }),
  daysOfWeek: Joi.string().allow(null, "").messages({
    "string.base":
      "Les jours de la semaine doivent être une chaîne de caractères.",
  }),
  instructions: Joi.string().allow(null, "").messages({
    "string.base": "Les instructions doivent être une chaîne de caractères.",
  }),
  active: Joi.boolean().default(true),
  startDate: Joi.date().messages({
    "date.base": "La date de début doit être une date valide.",
  }),
  endDate: Joi.date().messages({
    "date.base": "La date de fin doit être une date valide.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

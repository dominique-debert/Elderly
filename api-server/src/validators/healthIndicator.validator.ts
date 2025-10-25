import Joi from "joi";

export const healthIndicatorSchema = Joi.object({
  recordingDate: Joi.date().required().messages({
    "date.base": "La date d'enregistrement doit être une date valide.",
    "any.required": "La date d'enregistrement est obligatoire.",
  }),
  stepCount: Joi.number().default(0).min(0).messages({
    "number.base": "Le nombre de pas doit être un nombre.",
    "number.min": "Le nombre de pas doit être supérieur ou égal à 0.",
  }),
  sleepDurationMinutes: Joi.number().default(0).min(0).messages({
    "number.base": "La durée du sommeil doit être un nombre.",
    "number.min": "La durée du sommeil doit être supérieure ou égale à 0.",
  }),
  sleepQuality: Joi.number().default(0).min(0).max(10).messages({
    "number.base": "La qualité du sommeil doit être un nombre.",
    "number.min": "La qualité du sommeil doit être supérieure ou égale à 0.",
    "number.max": "La qualité du sommeil doit être inférieure ou égale à 10.",
  }),
  weight: Joi.number().precision(2).default(0).messages({
    "number.base": "Le poids doit être un nombre.",
  }),
  notes: Joi.string().allow(null, "").messages({
    "string.base": "Les notes doivent être une chaîne de caractères.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  moodId: Joi.string().required().messages({
    "string.base": "L'ID de l'humeur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'humeur est requis.",
    "any.required": "L'ID de l'humeur est obligatoire.",
  }),
});

import Joi from "joi";

export const wellnessGoalProgressSchema = Joi.object({
  recordingDate: Joi.date().required().messages({
    "date.base": "La date d'enregistrement doit être une date valide.",
    "any.required": "La date d'enregistrement est obligatoire.",
  }),
  achievedValue: Joi.number().min(0).allow(0).max(5).required().messages({
    "number.base": "La valeur atteinte doit être un nombre.",
    "number.min": "La valeur atteinte ne peut pas être négative.",
    "number.max": "La valeur atteinte ne peut pas dépasser 5.",
    "any.required": "La valeur atteinte est obligatoire.",
  }),
  goalAchieved: Joi.boolean().required().default(false).messages({
    "boolean.base": "L'état d'atteinte de l'objectif doit être un booléen.",
    "any.required": "L'état d'atteinte de l'objectif est obligatoire.",
  }),
  goalId: Joi.string().required().messages({
    "string.base": "L'ID de l'objectif doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'objectif est requis.",
    "any.required": "L'ID de l'objectif est obligatoire.",
  }),
});

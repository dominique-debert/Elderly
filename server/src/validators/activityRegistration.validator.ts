import Joi from "joi";

export const registrationSchema = Joi.object({
  activityId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de l'activité doit être une chaîne de caractères.",
  }),
  userId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
  }),
  registrationDate: Joi.date().allow(null, "").messages({
    "date.base": "La date d'inscription doit être une date valide.",
  }),
  status: Joi.string().allow(null, "").messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  attendanceConfirmed: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'attendanceConfirmed' doit être un booléen.",
  }),
});

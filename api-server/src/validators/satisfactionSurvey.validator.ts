import Joi from "joi";

export const satisfactionSurveySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  startDate: Joi.date().messages({
    "date.base": "La date de début doit être une date valide.",
  }),
  endDate: Joi.date().messages({
    "date.base": "La date de fin doit être une date valide.",
  }),
  active: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'active' doit être un booléen.",
  }),
});

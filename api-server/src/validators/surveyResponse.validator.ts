import Joi from "joi";

export const surveyResponseSchema = Joi.object({
  responses: Joi.object().allow(null, "").messages({
    "object.base": "Les réponses doivent être un objet.",
  }),
  responseDate: Joi.date().allow(null, "").messages({
    "date.base": "La date de réponse doit être une date valide.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  surveyId: Joi.string().required().messages({
    "string.base": "L'ID de l'enquête doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'enquête est requis.",
    "any.required": "L'ID de l'enquête est obligatoire.",
  }),
});

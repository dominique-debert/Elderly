import Joi from "joi";

export const videoCallSchema = Joi.object({
  conversationId: Joi.string().required().messages({
    "string.base":
      "L'ID de la conversation doit être une chaîne de caractères.",
    "string.empty": "L'ID de la conversation est requis.",
    "any.required": "L'ID de la conversation est obligatoire.",
  }),
  initiatorId: Joi.string().required().messages({
    "string.base": "L'ID de l'initiateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'initiateur est requis.",
    "any.required": "L'ID de l'initiateur est obligatoire.",
  }),
  startDate: Joi.date().required().messages({
    "date.base": "La date de début doit être une date valide.",
    "any.required": "La date de début est obligatoire.",
  }),
  endDate: Joi.date().required().messages({
    "date.base": "La date de fin doit être une date valide.",
    "any.required": "La date de fin est obligatoire.",
  }),
  status: Joi.string().required().messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
    "string.empty": "Le statut est requis.",
    "any.required": "Le statut est obligatoire.",
  }),
});

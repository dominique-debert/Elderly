import Joi from "joi";

export const helpOfferSchema = Joi.object({
  offerDate: Joi.date().required().messages({
    "date.base": "La date de l'offre doit être une date valide.",
    "any.required": "La date de l'offre est obligatoire.",
  }),
  message: Joi.string().allow(null, "").messages({
    "string.base": "Le message doit être une chaîne de caractères.",
  }),
  status: Joi.string().allow(null, "").messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  requestId: Joi.string().required().messages({
    "string.base": "L'ID de la demande doit être une chaîne de caractères.",
    "string.empty": "L'ID de la demande est requis.",
    "any.required": "L'ID de la demande est obligatoire.",
  }),
  helperId: Joi.string().required().messages({
    "string.base": "L'ID de l'aide doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'aide est requis.",
    "any.required": "L'ID de l'aide est obligatoire.",
  }),
});

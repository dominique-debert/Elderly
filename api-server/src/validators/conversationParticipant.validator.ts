import Joi from "joi";

export const conversationParticipantSchema = Joi.object({
  dateAdded: Joi.date().required().messages({
    "date.base": "La date d'ajout doit être une date valide.",
    "any.required": "La date d'ajout est obligatoire.",
  }),
  administrator: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'administrator' doit être un booléen.",
  }),
  lastAccess: Joi.date().required().messages({
    "date.base": "La date de dernier accès doit être une date valide.",
    "any.required": "La date de dernier accès est obligatoire.",
  }),
  conversationId: Joi.string().required().messages({
    "string.base":
      "L'ID de la conversation doit être une chaîne de caractères.",
    "string.empty": "L'ID de la conversation est requis.",
    "any.required": "L'ID de la conversation est obligatoire.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

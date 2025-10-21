import Joi from "joi";

export const userContactSchema = Joi.object({
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  contactId: Joi.string().required().messages({
    "string.base": "L'ID du contact doit être une chaîne de caractères.",
    "string.empty": "L'ID du contact est requis.",
    "any.required": "L'ID du contact est obligatoire.",
  }),
  achievementDate: Joi.date().required().messages({
    "date.base": "La date d'acquisition doit être une date valide.",
    "any.required": "La date d'acquisition est obligatoire.",
  }),
});

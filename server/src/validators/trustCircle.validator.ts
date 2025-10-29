import Joi from "joi";

export const trustCircleSchema = Joi.object({
  dateAdded: Joi.date().required().messages({
    "date.base": "La date d'ajout doit être une date valide.",
    "any.required": "La date d'ajout est obligatoire.",
  }),
  accessLevel: Joi.string().required().messages({
    "string.base": "Le niveau d'accès doit être une chaîne de caractères.",
    "string.empty": "Le niveau d'accès est requis.",
    "any.required": "Le niveau d'accès est obligatoire.",
  }),
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
});

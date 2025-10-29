import Joi from "joi";

export const serviceRatingSchema = Joi.object({
  rating: Joi.number().required().min(0).max(5).messages({
    "number.base": "La note doit être un nombre.",
    "any.required": "La note est obligatoire.",
    "number.min": "La note doit être supérieure ou égale à 0.",
    "number.max": "La note doit être inférieure ou égale à 5.",
  }),
  comment: Joi.string().messages({
    "string.base": "Le commentaire doit être une chaîne de caractères.",
  }),
  ratingDate: Joi.date().messages({
    "date.base": "La date de la note doit être une date valide.",
  }),
  serviceId: Joi.string().required().messages({
    "string.base": "L'ID du service doit être une chaîne de caractères.",
    "string.empty": "L'ID du service est requis.",
    "any.required": "L'ID du service est obligatoire.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

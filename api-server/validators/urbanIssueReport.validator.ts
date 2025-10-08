import Joi from "joi";

export const urbanIssueReportSchema = Joi.object({
  description: Joi.string().required().messages({
    "string.base": "La description doit être une chaîne de caractères.",
    "string.empty": "La description est requise.",
    "any.required": "La description est obligatoire.",
  }),
  address: Joi.string().required().messages({
    "string.base": "L'adresse doit être une chaîne de caractères.",
    "string.empty": "L'adresse est requise.",
    "any.required": "L'adresse est obligatoire.",
  }),
  gpsCoordinates: Joi.string().messages({
    "string.base": "Les coordonnées GPS doivent être une chaîne de caractères.",
  }),
  reportDate: Joi.date().required().messages({
    "date.base": "La date de rapport doit être une date valide.",
    "any.required": "La date de rapport est obligatoire.",
  }),
  status: Joi.string().messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  cityReference: Joi.string().messages({
    "string.base":
      "La référence de la ville doit être une chaîne de caractères.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  categoryId: Joi.string().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
  }),
});

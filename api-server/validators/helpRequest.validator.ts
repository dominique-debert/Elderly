import Joi from "joi";

export const helpRequestSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  neededDate: Joi.date().required().messages({
    "date.base": "La date requise doit être une date valide.",
    "any.required": "La date requise est obligatoire.",
  }),
  estimatedDuration: Joi.number().default(0).min(0).messages({
    "number.base": "La durée estimée doit être un nombre.",
    "number.min": "La durée estimée ne peut pas être inférieure à 0.",
  }),
  location: Joi.string().allow(null, "").messages({
    "string.base": "L'emplacement doit être une chaîne de caractères.",
  }),
  gpsCoordinates: Joi.string().allow(null, "").messages({
    "string.base": "Les coordonnées GPS doivent être une chaîne de caractères.",
  }),
  recurring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, "").messages({
    "string.base": "La fréquence doit être une chaîne de caractères.",
  }),
  status: Joi.string().allow(null, "").messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  pointsOffered: Joi.number().default(0).min(0).messages({
    "number.base": "Les points offerts doivent être un nombre.",
    "number.min": "Les points offerts ne peuvent pas être inférieurs à 0.",
  }),
  creatorId: Joi.string().required().messages({
    "string.base": "L'ID du créateur doit être une chaîne de caractères.",
    "string.empty": "L'ID du créateur est requis.",
    "any.required": "L'ID du créateur est obligatoire.",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
    "string.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
});

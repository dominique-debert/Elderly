import Joi from "joi";

export const badgeSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom du badge doit être une chaîne de caractères.",
    "string.empty": "Le nom du badge est requis.",
    "any.required": "Le nom du badge est obligatoire.",
  }),
  description: Joi.string().required().messages({
    "string.base":
      "La description du badge doit être une chaîne de caractères.",
    "string.empty": "La description du badge est requise.",
    "any.required": "La description du badge est obligatoire.",
  }),
  icon: Joi.string().required().messages({
    "string.base": "L'icône du badge doit être une chaîne de caractères.",
    "string.empty": "L'icône du badge est requise.",
    "any.required": "L'icône du badge est obligatoire.",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
    "string.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
  level: Joi.number().integer().min(0).max(10).required().messages({
    "number.base": "Le niveau doit être un nombre.",
    "number.integer": "Le niveau doit être un nombre entier.",
    "number.min": "Le niveau doit être supérieur ou égal à 0.",
    "number.max": "Le niveau doit être inférieur ou égal à 10.",
  }),
});

import Joi from "joi";

export const wellnessBadgeSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
    "any.required": "Le nom est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  image: Joi.string().allow("", null).messages({
    "string.base": "L'image doit être une chaîne de caractères.",
  }),
  level: Joi.number().required().allow(0).min(0).max(5).messages({
    "number.base": "Le niveau doit être un nombre.",
    "number.min": "Le niveau doit être au moins 0.",
    "number.max": "Le niveau ne peut pas dépasser 5.",
    "any.required": "Le niveau est obligatoire.",
  }),
  categoryId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
  }),
});

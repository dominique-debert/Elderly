import Joi from "joi";

export const nutritionalAdviceSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  season: Joi.string().required().messages({
    "string.base": "La saison doit être une chaîne de caractères.",
    "string.empty": "La saison est requise.",
    "any.required": "La saison est obligatoire.",
  }),
  image: Joi.string().allow("", null).messages({
    "string.base": "L'image doit être une chaîne de caractères.",
  }),
  categoryId: Joi.number().integer().positive().required().messages({
    "number.base": "L'ID de la catégorie doit être un nombre.",
    "number.integer": "L'ID de la catégorie doit être un entier.",
    "number.positive": "L'ID de la catégorie doit être positif.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
});

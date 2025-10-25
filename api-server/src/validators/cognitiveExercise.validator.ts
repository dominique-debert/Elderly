import Joi from "joi";

export const cognitiveExerciseSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom de l'exercice doit être une chaîne de caractères.",
    "string.empty": "Le nom de l'exercice est requis.",
    "any.required": "Le nom de l'exercice est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  difficultyLevel: Joi.string().required().messages({
    "string.base":
      "Le niveau de difficulté doit être une chaîne de caractères.",
    "string.empty": "Le niveau de difficulté est requis.",
    "any.required": "Le niveau de difficulté est obligatoire.",
  }),
  durationMinutes: Joi.number().integer().min(0).required().messages({
    "number.base": "La durée doit être un nombre.",
    "number.integer": "La durée doit être un nombre entier.",
    "number.min": "La durée ne peut pas être négative.",
    "any.required": "La durée est obligatoire.",
  }),
  image: Joi.string().allow("", null).messages({
    "string.base": "L'image doit être une chaîne de caractères.",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
    "string.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
});

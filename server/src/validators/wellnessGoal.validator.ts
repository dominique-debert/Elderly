import Joi from "joi";

export const wellnessGoalSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
  }),
  targetValue: Joi.number().min(0).max(5).required().messages({
    "number.base": "La valeur cible doit être un nombre.",
    "number.min": "La valeur cible ne peut pas être négative.",
    "number.max": "La valeur cible ne peut pas dépasser 5.",
    "any.required": "La valeur cible est obligatoire.",
  }),
  unit: Joi.string().required().messages({
    "string.base": "L'unité doit être une chaîne de caractères.",
    "string.empty": "L'unité est requise.",
    "any.required": "L'unité est obligatoire.",
  }),
  frequency: Joi.string().required().messages({
    "string.base": "La fréquence doit être une chaîne de caractères.",
    "string.empty": "La fréquence est requise.",
    "any.required": "La fréquence est obligatoire.",
  }),
  startDate: Joi.date().required().messages({
    "date.base": "La date de début doit être une date valide.",
    "any.required": "La date de début est obligatoire.",
  }),
  endDate: Joi.date().required().messages({
    "date.base": "La date de fin doit être une date valide.",
    "any.required": "La date de fin est obligatoire.",
  }),
  active: Joi.boolean().required().messages({
    "boolean.base": "L'état actif doit être un booléen.",
    "any.required": "L'état actif est obligatoire.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
    "string.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
});

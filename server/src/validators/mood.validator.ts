import Joi from "joi";

export const moodSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
    "string.min": "Le nom doit contenir au moins 2 caractères.",
  }),
  description: Joi.string().allow(null, "").optional().messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  valence: Joi.string()
    .valid("positive", "negative", "neutre")
    .required()
    .messages({
      "string.base": "La valence doit être une chaîne de caractères.",
      "any.required": "La valence est obligatoire.",
      "any.only": "La valence doit être 'positive', 'negative' ou 'neutre'.",
    }),
  intensity: Joi.number().integer().min(1).max(5).required().messages({
    "number.base": "L'intensité doit être un nombre.",
    "number.integer": "L'intensité doit être un entier.",
    "number.min": "L'intensité doit être d'au moins 1.",
    "number.max": "L'intensité ne peut pas dépasser 5.",
    "any.required": "L'intensité est obligatoire.",
  }),
  color: Joi.string()
    .pattern(/^#[0-9A-Fa-f]{6}$/)
    .required()
    .messages({
      "string.base": "La couleur doit être une chaîne de caractères.",
      "string.pattern.base": "La couleur doit être un code hexadécimal valide.",
      "any.required": "La couleur est obligatoire.",
      "string.empty": "La couleur est obligatoire.",
    }),
});

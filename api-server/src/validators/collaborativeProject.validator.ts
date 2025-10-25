import Joi from "joi";

export const collaborativeProjectSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  creationDate: Joi.date().required().messages({
    "date.base": "La date de création doit être une date valide.",
    "any.required": "La date de création est obligatoire.",
  }),
  difficultyLevel: Joi.string().required().messages({
    "string.base":
      "Le niveau de difficulté doit être une chaîne de caractères.",
    "string.empty": "Le niveau de difficulté est requis.",
    "any.required": "Le niveau de difficulté est obligatoire.",
  }),
  status: Joi.string().allow("", null).messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
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

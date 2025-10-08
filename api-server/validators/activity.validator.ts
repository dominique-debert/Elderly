import Joi from "joi";

export const activitySchema = Joi.object({
  title: Joi.string().min(2).max(100).required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
    "string.min": "Le nom doit contenir au moins 2 caractères.",
    "string.max": "Le nom doit contenir au maximum 100 caractères.",
    "any.required": "Le nom est obligatoire.",
  }),

  description: Joi.string().max(255).allow("").optional().messages({
    "string.base": "La description doit être une chaîne de caractères.",
    "string.max": "La description ne peut pas dépasser 255 caractères.",
  }),

  startDate: Joi.date().required().messages({
    "date.base": "La date de début doit être une date valide.",
    "any.required": "La date de début est obligatoire.",
  }),

  endDate: Joi.date().greater(Joi.ref("startDate")).required().messages({
    "date.base": "La date de fin doit être une date valide.",
    "date.greater": "La date de fin doit être postérieure à la date de début.",
    "any.required": "La date de fin est obligatoire.",
  }),

  location: Joi.string().max(255).allow("").optional().messages({
    "string.base": "Le lieu doit être une chaîne de caractères.",
    "string.max": "Le lieu ne peut pas dépasser 255 caractères.",
  }),

  reducedMobilityAccess: Joi.boolean().required().messages({
    "boolean.base": "L'accès pour mobilité réduite doit être un booléen.",
    "any.required": "L'accès pour mobilité réduite est obligatoire.",
  }),

  difficultyLevel: Joi.number().min(0).max(5).required().messages({
    "number.base": "Le niveau de difficulté doit être un nombre.",
    "number.min": "Le niveau de difficulté doit être au moins 0.",
    "number.max": "Le niveau de difficulté ne peut pas dépasser 5.",
    "any.required": "Le niveau de difficulté est obligatoire.",
  }),

  cost: Joi.number().min(0).precision(2).required().messages({
    "number.base": "Le coût doit être un nombre.",
    "number.min": "Le coût ne peut pas être négatif.",
    "any.required": "Le coût est obligatoire.",
  }),

  status: Joi.string()
    .valid("draft", "published", "archived")
    .required()
    .messages({
      "string.base": "Le statut doit être une chaîne de caractères.",
      "any.only": "Le statut doit être 'draft', 'published' ou 'archived'.",
      "any.required": "Le statut est obligatoire.",
    }),

  weatherRequirements: Joi.string().max(255).allow("").optional().messages({
    "string.base":
      "Les conditions météorologiques doivent être une chaîne de caractères.",
    "string.max":
      "Les conditions météorologiques ne peuvent pas dépasser 255 caractères.",
  }),

  transportOptions: Joi.string().max(255).allow("").optional().messages({
    "string.base":
      "Les options de transport doivent être une chaîne de caractères.",
    "string.max":
      "Les options de transport ne peuvent pas dépasser 255 caractères.",
  }),

  creatorId: Joi.string().required().messages({
    "string.base": "Le créateur est requis.",
    "any.required": "Le créateur est obligatoire.",
  }),

  categoryId: Joi.string().required().messages({
    "string.base": "La catégorie est requise.",
    "any.required": "La catégorie est obligatoire.",
  }),
});

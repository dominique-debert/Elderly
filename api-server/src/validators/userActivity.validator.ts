import Joi from "joi";

export const userActivitySchema = Joi.object({
  completionDate: Joi.date().required().messages({
    "date.base": "La date de complétion doit être une date valide.",
    "any.required": "La date de complétion est obligatoire.",
  }),
  durationMinutes: Joi.number().allow(0).min(0).messages({
    "number.base": "La durée doit être un nombre.",
    "number.min": "La durée doit être supérieure ou égale à 0.",
  }),
  perceivedDifficultyLevel: Joi.number().min(1).max(5).messages({
    "number.base": "Le niveau de difficulté perçu doit être un nombre.",
    "number.min":
      "Le niveau de difficulté perçu doit être supérieur ou égal à 1.",
    "number.max":
      "Le niveau de difficulté perçu doit être inférieur ou égal à 5.",
  }),
  enjoymentLevel: Joi.number().min(1).max(5).messages({
    "number.base": "Le niveau de plaisir doit être un nombre.",
    "number.min": "Le niveau de plaisir doit être supérieur ou égal à 1.",
    "number.max": "Le niveau de plaisir doit être inférieur ou égal à 5.",
  }),
  comment: Joi.string().messages({
    "string.base": "Le commentaire doit être une chaîne de caractères.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  exerciseProgramId: Joi.string().messages({
    "string.base":
      "L'ID du programme d'exercice doit être une chaîne de caractères.",
  }),
  cognitiveExerciseId: Joi.string().messages({
    "string.base":
      "L'ID de l'exercice cognitif doit être une chaîne de caractères.",
  }),
});

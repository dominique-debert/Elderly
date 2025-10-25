import Joi from "joi";

export const userSkillSchema = Joi.object({
  level: Joi.number().required().min(1).max(10).messages({
    "number.base": "Le niveau doit être un nombre.",
    "any.required": "Le niveau est obligatoire.",
    "number.min": "Le niveau doit être supérieur ou égal à 1.",
    "number.max": "Le niveau doit être inférieur ou égal à 10.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  skillId: Joi.string().required().messages({
    "string.base": "L'ID de la compétence doit être une chaîne de caractères.",
    "string.empty": "L'ID de la compétence est requis.",
    "any.required": "L'ID de la compétence est obligatoire.",
  }),
});

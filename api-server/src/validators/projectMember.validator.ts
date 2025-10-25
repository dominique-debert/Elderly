import Joi from "joi";

export const projectMemberSchema = Joi.object({
  role: Joi.string().required().messages({
    "string.base": "Le rôle doit être une chaîne de caractères.",
    "string.empty": "Le rôle est requis.",
    "any.required": "Le rôle est obligatoire.",
  }),
  joinDate: Joi.date().required().messages({
    "date.base": "La date d'adhésion doit être une date valide.",
    "any.required": "La date d'adhésion est obligatoire.",
  }),
  projectId: Joi.string().required().messages({
    "string.base": "L'ID du projet doit être une chaîne de caractères.",
    "string.empty": "L'ID du projet est requis.",
    "any.required": "L'ID du projet est obligatoire.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

import Joi from "joi";

export const projectTaskSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  creationDate: Joi.date().required().messages({
    "date.base": "La date de création doit être une date valide.",
    "any.required": "La date de création est obligatoire.",
  }),
  dueDate: Joi.date().allow(null).messages({
    "date.base": "La date d'échéance doit être une date valide.",
  }),
  status: Joi.string().allow(null, "").messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  projectId: Joi.string().required().messages({
    "string.base": "L'ID du projet doit être une chaîne de caractères.",
    "string.empty": "L'ID du projet est requis.",
    "any.required": "L'ID du projet est obligatoire.",
  }),
  assigneeId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de l'assigné doit être une chaîne de caractères.",
  }),
});

import Joi from "joi";

export const forumSectionSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  authorId: Joi.string().required().messages({
    "string.base": "L'ID de l'auteur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'auteur est requis.",
    "any.required": "L'ID de l'auteur est obligatoire.",
  }),
});

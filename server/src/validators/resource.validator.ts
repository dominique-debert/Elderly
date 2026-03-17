import Joi from "joi";

export const resourceSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  content: Joi.string().allow("", null).messages({
    "string.base": "Le contenu doit être une chaîne de caractères.",
  }),
  type: Joi.string().required().messages({
    "string.base": "Le type doit être une chaîne de caractères.",
    "string.empty": "Le type est requis.",
    "any.required": "Le type est obligatoire.",
  }),
  categoryId: Joi.string().allow("", null).messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
  }),
  authorId: Joi.string().required().messages({
    "string.base": "L'ID de l'auteur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'auteur est requis.",
    "any.required": "L'ID de l'auteur est obligatoire.",
  }),
  adminValidated: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'adminValidated' doit être un booléen.",
  }),
});

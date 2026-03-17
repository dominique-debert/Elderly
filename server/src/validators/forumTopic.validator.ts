import Joi from "joi";

export const forumTopicSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
  }),
  pinned: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'pinned' doit être un booléen.",
  }),
  status: Joi.string().allow(null, "").messages({
    "string.base": "Le statut doit être une chaîne de caractères.",
  }),
  views: Joi.number().default(0).min(0).messages({
    "number.base": "Le nombre de vues doit être un nombre.",
    "number.min": "Le nombre de vues doit être supérieur ou égal à 0.",
  }),
  categoryId: Joi.number().required().messages({
    "number.base": "L'ID de la catégorie doit être un nombre.",
    "number.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
  authorId: Joi.string().required().messages({
    "string.base": "L'ID de l'auteur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'auteur est requis.",
    "any.required": "L'ID de l'auteur est obligatoire.",
  }),
});

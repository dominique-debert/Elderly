import Joi from "joi";

export const forumMessageSchema = Joi.object({
  content: Joi.string().required().messages({
    "string.base": "Le contenu doit être une chaîne de caractères.",
    "string.empty": "Le contenu est requis.",
    "any.required": "Le contenu est obligatoire.",
  }),
  solutionMessage: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'solutionMessage' doit être un booléen.",
  }),
  topicId: Joi.string().required().messages({
    "string.base": "L'ID du sujet doit être une chaîne de caractères.",
    "string.empty": "L'ID du sujet est requis.",
    "any.required": "L'ID du sujet est obligatoire.",
  }),
  authorId: Joi.string().required().messages({
    "string.base": "L'ID de l'auteur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'auteur est requis.",
    "any.required": "L'ID de l'auteur est obligatoire.",
  }),
});

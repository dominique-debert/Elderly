import Joi from "joi";

export const notificationSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.base": "Le type doit être une chaîne de caractères.",
    "string.empty": "Le type est requis.",
    "any.required": "Le type est obligatoire.",
  }),
  content: Joi.string().required().messages({
    "string.base": "Le contenu doit être une chaîne de caractères.",
    "string.empty": "Le contenu est requis.",
    "any.required": "Le contenu est obligatoire.",
  }),
  read: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'read' doit être un booléen.",
  }),
  actionLink: Joi.string().allow(null, "").messages({
    "string.base": "Le lien d'action doit être une chaîne de caractères.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

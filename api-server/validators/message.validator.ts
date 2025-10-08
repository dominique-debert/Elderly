import Joi from "joi";

export const messageSchema = Joi.object({
  content: Joi.string().required().messages({
    "string.base": "Le contenu doit être une chaîne de caractères.",
    "string.empty": "Le contenu est requis.",
    "any.required": "Le contenu est obligatoire.",
  }),
  sendDate: Joi.date().required().messages({
    "date.base": "La date d'envoi doit être une date valide.",
    "any.required": "La date d'envoi est obligatoire.",
  }),
  type: Joi.string().allow(null, "").messages({
    "string.base": "Le type doit être une chaîne de caractères.",
  }),
  fileUrl: Joi.string().uri().allow(null, "").messages({
    "string.base": "L'URL du fichier doit être une chaîne de caractères.",
    "string.empty": "L'URL du fichier est requise.",
    "any.required": "L'URL du fichier est obligatoire.",
  }),
  read: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'read' doit être un booléen.",
  }),
  conversationId: Joi.string().required().messages({
    "string.base":
      "L'ID de la conversation doit être une chaîne de caractères.",
    "string.empty": "L'ID de la conversation est requis.",
    "any.required": "L'ID de la conversation est obligatoire.",
  }),
  senderId: Joi.string().required().messages({
    "string.base": "L'ID de l'expéditeur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'expéditeur est requis.",
    "any.required": "L'ID de l'expéditeur est obligatoire.",
  }),
});

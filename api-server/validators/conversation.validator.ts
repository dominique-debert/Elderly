import Joi from "joi";

export const conversationSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.base":
      "Le type de conversation doit être une chaîne de caractères.",
    "string.empty": "Le type de conversation est requis.",
  }),
  title: Joi.string().required().messages({
    "string.base":
      "Le titre de la conversation doit être une chaîne de caractères.",
    "string.empty": "Le titre de la conversation est requis.",
  }),
});

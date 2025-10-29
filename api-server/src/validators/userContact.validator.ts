import Joi from "joi";

export const userContactSchema = Joi.object({
  id: Joi.string().uuid().required().messages({
    "string.base": "L'ID doit être une chaîne de caractères.",
    "string.empty": "L'ID est requis.",
  }),
  userId: Joi.string().uuid().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
  }),
  status: Joi.string()
    .valid("pending", "accepted", "rejected", "blocked")
    .required()
    .messages({
      "any.only":
        "Le statut doit être l'une des valeurs suivantes : pending, accepted, rejected, blocked.",
      "string.empty": "Le statut est requis.",
    }),
  message: Joi.string().allow("", null),
  reason: Joi.string().allow("", null),
  contactId: Joi.string().uuid().required().messages({
    "string.base": "L'ID du contact doit être une chaîne de caractères.",
    "string.empty": "L'ID du contact est requis.",
  }),
  createdAt: Joi.date().messages({
    "date.base": "La date de création doit être une date valide.",
  }),
  updatedAt: Joi.date().messages({
    "date.base": "La date de mise à jour doit être une date valide.",
  }),
});

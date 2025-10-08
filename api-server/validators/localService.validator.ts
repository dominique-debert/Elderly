import Joi from "joi";

export const localServiceSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
  }),
  address: Joi.string().required().messages({
    "string.base": "L'adresse doit être une chaîne de caractères.",
    "string.empty": "L'adresse est requise.",
  }),
  gpsCoordinates: Joi.string().allow(null, "").messages({
    "string.base": "Les coordonnées GPS doivent être une chaîne de caractères.",
  }),
  phone: Joi.string().allow(null, "").messages({
    "string.base": "Le numéro de téléphone doit être une chaîne de caractères.",
  }),
  hours: Joi.string().allow(null, "").messages({
    "string.base": "Les heures doivent être une chaîne de caractères.",
  }),
  website: Joi.string().allow(null, "").messages({
    "string.base": "Le site Web doit être une chaîne de caractères.",
  }),
  seniorFriendly: Joi.boolean().required().default(false),
  categoryId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
  }),
});

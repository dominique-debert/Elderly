import Joi from "joi";

export const offlineUserSchema = Joi.object({
  cachedData: Joi.string().allow(null, "").messages({
    "string.base": "Le champ 'cachedData' doit être une chaîne de caractères.",
  }),
  lastSync: Joi.date().allow(null).messages({
    "date.base": "Le champ 'lastSync' doit être une date valide.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "Le champ 'userId' doit être une chaîne de caractères.",
    "string.empty": "Le champ 'userId' est requis.",
    "any.required": "Le champ 'userId' est obligatoire.",
  }),
});

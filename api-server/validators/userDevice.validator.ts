import Joi from "joi";

export const userDeviceSchema = Joi.object({
  deviceType: Joi.string().required().messages({
    "string.base": "Le type d'appareil doit être une chaîne de caractères.",
    "string.empty": "Le type d'appareil est requis.",
    "any.required": "Le type d'appareil est obligatoire.",
  }),
  deviceName: Joi.string().required().messages({
    "string.base": "Le nom de l'appareil doit être une chaîne de caractères.",
    "string.empty": "Le nom de l'appareil est requis.",
    "any.required": "Le nom de l'appareil est obligatoire.",
  }),
  operatingSystem: Joi.string().required().messages({
    "string.base":
      "Le système d'exploitation doit être une chaîne de caractères.",
    "string.empty": "Le système d'exploitation est requis.",
    "any.required": "Le système d'exploitation est obligatoire.",
  }),
  notificationToken: Joi.string().required().messages({
    "string.base":
      "Le token de notification doit être une chaîne de caractères.",
    "string.empty": "Le token de notification est requis.",
    "any.required": "Le token de notification est obligatoire.",
  }),
  lastConnection: Joi.date().required().messages({
    "date.base": "La dernière connexion doit être une date valide.",
    "any.required": "La dernière connexion est obligatoire.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
});

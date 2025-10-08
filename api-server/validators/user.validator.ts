import Joi from "joi";

export const userSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.empty": "L'email est requis.",
    "any.required": "L'email est obligatoire.",
  }),
  passwordHash: Joi.string().required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.empty": "Le mot de passe est requis.",
    "any.required": "Le mot de passe est obligatoire.",
  }),
  firstName: Joi.string().required().messages({
    "string.base": "Le prénom doit être une chaîne de caractères.",
    "string.empty": "Le prénom est requis.",
    "any.required": "Le prénom est obligatoire.",
  }),
  lastName: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
    "any.required": "Le nom est obligatoire.",
  }),
  birthDate: Joi.date().required().messages({
    "date.base": "La date de naissance doit être une date valide.",
    "any.required": "La date de naissance est obligatoire.",
  }),
  address: Joi.string().allow("", null).messages({
    "string.base": "L'adresse doit être une chaîne de caractères.",
  }),
  phone: Joi.string().allow("", null).messages({
    "string.base": "Le téléphone doit être une chaîne de caractères.",
  }),
  profilePicture: Joi.string().allow("", null).messages({
    "string.base": "La photo de profil doit être une chaîne de caractères.",
  }),
  registrationDate: Joi.date().allow("", null).messages({
    "date.base": "La date d'inscription doit être une date valide.",
  }),
  accountVerified: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'accountVerified' doit être un booléen.",
  }),
  interfacePreferences: Joi.string().allow("", null).messages({
    "string.base":
      "Les préférences d'interface doivent être une chaîne de caractères.",
  }),
  twoFactorAuthentication: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'twoFactorAuthentication' doit être un booléen.",
  }),
  helpPoints: Joi.number().allow(0).default(0).min(0).messages({
    "number.base": "Le champ 'helpPoints' doit être un nombre.",
    "number.min": "Le champ 'helpPoints' doit être supérieur ou égal à 0.",
  }),
  reducedMobility: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'reducedMobility' doit être un booléen.",
  }),
  activityLevel: Joi.string().allow("", null).default("active").messages({
    "string.base":
      "Le champ 'activityLevel' doit être une chaîne de caractères.",
  }),
  status: Joi.string().allow("", null).default("active").messages({
    "string.base": "Le champ 'status' doit être une chaîne de caractères.",
  }),
  latitude: Joi.string().allow("", null).default("active").messages({
    "string.base": "Le champ 'latitude' doit être une chaîne de caractères.",
  }),
  longitude: Joi.string().allow("", null).default("active").messages({
    "string.base": "Le champ 'longitude' doit être une chaîne de caractères.",
  }),
  isAdmin: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'isAdmin' doit être un booléen.",
  }),
});

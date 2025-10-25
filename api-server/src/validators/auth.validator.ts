import Joi from "joi";

export const signUpSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.empty": "L'email est requis.",
    "string.email": "L'email doit être une adresse email valide.",
    "any.required": "L'email est obligatoire.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.empty": "Le mot de passe est requis.",
    "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
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
  avatar: Joi.string().uri().allow("", null).optional().messages({
    "string.base": "L'URL de l'avatar doit être une chaîne de caractères.",
    "string.uri": "L'URL de l'avatar doit être une URL valide.",
  }),
  avatarFilename: Joi.string().allow("", null).optional().messages({
    "string.base":
      "Le nom de fichier de l'avatar doit être une chaîne de caractères.",
  }),
  birthDate: Joi.date().iso().required().messages({
    "date.base": "La date de naissance doit être une date valide.",
    "date.format": "La date de naissance doit être au format ISO (YYYY-MM-DD).",
    "any.required": "La date de naissance est obligatoire.",
  }),
  address: Joi.string().optional().messages({
    "string.base": "L'adresse doit être une chaîne de caractères.",
  }),
  city: Joi.string().optional().messages({
    "string.base": "La ville doit être une chaîne de caractères.",
  }),
  description: Joi.string().optional().messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  longitude: Joi.string().optional().messages({
    "string.base": "La longitude doit être une chaîne de caractères.",
  }),
  latitude: Joi.string().optional().messages({
    "string.base": "La latitude doit être une chaîne de caractères.",
  }),
  phone: Joi.string().optional().messages({
    "string.base": "Le numéro de téléphone doit être une chaîne de caractères.",
  }),
  isAdmin: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'isAdmin' doit être un booléen.",
  }),
});

export const signInSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.empty": "L'email est requis.",
    "string.email": "L'email doit être une adresse email valide.",
    "any.required": "L'email est obligatoire.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.empty": "Le mot de passe est requis.",
    "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
    "any.required": "Le mot de passe est obligatoire.",
  }),
});

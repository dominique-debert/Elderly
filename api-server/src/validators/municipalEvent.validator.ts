import Joi from "joi";

export const municipalEventSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Le titre doit être une chaîne de caractères.",
    "string.empty": "Le titre est requis.",
    "any.required": "Le titre est obligatoire.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  startDate: Joi.date().allow(null, "").messages({
    "date.base": "La date de début doit être une date valide.",
  }),
  endDate: Joi.date().allow(null, "").messages({
    "date.base": "La date de fin doit être une date valide.",
  }),
  location: Joi.string().allow(null, "").messages({
    "string.base": "Le lieu doit être une chaîne de caractères.",
  }),
  gpsCoordinates: Joi.string().allow(null, "").messages({
    "string.base": "Les coordonnées GPS doivent être une chaîne de caractères.",
  }),
  contact: Joi.string().allow(null, "").messages({
    "string.base": "Le contact doit être une chaîne de caractères.",
  }),
  officialLink: Joi.string().allow(null, "").messages({
    "string.base": "Le lien officiel doit être une chaîne de caractères.",
  }),
  organizerId: Joi.string().allow(null, "").messages({
    "string.base": "L'organisateur doit être une chaîne de caractères.",
  }),
});

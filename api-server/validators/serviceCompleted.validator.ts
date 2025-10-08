import Joi from "joi";

export const serviceCompletedSchema = Joi.object({
  completionDate: Joi.date().messages({
    "date.base": "La date de complétion doit être une date valide.",
  }),
  actualDuration: Joi.number().min(0).messages({
    "number.base": "La durée réelle doit être un nombre.",
    "number.min": "La durée réelle doit être supérieure ou égale à 0.",
  }),
  creatorComment: Joi.string().messages({
    "string.base":
      "Le commentaire du créateur doit être une chaîne de caractères.",
  }),
  helperComment: Joi.string().messages({
    "string.base":
      "Le commentaire de l'aide doit être une chaîne de caractères.",
  }),
  creatorRating: Joi.number().min(0).max(5).messages({
    "number.base": "La note du créateur doit être un nombre.",
    "number.min": "La note du créateur doit être supérieure ou égale à 0.",
    "number.max": "La note du créateur doit être inférieure ou égale à 5.",
  }),
  helperRating: Joi.number().min(0).max(5).messages({
    "number.base": "La note de l'aide doit être un nombre.",
    "number.min": "La note de l'aide doit être supérieure ou égale à 0.",
    "number.max": "La note de l'aide doit être inférieure ou égale à 5.",
  }),
  pointsExchanged: Joi.number().min(0).messages({
    "number.base": "Le nombre de points échangés doit être un nombre.",
    "number.min":
      "Le nombre de points échangés doit être supérieur ou égal à 0.",
  }),
  requestId: Joi.string().required().messages({
    "string.base": "L'ID de la demande doit être une chaîne de caractères.",
    "string.empty": "L'ID de la demande est requis.",
    "any.required": "L'ID de la demande est obligatoire.",
  }),
  helperId: Joi.string().required().messages({
    "string.base": "L'ID de l'aide doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'aide est requis.",
    "any.required": "L'ID de l'aide est obligatoire.",
  }),
});

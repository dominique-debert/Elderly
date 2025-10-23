import Joi from "joi";

export const exerciseProgramSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
  }),
  difficultyLevel: Joi.number().allow(0).messages({
    "number.base": "Le niveau de difficulté doit être un nombre.",
  }),
  adaptedForReducedMobility: Joi.boolean().default(false).messages({
    "boolean.base":
      "Le champ 'adaptedForReducedMobility' doit être un booléen.",
  }),
  durationMinutes: Joi.number().min(0).messages({
    "number.base": "La durée doit être un nombre.",
    "number.min": "La durée doit être supérieure ou égale à 0.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  videoLink: Joi.string().allow(null, "").messages({
    "string.base": "Le lien vidéo doit être une chaîne de caractères.",
  }),
  image: Joi.string().allow(null, "").messages({
    "string.base": "L'image doit être une chaîne de caractères.",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
    "string.empty": "L'ID de la catégorie est requis.",
    "any.required": "L'ID de la catégorie est obligatoire.",
  }),
});

import Joi from "joi";

export const skillSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base":
      "Le nom de la compétence doit être une chaîne de caractères.",
    "string.empty": "Le nom de la compétence est requis.",
    "any.required": "Le nom de la compétence est obligatoire.",
  }),
  description: Joi.string().allow("", null).messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  categoryId: Joi.string().allow(null, "").messages({
    "string.base": "L'ID de la catégorie doit être une chaîne de caractères.",
  }),
});

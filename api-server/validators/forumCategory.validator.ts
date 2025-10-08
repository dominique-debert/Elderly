import Joi from "joi";

export const forumCategorySchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.empty": "Le nom est requis.",
  }),
  description: Joi.string().allow(null, "").messages({
    "string.base": "La description doit être une chaîne de caractères.",
  }),
  parentCategoryId: Joi.string().allow(null, "").messages({
    "string.base":
      "L'ID de la catégorie parente doit être une chaîne de caractères.",
  }),
});

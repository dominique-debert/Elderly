import Joi from "joi";

export const userStatisticsSchema = Joi.object({
  servicesProvided: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de services rendus doit être un nombre.",
    "number.min": "Le nombre de services rendus ne peut pas être négatif.",
  }),
  servicesReceived: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de services reçus doit être un nombre.",
    "number.min": "Le nombre de services reçus ne peut pas être négatif.",
  }),
  activitiesParticipated: Joi.number().default(0).min(0).optional().messages({
    "number.base":
      "Le nombre d'activités auxquelles l'utilisateur a participé doit être un nombre.",
    "number.min":
      "Le nombre d'activités auxquelles l'utilisateur a participé ne peut pas être négatif.",
  }),
  activitiesOrganized: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre d'activités organisées doit être un nombre.",
    "number.min": "Le nombre d'activités organisées ne peut pas être négatif.",
  }),
  forumMessages: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de messages dans le forum doit être un nombre.",
    "number.min":
      "Le nombre de messages dans le forum ne peut pas être négatif.",
  }),
  totalHelpPoints: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre total de points d'aide doit être un nombre.",
    "number.min": "Le nombre total de points d'aide ne peut pas être négatif.",
  }),
  networkSize: Joi.number().default(0).min(0).optional().messages({
    "number.base": "La taille du réseau doit être un nombre.",
    "number.min": "La taille du réseau ne peut pas être négative.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
  }),
});

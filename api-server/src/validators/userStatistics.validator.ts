import Joi from "joi";

export const userStatisticsSchema = Joi.object({
  servicesProvided: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de services rendus doit être un nombre.",
  }),
  servicesReceived: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de services reçus doit être un nombre.",
  }),
  activitiesParticipated: Joi.number().default(0).min(0).optional().messages({
    "number.base":
      "Le nombre d'activités auxquelles l'utilisateur a participé doit être un nombre.",
  }),
  activitiesOrganized: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre d'activités organisées doit être un nombre.",
  }),
  forumMessages: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre de messages dans le forum doit être un nombre.",
  }),
  totalHelpPoints: Joi.number().default(0).min(0).optional().messages({
    "number.base": "Le nombre total de points d'aide doit être un nombre.",
  }),
  networkSize: Joi.number().default(0).min(0).optional().messages({
    "number.base": "La taille du réseau doit être un nombre.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
  }),
});

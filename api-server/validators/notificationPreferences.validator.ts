import Joi from "joi";

export const notificationPreferencesSchema = Joi.object({
  messageNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'messageNotification' doit être un booléen.",
  }),
  activityNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'activityNotification' doit être un booléen.",
  }),
  helpNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'helpNotification' doit être un booléen.",
  }),
  forumNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'forumNotification' doit être un booléen.",
  }),
  emailNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'emailNotification' doit être un booléen.",
  }),
  smsNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'smsNotification' doit être un booléen.",
  }),
  pushNotification: Joi.boolean().default(false).messages({
    "boolean.base": "Le champ 'pushNotification' doit être un booléen.",
  }),
  quietHoursStart: Joi.date().allow(null).messages({
    "date.base": "Le champ 'quietHoursStart' doit être une date valide.",
  }),
  quietHoursEnd: Joi.date().allow(null).messages({
    "date.base": "Le champ 'quietHoursEnd' doit être une date valide.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "Le champ 'userId' doit être une chaîne de caractères.",
    "string.empty": "Le champ 'userId' est requis.",
    "any.required": "Le champ 'userId' est obligatoire.",
  }),
});

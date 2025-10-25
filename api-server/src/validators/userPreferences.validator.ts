import Joi from "joi";

export const userPreferencesSchema = Joi.object({
  id: Joi.string().optional().messages({
    "string.base": "L'ID doit être une chaîne de caractères.",
  }),
  userId: Joi.string().required().messages({
    "string.base": "L'ID de l'utilisateur doit être une chaîne de caractères.",
    "string.empty": "L'ID de l'utilisateur est requis.",
    "any.required": "L'ID de l'utilisateur est obligatoire.",
  }),
  notificationMessages: Joi.boolean().optional().messages({
    "boolean.base": "notificationMessages doit être un booléen.",
  }),
  notificationForum: Joi.boolean().optional().messages({
    "boolean.base": "notificationForum doit être un booléen.",
  }),
  notificationActivities: Joi.boolean().optional().messages({
    "boolean.base": "notificationActivities doit être un booléen.",
  }),
  emailUpdates: Joi.boolean().optional().messages({
    "boolean.base": "emailUpdates doit être un booléen.",
  }),
  smsUpdates: Joi.boolean().optional().messages({
    "boolean.base": "smsUpdates doit être un booléen.",
  }),
  frequencyInstant: Joi.boolean().required().messages({
    "boolean.base": "frequencyInstant doit être un booléen.",
    "any.required": "frequencyInstant est obligatoire.",
  }),
  frequencyDaily: Joi.boolean().optional().messages({
    "boolean.base": "frequencyDaily doit être un booléen.",
  }),
  fontSize: Joi.string().optional().messages({
    "string.base": "fontSize doit être une chaîne de caractères.",
  }),
  highContrast: Joi.boolean().optional().messages({
    "boolean.base": "highContrast doit être un booléen.",
  }),
  statusVisibilityEverybody: Joi.boolean().optional().messages({
    "boolean.base": "statusVisibilityEverybody doit être un booléen.",
  }),
  statusVisibilityFriends: Joi.boolean().optional().messages({
    "boolean.base": "statusVisibilityFriends doit être un booléen.",
  }),
  statusVisibilityNoOne: Joi.boolean().optional().messages({
    "boolean.base": "statusVisibilityNoOne doit être un booléen.",
  }),
  messagesFromEverybody: Joi.boolean().optional().messages({
    "boolean.base": "messagesFromEverybody doit être un booléen.",
  }),
  messagesFromFriends: Joi.boolean().optional().messages({
    "boolean.base": "messagesFromFriends doit être un booléen.",
  }),
  messagesFromNoOne: Joi.boolean().optional().messages({
    "boolean.base": "messagesFromNoOne doit être un booléen.",
  }),
  dataSharing: Joi.boolean().optional().messages({
    "boolean.base": "dataSharing doit être un booléen.",
  }),
});

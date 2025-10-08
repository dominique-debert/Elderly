import Joi from "joi";

export const trustCircleSchema = Joi.object({
  userId: Joi.string().required(),
  contactId: Joi.string().required(),
  dateAdded: Joi.date().required(),
  accessLevel: Joi.string().required(),
});

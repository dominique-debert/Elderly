import Joi from "joi";

export const projectMemberSchema = Joi.object({
  projectId: Joi.string().required(),
  userId: Joi.string().required(),
  role: Joi.string().required(),
  joinDate: Joi.date().required(),
});

import Joi from "joi";

export const projectTaskSchema = Joi.object({
  projectId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ""),
  creationDate: Joi.date().required(),
  dueDate: Joi.date().allow(null),
  status: Joi.string().allow(null, ""),
  assigneeId: Joi.string().allow(null, ""),
});

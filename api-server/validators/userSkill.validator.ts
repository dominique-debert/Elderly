import Joi from "joi";

export const userSkillSchema = Joi.object({
  userId: Joi.string().required(),
  skillId: Joi.string().required(),
  level: Joi.number().allow(null, ""),
});

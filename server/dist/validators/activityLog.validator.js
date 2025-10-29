import Joi from 'joi';
export const activitySchema = Joi.object({
    userId: Joi.string().allow(null, ''),
    actionType: Joi.string().allow(null, ''),
    description: Joi.string().allow(null, ''),
    ipAddress: Joi.string().allow(null, ''),
    device: Joi.string().allow(null, ''),
});
export const idParamActivitySchema = Joi.object({
    id: Joi.string().required()
});

import Joi from 'joi';
export const moodSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().allow(null, '').optional(),
    valence: Joi.string().valid('positive', 'negative', 'neutre').required(),
    intensity: Joi.number().integer().min(1).max(5).required(),
    color: Joi.string().pattern(/^#[0-9A-Fa-f]{6}$/).required()
});
export const idParamMoodSchema = Joi.object({
    id: Joi.number().required()
});

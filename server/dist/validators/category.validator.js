import Joi from 'joi';
export const categorySchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(100)
        .messages({
        'string.base': 'Le nom doit être une chaîne de caractères.',
        'string.empty': 'Le nom est requis.',
        'string.min': 'Le nom doit contenir au moins 2 caractères.',
        'string.max': 'Le nom doit contenir au maximum 100 caractères.'
    }),
    categoryName: Joi.string()
        .min(2)
        .max(100)
        .messages({
        'string.base': 'Le nom doit être une chaîne de caractères.',
        'string.empty': 'Le nom est requis.',
        'string.min': 'Le nom doit contenir au moins 2 caractères.',
        'string.max': 'Le nom doit contenir au maximum 100 caractères.'
    })
        .when('name', {
        is: Joi.exist(),
        then: Joi.optional(),
        otherwise: Joi.required().messages({
            'any.required': 'Le nom est obligatoire.'
        })
    }),
    description: Joi.string()
        .max(255)
        .allow('')
        .optional()
        .messages({
        'string.base': 'La description doit être une chaîne de caractères.',
        'string.max': 'La description ne peut pas dépasser 255 caractères.'
    }),
    chapterId: Joi.number()
        .required()
        .messages({
        'number.base': 'Le chapitre est requis.',
        'any.required': 'Le chapitre est obligatoire.'
    }),
    typeId: Joi.number()
        .required()
        .messages({
        'number.base': 'Le type est requis.',
        'any.required': 'Le type est obligatoire.'
    })
});

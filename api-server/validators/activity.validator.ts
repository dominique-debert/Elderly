import Joi from 'joi';

export const activitySchema = Joi.object({
  creatorId: Joi.string().allow(null, ''),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  startDate: Joi.date().required(),
  endDate: Joi.date().allow(null, ''),
  location: Joi.string().allow(null, ''),
  gpsCoordinates: Joi.string().allow(null, ''),
  maxSpots: Joi.number().allow(0),
  categoryId: Joi.string().allow(null, ''),
  recurring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, ''),
  reducedMobilityAccess: Joi.boolean().required().default(false),
  difficultyLevel: Joi.number().allow(0).min(0).max(3),
  cost: Joi.number().allow(0),
  status: Joi.string().allow(null, ''),
  weatherRequirements: Joi.string().allow(null, ''),
  transportOptions: Joi.string().allow(null, '')
});

export const idParamActivitySchema = Joi.object({
  id: Joi.string().required()
});

export const activityWithCategorySchema = Joi.object({
  id: Joi.string().required(),
  creatorId: Joi.string().required(),
  title: Joi.string().required().max(255),
  description: Joi.string().allow(null, ''),
  startDate: Joi.date().required(),
  endDate: Joi.date().allow(null, ''),
  location: Joi.string().allow(null, ''),
  gpsCoordinates: Joi.string().allow(null, ''),
  maxSpots: Joi.number().allow(0),
  categoryId: Joi.string().required(),
  recurring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, ''),
  reducedMobilityAccess: Joi.boolean().required().default(false),
  cost: Joi.number().allow(0),
  status: Joi.string().allow(null, ''),
  weatherRequirements: Joi.string().allow(null, ''),
  transportOptions: Joi.string().allow(null, ''),
  activityCategory: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    activity: Joi.array().items(Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
    }))
  })
});
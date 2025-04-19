import Joi from 'joi';

export const helpRequestSchema = Joi.object({
  creatorId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  neededDate: Joi.date().required(),
  estimatedDuration: Joi.number().default(0).min(0),
  location: Joi.string().allow(null, ''),
  gpsCoordinates: Joi.string().allow(null, ''),
  categoryId: Joi.string().required(),
  recurring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, ''),
  status: Joi.string().allow(null, ''),
  pointsOffered: Joi.number().default(0).min(0)
});

export const idParamHelpRequestSchema = Joi.object({
  id: Joi.string().required()
});

// creatorId            String             @db.VarChar(255)
// title                String             @db.VarChar(255)
// description          String?
// neededDate           DateTime          @map("needed_date") @db.Timestamp(6)
// estimatedDuration    Int?               @map("estimated_duration")
// location             String?            @db.VarChar(255)
// gpsCoordinates       String?            @map("gps_coordinates")
// categoryId           String             @map("category_id")
// recurring            Boolean?           @default(false)
// frequency            String?            @db.VarChar(50)
// status               String?            @db.VarChar(50)
// pointsOffered        Int?               @default(0)
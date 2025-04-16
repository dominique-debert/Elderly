import Joi from 'joi';

export const helpRequestSchema = Joi.object({
  creatorId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  neededDate: Joi.date().allow(null),
  estimatedDuration: Joi.number().default(0),
  location: Joi.string().allow(null, ''),
  gpsCoordinates: Joi.string().allow(null, ''),
  categoryId: Joi.string().allow(null, ''),
  reccuring: Joi.boolean().default(false),
  frequency: Joi.string().allow(null, ''),
  status: Joi.string().allow(null, ''),
  pointsOffered: Joi.number().default(0)
});

export const idParamHelpRequestSchema = Joi.object({
  id: Joi.string().required()
});

// title             String             @db.VarChar(255)
// description       String?
// creationDate      DateTime           @default(now()) @map("creation_date") @db.Timestamp(6)
// neededDate        DateTime?          @map("needed_date") @db.Timestamp(6)
// estimatedDuration Int?               @map("estimated_duration")
// location          String?            @db.VarChar(255)
// gpsCoordinates    String?            @map("gps_coordinates")
// categoryId        String?            @map("category_id")
// recurring         Boolean?           @default(false)
// frequency         String?            @db.VarChar(50)
// status            String?            @db.VarChar(50)
// points_offered    Int?               @default(0)
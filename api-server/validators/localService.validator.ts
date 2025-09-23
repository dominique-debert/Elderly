import Joi from 'joi';

export const localServiceSchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().allow(null, ''),
  address: Joi.string().required(),
  gpsCoordinates: Joi.string().allow(null, ''),
  phone: Joi.string().allow(null, ''),
  hours: Joi.string().allow(null, ''),
  website: Joi.string().allow(null, ''),
  seniorFriendly: Joi.boolean().required().default(false),
});

export const idParamLocalServiceSchema = Joi.object({
  id: Joi.string().required()
});

// name            String?          @db.Text
// categoryId      String?          @map("category_id") @db.Text
// address         String?          @db.Text
// gpsCoordinates  String?          @map("gps_coordinates")
// phone           String?          @db.Text
// website         String?          @db.Text
// description     String?
// hours           String?          @db.Text
// seniorFriendly  Boolean?         @map("senior_friendly")
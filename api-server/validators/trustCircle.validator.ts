import Joi from 'joi';

export const trustCircleSchema = Joi.object({
  userId: Joi.string().required(),
  contactId: Joi.string().required(),
  dateAdded: Joi.date().required(),
  accessLevel: Joi.string().required(),
});

export const idParamTrustCircleSchema = Joi.object({
  id: Joi.string().required()
});

// userId       String    @map("user_id")
// contactId    String    @map("contact_id")
// dateAdded    DateTime  @map("date_added") @db.Date
// accessLevel String    @map("access_level") @db.Text
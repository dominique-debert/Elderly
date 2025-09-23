import Joi from 'joi';

export const satisfactionSurveySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('', null),
  startDate: Joi.date(),
  endDate: Joi.date(),
  active: Joi.boolean().default(false)
});

export const idParamSatisfactionSurveySchema = Joi.object({
  id: Joi.string().required()
});

// id             String           @id @default(cuid())
// title          String           @db.Text
// description    String?
// startDate      DateTime?        @map("start_date") @db.Timestamp(6)
// endDate        DateTime?        @map("end_date") @db.Timestamp(6)
// active         Boolean?         @default(false)
// createdAt      DateTime         @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt      DateTime?        @map("updated_at") @db.Timestamp(6)
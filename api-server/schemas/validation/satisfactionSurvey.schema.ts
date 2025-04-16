import Joi from 'joi';

export const satisfactionSurveySchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().allow('', null),
  startDate: Joi.date(),
  endDate: Joi.date(),
  active: Joi.boolean().default(false)
});

export const idParamSatisfactionSurveySchema = Joi.object({
  id: Joi.string().required()
});

// title          String           @db.Text
// description    String?
// startDate      DateTime?        @map("start_date") @db.Timestamp(6)
// endDate        DateTime?        @map("end_date") @db.Timestamp(6)
// active         Boolean?         @default(false)
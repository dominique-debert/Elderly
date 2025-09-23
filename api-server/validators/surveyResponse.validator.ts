// surveyId           String             @map("survey_id")
// userId             String             @map("user_id")
// responses          Json?
// response_date      DateTime?          @default(now()) @db.Timestamp(6)
// createdAt          DateTime           @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt          DateTime?          @map("updated_at") @db.Timestamp(6)
// satisfactionSurvey satisfactionSurvey @relation(fields: [surveyId], references: [id], onDelete: Cascade, onUpdate: NoAction)
// user               user               @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)

import Joi from 'joi';

export const surveyResponseSchema = Joi.object({
  surveyId: Joi.string().required(),
  userId: Joi.string().required(),
  responses: Joi.object().allow(null, ''),
  responseDate: Joi.date().allow(null, ''),
});

export const idParamSurveyResponseSchema = Joi.object({
  id: Joi.string().required()
});
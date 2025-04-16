import Joi from 'joi';

export const registrationSchema = Joi.object({
  activityId: Joi.string().allow(null, ''),
  userId: Joi.string().allow(null, ''),
  registrationDate: Joi.date().allow(null, ''),
  status: Joi.string().allow(null, ''),
  attendanceConfirmed: Joi.boolean().default(false),
});

export const idParamrRegistrationSchema = Joi.object({
  id: Joi.string().required()
});

// activityId          String    @map("activity_id")
// userId              String    @map("user_id")
// registrationDate    DateTime  @map("registration_date") @db.Timestamp(6)
// status              String?   @db.VarChar(50)
// attendanceConfirmed Boolean?  @default(false) @map("attendance_confirmed")
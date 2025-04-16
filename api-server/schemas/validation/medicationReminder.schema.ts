import Joi from 'joi';

export const medicationReminderSchema = Joi.object({
  medicationName: Joi.string().required(),
  userId: Joi.string().required(),
  dosage: Joi.string().allow(null, ''),
  morningReminderTime: Joi.date(),
  noonReminderTime: Joi.date(),
  eveningReminderTime: Joi.date(),
  nightReminderTime: Joi.date(),
  daysOfWeek: Joi.string().allow(null, ''),
  instructions: Joi.string().allow(null, ''),
  active: Joi.boolean().default(true),
  startDate: Joi.string().allow(null, ''),
  endDate: Joi.string().allow(null, ''),
});

export const idParamMedicationReminderSchema = Joi.object({
  id: Joi.string().required()
});

// medicationName      String    @map("medication_name") @db.VarChar(255)
// userId              String    @map("user_id")
// dosage              String?   @db.VarChar(100)
// morningReminderTime DateTime? @map("morning_reminder_time") @db.Time(6)
// noonReminderTime    DateTime? @map("noon_reminder_time") @db.Time(6)
// eveningReminderTime DateTime? @map("evening_reminder_time") @db.Time(6)
// nightReminderTime   DateTime? @map("night_reminder_time") @db.Time(6)
// daysOfWeek          String?   @map("days_of_week") @db.VarChar(50)
// instructions        String?
// active              Boolean?  @default(true)
// startDate           DateTime? @map("start_date") @db.Timestamp(6)
// endDate             DateTime? @map("end_date") @db.Timestamp(6)
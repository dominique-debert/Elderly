import Joi from 'joi';

export const healthIndicatorSchema = Joi.object({
  userId: Joi.string().required(),
  recordingDate: Joi.date().required(),
  stepCount: Joi.number().default(0),
  sleepDurationMinutes: Joi.number().default(0),
  sleepQuality: Joi.number().default(0),
  weight: Joi.number().precision(2).default(0),
  moodId: Joi.number().required(),
  notes: Joi.string().allow(null, ''),
});

export const idParamHealthIndicatorSchema = Joi.object({
  id: Joi.string().required()
});

// userId               String   @map("user_id")
// recordingDate        DateTime  @map("recording_date") @db.Date
// stepCount            Int?      @map("step_count")
// sleepDurationMinutes Int?      @map("sleep_duration_minutes")
// sleepQuality         Int?      @map("sleep_quality")
// weight               Float?
// mood                 String?   @db.VarChar(10)
// notes                String?
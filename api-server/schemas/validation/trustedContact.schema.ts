import Joi from 'joi';

export const trustedContactSchema = Joi.object({
  userId: Joi.string().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().required(),
  relationship: Joi.string(),
  shareMedications: Joi.boolean().default(false),
  shareHealthIndicators: Joi.boolean().default(false),
  shareWellnessActivities: Joi.boolean().default(false),
  emergencyAlerts: Joi.boolean().default(false),
});

export const idParamTrustedContactSchema = Joi.object({
  id: Joi.string().required()
});

// userId                  String    @map("user_id")
// lastName                String    @map("last_name") @db.Text
// firstName               String    @map("first_name") @db.Text
// email                   String?   @unique @db.Text
// phone                   String    @db.Text
// relationship            String?   @db.Text
// shareMedications        Boolean   @default(false) @map("share_medications")
// shareHealthIndicators   Boolean   @default(false) @map("share_health_indicators")
// shareWellnessActivities Boolean   @default(false) @map("share_wellness_activities")
// emergencyAlerts         Boolean   @default(false) @map("emergency_alerts")
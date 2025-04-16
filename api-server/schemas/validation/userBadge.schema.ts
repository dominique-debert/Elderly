import Joi from "joi"

export const userBadgeSchema = Joi.object({
  userId: Joi.string().required(),
  badgeId: Joi.string().required(),
  achievementDate: Joi.date().required(),
})

export const idParamUserBadgeSchema = Joi.object({
  id: Joi.string().required()
});

// userId          String    @map("user_id")
// badgeId         String    @unique @map("badge_id")
// achievementDate DateTime  @map("achievement_date") @db.Timestamp(6)
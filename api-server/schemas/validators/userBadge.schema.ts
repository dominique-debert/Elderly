import Joi from 'joi';

export const userBadgeSchema = Joi.object({
  userId: Joi.string().required(),
  badgeId: Joi.string().required(),
  achievementDate: Joi.date().required(),
});

export const idParamUserBadgeSchema = Joi.object({
  id: Joi.string().required()
});

// id              String    @id @default(cuid())
// userId          String    @map("user_id")
// badgeId         String    @map("badge_id")
// achievementDate DateTime  @map("achievement_date") @db.Timestamp(6)
// createdAt       DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt       DateTime? @map("updated_at") @db.Timestamp(6)
// badge           badge[]
// user            user      @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)
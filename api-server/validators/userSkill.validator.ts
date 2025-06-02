import Joi from 'joi';

export const userSkillSchema = Joi.object({
  userId: Joi.string().required(),
  skillId: Joi.string().required(),
  level: Joi.number().allow(null, ''),
});

export const idParamUserSkillSchema = Joi.object({
  id: Joi.string().required()
});

// id        String    @id @default(cuid())
// userId    String    @map("user_id")
// skillId   String    @map("skill_id")
// level     Int?
// createdAt DateTime  @default(now()) @db.Timestamp(6)
// updatedAt DateTime? @map("updated_at") @db.Timestamp(6)
// skill     skill     @relation(fields: [skillId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// user      user      @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)
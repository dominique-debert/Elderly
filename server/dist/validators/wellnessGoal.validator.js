import Joi from 'joi';
export const wellnessGoalSchema = Joi.object({
    id: Joi.string(),
    userId: Joi.string().required(),
    title: Joi.string().required(),
    categoryId: Joi.string().required(),
    targetValue: Joi.number().required(),
    unit: Joi.string().required(),
    frequency: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    active: Joi.boolean().required(),
});
export const idParamWellnessGoalSchema = Joi.object({
    id: Joi.string().required()
});
// id                   String                 @id @default(cuid())
// userId               String                 @map("user_id")
// title                String                 @db.Text
// categoryId           String                 @map("category_id")
// targetValue          Int                    @map("target_value")
// unit                 String                 @db.Text
// frequency            String                 @db.Text
// startDate            DateTime               @map("start_date") @db.Date
// endDate              DateTime               @map("end_date") @db.Date
// active               Boolean                @default(false)
// createdAt            DateTime               @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt            DateTime?              @map("updated_at") @db.Timestamp(6)
// wellnessGoalProgress wellnessGoalProgress[]
// user                 user?                  @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)
// wellnessCategory     wellnessCategory?      @relation(fields: [categoryId], references: [id])

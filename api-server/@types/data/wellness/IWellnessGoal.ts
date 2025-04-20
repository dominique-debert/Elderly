export default interface IWellnessGoal {
  id: string
  userId: string
  title: string
  categoryId: string
  targetValue: number
  unit: string
  frequency: string
  startDate: Date
  endDate: Date
  active: boolean
}

// id                   String                 @id @default(cuid())
// userId               String                 @map("user_id")
// title                String                 @db.Text
// categoryId           String?                @map("category_id")
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
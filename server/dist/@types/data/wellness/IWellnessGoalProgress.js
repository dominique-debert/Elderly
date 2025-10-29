export {};
// id            String       @id @default(cuid())
// goalId        String       @map("goal_id")
// recordingDate DateTime     @map("recording_date") @db.Date
// achievedValue Int          @map("achieved_value")
// goalAchieved  Boolean      @default(false) @map("goal_achieved")
// createdAt     DateTime     @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt     DateTime?    @map("updated_at") @db.Timestamp(6)
// wellnessGoal  wellnessGoal @relation(fields: [goalId], references: [id], onDelete: Cascade, onUpdate: NoAction)

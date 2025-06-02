export default interface IUserBadge {
  id?: string
  userId: string
  badgeId: string
  achievementDate: Date
  createdAt?: Date
  updatedAt?: Date
}

// id              String    @id @default(cuid())
// userId          String    @map("user_id")
// badgeId         String    @map("badge_id")
// achievementDate DateTime  @map("achievement_date") @db.Timestamp(6)
// createdAt       DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt       DateTime? @map("updated_at") @db.Timestamp(6)
// badge           badge[]
// user            user      @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)
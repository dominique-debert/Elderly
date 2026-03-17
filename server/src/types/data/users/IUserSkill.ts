export interface IUserSkill {
  id?: string;
  userId: string;
  skillId: string;
  level?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// id        String    @id @default(cuid())
// userId    String    @map("user_id")
// skillId   String    @map("skill_id")
// level     Int?
// createdAt DateTime  @default(now()) @db.Timestamp(6)
// updatedAt DateTime? @map("updated_at") @db.Timestamp(6)
// skill     skill     @relation(fields: [skillId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// user      user      @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)

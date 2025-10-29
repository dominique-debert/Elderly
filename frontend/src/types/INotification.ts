export interface INotification {
  id?: string
  userId: string
  type: string
  content: string
  read?: boolean
  actionLink?: string
  createdAt?: string
  updatedAt?: string
}

// id         String    @id @default(cuid())
// userId     String    @map("user_id")
// type       String    @db.Text
// content    String
// read       Boolean?
// actionLink String?   @map("action_link") @db.Text
// createdAt  DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt  DateTime? @map("updated_at") @db.Timestamp(6)
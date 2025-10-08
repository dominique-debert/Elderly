export default interface IVideoCall {
  id?: string
  conversationId: string
  initiatorId: string
  startDate: Date
  endDate: Date
  status: string
  createdAt?: string
  updatedAt?: string
}

// id             String        @id @default(cuid())
// conversationId String        @map("conversation_id")
// initiatorId    String        @map("initiator_id")
// startDate      DateTime      @map("start_date") @db.Timestamp(6)
// endDate        DateTime      @map("end_date") @db.Timestamp(6)
// status         String        @db.Text
// createdAt      DateTime      @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt      DateTime?     @map("updated_at") @db.Timestamp(6)
// conversation   conversation? @relation(fields: [conversationId], references: [id], onDelete: NoAction, onUpdate: NoAction)
// user           user?         @relation(fields: [initiatorId], references: [id], onDelete: NoAction, onUpdate: NoAction)
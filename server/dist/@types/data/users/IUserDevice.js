export {};
// id                String    @id @default(cuid())
// userId            String    @map("user_id")
// deviceType        String    @map("device_type") @db.Text
// deviceName        String?   @map("device_name") @db.Text
// operatingSystem   String?   @map("operating_system") @db.Text
// notificationToken String    @map("notification_token") @db.Text
// lastConnection    DateTime  @map("last_connection") @db.Timestamp(6)
// createdAt         DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt         DateTime? @map("updated_at") @db.Timestamp(6)
// user              user?     @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction)

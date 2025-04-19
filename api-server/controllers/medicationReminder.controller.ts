

// userId              String    @map("user_id")
// medicationName      String    @map("medication_name") @db.Text
// dosage              String?   @db.Text
// morningReminderTime DateTime? @map("morning_reminder_time") @db.Time(6)
// noonReminderTime    DateTime? @map("noon_reminder_time") @db.Time(6)
// eveningReminderTime DateTime? @map("evening_reminder_time") @db.Time(6)
// nightReminderTime   DateTime? @map("night_reminder_time") @db.Time(6)
// daysOfWeek          String?   @map("days_of_week") @db.Text
// instructions        String?
// active              Boolean?  @default(true)
// startDate           DateTime? @map("start_date") @db.Timestamp(6)
// endDate             DateTime? @map("end_date") @db.Timestamp(6)
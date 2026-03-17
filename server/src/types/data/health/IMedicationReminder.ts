export interface IMedicationReminder {
  id?: string;
  userId: string;
  medicationName: string;
  dosage?: string;
  morningReminderTime?: Date;
  noonReminderTime?: Date;
  eveningReminderTime?: Date;
  nightReminderTime?: Date;
  daysOfWeek?: string;
  instructions?: string;
  active?: boolean;
  startDate?: Date;
  endDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

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
// createdAt           DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt           DateTime? @map("updated_at") @db.Timestamp(6)

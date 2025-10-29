export interface IMedicationReminder {
  user_id: string;
  medication_name: string;
  dosage?: string;
  morning_reminder_time?: Date;
  noon_reminder_time?: Date;
  evening_reminder_time?: Date;
  night_reminder_time?: Date;
  days_of_week?: string;
  instructions?: string;
  active?: boolean;
  start_date?: Date;
  end_date?: Date;
}

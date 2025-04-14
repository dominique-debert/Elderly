export default interface INotificationPreferences {
  user_id: string
  message_notification?: boolean
  activity_notification?: boolean
  help_notification?: boolean
  forum_notification?: boolean
  email_notification?: boolean
  sms_notification?: boolean
  push_notification?: boolean
  quiet_hours_start?: Date
  quiet_hours_end?: Date
}
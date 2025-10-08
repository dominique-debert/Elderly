export default interface INotificationPreferences {
  userId: string
  messageNotification?: boolean
  activityNotification?: boolean
  helpNotification?: boolean
  forumNotification?: boolean
  emailNotification?: boolean
  smsNotification?: boolean
  pushNotification?: boolean
  quietHoursStart?: Date
  quietHoursEnd?: Date
  createdAt?: Date
  updatedAt?: Date
}

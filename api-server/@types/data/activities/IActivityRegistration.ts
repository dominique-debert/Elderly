export default interface IActivityRegistration {
  activityId: string
  userId: string
  registrationDate: Date
  status?: string
  attendanceConfirmed?: boolean
}
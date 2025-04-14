export default interface IActivityRegistration {
  activity_id: string
  user_id: string
  registration_date: Date
  status?: string
  attendance_confirmed?: boolean
}
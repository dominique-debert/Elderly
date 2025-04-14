export default interface IActivityLog {
  user_id?: string
  action_type?: string
  description?: string
  action_date?: Date
  ip_address?: string
  device?: string
}
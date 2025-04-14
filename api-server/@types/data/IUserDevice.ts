export default interface IUserDevice {
  user_id: string
  device_type: string
  device_name?: string
  operating_system?: string
  notification_token: string
  last_connection: Date
}
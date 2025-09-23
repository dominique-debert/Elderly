export default interface IActivityLog {
  userId?: string
  actionType?: string
  description?: string
  actionDate?: Date
  ipAddress?: string
  device?: string
}
export default interface INotification {
  user_id: string
  type: string
  content: string
  read?: boolean
  action_link?: string
}
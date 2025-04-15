export default interface IMessage {
  conversation_id: string
  sender_id: string
  content: string
  send_date: Date
  type?: string
  read?: boolean 
}
export default interface IconversationParticipant {
  conversation_id: string
  user_id: string
  date_added: Date
  administator?: boolean
  last_access: Date
}
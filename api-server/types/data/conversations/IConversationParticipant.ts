export default interface IConversationParticipant {
  conversationId: string
  userId: string
  dateAdded: Date
  administrator?: boolean
  lastAccess: Date
}
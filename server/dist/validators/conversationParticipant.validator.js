import Joi from "joi";
export const conversationParticipantSchema = Joi.object({
    conversationId: Joi.string().required(),
    userId: Joi.string().required(),
    dateAdded: Joi.date().allow(null),
    administrator: Joi.boolean().default(false),
    lastAccess: Joi.date().required()
});
export const idParamConversationParticipantSchema = Joi.object({
    id: Joi.string().required()
});
// conversationId String       @map("conversation_id")
// userId         String       @map("user_id")
// dateAdded      DateTime?    @map("date_added") @db.Timestamptz(6)
// administrator  Boolean?
// lastAccess     DateTime     @default(now()) @map("last_access") @db.Timestamp(6)

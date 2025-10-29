import Joi from 'joi';
export const messageSchema = Joi.object({
    conversationId: Joi.string().required(),
    senderId: Joi.string().required(),
    content: Joi.string().required(),
    sendDate: Joi.date().required(),
    type: Joi.string().allow(null, ''),
    read: Joi.boolean().default(false),
});
export const idParamMessageSchema = Joi.object({
    id: Joi.string().required()
});
// conversationId String        @map("conversation_id")
// senderId       String        @map("sender_id")
// content        String
// sendDate       DateTime      @map("send_date") @db.Timestamp(6)
// type           String?       @db.VarChar(50)
// read           Boolean?      @default(false)

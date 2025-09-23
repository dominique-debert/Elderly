import Joi from 'joi';

export const videoCallSchema = Joi.object({
  conversationId: Joi.string().required(),
  initiatorId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  status: Joi.string().required(),
})

export const idParamVideoCallSchema = Joi.object({
  id: Joi.string().required()
})

// id             String        @id @default(cuid())
// conversationId String        @map("conversation_id")
// initiatorId    String        @map("initiator_id")
// startDate      DateTime      @map("start_date") @db.Timestamp(6)
// endDate        DateTime      @map("end_date") @db.Timestamp(6)
// status         String        @db.Text
// createdAt      DateTime      @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt      DateTime?     @map("updated_at") @db.Timestamp(6)
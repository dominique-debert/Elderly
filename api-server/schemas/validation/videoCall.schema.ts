import Joi from "joi"

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

// conversationId String        @map("conversation_id")
// initiatorId    String        @map("initiator_id")
// startDate      DateTime      @map("start_date") @db.Timestamp(6)
// endDate        DateTime      @map("end_date") @db.Timestamp(6)
// status         String        @db.Text
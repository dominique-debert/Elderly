import Joi from "joi";
export const notificationSchema = Joi.object({
    userId: Joi.string().required(),
    type: Joi.string().required(),
    content: Joi.string().required(),
    read: Joi.boolean().default(false),
    actionLink: Joi.string().allow(null, ''),
});
export const idParamNotificationSchema = Joi.object({
    id: Joi.string().required()
});
// userId               String    @id @map("user_id")
// type       String    @db.Text
// content    String
// read       Boolean?
// actionLink String?   @map("action_link") @db.Text

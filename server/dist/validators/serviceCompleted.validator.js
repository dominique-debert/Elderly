import Joi from 'joi';
export const serviceCompletedSchema = Joi.object({
    requestId: Joi.string().required(),
    helperId: Joi.string().required(),
    completionDate: Joi.date(),
    actualDuration: Joi.number(),
    creatorComment: Joi.string(),
    helperComment: Joi.string(),
    creatorRating: Joi.number(),
    helperRating: Joi.number(),
    pointsExchanged: Joi.number(),
});
export const idParamServiceCompletedSchema = Joi.object({
    id: Joi.string().required()
});
// requestId       String      @map("request_id")
// helperId        String      @map("helper_id")
// completionDate  DateTime    @map("completion_date") @db.Timestamp(6)
// actualDuration  Int?        @map("actual_duration")
// creatorComment  String?     @map("creator_comment")
// helperComment   String?     @map("helper_comment")
// creatorRating   Int?        @map("creator_rating")
// helperRating    Int?        @map("helper_rating")
// pointsExchanged Int?        @map("points_exchanged")

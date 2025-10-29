import Joi from 'joi';
export const serviceRatingSchema = Joi.object({
    serviceId: Joi.string().required(),
    userId: Joi.string().required(),
    rating: Joi.number().required(),
    comment: Joi.string(),
    ratingDate: Joi.date(),
});
export const idParamServiceRatingSchema = Joi.object({
    id: Joi.string().required()
});
// serviceId    String       @map("service_id")
// userId       String       @map("user_id")
// rating       Int
// comment      String?
// ratingDate   DateTime?    @map("rating_date") @db.Timestamp(6)

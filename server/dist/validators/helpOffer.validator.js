import Joi from 'joi';
export const helpOfferSchema = Joi.object({
    requestId: Joi.string().required(),
    helperId: Joi.string().required(),
    offerDate: Joi.date().required(),
    message: Joi.string().allow(null, ''),
    status: Joi.string().allow(null, ''),
});
export const idParamHelpOfferSchema = Joi.object({
    id: Joi.string().required()
});
// requestId   String      @map("request_id")
// helperId    String      @map("helper_id")
// offerDate   DateTime    @map("offer_date") @db.Timestamp(6)
// message     String?
// status      String?     @db.VarChar(50)

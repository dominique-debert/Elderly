import Joi from "joi";
export const municipalEventSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    startDate: Joi.date().allow(null, ''),
    endDate: Joi.date().allow(null, ''),
    location: Joi.string().allow(null, ''),
    gpsCoordinates: Joi.string().allow(null, ''),
    organizer: Joi.string().allow(null, ''),
    contact: Joi.string().allow(null, ''),
    officialLink: Joi.string().allow(null, ''),
});
export const idParamMunicipalEventSchema = Joi.object({
    id: Joi.string().required()
});
// title          String    @db.Text
// description    String?
// startDate      DateTime  @map("start_date") @db.Timestamp(6)
// endDate        DateTime  @map("end_date") @db.Timestamp(6)
// location       String    @db.Text
// gpsCoordinates String?   @map("gps_coordinates")
// organizer      String?   @db.Text
// contact        String?   @db.Text
// officialLink   String?   @map("official_link") @db.Text

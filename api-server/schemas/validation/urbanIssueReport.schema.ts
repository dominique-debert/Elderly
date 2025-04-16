import Joi from "joi"

export const urbanIssueSchema = Joi.object({
  userId: Joi.string().required(),
  categoryId: Joi.string(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  gpsCoordinates: Joi.string(),
  reportDate: Joi.date().required(),
  status: Joi.string(),
  cityReference: Joi.string()
})

export const idParamUrbanIssueSchema = Joi.object({
  id: Joi.string().required()
});

// userId         String         @map("user_id")
// categoryId     String?        @map("category_id")
// description    String
// address        String         @db.Text
// gpsCoordinates String?        @map("gps_coordinates")
// reportDate     DateTime       @map("report_date") @db.Timestamp(6)
// status         String?        @db.Text
// cityReference  String?        @map("city_reference") @db.Text
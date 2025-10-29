import Joi from 'joi';
export const urbanIssueReportSchema = Joi.object({
    userId: Joi.string().required(),
    categoryId: Joi.string(),
    description: Joi.string().required(),
    address: Joi.string().required(),
    gpsCoordinates: Joi.string(),
    reportDate: Joi.date().required(),
    status: Joi.string(),
    cityReference: Joi.string()
});
export const idParamUrbanIssueReportSchema = Joi.object({
    id: Joi.string().required()
});
// id             String         @id @default(cuid())
// userId         String         @map("user_id")
// categoryId     String?        @map("category_id")
// description    String
// address        String         @db.Text
// gpsCoordinates String?        @map("gps_coordinates")
// reportDate     DateTime       @map("report_date") @db.Timestamp(6)
// status         String?        @db.Text
// cityReference  String?        @map("city_reference") @db.Text
// createdAt      DateTime       @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt      DateTime?      @map("updated_at") @db.Timestamp(6)

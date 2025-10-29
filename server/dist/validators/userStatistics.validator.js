import Joi from "joi";
export const userStatisticsSchema = Joi.object({
    userId: Joi.string().required(),
    servicesProvided: Joi.number(),
    servicesReceived: Joi.number(),
    activitiesParticipated: Joi.number(),
    activitiesOrganized: Joi.number(),
    forumMessages: Joi.number(),
    totalHelpPoints: Joi.number(),
    networkSize: Joi.number(),
});
export const idParamUserStatisticsSchema = Joi.object({
    userId: Joi.string().required()
});
// userId                 String    @id @map("user_id")
// servicesProvided       Int?      @map("services_provided")
// servicesReceived       Int?      @map("services_received")
// activitiesParticipated Int?      @map("activities_participated")
// activitiesOrganized    Int?      @map("activities_organized")
// forumMessages          Int?      @map("forum_messages")
// totalHelpPoints        Int?      @map("total_help_points")
// networkSize            Int?      @map("network_size")

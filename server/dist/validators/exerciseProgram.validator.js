import Joi from 'joi';
export const exerciseProgramSchema = Joi.object({
    name: Joi.string().required(),
    categoryId: Joi.string().allow(null, ''),
    difficultyLevel: Joi.number().allow(0),
    adaptedForReducedMobility: Joi.boolean().default(false),
    durationMinutes: Joi.boolean().allow(0),
    description: Joi.string().allow(null, ''),
    videoLink: Joi.string().allow(null, ''),
    image: Joi.string().allow(null, '')
});
export const idParamExerciseProgramSchema = Joi.object({
    id: Joi.string().required()
});
// name                      String           @db.VarChar(255)
// categoryId                String?          @map("category_id")
// difficultyLevel           Int?             @map("difficulty_level")
// adaptedForReducedMobility Boolean?         @map("adapted_for_reduced_mobility")
// durationMinutes           Int?             @map("duration_minutes")
// description               String?
// videoLink                 String?          @map("video_link") @db.VarChar(255)
// image                     String?          @db.VarChar(255)

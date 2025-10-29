import Joi from 'joi';
export const projectMemberSchema = Joi.object({
    projectId: Joi.string().required(),
    userId: Joi.string().required(),
    role: Joi.string().required(),
    joinDate: Joi.date().required(),
});
export const idParamProjectMemberSchema = Joi.object({
    id: Joi.string().required()
});
// projectId            String               @map("project_id")
// userId               String               @map("user_id")
// role                 String               @db.Text
// joinDate             DateTime             @map("join_date") @db.Timestamp(6)

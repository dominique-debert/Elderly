import Joi from 'joi';
export const forumMessageSchema = Joi.object({
    topicId: Joi.string().required(),
    authorId: Joi.string().required(),
    content: Joi.string().allow(null, ''),
    solutionMessage: Joi.boolean().default(false)
});
export const idParamForumMessageSchema = Joi.object({
    id: Joi.string().required()
});
// topicId          String     @map("topic_id")
// authorId         String     @map("author_id")
// content          String
// solutionMessage  Boolean?    @map("solution_message")

import Joi from 'joi';
export const forumCategorySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    parentCategoryId: Joi.string().allow(null, '')
});
export const idParamForumCategorySchema = Joi.object({
    id: Joi.string().required()
});
// name             String       @db.VarChar(255)
// description      String?      @db.VarChar(255)
// parentCategoryId String       @map("parent_category_id")

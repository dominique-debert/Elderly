import Joi from 'joi';

export const forumTopicSchema = Joi.object({
  categoryId: Joi.string().required(),
  authorId: Joi.string().required(),
  title: Joi.string().required(),
  pinned: Joi.boolean().default(false),
  status: Joi.string().allow(null, ''),
  views: Joi.number().default(0),
});

export const idParamForumTopicSchema = Joi.object({
  id: Joi.string().required()
});

// id            String         @id @default(cuid())
// categoryId    String        @map("category_id")
// authorId      String         @map("author_id")
// title         String         @db.VarChar(255)
// pinned        Boolean?       @default(false)
// status        String?        @db.VarChar(50)
// views         Int?           @default(0)

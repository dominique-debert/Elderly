import Joi from 'joi';

export const resourceSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().allow('', null),
  type: Joi.string().required(),
  categoryId: Joi.string().allow('', null),
  authorId: Joi.string().required(),
  adminValidated: Joi.boolean().default(false)
});

export const idParamResourceSchema = Joi.object({
  id: Joi.string().required()
});

// title            String            @db.Text
// content          String?
// type             String            @db.Text
// categoryId       String?           @map("category_id")
// authorId         String            @map("author_id")
// adminValidated   Boolean?          @default(false) @map("admin_validated")
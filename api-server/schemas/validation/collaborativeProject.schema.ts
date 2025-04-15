import Joi from 'joi';

export const projectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('', null),
  creatorId: Joi.string().required(),
  creationDate: Joi.date().required(),
  categoryId: Joi.string().required(),
  difficultyLevel: Joi.string().required(),
  status: Joi.string().allow('', null)
});

export const idParamProjectSchema = Joi.object({
  id: Joi.string().uuid().required()
});

// title           String           @db.VarChar(255)
// description     String?
// creatorId       String           @map("creator_id")
// creationDate    DateTime         @default(now()) @map("creation_date") @db.Timestamp(6)
// status          String?          @db.VarChar(50)
// categoryId      String           @map("category_id") @db.VarChar(100)
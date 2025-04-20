import Joi from 'joi';

export const projectTaskSchema = Joi.object({
  projectId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  creationDate: Joi.date().required(),
  dueDate: Joi.date().allow(null),
  status: Joi.string().allow(null, ''),
  assigneeId: Joi.string().allow(null, ''),
});

export const idParamProjectTaskSchema = Joi.object({
  id: Joi.string().required()
});

// id                   String                @id @default(cuid())
// projectId            String                @map("project_id")
// title                String                @db.Text
// description          String?
// creationDate         DateTime              @map("creation_date") @db.Timestamp(6)
// dueDate              DateTime?             @map("due_date") @db.Timestamp(6)
// status               String?               @db.Text
// assigneeId           String?               @map("assignee_id")
// createdAt            DateTime              @default(now()) @map("created_at") @db.Timestamp(6)
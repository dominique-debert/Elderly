export interface IProjectTask {
  id?: string;
  projectId: string;
  title: string;
  description?: string;
  creationDate: Date;
  dueDate?: Date;
  status?: string;
  assigneeId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// id                   String                @id @default(cuid())
// projectId            String                @map("project_id")
// title                String                @db.Text
// description          String?
// creationDate         DateTime              @map("creation_date") @db.Timestamp(6)
// dueDate              DateTime?             @map("due_date") @db.Timestamp(6)
// status               String?               @db.Text
// assigneeId           String?               @map("assignee_id")
// createdAt            DateTime              @default(now()) @map("created_at") @db.Timestamp(6)

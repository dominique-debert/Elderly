export default interface IProjectTask {
  project_id: string
  title: string
  description?: string
  creation_date: Date
  due_date: Date
  status?: string
  assignee_id?: string
}
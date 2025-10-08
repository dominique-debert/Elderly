export default interface IProjectMember {
  id?: string
  projectId: string
  userId: string
  role: string
  joinDate: Date
  createdAt?: Date
  updatedAt?: Date
}
export interface IForumSection {
  id: number;
  name: string;
  description?: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

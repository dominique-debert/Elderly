export interface IForumMessage {
  id: string;
  topicId: string;
  authorId: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: {
    id: string;
    firstName: string | null;
    lastName: string | null;
  };
}

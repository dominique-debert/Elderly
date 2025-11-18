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
  _count?: {
    forumTopics: number;
  };
  lastPost?: {
    createdAt: Date;
    user: {
      id: string;
      firstName: string;
      lastName: string;
    };
  } | null;
}

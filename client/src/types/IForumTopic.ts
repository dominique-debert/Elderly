import { IForumMessage } from "./IForumMessage";

export interface IForumTopic {
  id: string;
  categoryId: number;
  authorId: string;
  title: string;
  pinned?: boolean;
  status?: string;
  views?: number;
  createdAt?: Date;
  updatedAt?: Date;
  category?: {
    id: number;
    categoryName: string;
    description?: string;
  };
  user?: {
    id: string;
    firstName: string | null;
    lastName: string | null;
  };
  forumMessage?: IForumMessage[];
}

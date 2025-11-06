export interface IForumTopic {
  category_id: number;
  author_id: string;
  title: string;
  pinned?: boolean;
  status?: string;
  views?: number;
}

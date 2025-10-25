export interface IForumTopic {
  category_id: string;
  author_id: string;
  title: string;
  creation_date?: Date;
  pinned?: boolean;
  status?: string;
  views?: number;
}

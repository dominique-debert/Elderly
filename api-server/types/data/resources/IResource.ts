export interface IResource {
  title: string;
  content?: string;
  type: string;
  category: string;
  author_id: string;
  admin_validated?: boolean;
}

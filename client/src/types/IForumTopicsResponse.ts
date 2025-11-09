import { IForumTopic } from "./IForumTopic";

export interface IForumTopicsResponse {
  data: IForumTopic[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
}

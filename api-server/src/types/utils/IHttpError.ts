export interface IHttpError extends Error {
  status?: number;
  details?: any;
}

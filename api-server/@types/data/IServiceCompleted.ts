export default interface IServiceCompleted {
  request_id: string
  helper_id: string
  completion_date: Date
  actual_duration?: number
  creator_comment?: string
  helper_comment?: string
  creator_rating?: number
  helper_rating?: number
  points_exchanged?: number
}
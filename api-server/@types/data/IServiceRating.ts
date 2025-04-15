export default interface IServiceRating {
  service_id: string
  user_id: string
  rating?: number
  comment?: string
  rating_date?: Date
}
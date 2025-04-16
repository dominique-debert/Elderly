export default interface IHelpRequest {
  creator_id: string
  title: string
  description?: string
  creation_date: Date
  estimated_duration: number
  location?: string
  gps_coordinates?: string
  category: string
  reccuring?: boolean
  frequency?: string
  status?: string
  points_offered?: number
}
export default interface IUrbanIssueReport {
  user_id?: string
  category: string
  description: string
  address: string
  gps_coordinates?: string
  report_date: Date
  status?: string
  city_reference?: string
}
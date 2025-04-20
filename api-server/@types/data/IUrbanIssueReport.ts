export default interface IUrbanIssueReport {
  userId: string
  categoryId: string
  description: string
  address: string
  gpsCoordinates?: string
  reportDate: Date
  status?: string
  cityReference?: string
}
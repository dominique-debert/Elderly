export default interface IMunicipalEvent {
  title: string
  description?: string
  start_date: Date
  end_date: Date
  location?: string
  gps_coordinates?: string
  organizer?: string
  contact?: string
  official_link?: string
}
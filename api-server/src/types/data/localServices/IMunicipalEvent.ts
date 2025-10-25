export interface IMunicipalEvent {
  id?: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location: string;
  gpsCoordinates?: string;
  organizer?: string;
  contact?: string;
  officialLink?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// id             String    @id @default(cuid())
// title          String    @db.Text
// description    String?
// startDate      DateTime  @map("start_date") @db.Timestamp(6)
// endDate        DateTime  @map("end_date") @db.Timestamp(6)
// location       String    @db.Text
// gpsCoordinates String?   @map("gps_coordinates")
// organizer      String?   @db.Text
// contact        String?   @db.Text
// officialLink   String?   @map("official_link") @db.Text
// createdAt      DateTime  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt      DateTime? @map("updated_at") @db.Timestamp(6)

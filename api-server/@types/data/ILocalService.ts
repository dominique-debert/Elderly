export default interface ILocalService {
  name: string;
  categoryId: string;
  address?: string;
  gpsCoordinates?: string;
  phone?: string;
  website?: string;
  description?: string;
  hours?: string;
  seniorFriendly?: boolean;
}

// name            String          @db.Text
// categoryId      String          @map("category_id") @db.Text
// address         String?          @db.Text
// gpsCoordinates  String?          @map("gps_coordinates")
// phone           String?          @db.Text
// website         String?          @db.Text
// description     String?
// hours           String?          @db.Text
// seniorFriendly  Boolean?         @map("senior_friendly")
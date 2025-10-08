export interface ILocalService {
  name: string;
  categoryId: number;
  address?: string;
  gpsCoordinates?: string;
  phone?: string;
  website?: string;
  description?: string;
  hours?: string;
  seniorFriendly?: boolean;
}

// name            String          @db.Text
// categoryId      Int             @map("category_id")
// address         String?          @db.Text
// gpsCoordinates  String?          @map("gps_coordinates")
// phone           String?          @db.Text
// website         String?          @db.Text
// description     String?
// hours           String?          @db.Text
// seniorFriendly  Boolean?         @map("senior_friendly")

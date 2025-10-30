// Définition des types pour la requête
export interface IUser {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  profession: string;
  city: string;
  postalCode: string;
  address: string;
  description: string;
  latitude: string;
  longitude: string;
  phone: string;
  avatarUrl: string;
  avatar: string;
  registrationDate: Date;
  helpPoints: number;
  reducedMobility: boolean;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  status: string;
  isAdmin: boolean;
}

// id                      String                    @id @default(cuid())
// email                   String                    @unique @db.Text
// passwordHash            String                    @map("password_hash") @db.Text
// firstName               String?                   @map("first_name") @db.Text
// lastName                String?                   @map("last_name") @db.Text
// birthDate               DateTime?                 @map("birth_date") @db.Date
// profession              String?                   @db.Text
// city                    String?                   @db.Text
// postalCode              String?                   @map("postal_code") @db.Text
// address                 String?                   @db.Text
// description             String?                   @db.Text
// latitude                String?                   @map("latitude")
// longitude               String?                   @map("longitude")
// phone                   String?                   @db.Text
// avatar                  String?                   @map("avatar") @db.Text
// registrationDate        DateTime                  @default(now()) @map("registration_date") @db.Timestamp(6)
// helpPoints              Int?                      @default(0) @map("help_points")
// reducedMobility         Boolean?                  @default(false) @map("reduced_mobility")
// status                  String?                   @default("active") @db.Text
// isAdmin                 Boolean?                  @default(false) @map("is_admin")
// createdAt               DateTime                  @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt               DateTime?                 @map("updated_at") @db.Timestamp(6)

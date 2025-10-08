// Définition des types pour la requête
export interface IUser {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  address: string;
  gpsCoordinates: string;
  phone: string;
  profilePicture: string;
  registrationDate: Date;
  accountVerified: boolean;
  interfacePreferences: string;
  twoFactorAuthentication: boolean;
  helpPoints: number;
  reducedMobility: boolean;
  activityLevel: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  status: string;
  isAdmin: boolean;
}

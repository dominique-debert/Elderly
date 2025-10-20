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
  gpsCoordinates: string;
  latitude: string;
  longitude: string;
  phone: string;
  avatarUrl: string;
  avatar: string;
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

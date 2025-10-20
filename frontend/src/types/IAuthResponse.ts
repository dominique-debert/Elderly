export interface IAuthResponse {
  id: string;
  lastName: string;
  firstName: string;
  birthDate: Date;
  profession: string;
  city: string;
  postalCode: string;
  address: string;
  description: string;
  gpsCoordinates: string;
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
  avatar?: string;
  avatarUrl?: string | null;
  email: string;
  latitude: string;
  longitude: string;
  phone?: string;
  isAdmin: boolean;

  accessToken: string;
  refreshToken: string;
}

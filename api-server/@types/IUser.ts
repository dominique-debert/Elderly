// Définition des types pour la requête
export default interface IUser {
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  address: string;
  gps_coordinates: string;
  phone: string;
  profile_picture: string;
  registration_date: Date;
  account_verified: boolean;
  interface_preferences: string;
  two_factor_authentication: boolean;
  help_points: number;
  reduced_mobility: boolean;
  activity_level: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  status: string;
}

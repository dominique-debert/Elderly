export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  birthDate: Date;
  latitude?: string;
  longitude?: string;
  isAdmin: boolean;
}

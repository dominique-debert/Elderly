export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  avatarUrl?: string | null;
  birthDate: Date;
  latitude?: string;
  longitude?: string;
  isAdmin: boolean;
}

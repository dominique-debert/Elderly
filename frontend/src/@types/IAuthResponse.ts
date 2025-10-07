export interface IAuthResponse {
  id: string;
  isAdmin: boolean;
  birthDate: Date;
  firstName: string;
  lastName: string;
  avatar?: string;
  avatarUrl?: string | null;
  email: string;
  latitude: string;
  longitude: string;
  accessToken: string;
  refreshToken: string;
}

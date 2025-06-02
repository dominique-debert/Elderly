
export interface IAuthResponse {
  isAdmin: boolean;
  birthDate: Date;
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
  latitude: string;
  longitude: string;
  accessToken: string;
  refreshToken: string;
}
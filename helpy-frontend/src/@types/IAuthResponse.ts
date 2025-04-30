
export interface IAuthResponse {
  isAdmin: boolean;
  birthDate: Date;
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
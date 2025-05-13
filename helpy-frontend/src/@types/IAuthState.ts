import { useNavigate } from "react-router-dom";
import { IUser } from "./IUser";

export interface IAuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
  login: (
    email: string,
    password: string,
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<void>;
  signup: (
    userData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      avatar?: string;
      birthDate: Date;
      isAdmin: boolean;
      accessToken: string;
      refreshToken: string;
    },
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<void>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}
import { useNavigate } from "react-router-dom";
import type { IUser } from "@/types";

export interface IAuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
  login: (
    email: string,
    password: string,
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<IUser>;
  signup: (
    userData:
      | FormData
      | {
          email: string;
          password: string;
          firstName: string;
          lastName: string;
          avatar?: string;
          birthDate: Date;
          isAdmin: boolean;
          latitude?: string;
          longitude?: string;
        },
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<IUser>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}

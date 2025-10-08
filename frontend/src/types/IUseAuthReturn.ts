import type { IUser } from "@/types";

export interface IUseAuthReturn {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (email: string, password: string) => Promise<IUser>;
  signup: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    birthDate: Date;
    isAdmin: boolean;
    latitude?: string;
    longitude?: string;
  }) => Promise<IUser>;
  logout: () => void;
}

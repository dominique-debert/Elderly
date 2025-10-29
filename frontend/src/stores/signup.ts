import { create } from "zustand";

interface SignupFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  isAdmin: boolean;
  phone: string;
  avatarFilename: string;
  avatarFile: File | null;
  avatarUrl?: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: Date) => void;
  setPhone: (phone: string) => void;
  setAvatarFilename: (avatarFilename: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}

interface SignupFormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: Date) => void;
  setPhone: (phone: string) => void;
  setAvatarFilename: (avatarFilename: string) => void;
  setAvatarFile: (avatarFile: File | null) => void;
  setAvatarUrl: (avatarUrl: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}

type SignupStore = SignupFormState & SignupFormActions;

export const useSignupStore = create<SignupStore>((set) => ({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthDate: new Date(),
  phone: "",
  avatarFilename: "",
  avatarFile: null,
  isAdmin: false,
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
  setBirthDate: (birthDate: Date) => set({ birthDate }),
  setPhone: (phone: string) => set({ phone }),
  setAvatarFilename: (avatarFilename: string) => set({ avatarFilename }),
  setAvatarFile: (avatarFile: File | null) => set({ avatarFile }),
  setAvatarUrl: (avatarUrl: string) => set({ avatarUrl }),
  setIsAdmin: (isAdmin: boolean) => set({ isAdmin }),
}));

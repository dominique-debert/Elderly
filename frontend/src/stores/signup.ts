import { create } from "zustand";

interface SignupFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  isAdmin: boolean;
  phoneNumber: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: Date) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const useSignupStore = create<SignupFormState>((set) => ({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthDate: new Date(),
  phoneNumber: "",
  isAdmin: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setBirthDate: (birthDate) => set({ birthDate }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setIsAdmin: (isAdmin) => set({ isAdmin }),
}));

import { create } from 'zustand';

interface SignupFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  isAdmin: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const useSignupStore = create<SignupFormState>((set) => ({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  isAdmin: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setBirthDate: (birthDate) => set({ birthDate }),
  setIsAdmin: (isAdmin) => set({ isAdmin }),
}));

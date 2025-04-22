import { create } from 'zustand';

interface SignupFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: string) => void;
}

export const useSignupStore = create<SignupFormState>((set) => ({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setBirthDate: (birthDate) => set({ birthDate }),
}));

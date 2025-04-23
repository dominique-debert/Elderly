import { create } from 'zustand';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../services/auth';
import toast from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  birthdate: string;
  isAdmin: boolean;
}

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: User | null;
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
      birthdate: string;
      isAdmin: boolean;
    },
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<void>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,
      user: null,

      login: async (email, password, navigate) => {
        try {
          const data = await loginUser({ email, password });
          localStorage.setItem('refreshToken', data.refreshToken);
          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              avatar: data.avatar, // Assurez-vous que l'avatar est bien renvoyé par l'API
              birthdate: data.birthDate, // Assurez-vous que la date de naissance est bien renvoyée
              isAdmin: data.isAdmin,
            },
          });
          toast.success('Connexion réussie');
          navigate('/');
        } catch (error) {
          toast.error("Erreur lors de la connexion: " + error);
        }
      },

      signup: async (userData, navigate) => {
        try {
          const data = await signupUser(userData);
          localStorage.setItem('refreshToken', data.refreshToken);
          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              avatar: data.avatar,
              birthdate: data.birthDate,
              isAdmin: data.isAdmin,
            },
          });
          toast.success('Inscription réussie');
          navigate('/');
        } catch (error) {
          toast.error("Erreur lors de l'inscription: " + error);
        }
      },

      logout: (navigate) => {
        localStorage.removeItem('refreshToken');
        set({ accessToken: null, isAuthenticated: false, user: null });
        toast.success('Déconnexion réussie');
        navigate('/login');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);

export const useAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, login, signup, logout } = useAuthStore();

  return {
    isAuthenticated,
    user,
    login: (email: string, password: string) => login(email, password, navigate),
    signup: (userData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      avatar?: string;
      birthdate: string;
      isAdmin: boolean;
    }) => signup(userData, navigate),
    logout: () => logout(navigate),
  };
};

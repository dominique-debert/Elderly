import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { loginUser, signupUser } from '../services/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  birthDate: Date;
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
      birthDate: Date;
      isAdmin: boolean;
    },
    navigate: ReturnType<typeof useNavigate>
  ) => Promise<void>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: localStorage.getItem('accessToken'), // On récupère le token du localStorage
      isAuthenticated: Boolean(localStorage.getItem('accessToken')), // On vérifie si le token existe pour déterminer si l'utilisateur est authentifié
      user: null,

      login: async (email, password, navigate) => {
        try {
          const data = await loginUser({ email, password });
          localStorage.setItem('accessToken', data.accessToken); // Stocke l'accessToken dans localStorage
          localStorage.setItem('refreshToken', data.refreshToken); // Stocke le refreshToken également

          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              avatar: data.avatar,
              birthDate: data.birthDate,
              isAdmin: data.isAdmin,
            },
          });
          toast.success('Connexion réussie');
          navigate('/');
        } catch (error) {
          toast.error('Erreur lors de la connexion: ' + error);
        }
      },

      signup: async (userData, navigate) => {
        try {
          const data = await signupUser(userData);
          localStorage.setItem('accessToken', data.accessToken); // Stocke l'accessToken dans localStorage
          localStorage.setItem('refreshToken', data.refreshToken); // Stocke le refreshToken également

          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              avatar: data.avatar,
              birthDate: data.birthDate,
              isAdmin: data.isAdmin,
            },
          });
          toast.success('Inscription réussie');
          navigate('/');
        } catch (error) {
          toast.error('Erreur lors de l\'inscription: ' + error);
        }
      },

      logout: (navigate) => {
        localStorage.removeItem('accessToken'); // Retire le token
        localStorage.removeItem('refreshToken'); // Retire aussi le refreshToken
        set({ accessToken: null, isAuthenticated: false, user: null });
        toast.success('Déconnexion réussie');
        navigate('/login');
      },
    }),
    {
      name: 'auth-storage', // Nom du stockage pour persister dans localStorage
      storage: createJSONStorage(() => localStorage), // Utilise localStorage pour la persistance
      partialize: (state) => ({
        accessToken: state.accessToken, // On ne persiste que le token et l'état d'authentification
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
    signup: (userData: { email: string; password: string; firstName: string; lastName: string; avatar?: string; birthDate: Date; isAdmin: boolean }) => signup(userData, navigate),
    logout: () => logout(navigate),
  };
};

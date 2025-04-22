import { create } from 'zustand';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../services/auth';
import toast from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
}

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: User | null; 
  login: (email: string, password: string, navigate: ReturnType<typeof useNavigate>) => Promise<void>;
  signup: (email: string, password: string, navigate: ReturnType<typeof useNavigate>) => Promise<void>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,
      user: JSON.parse(localStorage.getItem('user') || 'null'), // Récupérer l'utilisateur depuis localStorage au démarrage

      login: async (email, password, navigate) => {
        try {
          const data = await loginUser({ email, password });
          const userData = { firstName: data.firstName, lastName: data.lastName, avatar: data.avatar, email: data.email };
          localStorage.setItem('user', JSON.stringify(userData)); 
          localStorage.setItem('refreshToken', data.refreshToken);
          set({ accessToken: data.accessToken, isAuthenticated: true, user: userData });
          toast.success('Connexion réussie');
          navigate('/');
        } catch (error) {
          toast.error("Erreur lors de la connexion" + error);
        }
      },

      signup: async (email, password, navigate) => {
        try {
          const data = await signupUser({ email, password });
          const userData = { firstName: data.firstName, lastName: data.lastName, avatar: data.avatar, email: data.email };
          localStorage.setItem('user', JSON.stringify(userData)); 
          localStorage.setItem('refreshToken', data.refreshToken);
          set({ accessToken: data.accessToken, isAuthenticated: true, user: userData });
          toast.success('Inscription réussie');
          navigate('/');
        } catch (error) {
          toast.error("Erreur lors de l'inscription" + error);
        }
      },

      logout: (navigate) => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user'); 
        set({ accessToken: null, isAuthenticated: false, user: null });
        toast.success('Déconnexion réussie');
        navigate('/login');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ accessToken: state.accessToken, isAuthenticated: state.isAuthenticated, user: state.user }),
    }
  )
);

export const useAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, signup, logout, user } = useAuthStore();

  return {
    isAuthenticated,
    login: (email: string, password: string) => login(email, password, navigate),
    signup: (email: string, password: string) => signup(email, password, navigate),
    logout: () => logout(navigate),
    user, 
  };
};

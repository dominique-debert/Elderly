import { create } from 'zustand';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../services/auth';
import toast from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, navigate: ReturnType<typeof useNavigate>) => Promise<void>;
  signup: (email: string, password: string, navigate: ReturnType<typeof useNavigate>) => Promise<void>;
  logout: (navigate: ReturnType<typeof useNavigate>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,

      login: async (email, password, navigate) => {
        try {
          const data = await loginUser({ email, password });
          localStorage.setItem('refreshToken', data.refreshToken);
          set({ accessToken: data.accessToken, isAuthenticated: true });
          toast.success('Connexion réussie');
          navigate('/');
        } catch {
          toast.error('Erreur lors de la connexion');
        }
      },

      signup: async (email, password, navigate) => {
        try {
          const data = await signupUser({ email, password });
          localStorage.setItem('refreshToken', data.refreshToken);
          set({ accessToken: data.accessToken, isAuthenticated: true });
          toast.success('Inscription réussie');
          navigate('/');
        } catch {
          toast.error('Erreur lors de l\'inscription');
        }
      },

      logout: (navigate) => {
        localStorage.removeItem('refreshToken');
        set({ accessToken: null, isAuthenticated: false });
        toast.success('Déconnexion réussie');
        navigate('/login');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ accessToken: state.accessToken, isAuthenticated: state.isAuthenticated }),
    }
  )
);

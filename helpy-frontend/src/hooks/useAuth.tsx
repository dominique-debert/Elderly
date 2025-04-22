import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, signup, logout } = useAuthStore();

  return {
    isAuthenticated,
    login: (email: string, password: string) => login(email, password, navigate),
    signup: (email: string, password: string) => signup(email, password, navigate),
    logout: () => logout(navigate),
  };
};

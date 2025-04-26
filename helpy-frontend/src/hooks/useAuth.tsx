 
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, signup, logout } = useAuthStore();

  return {
    isAuthenticated,
    login: (email: string, password: string) => login(email, password, navigate),
    signup: (email: string, password: string, firstName: string, lastName: string, birthDate: Date, isAdmin: boolean, avatar?: string) => 
      signup({ email, password, firstName, lastName, birthDate, isAdmin, avatar }, navigate),
    logout: () => logout(navigate),
  };
};

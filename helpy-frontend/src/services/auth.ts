import api from './api';

interface AuthResponse {
  isAdmin: boolean;
  birthDate: Date;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (data: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const signupUser = async (data: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

/**
 * ➡️ Fonction pour utiliser le refreshToken stocké dans localStorage et demander un nouvel accessToken
 */
export const refreshAccessToken = async (): Promise<string> => {
  const storedAuth = localStorage.getItem('auth-storage');
  const refreshToken = storedAuth ? JSON.parse(storedAuth).state.refreshToken : null;

  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await api.post('/auth/refresh-token', { refreshToken });

  const newAccessToken = response.data.accessToken;

  // Mettre à jour dans localStorage
  const updatedAuth = storedAuth ? JSON.parse(storedAuth) : null;
  if (!updatedAuth) {
    throw new Error('Invalid stored authentication data');
  }
  updatedAuth.state.accessToken = newAccessToken;
  localStorage.setItem('auth-storage', JSON.stringify(updatedAuth));

  return newAccessToken;
};

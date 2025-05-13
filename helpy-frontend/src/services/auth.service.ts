import api from '@/lib/axios';
import type { IAuthResponse } from '@/@types/IAuthResponse';

export const loginUser = async (data: { email: string; password: string }): Promise<IAuthResponse> => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const signupUser = async (data: { email: string; password: string, firstName: string, lastName: string, birthDate: Date, isAdmin: boolean, avatar?: string }): Promise<IAuthResponse> => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

/**
 * ➡️ Fonction pour utiliser le refreshToken stocké dans localStorage et demander un nouvel accessToken
 */
export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await api.post('/auth/refresh-token', { refreshToken });

  const newAccessToken = response.data.accessToken;

  // Mettre à jour dans localStorage
  localStorage.setItem('accessToken', newAccessToken);

  return newAccessToken;
};

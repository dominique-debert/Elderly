import api from './api';

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const signupUser = async (data: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

import api from '../lib/axios';

interface LoginInput {
  email: string;
  password: string;
}

export async function loginUser(data: LoginInput) {
  const response = await api.post('/auth/login', data);
  return response.data; // Ceci suppose que l'API retourne l'accessToken
}
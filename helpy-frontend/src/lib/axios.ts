import axios from 'axios';
import { refreshAccessToken } from '../services/auth.service';

const api = axios.create({
  baseURL: 'http://192.168.1.195:3000/api',
});

// Intercepteur de requête pour ajouter le token dans les headers
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    console.log(config);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionnel : Intercepteur de réponse pour gérer les erreurs, par exemple pour le refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

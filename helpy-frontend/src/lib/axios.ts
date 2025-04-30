import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // ou l'URL de ton API
  withCredentials: true, // si tu utilises des cookies
});

// Intercepteur de requête pour ajouter le token dans les headers
api.interceptors.request.use(
  (config) => {
    const storedAuth = localStorage.getItem('auth-storage');
    const accessToken = storedAuth ? JSON.parse(storedAuth).state.accessToken : null;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionnel : Intercepteur de réponse pour gérer les erreurs, par exemple pour le refresh token
import { refreshAccessToken } from '../services/auth'; 
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
        localStorage.removeItem('auth-storage');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default api;

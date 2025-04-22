import { refreshToken } from '../services/token';
import axiosInstance from '../services/axios';

const api = axiosInstance;

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken();
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(error.config); // Réessayer la requête originale avec le nouveau token
      } catch (err) {
        // Si le refresh token échoue, on doit déconnecter l'utilisateur
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

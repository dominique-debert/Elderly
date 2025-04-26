// services/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api', // ajuste si besoin
});

// Intercepteur pour ajouter automatiquement le token
api.interceptors.request.use(
  (config) => {
    const storedAuth = localStorage.getItem('auth-storage');
    const accessToken = storedAuth ? JSON.parse(storedAuth).state.accessToken : null;

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

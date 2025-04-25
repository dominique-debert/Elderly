import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // ou l'URL de ton API
  withCredentials: true, // si tu utilises des cookies
});

// Intercepteur de requête pour ajouter le token dans les headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('Headers de la requête:', config.headers); // Log des headers
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionnel : Intercepteur de réponse pour gérer les erreurs, par exemple pour le refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // gestion des erreurs ici
    return Promise.reject(error);
  }
);

export default api;

import axios from 'axios';
import toast from 'react-hot-toast';

// Création d'une instance Axios
const api = axios.create({
  baseURL: 'https://ton-backend-url.com/api',  // Change l'URL de ton backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour récupérer l'access token
const getAccessToken = () => localStorage.getItem('authToken');

// Fonction pour récupérer le refresh token
const getRefreshToken = () => localStorage.getItem('refreshToken');

// Ajouter un interceptor pour ajouter l'Authorization header à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor pour gérer les erreurs liées à l'expiration du token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si l'erreur est liée à un token expiré (code 401)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Essayer de rafraîchir le token avec le refresh token
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
          toast.error('Veuillez vous reconnecter.');
          return Promise.reject(error);
        }

        // Appeler l'API de rafraîchissement
        const response = await axios.post('/refresh-token', { refreshToken });

        // Si le rafraîchissement réussit
        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        // Sauvegarder les nouveaux tokens
        localStorage.setItem('authToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        // Réessayer la requête originale avec le nouveau token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        toast.error('Session expirée, veuillez vous reconnecter.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        // Rediriger vers la page de login si le refresh échoue
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;

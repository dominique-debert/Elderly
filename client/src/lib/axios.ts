import axios from "axios";
import { refreshAccessToken } from "@/services";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

// Intercepteur de requête pour ajouter le token dans les headers
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fonction pour nettoyer l'authentification et rediriger
const handleAuthExpiration = () => {
  // Nettoyer le localStorage
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");

  // Nettoyer le localStorage Zustand
  localStorage.removeItem("auth-storage");

  // Afficher un message à l'utilisateur
  toast.error("Votre session a expiré. Veuillez vous reconnecter.");

  // Rediriger après un court délai pour que l'utilisateur puisse voir le message
  setTimeout(() => {
    window.location.href = "/login";
  }, 1000);
};

// Intercepteur de réponse pour gérer les erreurs et le refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      // Si on a déjà tenté de rafraîchir le token, on déconnecte
      if (originalRequest._retry) {
        handleAuthExpiration();
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Le refresh a échoué, session réellement expirée
        handleAuthExpiration();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

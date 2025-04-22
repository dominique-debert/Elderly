import { useAuth } from '../context/AuthContext';

export const useAuthFetch = () => {
  const { token } = useAuth();  // Récupérer le token à partir du contexte d'authentification

  return async (url: string, options: RequestInit = {}) => {
    const headers = {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error('Erreur API');
    }

    return response.json();
  };
};

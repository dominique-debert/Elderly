import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores";
import api from "@/lib/axios";

export const useWeather = () => {
  const { user } = useAuthStore();
  const accessToken = useAuthStore.getState().accessToken;

  return useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      if (!user) {
        throw new Error("User is not available");
      }
      const res = await api.get("/weather", {
        params: {
          longitude: user.longitude,
          latitude: user.latitude,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    },
    enabled: !!accessToken, // La requête n'est activée que si l'utilisateur est connecté
  });
};

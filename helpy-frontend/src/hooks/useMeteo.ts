// src/hooks/useMeteo.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useMeteo = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ['meteo', latitude, longitude],
    queryFn: async () => {
      const res = await axios.get('/api/meteo', {
        params: { lat: latitude, lon: longitude },
      });
      return res.data;
    },
    enabled: !!latitude && !!longitude,
  });
};

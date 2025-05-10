import api from '../lib/axios';
import type { IMood, EValence } from '../@types/IMood';

export const fetchMoods = async (): Promise<IMood[]> => {
  const accessToken = localStorage.getItem('accessToken');
  const { data } = await api.get('/moods', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.moods;
};

export const createMood = async (category: {
  name: string;
  description?: string;
}) => {
  const { data } = await api.post('/moods', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  console.log(data);
  return data;
};

export const updateMood = async (
  id: string,
  data: {
    name: string;
    description?: string;
    valence: EValence;
    intensity: number;
    color?: string;
  }
) => {
  const response = await api.put(`/moods/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteMood = async (id: string) => {
  const response = await api.delete(`/moods/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

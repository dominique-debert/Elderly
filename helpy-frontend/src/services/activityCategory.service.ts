import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchActivityCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');

  const { data } = await api.get(`/categories/activities`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log('API Response:', data);
  return data;
};

export const createActivityCategory = async (category: { name: string; description?: string; chapterId: number; typeId: number }) => {
  const { data } = await api.post('/categories/activities', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateActivityCategory = async (id: string, data: { name: string; description?: string }) => {
  const response = await api.put(`/categories/activities/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteActivityCategory = async (id: string) => {
  const response = await api.delete(`/categories/activities/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchWellnessCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');

  const { data } = await api.get(`/categories/wellness`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createWellnessCategory = async (category: { categoryName: string; description?: string; chapterId: number; typeId: number }) => {
  const { data } = await api.post('/categories/wellness', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateWellnessCategory = async (id: string, data: { categoryName: string; description?: string }) => {
  const response = await api.put(`/categories/wellness/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteWellnessCategory = async (id: string) => {
  const response = await api.delete(`/categories/wellness/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

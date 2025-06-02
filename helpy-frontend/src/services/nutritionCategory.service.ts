import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchNutritionCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');

  const { data } = await api.get(`/categories/nutritional`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createNutritionCategory = async (category: { categoryName: string; description?: string; chapterId: number; typeId: number }) => {
  const { data } = await api.post('/categories/nutritional', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateNutritionCategory = async (id: string, data: { categoryName: string; description?: string }) => {
  const response = await api.put(`/categories/nutritional/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteNutritionCategory = async (id: string) => {
  const response = await api.delete(`/categories/nutritional/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

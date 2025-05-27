import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchCognitiveCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');
  
  const { data } = await api.get(`/categories/cognitive`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const createCognitiveCategory = async (
  category: {
    categoryName: string;
    description?: string;
    chapterId: number;
    typeId: number 
  }) => {
    const { data } = await api.post('/categories/cognitive', category, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return data;
};
  
export const updateCognitiveCategory = async (
  id: number,
  data: {
    categoryName: string;
    description?: string
  }) => {
    const response = await api.put(`/categories/cognitive/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
};
    
export const deleteCognitiveCategory = async (id: number) => {
  const response = await api.delete(`/categories/cognitive/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};
    
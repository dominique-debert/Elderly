import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchBadgeCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');
  
  const { data } = await api.get(`/categories/badges`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  return data;
};

export const createBadgeCategory = async (
  category:
  {
    categoryName: string;
    description?: string;
    chapterId: number;
    typeId: number 
  }
) => {
  const { data } = await api.post('/categories/badges', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateBadgeCategory = async (
  id: string,
  data: {
    categoryName: string;
    description?: string 
  }) => {
    const response = await api.put(`/categories/badges/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  };
  
  export const deleteBadgeCategory = async (id: string) => {
    const response = await api.delete(`/categories/badges/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  };
  
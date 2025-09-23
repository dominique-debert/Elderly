import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchUrbanIssueCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem('accessToken');

  const { data } = await api.get(`/categories/urban-issues`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createUrbanIssueCategory = async (category: { categoryName: string; description?: string; chapterId: number; typeId: number }) => {
  const { data } = await api.post('/categories/urban-issues', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateUrbanIssueCategory = async (id: string, data: { categoryName: string; description?: string }) => {
  const response = await api.put(`/categories/urban-issues/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteUrbanIssueCategory = async (id: string) => {
  const response = await api.delete(`/categories/urban-issues/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

import api from './api';
import type { ICategory } from '../@types/ICategory';

export const fetchActivityCategories = async (): Promise<ICategory[]> =>  {
const storedAuth = localStorage.getItem('auth-storage');
const accessToken = storedAuth ? JSON.parse(storedAuth).state.accessToken : null;

  if (!accessToken) {
    throw new Error('Token manquant');
  }

  const { data } = await api.get(`/activity-categories`);
  return data.categories;
};

export const createActivityCategory = async (category: { name: string; description?: string }) => {
  const { ...data } = await api.post('/activity-categories', category);
  return data;
};

export const updateActivityCategory = async (id: string, data: { name: string; description?: string }) => {
  const response = await api.patch(`/activity-categories/${id}`, data);
  return response.data;
};

export const deleteActivityCategory = async (id: string) => {
  const response = await api.delete(`/activity-categories/${id}`);
  return response.data;
};

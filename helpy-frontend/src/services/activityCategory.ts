import api from './api';
import ICategory from '../@types/ICategory';

export const fetchActivityCategories = async () => {
  const token = localStorage.getItem('accessToken');
  console.log('Token récupéré:', token); // Vérifie que le token est valide

  if (!token) {
    throw new Error('Token manquant');
  }

  const { data } = await api.get(`/activity-categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.categories;
};

export const createActivityCategory = async (category: ICategory) => {
  return api.post(`/activity-categories`, category);
};

export const updateActivityCategory = async (id: string, category: ICategory) => {
  return api.put(`/activity-categories/${id}`, category);
};

export const deleteActivityCategory = async (id: string) => {
  return api.delete(`/activity-categories/${id}`);
};

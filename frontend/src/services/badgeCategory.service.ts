import api from "@/lib/axios";
import type { ICategory } from "@/types";

export const getBadgeCategories = async (): Promise<ICategory> => {
  const { data } = await api.get(`/categories/badges`);
  return data;
};

export const createBadgeCategory = async (category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) => {
  const { data } = await api.post("/categories/badges", category);
  return data;
};

export const updateBadgeCategory = async (
  id: string,
  data: { categoryName: string; description?: string }
) => {
  const response = await api.put(`/categories/badges/${id}`, data);
  return response.data;
};

export const deleteBadgeCategory = async (id: string) => {
  const response = await api.delete(`/categories/badges/${id}`);
  return response.data;
};

import api from "@/lib/axios";
import type { ICategory } from "@/types";

export const fetchCognitiveCategories = async (): Promise<ICategory> => {
  const { data } = await api.get(`/categories/cognitive`);
  return data;
};

export const createCognitiveCategory = async (category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) => {
  const { data } = await api.post("/categories/cognitive", category);
  return data;
};

export const updateCognitiveCategory = async (
  id: string,
  data: { categoryName: string; description?: string }
) => {
  const response = await api.put(`/categories/cognitive/${id}`, data);
  return response.data;
};

export const deleteCognitiveCategory = async (id: string) => {
  const response = await api.delete(`/categories/cognitive/${id}`);
  return response.data;
};

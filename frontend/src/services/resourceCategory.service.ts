import api from "@/lib/axios";
import type { ICategory } from "@/types";

export const getResourceCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem("accessToken");

  const { data } = await api.get(`/categories/resources`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createResourceCategory = async (category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) => {
  const { data } = await api.post("/categories/resources", category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const updateResourceCategory = async (
  id: string,
  data: { categoryName: string; description?: string }
) => {
  const response = await api.put(`/categories/resources/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteResourceCategory = async (id: string) => {
  const response = await api.delete(`/categories/resources/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

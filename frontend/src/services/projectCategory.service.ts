import api from "@/lib/axios";
import type { ICategory } from "@/types";

export const fetchProjectCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem("accessToken");

  const { data } = await api.get(`/categories/projects`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createProjectCategory = async (category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) => {
  const { data } = await api.post("/categories/projects", category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const updateProjectCategory = async (
  id: string,
  data: { categoryName: string; description?: string }
) => {
  const response = await api.put(`/categories/projects/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteProjectCategory = async (id: string) => {
  const response = await api.delete(`/categories/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

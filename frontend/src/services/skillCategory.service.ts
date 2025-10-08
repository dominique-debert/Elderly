import api from "@/lib/axios";
import type { ICategory } from "@/types";

export const fetchSkillCategories = async (): Promise<ICategory> => {
  const accessToken = localStorage.getItem("accessToken");

  const { data } = await api.get(`/categories/skills`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createSkillCategory = async (category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) => {
  const { data } = await api.post("/categories/skills", category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const updateSkillCategory = async (
  id: string,
  data: { categoryName: string; description?: string }
) => {
  const response = await api.put(`/categories/skills/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteSkillCategory = async (id: string) => {
  const response = await api.delete(`/categories/skills/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

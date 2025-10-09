import api from "@/lib/axios";
import type { ICategory } from "@/types";
// import { data } from "react-router-dom";

export function fetchActivityCategories(): Promise<ICategory[]> {
  const accessToken = localStorage.getItem("accessToken");

  return api.get(`/categories/activities`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function createActivityCategory(category: {
  name: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) {
  const response = await api.post("/categories/activities", category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
}

export const updateActivityCategory = async (
  id: string,
  data: { name: string; description?: string }
) => {
  const response = await api.put(`/categories/activities/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteActivityCategory = async (id: string) => {
  const response = await api.delete(`/categories/activities/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

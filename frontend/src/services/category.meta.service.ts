import api from "@/lib/axios";
import { ICategory, ICategoryType, IChapter } from "@/types";

export async function getCategoryChapters(): Promise<IChapter[]> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IChapter[]>("/categories/chapters", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function getCategoryChapterById(
  id: number
): Promise<IChapter | null> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IChapter>(`/categories/chapters/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function getCategoryTypeById(
  id: number
): Promise<ICategoryType | null> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<ICategoryType>(`/categories/types/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function getCategoryTypes(): Promise<ICategoryType[]> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<ICategoryType[]>("/categories/types", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function getCategories(
  categoryTypeId: number
): Promise<ICategory[]> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<ICategory[]>("/categories", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      categoryTypeId,
    },
  });
  return response.data;
}

export async function createCategory(category: {
  categoryName: string;
  description?: string;
  chapterId: number;
  typeId: number;
}) {
  const response = await api.post("/categories", category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
}

export const updateCategory = async (
  id: number,
  data: { name: string; description?: string }
) => {
  const response = await api.put(`/categories/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteCategory = async (id: number) => {
  const response = await api.delete(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

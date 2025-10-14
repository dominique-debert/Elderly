import api from "@/lib/axios";
import { ICategoryType, IChapter } from "@/types";

export async function getCategoryChapters(): Promise<IChapter[]> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IChapter[]>("/categories/chapters", {
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

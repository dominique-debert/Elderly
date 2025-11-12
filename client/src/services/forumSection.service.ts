import api from "@/lib/axios";
import { IForumSection } from "@/types";

export async function getAllForumSections(): Promise<IForumSection[]> {
  const response = await api.get<IForumSection[]>("/forum-sections");
  return response.data;
}

export async function getForumSectionById(
  id: number
): Promise<IForumSection | null> {
  const response = await api.get<IForumSection>(`/forum-sections/${id}`);
  return response.data;
}

export async function createForumSection(
  forumSectionData: IForumSection
): Promise<IForumSection> {
  const response = await api.post<IForumSection>(
    "/forum-sections",
    forumSectionData
  );
  return response.data;
}

export async function updateForumSection(
  id: number,
  forumSectionData: IForumSection
): Promise<IForumSection> {
  const response = await api.put<IForumSection>(
    `/forum-sections/${id}`,
    forumSectionData
  );
  return response.data;
}

export async function deleteForumSection(id: number): Promise<void> {
  await api.delete(`/forum-sections/${id}`);
}

import api from "@/lib/axios";
import { IForumTopic } from "@/types";

export async function getAllForumTopics(): Promise<IForumTopic[]> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IForumTopic[]>("/forum-topics", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function getForumTopicById(
  id: number
): Promise<IForumTopic | null> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IForumTopic>(`/forum-topics/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export async function updateForumTopic(
  id: number,
  forumTopicData: IForumTopic
): Promise<IForumTopic> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.put<IForumTopic>(
    `/forum-topics/${id}`,
    forumTopicData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
}

export async function deleteForumTopic(id: number): Promise<void> {
  const accessToken = localStorage.getItem("accessToken");
  await api.delete(`/forum-topics/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

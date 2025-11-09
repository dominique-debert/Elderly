import api from "@/lib/axios";
import { IForumTopic, IForumStatistics, IForumTopicsResponse } from "@/types";

export async function getAllForumTopics(
  page: number = 1,
  limit: number = 20
): Promise<IForumTopicsResponse> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IForumTopicsResponse>(
    `/forum-topics?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
}

export async function getForumStatistics(): Promise<IForumStatistics> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await api.get<IForumStatistics>("/forum-topics/statistics", {
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

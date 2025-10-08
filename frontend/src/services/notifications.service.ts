import api from "../lib/axios";
import type { INotification } from "../@types/INotification";

export const fetchNotifications = async (): Promise<INotification[]> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get("/notifications", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.notifications;
};

export const fetchNotificationsByUserId = async (
  userId: string
): Promise<INotification[]> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get(`/notifications/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.notifications;
};

export const createNotification = async (notification: {
  userId: string;
  type: string;
  content: string;
  read?: boolean;
  actionLink?: string;
}) => {
  const { data } = await api.post("/notifications", notification, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const updateNotification = async (
  id: string,
  notification: {
    userId: string;
    type: string;
    content: string;
    read?: boolean;
    actionLink?: string;
  }
) => {
  const { data } = await api.put(`/notifications/${id}`, notification, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const deleteNotification = async (id: string) => {
  const { data } = await api.delete(`/notifications/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

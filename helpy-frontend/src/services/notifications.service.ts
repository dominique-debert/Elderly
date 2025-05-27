import api from '../lib/axios';
import type { INotification } from '../@types/INotification';

export const fetchNotifications = async (): Promise<INotification[]> => {
  const accessToken = localStorage.getItem('accessToken');
  const { data } = await api.get('/notifications', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.notifications;
};

export const fetchNotificationsByUserId = async (userId: string): Promise<INotification[]> => {
  const accessToken = localStorage.getItem('accessToken');
  const { data } = await api.get(`/notifications/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.notifications;
};

export const createNotification = async (category: {
  name: string;
  description?: string;
}) => {
  const { data } = await api.post('/notifications', category, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};

export const updateMood = async (
  id: string,
  data: {
    id?: string
    userId: string
    type: string
    content: string
    read?: boolean
    actionLink?: string
  }
) => {
  const response = await api.put(`/notifications/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteMood = async (id: string) => {
  const response = await api.delete(`/notifications/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

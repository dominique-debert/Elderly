import api from "@/lib/axios";
import type { IUser } from "@/types";

export const updateUser = async (id: string, data: Partial<IUser>) => {
  const response = await api.put(`/users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const uploadAvatar = async (id: string, file: File) => {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await api.post(`/users/${id}/avatar`, formData, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const changePassword = async (
  id: string,
  currentPassword: string,
  newPassword: string
) => {
  const response = await api.put(
    `/users/${id}/password`,
    {
      currentPassword,
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
};

export const getUser = async (id: string): Promise<IUser> => {
  const response = await api.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

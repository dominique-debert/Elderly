import api from "@/lib/axios";
import type { IUserPreferences, EValence } from "@/types";

export const getUserPreferencesByUserId = async (
  userId: string
): Promise<IUserPreferences> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get(`/user-preferences/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const createUserPreferences = async (
  userId: string,
  userPreferences: IUserPreferences
) => {
  const { data } = await api.post(
    `/user-preferences/${userId}`,
    userPreferences,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return data;
};

export const updateUserPreferences = async (
  userId: string,
  data: {
    name: string;
    description?: string;
    valence: EValence;
    intensity: number;
    color?: string;
  }
) => {
  const response = await api.put(`/user-preferences/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteUserPreferences = async (userId: string) => {
  const response = await api.delete(`/user-preferences/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

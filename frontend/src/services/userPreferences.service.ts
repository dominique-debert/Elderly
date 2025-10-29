import api from "@/lib/axios";
import type { IUserPreferences } from "@/types";

export const getUserPreferences = async (
  userId: string
): Promise<IUserPreferences | null> => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const { data } = await api.get(`/user-preferences/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err: any) {
    // treat 404 as "not found" and return null, rethrow other errors
    if (err?.response?.status === 404) return null;
    throw err;
  }
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
  userPreferences: IUserPreferences
) => {
  const { data } = await api.put(
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

export const deleteUserPreferences = async (userId: string) => {
  const response = await api.delete(`/user-preferences/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

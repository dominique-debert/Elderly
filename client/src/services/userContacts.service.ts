import api from "@/lib/axios";
import type { IUserContact } from "@/types";

export const getAllUserContacts = async (
  userId: string
): Promise<IUserContact[]> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get(`/user-contacts/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const getUserContact = async (
  userId: string,
  contactId: string
): Promise<IUserContact> => {
  const { data } = await api.get(`/user-contacts/${userId}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const createUserContact = async (
  userId: string,
  userContact: IUserContact
) => {
  const { data } = await api.post(`/user-contacts/${userId}`, userContact, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const deleteUserContact = async (userId: string, contactId: string) => {
  const response = await api.delete(`/user-contacts/${userId}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const deleteAllUserContacts = async (userId: string) => {
  const response = await api.delete(`/user-contacts/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

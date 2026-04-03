import api from "@/lib/axios";
import type { IUserContact } from "@/types";

export const getAllUserBlockedContacts = async (
  userId: string
): Promise<IUserContact[]> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get(`/blocked-contacts/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const getUserBlockedContact = async (
  userId: string,
  contactId: string
): Promise<IUserContact> => {
  const { data } = await api.get(`/blocked-contacts/${userId}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const createUserBlockedContact = async (
  userId: string,
  userContact: IUserContact
) => {
  const { data } = await api.post(`/blocked-contacts/${userId}`, userContact, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const deleteUserBlockedContact = async (
  userId: string,
  contactId: string
) => {
  const response = await api.delete(
    `/blocked-contacts/${userId}/${contactId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
};

export const deleteAllUserBlockedContacts = async (userId: string) => {
  const response = await api.delete(`/blocked-contacts/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

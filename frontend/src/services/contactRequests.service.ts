import api from "@/lib/axios";
import type { IUserContact } from "@/types";

export const getAllUserContactRequest = async (
  userId: string,
  contactId: string
): Promise<IUserContact> => {
  const { data } = await api.get(`/contact-requests/${userId}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const getUserContactRequest = async (
  userId: string
): Promise<IUserContact[]> => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = await api.get(`/contact-requests/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const createUserContactRequest = async (
  userId: string,
  userContact: IUserContact
) => {
  const { data } = await api.post(`/contact-requests/${userId}`, userContact, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

export const deleteUserContactRequest = async (
  userId: string,
  contactId: string
) => {
  const response = await api.delete(
    `/contact-requests/${userId}/${contactId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
};

export const deleteAllUserContactRequests = async (userId: string) => {
  const response = await api.delete(`/contact-requests/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

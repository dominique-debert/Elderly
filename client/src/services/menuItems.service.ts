import api from "@/lib/axios";
import { IMenuItem } from "@/types";

export const getMenuItems = async (): Promise<IMenuItem[]> => {
  const accessToken = localStorage.getItem("accessToken");

  const { data } = await api.get(`/menu-items`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.menuItems;
};

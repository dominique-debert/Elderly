import api from "@/lib/axios";
import type { IAuthResponse } from "@/types";

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<IAuthResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export type SignupPayload =
  | FormData
  | {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      birthDate: Date;
      isAdmin: boolean;
      latitude?: string;
      longitude?: string;
      phone?: string;
      avatar?: string;
    };

export const signupUser = async (
  data: SignupPayload
): Promise<IAuthResponse> => {
  // If data is FormData, axios will set the appropriate multipart headers automatically
  const response = await api.post(
    "/auth/signup",
    data as unknown as Record<string, unknown>
  );
  return response.data as IAuthResponse;
};

/**
 * ➡️ Fonction pour utiliser le refreshToken stocké dans localStorage et demander un nouvel accessToken
 */
export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await api.post("/auth/refresh-token", { refreshToken });

  const newAccessToken = response.data.accessToken;

  // Mettre à jour dans localStorage
  localStorage.setItem("accessToken", newAccessToken);

  return newAccessToken;
};

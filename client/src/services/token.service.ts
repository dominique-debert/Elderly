import api from "@/lib/axios";

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    throw new Error("Aucun refresh token trouvé");
  }

  const response = await api.post("/auth/refresh-token", { refreshToken });
  const { accessToken, refreshToken: newRefreshToken } = response.data;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", newRefreshToken);

  return accessToken;
}

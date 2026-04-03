const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:3000";

export const getAvatarUrl = (
  avatar: string | null | undefined
): string | null => {
  if (!avatar) return null;

  // If it's already a full URL, return it
  if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
    return avatar;
  }

  // Otherwise, prepend the API base URL
  return `${API_BASE_URL}/images/avatars/${avatar}`;
};

export const getAuthToken = () => localStorage.getItem('authToken');
export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const clearAuthTokens = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
};
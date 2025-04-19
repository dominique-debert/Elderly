export interface ISession {
  id: string;
  refreshToken: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  userAgent?: string | null;
  ipAddress?: string | null;
}

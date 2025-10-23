export interface IUserContact {
  id: string;
  userId: string;
  status: "pending" | "accepted" | "rejected" | "blocked";
  message?: string;
  reason?: string;
  contactId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

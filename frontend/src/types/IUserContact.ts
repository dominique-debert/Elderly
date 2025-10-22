export interface IUserContact {
  id?: string;
  userId: string;
  status: "pending" | "accepted" | "rejected";
  message?: string;
  reason?: string;
  contactId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

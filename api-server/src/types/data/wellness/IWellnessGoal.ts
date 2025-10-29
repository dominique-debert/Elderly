export interface IWellnessGoal {
  id?: string;
  userId: string;
  title: string;
  categoryId: number;
  targetValue: number;
  unit: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

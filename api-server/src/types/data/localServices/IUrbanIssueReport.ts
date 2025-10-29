export interface IUrbanIssueReport {
  userId: string;
  categoryId: number;
  description: string;
  address: string;
  gpsCoordinates?: string;
  reportDate: Date;
  status?: string;
  cityReference?: string;
}

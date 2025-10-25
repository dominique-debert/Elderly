export interface IHelpRequest {
  creatorId: string;
  title: string;
  description?: string;
  neededDate: Date;
  estimatedDuration: number;
  location?: string;
  gpsCoordinates?: string;
  categoryId: number;
  recurring?: boolean;
  frequency?: string;
  status?: string;
  pointsOffered?: number;
}

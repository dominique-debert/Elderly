export interface IActivity {
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  gpsCoordinates?: string;
  maxSpots?: number;
  categoryId: number;
  recurring?: boolean;
  frequency?: string;
  reducedMobilityAccess?: boolean;
  difficultyLevel?: number;
  cost?: number;
  status?: string;
  weatherRequirements?: string;
  transportOptions?: string;
}

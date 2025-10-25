export interface ILocalService {
  name: string;
  categoryId: number;
  address?: string;
  gpsCoordinates?: string;
  phone?: string;
  website?: string;
  description?: string;
  hours?: string;
  seniorFriendly?: boolean;
}

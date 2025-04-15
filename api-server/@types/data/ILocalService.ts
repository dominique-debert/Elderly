export default interface ILocalService {
  name: string;
  categoryId: string;
  address: string;
  gpsCoordinates: string;
  phone: string;
  website?: string;
  description?: string;
  hours?: string;
  seniorFriendly: boolean;
}
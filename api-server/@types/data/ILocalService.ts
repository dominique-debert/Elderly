export default interface ILocalService {
  name: string;
  category_id: string;
  address: string;
  gps_coordinates: string;
  phone: string;
  website?: string;
  description?: string;
  hours?: string;
  senior_friendly: boolean;
}
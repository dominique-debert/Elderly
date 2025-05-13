import { useAuthStore } from '@/stores/auth';
import { useWeather } from '../hooks/useWeather';


export const MeteoWidget = () => {
  const {user} = useAuthStore();
  const lat = user?.latitude;
  const lon = user?.longitude;

  const shouldFetch = lat !== undefined && lon !== undefined;
  const { data, isLoading, isError } = useWeather();

  if (!shouldFetch) return <div className="text-sm text-red-500">Coordonnées manquantes</div>;
  if (isLoading) return <div className="text-sm">Chargement météo...</div>;
  if (isError || !data) return <div className="text-sm text-red-500">Erreur météo</div>;

  return (
    <div className="p-4 rounded-lg shadow bg-base-200 w-fit flex items-center space-x-4">
      <span className="text-3xl">{data.icone}</span>
      <div>
        <div className="font-bold">{data.temperature}°C</div>
        <div className="text-sm">Vent : {data.vent} km/h</div>
      </div>
    </div>
  );
};

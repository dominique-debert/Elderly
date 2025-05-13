import { useAuthStore } from '@/stores/auth';
import { useWeather } from '@/hooks/useWeather';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export const MeteoWidget = () => {
  const { user } = useAuthStore();
  const latitude = user?.latitude;
  const longitude = user?.longitude;

  const shouldFetch = latitude !== undefined && longitude !== undefined;
  const { data, isLoading, isError } = useWeather();

  if (!shouldFetch) return <div className="text-sm text-red-500">Coordonnées manquantes</div>;
  if (isLoading) return <div className="text-sm">Chargement météo...</div>;
  if (isError || !data) return <div className="text-sm text-red-500">Erreur météo</div>;

  return (

    <Card
     className="lg:w-1/3 bg-base-100 border border-base-200 xs:mt-4">
      <CardHeader>
        <CardTitle className="text-primary text-xl text-right">{ data.city }</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="stat-figure text-gray-600 text-2xl lg:mt-4 text-right">{data.icone} {data.description}</div>
          <div className="stat-figure text-3xl text-right mt-4">
            {data.temperature}°C
          </div>
      </CardContent>
    </Card>
  );
};

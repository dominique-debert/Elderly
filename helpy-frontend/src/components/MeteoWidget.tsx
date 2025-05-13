import { useAuthStore } from '@/stores/auth';
import { useWeather } from '@/hooks/useWeather';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';
import Icon from '@mdi/react';
import * as mdi from '@mdi/js';

export const MeteoWidget = () => {
  const { user } = useAuthStore();
  const latitude = user?.latitude;
  const longitude = user?.longitude;

  const shouldFetch = latitude !== undefined && longitude !== undefined;
  const { data, isLoading, isError } = useWeather();

  const renderIcon = (iconName: string) => {
    const path = mdi[iconName as keyof typeof mdi] || mdi.mdiWeatherCloudy;
    return <Icon path={path} size={1.2} />;
  };

  if (!shouldFetch) return <div className="text-sm text-red-500">Coordonnées manquantes</div>;
  if (isError) return <div className="text-sm text-red-500">Erreur météo</div>;

  return (
    <Card className="lg:w-1/3 bg-base-100 border border-base-200 xs:mt-4">
      <CardHeader>
        <CardTitle className="text-primary text-xl text-right">
          {isLoading ? <Skeleton className="h-6 w-24 ml-auto" /> : data.city}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <>
            <Skeleton className="h-5 w-40 ml-auto mb-2" />
            <Skeleton className="h-10 w-20 ml-auto" />

            <div className="divider mt-4 mb-2" />
            <div className="grid grid-cols-3 gap-2 text-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-2 rounded-lg bg-base-200">
                  <Skeleton className="h-4 w-12 mx-auto mb-1" />
                  <Skeleton className="h-4 w-16 mx-auto mb-1" />
                  <Skeleton className="h-4 w-10 mx-auto" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-right">
              <div className="flex justify-end items-center gap-2 text-gray-600 text-lg">
                {renderIcon(data.icone)} {data.description}
              </div>
              <div className="text-3xl font-semibold mt-2">{data.temperature}°C</div>
            </div>

            <div className="divider mt-4 mb-2" />

            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              {data.forecast.map((day: {
                date: string;
                icone: string;
                description: string;
                temperature_max: number;
                temperature_min: number;
              }, i: number) => (
                <div key={i} className="p-2 rounded-lg bg-base-200">
                  <div className="font-semibold">
                    {new Date(day.date).toLocaleDateString('fr-FR', { weekday: 'short' })}
                  </div>
                  <div className="flex justify-center items-center gap-1 text-xs text-gray-500">
                    {renderIcon(day.icone)}
                    {day.description}
                  </div>
                  <div className="mt-1 text-sm">
                    <span className="text-primary font-bold">{day.temperature_max}°</span>
                    <span className="text-gray-500"> / {day.temperature_min}°</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

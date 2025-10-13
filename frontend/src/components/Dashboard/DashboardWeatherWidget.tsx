import Icon from "@mdi/react";
import * as mdi from "@mdi/js";
import { useAuthStore } from "@/stores";
import { useWeather } from "@/hooks";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Skeleton,
} from "@/components";

export const DashboardWeatherWidget = () => {
  const { user } = useAuthStore();
  const latitude = user?.latitude;
  const longitude = user?.longitude;

  const shouldFetch = latitude !== undefined && longitude !== undefined;
  const { data, isLoading, isError } = useWeather();

  const renderIcon = (iconName: string) => {
    const path = mdi[iconName as keyof typeof mdi] || mdi.mdiWeatherCloudy;
    return <Icon path={path} size={1.2} />;
  };

  if (!shouldFetch)
    return <div className="text-sm text-red-500">Coordonnées manquantes</div>;
  if (isError) return <div className="text-sm text-red-500">Erreur météo</div>;

  return (
    <Card
      // style={{
      //   backgroundImage: `url(${data?.background})`,
      //   backgroundSize: "object-cover",
      // }}
      className="lg:w-2/3 xs:mt-4 rounded-xl"
    >
      <CardHeader>
        <CardTitle className="text-3xl text-center text-primary">
          {isLoading ? <Skeleton className="h-6 w-24 ml-auto" /> : data?.city}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <>
            <Skeleton className="h-5 w-40 ml-auto mb-2" />
            <Skeleton className="h-10 w-20 ml-auto" />

            <div className="grid grid-cols-3 gap-2 text-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-2 rounded-lg">
                  <Skeleton className="h-4 w-12 mx-auto mb-1" />
                  <Skeleton className="h-4 w-16 mx-auto mb-1" />
                  <Skeleton className="h-4 w-10 mx-auto" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-end items-center gap-2 text-xl mt-4">
              {renderIcon(data.icone)}
              <p className="w-full text-center mb-3">{data.description}</p>
            </div>
            <div className="text-3xl font-semibold mt-2 text-center">
              {data.temperature}°C
            </div>

            {/* <div className="divider mt-4 mb-2" /> */}

            <div className="mt-12 grid grid-cols-3 gap-2 text-center text-sm">
              {data.forecast.map(
                (
                  day: {
                    date: string;
                    icone: string;
                    description: string;
                    background: string;
                    temperature_max: number;
                    temperature_min: number;
                  },
                  i: number
                ) => (
                  <div key={i}>
                    <div className="text-lg capitalize">
                      {new Date(day.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                      })}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 text-md mt-4">
                      {renderIcon(day.icone)}
                      <p className="mt-4">{day.description}</p>
                    </div>
                    <div className="mt-4 text-md">
                      <div>Min: {day.temperature_min}°</div>
                      <div>Max: {day.temperature_max}°</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

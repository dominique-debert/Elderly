import Icon from "@mdi/react";
import * as mdi from "@mdi/js";
import { useAuthStore } from "@/stores";
import { useWeather } from "@/hooks/useWeather";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

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

  if (!shouldFetch)
    return <div className="text-sm text-red-500">Coordonnées manquantes</div>;
  if (isError) return <div className="text-sm text-red-500">Erreur météo</div>;

  return (
    <Card
      style={{
        backgroundImage: `url(${data?.background})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(255,255,255,0.3)",
        backgroundBlendMode: "lighten",
      }}
      className="lg:w-2/3 bg-base-100 border border-base-200 xs:mt-4"
    >
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gray-600">
          {isLoading ? <Skeleton className="h-6 w-24 ml-auto" /> : data?.city}
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
            <div className="flex flex-col justify-end items-center gap-2 text-gray-600 text-lg">
              {renderIcon(data.icone)}
              <p className="w-full text-center mb-3">{data.description}</p>
            </div>
            <div className="text-3xl font-semibold mt-2 text-center">
              {data.temperature}°C
            </div>

            <div className="divider mt-4 mb-2" />

            <div className="grid grid-cols-3 gap-2 text-center text-sm">
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
                  <div
                    style={{
                      backgroundImage: `url(${day.background})`,
                      backgroundSize: "cover",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      backgroundBlendMode: "lighten",
                    }}
                    key={i}
                    className={`p-4 rounded-lg bg-base-100 ${
                      i === 0 ? "bg-blue-100" : ""
                    }`}
                  >
                    <div className="font-semibold mb-2">
                      {new Date(day.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                      })}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 text-xs text-gray-700">
                      {renderIcon(day.icone)}
                      <p className="mb-2">{day.description}</p>
                    </div>
                    <div className="mt-1 text-sm">
                      <div className="text-gray-700">
                        Min: {day.temperature_min}°
                      </div>
                      <div className="font-semibold">
                        Max: {day.temperature_max}°
                      </div>
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

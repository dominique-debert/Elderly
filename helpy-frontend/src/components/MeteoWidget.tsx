import { useMeteo } from '../hooks/useMeteo';

interface MeteoWidgetProps {
  lat: number;
  lon: number;
}

export const MeteoWidget = ({ lat, lon }: MeteoWidgetProps) => {
  const { data, isLoading, isError } = useMeteo(lat, lon);

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

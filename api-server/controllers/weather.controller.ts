import { Request, Response } from 'express';
import axios from 'axios';

export const getMeteo = async (req: Request, res: Response) => {
  const lat = parseFloat(req.query.lat as string);
  const lon = parseFloat(req.query.lon as string);

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ message: 'Paramètres lat et lon requis.' });
  }

  try {
    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
      },
    });

    const meteo = weatherRes.data.current_weather;

    return res.json({
      temperature: meteo.temperature,
      vent: meteo.windspeed,
      code: meteo.weathercode,
      icone: mapWeatherCodeToIcon(meteo.weathercode),
    });
  } catch (err: any) {
    return res.status(500).json({ message: 'Erreur API météo', error: err.message });
  }
};

function mapWeatherCodeToIcon(code: number): string {
  if (code === 0) return '☀️';
  if (code === 1 || code === 2) return '🌤️';
  if (code === 3) return '☁️';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 86) return '🌩️';
  return '❓';
}

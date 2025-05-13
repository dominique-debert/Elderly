import { Request, Response } from 'express';
import axios from 'axios';
import { mapWeatherCodeToIcon, mapWeatherCodeToLabel } from '@/utils/weatherIcons';
import { getCityFromCoordinates } from '@/utils/getCityFromCoordinates';

export const getWeather = async (req: Request, res: Response) => {
  try {
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);
    const city = await getCityFromCoordinates(latitude, longitude);

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ message: 'Latitude ou longitude invalide.' });
    }

    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
      },
    });

    const weather = weatherRes.data.current_weather;

    return res.json({
      temperature: weather.temperature,
      vent: weather.windspeed,
      code: weather.weathercode,
      icone: mapWeatherCodeToIcon(weather.weathercode),
      description: mapWeatherCodeToLabel(weather.weathercode),
      city: city,
    });
  } catch (err: any) {
    console.error('Erreur API météo :', err);
    return res.status(500).json({ message: 'Erreur API météo', error: err.message });
  }
};

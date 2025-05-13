import { Request, Response } from 'express';
import axios from 'axios';

export const getWeather = async (req: Request, res: Response) => {
  try {
    const lat = parseFloat(req.query.latitude as string);
    const lon = parseFloat(req.query.longitude as string);

    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({ message: 'Latitude ou longitude invalide.' });
    }

    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
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
    });
  } catch (err: any) {
    console.error('Erreur API météo :', err);
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

// Fonction pour mapper les codes météo aux labels
function mapWeatherCodeToLabel(code: number): string {
  const map: Record<number, string> = {
    0: 'Ciel clair',
    1: 'Principalement dégagé',
    2: 'Partiellement nuageux',
    3: 'Couvert',
    45: 'Brouillard',
    48: 'Brouillard givrant',
    51: 'Bruine légère',
    53: 'Bruine modérée',
    55: 'Bruine dense',
    56: 'Bruine verglaçante légère',
    57: 'Bruine verglaçante dense',
    61: 'Pluie légère',
    63: 'Pluie modérée',
    65: 'Pluie forte',
    66: 'Pluie verglaçante légère',
    67: 'Pluie verglaçante forte',
    71: 'Neige légère',
    73: 'Neige modérée',
    75: 'Neige forte',
    77: 'Grains de neige',
    80: 'Averses légères',
    81: 'Averses modérées',
    82: 'Averses violentes',
    85: 'Averses de neige légères',
    86: 'Averses de neige fortes',
    95: 'Orage',
    96: 'Orage avec grêle légère',
    99: 'Orage avec grêle forte',
  };

  return map[code] ?? 'Condition inconnue';
}
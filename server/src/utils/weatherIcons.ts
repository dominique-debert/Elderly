export function mapWeatherCodeToIcon(code: number): string {
  if (code === 0) return '/images/weather/0.png';
  if (code === 1 || code === 2) return '/images/weather/2.png';
  if (code === 3) return '/images/weather/3.png';
  if (code >= 45 && code <= 48) return '/images/weather/48.png';
  if (code >= 51 && code <= 57) return '/images/weather/57.png';
  if (code >= 61 && code <= 67) return '/images/weather/67.png';
  if (code >= 71 && code <= 77) return '/images/weather/77.png';
  if (code >= 80 && code <= 86) return '/images/weather/86.png';
  if (code >= 95 && code <= 99) return '/images/weather/86.png';
  return '❓';
}

export function mapWeatherCodeToBackground(code: number): string {
  if (code === 0) return '/images/weather/0.jpg';
  if (code === 1 || code === 2) return '/images/weather/2.jpg';
  if (code === 3) return '/images/weather/3.jpg';
  if (code >= 45 && code <= 48) return '/images/weather/48.jpg';
  if (code >= 51 && code <= 57) return '/images/weather/57.jpg';
  if (code >= 61 && code <= 67) return '/images/weather/67.jpg';
  if (code >= 71 && code <= 77) return '/images/weather/77.jpg';
  if (code >= 80 && code <= 86) return '/images/weather/86.jpg';
  if (code >= 95 && code <= 99) return '/images/weather/99.jpg';
  return '❓';
}


// Fonction pour mapper les codes météo aux labels
export function mapWeatherCodeToLabel(code: number): string {
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

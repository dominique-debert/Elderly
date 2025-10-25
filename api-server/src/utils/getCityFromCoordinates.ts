import axios from 'axios';

/**
 * Récupère le nom de la ville à partir de coordonnées GPS.
 * @param latitude - Latitude décimale
 * @param longitude - Longitude décimale
 * @returns Le nom de la ville (ou town/village), ou 'Ville inconnue'
 */
export const getCityFromCoordinates = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const res = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
      },
      headers: {
        'User-Agent': 'Helpy/1.0 (contact@helpy.local)', 
      },
    });

    const address = res.data.address;
    return address.city || address.town || address.village || 'Ville inconnue';
  } catch (error) {
    console.error('Erreur lors de la récupération de la ville :', error);
    return 'Ville inconnue';
  }
};

import { Request, Response } from "express";
import axios from "axios";
import {
  getCityFromCoordinates,
  mapWeatherCodeToIcon,
  mapWeatherCodeToLabel,
  mapWeatherCodeToBackground,
} from "@/utils";

export const getWeather = async (req: Request, res: Response) => {
  try {
    const latitude = parseFloat(req.query.latitude as string);
    const longitude = parseFloat(req.query.longitude as string);

    if (isNaN(latitude) || isNaN(longitude)) {
      return res
        .status(400)
        .json({ message: "Latitude ou longitude invalide." });
    }

    const city = await getCityFromCoordinates(latitude, longitude);

    const weatherRes = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude,
          longitude,
          current_weather: true,
          daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
          timezone: "auto",
        },
      }
    );

    const current = weatherRes.data.current_weather;
    const daily = weatherRes.data.daily;

    const forecast = daily.time.map((date: string, i: number) => ({
      date,
      temperature_max: daily.temperature_2m_max[i],
      temperature_min: daily.temperature_2m_min[i],
      code: daily.weathercode[i],
      icone: mapWeatherCodeToIcon(daily.weathercode[i]),
      background: mapWeatherCodeToBackground(daily.weathercode[i]),
      description: mapWeatherCodeToLabel(daily.weathercode[i]),
    }));

    return res.json({
      temperature: current.temperature,
      vent: current.windspeed,
      code: current.weathercode,
      background: mapWeatherCodeToBackground(current.weathercode),
      icone: mapWeatherCodeToIcon(current.weathercode),
      description: mapWeatherCodeToLabel(current.weathercode),
      city,
      forecast: forecast.slice(0, 3),
    });
  } catch (err: any) {
    console.error("Erreur API météo :", err);
    return res
      .status(500)
      .json({ message: "Erreur API météo", error: err.message });
  }
};

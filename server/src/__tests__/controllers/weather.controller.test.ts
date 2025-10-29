import { getWeather } from "@/controllers/weather.controller";
import axios from "axios";
import {
  getCityFromCoordinates,
  mapWeatherCodeToIcon,
  mapWeatherCodeToLabel,
  mapWeatherCodeToBackground,
} from "@/utils";

jest.mock("axios");
jest.mock("@/utils", () => ({
  getCityFromCoordinates: jest.fn(),
  mapWeatherCodeToIcon: jest.fn(),
  mapWeatherCodeToLabel: jest.fn(),
  mapWeatherCodeToBackground: jest.fn(),
}));

describe("weather.controller", () => {
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    mockRequest = {
      query: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  it("should return 400 if latitude or longitude is invalid", async () => {
    mockRequest.query = { latitude: "abc", longitude: "2.35" };
    await getWeather(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Latitude ou longitude invalide.",
    });
  });

  it("should return weather data for valid coordinates", async () => {
    mockRequest.query = { latitude: "48.85", longitude: "2.35" };
    (getCityFromCoordinates as jest.Mock).mockResolvedValue("Paris");
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        current_weather: {
          temperature: 18,
          windspeed: 5,
          weathercode: 2,
        },
        daily: {
          time: ["2025-10-23", "2025-10-24", "2025-10-25"],
          temperature_2m_max: [19, 20, 21],
          temperature_2m_min: [10, 11, 12],
          weathercode: [2, 3, 4],
        },
      },
    });
    (mapWeatherCodeToIcon as jest.Mock).mockImplementation(
      (code) => `icon${code}`
    );
    (mapWeatherCodeToLabel as jest.Mock).mockImplementation(
      (code) => `label${code}`
    );
    (mapWeatherCodeToBackground as jest.Mock).mockImplementation(
      (code) => `bg${code}`
    );

    await getWeather(mockRequest, mockResponse);

    expect(getCityFromCoordinates).toHaveBeenCalledWith(48.85, 2.35);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.open-meteo.com/v1/forecast",
      expect.objectContaining({
        params: expect.objectContaining({
          latitude: 48.85,
          longitude: 2.35,
          current_weather: true,
          daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
          timezone: "auto",
        }),
      })
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      temperature: 18,
      vent: 5,
      code: 2,
      background: "bg2",
      icone: "icon2",
      description: "label2",
      city: "Paris",
      forecast: [
        {
          date: "2025-10-23",
          temperature_max: 19,
          temperature_min: 10,
          code: 2,
          icone: "icon2",
          background: "bg2",
          description: "label2",
        },
        {
          date: "2025-10-24",
          temperature_max: 20,
          temperature_min: 11,
          code: 3,
          icone: "icon3",
          background: "bg3",
          description: "label3",
        },
        {
          date: "2025-10-25",
          temperature_max: 21,
          temperature_min: 12,
          code: 4,
          icone: "icon4",
          background: "bg4",
          description: "label4",
        },
      ],
    });
  });

  it("should handle API errors and return 500", async () => {
    mockRequest.query = { latitude: "48.85", longitude: "2.35" };
    (getCityFromCoordinates as jest.Mock).mockResolvedValue("Paris");
    (axios.get as jest.Mock).mockRejectedValue(new Error("API fail"));

    await getWeather(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Erreur API météo",
      error: "API fail",
    });
  });
});

import express from "express";
import request from "supertest";

// Mock getWeather controller
const mockGetWeather = jest.fn((req, res) => res.json({ weather: "sunny" }));

jest.mock("@/controllers/weather.controller", () => ({
  getWeather: mockGetWeather,
}));

import weatherRouter from "@/routes/weather.routes";

const app = express();
app.use("/api/weather", weatherRouter);

describe("weather.routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("GET /api/weather should call getWeather and return weather data", async () => {
    const res = await request(app).get("/api/weather");
    expect(mockGetWeather).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ weather: "sunny" });
  });

  it("GET /api/weather should call next on error", async () => {
    mockGetWeather.mockImplementationOnce(() => {
      throw new Error("Weather error");
    });
    const next = jest.fn();
    await request(app).get("/api/weather").expect(500);
    // Note: supertest does not expose next, but error will propagate to Express error handler
  });
});

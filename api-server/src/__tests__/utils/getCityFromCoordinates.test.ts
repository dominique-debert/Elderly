import axios from "axios";
import { getCityFromCoordinates } from "@/utils/getCityFromCoordinates";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getCityFromCoordinates", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return city if present in response", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { address: { city: "Paris" } },
    } as any);
    const city = await getCityFromCoordinates(48.8566, 2.3522);
    expect(city).toBe("Paris");
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://nominatim.openstreetmap.org/reverse",
      expect.objectContaining({
        params: expect.objectContaining({
          lat: 48.8566,
          lon: 2.3522,
          format: "json",
        }),
        headers: expect.objectContaining({ "User-Agent": expect.any(String) }),
      })
    );
  });

  it("should return town if city is not present", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { address: { town: "Versailles" } },
    } as any);
    const city = await getCityFromCoordinates(48.8014, 2.1301);
    expect(city).toBe("Versailles");
  });

  it("should return village if city and town are not present", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { address: { village: "Giverny" } },
    } as any);
    const city = await getCityFromCoordinates(49.0757, 1.5331);
    expect(city).toBe("Giverny");
  });

  it("should return 'Ville inconnue' if no city/town/village", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { address: {} },
    } as any);
    const city = await getCityFromCoordinates(0, 0);
    expect(city).toBe("Ville inconnue");
  });

  it("should return 'Ville inconnue' on error", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));
    const city = await getCityFromCoordinates(0, 0);
    expect(city).toBe("Ville inconnue");
  });
});

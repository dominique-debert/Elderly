import {
  mapWeatherCodeToIcon,
  mapWeatherCodeToBackground,
  mapWeatherCodeToLabel,
} from "@/utils/weatherIcons";

describe("weatherIcons utils", () => {
  describe("mapWeatherCodeToIcon", () => {
    it("returns correct icon for known codes", () => {
      expect(mapWeatherCodeToIcon(0)).toBe("/images/weather/0.png");
      expect(mapWeatherCodeToIcon(1)).toBe("/images/weather/2.png");
      expect(mapWeatherCodeToIcon(2)).toBe("/images/weather/2.png");
      expect(mapWeatherCodeToIcon(3)).toBe("/images/weather/3.png");
      expect(mapWeatherCodeToIcon(45)).toBe("/images/weather/48.png");
      expect(mapWeatherCodeToIcon(48)).toBe("/images/weather/48.png");
      expect(mapWeatherCodeToIcon(51)).toBe("/images/weather/57.png");
      expect(mapWeatherCodeToIcon(57)).toBe("/images/weather/57.png");
      expect(mapWeatherCodeToIcon(61)).toBe("/images/weather/67.png");
      expect(mapWeatherCodeToIcon(67)).toBe("/images/weather/67.png");
      expect(mapWeatherCodeToIcon(71)).toBe("/images/weather/77.png");
      expect(mapWeatherCodeToIcon(77)).toBe("/images/weather/77.png");
      expect(mapWeatherCodeToIcon(80)).toBe("/images/weather/86.png");
      expect(mapWeatherCodeToIcon(86)).toBe("/images/weather/86.png");
      expect(mapWeatherCodeToIcon(95)).toBe("/images/weather/86.png");
      expect(mapWeatherCodeToIcon(99)).toBe("/images/weather/86.png");
    });

    it("returns ❓ for unknown code", () => {
      expect(mapWeatherCodeToIcon(999)).toBe("❓");
      expect(mapWeatherCodeToIcon(-1)).toBe("❓");
    });
  });

  describe("mapWeatherCodeToBackground", () => {
    it("returns correct background for known codes", () => {
      expect(mapWeatherCodeToBackground(0)).toBe("/images/weather/0.jpg");
      expect(mapWeatherCodeToBackground(1)).toBe("/images/weather/2.jpg");
      expect(mapWeatherCodeToBackground(2)).toBe("/images/weather/2.jpg");
      expect(mapWeatherCodeToBackground(3)).toBe("/images/weather/3.jpg");
      expect(mapWeatherCodeToBackground(45)).toBe("/images/weather/48.jpg");
      expect(mapWeatherCodeToBackground(48)).toBe("/images/weather/48.jpg");
      expect(mapWeatherCodeToBackground(51)).toBe("/images/weather/57.jpg");
      expect(mapWeatherCodeToBackground(57)).toBe("/images/weather/57.jpg");
      expect(mapWeatherCodeToBackground(61)).toBe("/images/weather/67.jpg");
      expect(mapWeatherCodeToBackground(67)).toBe("/images/weather/67.jpg");
      expect(mapWeatherCodeToBackground(71)).toBe("/images/weather/77.jpg");
      expect(mapWeatherCodeToBackground(77)).toBe("/images/weather/77.jpg");
      expect(mapWeatherCodeToBackground(80)).toBe("/images/weather/86.jpg");
      expect(mapWeatherCodeToBackground(86)).toBe("/images/weather/86.jpg");
      expect(mapWeatherCodeToBackground(95)).toBe("/images/weather/99.jpg");
      expect(mapWeatherCodeToBackground(99)).toBe("/images/weather/99.jpg");
    });

    it("returns ❓ for unknown code", () => {
      expect(mapWeatherCodeToBackground(999)).toBe("❓");
      expect(mapWeatherCodeToBackground(-1)).toBe("❓");
    });
  });

  describe("mapWeatherCodeToLabel", () => {
    it("returns correct label for known codes", () => {
      expect(mapWeatherCodeToLabel(0)).toBe("Ciel clair");
      expect(mapWeatherCodeToLabel(1)).toBe("Principalement dégagé");
      expect(mapWeatherCodeToLabel(2)).toBe("Partiellement nuageux");
      expect(mapWeatherCodeToLabel(3)).toBe("Couvert");
      expect(mapWeatherCodeToLabel(45)).toBe("Brouillard");
      expect(mapWeatherCodeToLabel(48)).toBe("Brouillard givrant");
      expect(mapWeatherCodeToLabel(51)).toBe("Bruine légère");
      expect(mapWeatherCodeToLabel(57)).toBe("Bruine verglaçante dense");
      expect(mapWeatherCodeToLabel(61)).toBe("Pluie légère");
      expect(mapWeatherCodeToLabel(67)).toBe("Pluie verglaçante forte");
      expect(mapWeatherCodeToLabel(71)).toBe("Neige légère");
      expect(mapWeatherCodeToLabel(77)).toBe("Grains de neige");
      expect(mapWeatherCodeToLabel(80)).toBe("Averses légères");
      expect(mapWeatherCodeToLabel(86)).toBe("Averses de neige fortes");
      expect(mapWeatherCodeToLabel(95)).toBe("Orage");
      expect(mapWeatherCodeToLabel(96)).toBe("Orage avec grêle légère");
      expect(mapWeatherCodeToLabel(99)).toBe("Orage avec grêle forte");
    });

    it("returns 'Condition inconnue' for unknown code", () => {
      expect(mapWeatherCodeToLabel(999)).toBe("Condition inconnue");
      expect(mapWeatherCodeToLabel(-1)).toBe("Condition inconnue");
    });
  });
});

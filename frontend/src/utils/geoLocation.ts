import { IGeolocationResponse } from "@/types";

const getGeolocationData = (): Promise<IGeolocationResponse> => {
  return new Promise((resolve, reject) => {
    // Check if geolocation is supported
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }

    // Check if the page is served over HTTPS (required for geolocation in many browsers)
    if (location.protocol !== "https:" && location.hostname !== "localhost") {
      reject(new Error("Geolocation requires HTTPS or localhost."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData: IGeolocationResponse = {
          latitude: String(position.coords.latitude),
          longitude: String(position.coords.longitude),
          accuracy: String(position.coords.accuracy),
        };
        console.log("Geolocation success:", locationData);
        resolve(locationData);
      },
      (error) => {
        console.error("Geolocation error:", error);

        let errorMessage = "Geolocation error: ";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage += "The request to get user location timed out.";
            break;
          default:
            errorMessage += "An unknown error occurred.";
            break;
        }

        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: false, // Try with lower accuracy first
        timeout: 10000, // Increase timeout to 10 seconds
        maximumAge: 300000, // Accept cached position up to 5 minutes old
      }
    );
  });
};

// Fallback function that provides default coordinates if geolocation fails
const getGeolocationDataWithFallback =
  async (): Promise<IGeolocationResponse> => {
    try {
      return await getGeolocationData();
    } catch (error) {
      console.warn("Geolocation failed, using default location:", error);

      // Return default coordinates (e.g., Paris, France)
      return {
        latitude: "48.8566",
        longitude: "2.3522",
        accuracy: "0",
      };
    }
  };

export { getGeolocationData, getGeolocationDataWithFallback };

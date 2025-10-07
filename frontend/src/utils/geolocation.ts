import { IGeolocationResponse } from "@/@types";

const getGeolocationData = (): Promise<IGeolocationResponse> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData: IGeolocationResponse = {
            latitude: String(position.coords.latitude),
            longitude: String(position.coords.longitude),
            accuracy: String(position.coords.accuracy),
          };
          resolve(locationData);
        },
        (error) => {
          reject(new Error(`Geolocation error: ${error.message}`));
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export { getGeolocationData };

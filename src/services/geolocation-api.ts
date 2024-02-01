export type Position = {
  lat: number;
  lon: number;
};

export async function getLocation(): Promise<Position | null> {
  return new Promise<Position | null>((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      resolve(null);
    }
  });
}

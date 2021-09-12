export interface MapData {
  countries: Country[];
  continentsCount: number;
  citiesCount: number;
  worldPercentage: number;
  currentLocation: Location;
}

export interface Location {
  name: string;
  flag: string;
}

export interface Country extends Location {
  code: string;
}

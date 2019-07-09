interface Properties {
  name: string;
}

interface Geometry {
  type: string;
  coordinates?: number[];
}

export interface Geography {
  type: string;
  id: string;
  properties: Properties;
  geometry: Geometry;
}

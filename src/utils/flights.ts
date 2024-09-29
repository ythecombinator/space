export const airportCoordinates = {
  PRG: [50.1008, 14.26],
  CPV: [-7.2491, -35.8981],
  MIA: [25.7959, -80.287],
  BSB: [-15.8697, -47.9172],
  SLC: [40.7899, -111.9791],
  MUC: [48.3537, 11.775],
  CDG: [49.0097, 2.5479],
  FOR: [-3.7762, -38.5323],
  CNF: [-19.6336, -43.9686],
  BLR: [13.1986, 77.7066],
  EFL: [38.1202, 20.5005],
  FRA: [50.0379, 8.5622],
  POA: [-29.9941, -51.1714],
  MVD: [-34.8381, -56.0304],
  GRU: [-23.4356, -46.4731],
  JFK: [40.6413, -73.7781],
  FCO: [41.8003, 12.2389],
  TFN: [28.4827, -16.3415],
  ATH: [37.9364, 23.9445],
  WAW: [52.1672, 20.9679],
  ZTH: [37.7509, 20.8843],
  LIS: [38.7742, -9.1342],
  BRU: [50.9014, 4.4844],
  OSL: [60.1976, 11.0004],
  ALC: [38.2822, -0.5581],
  IST: [41.2605, 28.7434],
  VRN: [45.3959, 10.8885],
  PFO: [34.7181, 32.4814],
  MLA: [35.8575, 14.4775],
  TLL: [59.4134, 24.8328],
  GOI: [15.3808, 73.8314],
  DOH: [25.2609, 51.6138],
  STN: [51.886, 0.2389],
  BEG: [44.8184, 20.309],
  AMS: [52.3105, 4.7683],
  YYZ: [43.6777, -79.6248],
  LGA: [40.7769, -73.874],
  VCP: [-23.0074, -47.1345],
  THE: [-5.0594, -42.8235],
  GIG: [-22.8088, -43.2436],
  NAT: [-5.7684, -35.3664],
  REC: [-8.1325, -34.9237],
  SJC: [37.3639, -121.9289],
  LHR: [51.47, -0.4543],
  NTE: [47.1531, -1.6111],
  ASR: [38.7704, 35.495],
} as const;

export const airlineColors: { [key: string]: string } = {
  AD: '#D81B60', // Azul Brazilian Airlines
  AA: '#E53935', // American Airlines
  KL: '#039BE5', // KLM Royal Dutch Airlines
  DL: '#43A047', // Delta Air Lines
  LH: '#FBC02D', // Lufthansa
  AF: '#1E88E5', // Air France
  '6E': '#FF6F00', // IndiGo
  QR: '#6D4C41', // Qatar Airways
  QS: '#C0CA33', // SmartWings
  TP: '#00897B', // TAP Air Portugal
  LA: '#1565C0', // LATAM Airlines
  JJ: '#D32F2F', // LATAM Brasil
  EW: '#7B1FA2', // Eurowings
  LO: '#D50000', // LOT Polish Airlines
  CY: '#0097A7', // Cyprus Airways
  FR: '#FB8C00', // Ryanair
  EK: '#FDD835', // Emirates
  LX: '#B71C1C', // Swiss International Air Lines
  IB: '#8E24AA', // Iberia
  DY: '#FF6D00', // Norwegian Air Shuttle
  W6: '#7C4DFF', // Wizz Air
  TK: '#C62828', // Turkish Airlines
  SN: '#0D47A1', // Brussels Airlines
  VY: '#FFD600', // Vueling
  FD: '#FF3D00', // Thai AirAsia
  U2: '#F4511E', // EasyJet
  G3: '#00C853', // Gol Transportes Aéreos
  BA: '#3949AB', // British Airways
  O6: '#00BFA5', // Avianca Brasil
};

export const airlineNames = {
  AD: 'Azul Brazilian Airlines',
  AA: 'American Airlines',
  KL: 'KLM Royal Dutch Airlines',
  DL: 'Delta Air Lines',
  LH: 'Lufthansa',
  AF: 'Air France',
  '6E': 'IndiGo',
  QR: 'Qatar Airways',
  QS: 'SmartWings',
  TP: 'TAP Air Portugal',
  LA: 'LATAM Airlines',
  JJ: 'LATAM Brasil',
  EW: 'Eurowings',
  LO: 'LOT Polish Airlines',
  CY: 'Cyprus Airways',
  FR: 'Ryanair',
  EK: 'Emirates',
  LX: 'Swiss International Air Lines',
  IB: 'Iberia',
  DY: 'Norwegian Air Shuttle',
  W6: 'Wizz Air',
  TK: 'Turkish Airlines',
  SN: 'Brussels Airlines',
  VY: 'Vueling',
  FD: 'Thai AirAsia',
  U2: 'EasyJet',
  G3: 'Gol Transportes Aéreos',
  BA: 'British Airways',
  O6: 'Avianca Brasil',
} as const;

export const getAirlineColor = (airline: string) => airlineColors[airline] || '#9E9E9E';

export const getTileUrl = (isDarkMode: boolean) =>
  isDarkMode
    ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

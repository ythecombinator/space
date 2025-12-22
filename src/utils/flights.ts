export const airportCoordinates: Record<string, [number, number] | undefined> = {
  ALC: [38.2822, -0.5581],
  AMM: [31.7226, 35.9932],
  AMS: [52.3105, 4.7683],
  ASR: [38.7704, 35.495],
  ATH: [37.9364, 23.9445],
  ATL: [33.6407, -84.4277],
  BCN: [41.2974, 2.0833],
  BEG: [44.8184, 20.309],
  BKK: [13.6811, 100.7472],
  BLR: [13.1986, 77.7066],
  BRU: [50.9014, 4.4844],
  BSB: [-15.8697, -47.9172],
  BWI: [39.1774, -76.6684],
  CDG: [49.0097, 2.5479],
  CEI: [19.9523, 99.8829],
  CMN: [33.3675, -7.5898],
  CNF: [-19.6336, -43.9686],
  CNX: [18.7667, 98.9628],
  CPV: [-7.2491, -35.8981],
  DMK: [13.9126, 100.6069],
  DOH: [25.2609, 51.6138],
  DUS: [51.2895, 6.7668],
  DXB: [25.2532, 55.3657],
  EFL: [38.1202, 20.5005],
  EWR: [40.6895, -74.1745],
  FCO: [41.8003, 12.2389],
  FLN: [-27.6703, -48.5525],
  FOR: [-3.7762, -38.5323],
  FRA: [50.0379, 8.5622],
  GIG: [-22.8088, -43.2436],
  GOI: [15.3808, 73.8314],
  GRU: [-23.4356, -46.4731],
  HDY: [6.9333, 100.3933],
  HKT: [8.1132, 98.3169],
  HND: [35.5494, 139.7798],
  ICN: [37.4602, 126.4407],
  IST: [41.2605, 28.7434],
  JFK: [40.6413, -73.7781],
  KBV: [8.0951, 98.9862],
  KIX: [34.4273, 135.2444],
  LCA: [34.8751, 33.6249],
  LGA: [40.7769, -73.874],
  LHR: [51.47, -0.4543],
  LIS: [38.7742, -9.1342],
  MAD: [40.4983, -3.5676],
  MIA: [25.7959, -80.287],
  MLA: [35.8575, 14.4775],
  MUC: [48.3537, 11.775],
  MVD: [-34.8381, -56.0304],
  NAT: [-5.7684, -35.3664],
  NTE: [47.1531, -1.6111],
  OPO: [41.2482, -8.6815],
  OSL: [60.1976, 11.0004],
  PEK: [40.0801, 116.5846],
  PFO: [34.7181, 32.4814],
  PMI: [39.5517, 2.7388],
  POA: [-29.9941, -51.1714],
  PRG: [50.1008, 14.26],
  REC: [-8.1325, -34.9237],
  SAN: [32.7336, -117.1897],
  SEA: [47.4502, -122.3088],
  SJC: [37.3639, -121.9289],
  SKP: [41.9616, 21.6214],
  SLC: [40.7899, -111.9791],
  STN: [51.886, 0.2389],
  TFN: [28.4827, -16.3415],
  THE: [-5.0594, -42.8235],
  TLL: [59.4134, 24.8328],
  TLV: [32.0114, 34.8867],
  URT: [9.1326, 99.1356],
  USM: [9.5478, 100.0628],
  UTP: [12.6797, 101.0051],
  VCP: [-23.0074, -47.1345],
  VIE: [48.1103, 16.5697],
  VNO: [54.6341, 25.2858],
  VRN: [45.3959, 10.8885],
  WAW: [52.1672, 20.9679],
  YYZ: [43.6777, -79.6248],
  ZRH: [47.4647, 8.5492],
  ZTH: [37.7509, 20.8843],
};

export const airlineColors: { [key: string]: string } = {
  '6E': '#FF6F00', // IndiGo
  A3: '#1976D2', // Aegean Airlines
  AA: '#E53935', // American Airlines
  AD: '#D81B60', // Azul Brazilian Airlines
  AF: '#1E88E5', // Air France
  BA: '#3949AB', // British Airways
  CY: '#0097A7', // Cyprus Airways
  DD: '#00695C', // Nok Air
  DL: '#43A047', // Delta Air Lines
  DY: '#FF6D00', // Norwegian Air Shuttle
  EK: '#FDD835', // Emirates
  EW: '#7B1FA2', // Eurowings
  FD: '#FF3D00', // Thai AirAsia
  FR: '#FB8C00', // Ryanair
  G3: '#00C853', // Gol Transportes Aéreos
  HU: '#C62828', // Hainan Airlines
  IB: '#8E24AA', // Iberia
  JJ: '#D32F2F', // LATAM Brasil
  KL: '#039BE5', // KLM Royal Dutch Airlines
  LA: '#1565C0', // LATAM Airlines
  LH: '#FBC02D', // Lufthansa
  LJ: '#00897B', // Jin Air
  LO: '#D50000', // LOT Polish Airlines
  LX: '#B71C1C', // Swiss International Air Lines
  O6: '#00BFA5', // Avianca Brasil
  OS: '#D32F2F', // Austrian Airlines
  QR: '#6D4C41', // Qatar Airways
  QS: '#C0CA33', // SmartWings
  SN: '#0D47A1', // Brussels Airlines
  TK: '#C62828', // Turkish Airlines
  TP: '#00897B', // TAP Air Portugal
  U2: '#F4511E', // EasyJet
  UX: '#EC407A', // Air Europa
  VY: '#FFD600', // Vueling
  W6: '#7C4DFF', // Wizz Air
};

export function getAirlineColor(airline: string) {
  return airlineColors[airline] || '#9E9E9E';
}

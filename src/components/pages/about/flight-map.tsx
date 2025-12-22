import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

import { Airline, Flight } from 'services/content/flights';

import { airportCoordinates } from 'utils/flights';

import CardFeatured from 'components/shared/card-featured';
import CardScrollArea from 'components/shared/card-scroll-area';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function getAirlineColor(airlineCode: string): string {
  const colors: Record<string, string> = {
    AA: '#0078D2', // American Airlines
    DL: '#003366', // Delta
    UA: '#0033A0', // United
    BA: '#075AAA', // British Airways
    LH: '#F9B000', // Lufthansa
    AF: '#002157', // Air France
    KL: '#00A1DE', // KLM
    EK: '#D71921', // Emirates
    QR: '#5C0632', // Qatar Airways
    SQ: '#00205B', // Singapore Airlines
    TP: '#DC001A', // TAP Portugal
    AZ: '#006643', // Alitalia/ITA
    LX: '#E30613', // Swiss
    OS: '#CC0000', // Austrian
    default: '#6366f1',
  };

  return colors[airlineCode] || colors.default;
}

//  ---------------------------------------------------------------------------
//  GlobeMap
//  ---------------------------------------------------------------------------

interface GlobeMapProps {
  flights: Flight[];
  airports: string[];
  isDarkMode: boolean;
}

function GlobeMap({ flights, airports, isDarkMode }: GlobeMapProps) {
  // Prepare arcs data for flight paths
  const arcsData = flights
    .map((flight) => {
      const startCoords = airportCoordinates[flight.depAirportIata];
      const endCoords = airportCoordinates[flight.arrAirportIata];

      if (!startCoords || !endCoords) return null;

      return {
        startLat: startCoords[0],
        startLng: startCoords[1],
        endLat: endCoords[0],
        endLng: endCoords[1],
        color: getAirlineColor(flight.airlineIata),
        flight,
      };
    })
    .filter((arc): arc is NonNullable<typeof arc> => arc !== null);

  // Prepare points data for airports
  const pointsData = airports
    .map((airport) => {
      const coords = airportCoordinates[airport];
      if (!coords) return null;

      return {
        lat: coords[0],
        lng: coords[1],
        label: airport,
        size: 0.2,
      };
    })
    .filter((point): point is NonNullable<typeof point> => point !== null);

  return (
    <div className="h-full w-full">
      <Globe
        globeImageUrl={
          isDarkMode
            ? '//unpkg.com/three-globe/example/img/earth-night.jpg'
            : '//unpkg.com/three-globe/example/img/earth-day.jpg'
        }
        backgroundColor={isDarkMode ? '#1a1a1a' : '#f5f5f5'}
        width={800}
        height={500}
        arcsData={arcsData}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcColor={(d: any) => [d.color, d.color]}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={3000}
        arcStroke={0.5}
        arcsTransitionDuration={0}
        arcLabel={(d: any) =>
          `${d.flight.airlineIata} ${d.flight.number}: ${d.flight.depAirportIata} → ${d.flight.arrAirportIata}`
        }
        pointsData={pointsData}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointLabel={(d: any) => d.label}
        pointAltitude={0.01}
        pointRadius={0.15}
        pointColor={() => (isDarkMode ? '#ffffff' : '#000000')}
      />
    </div>
  );
}

//  ---------------------------------------------------------------------------
//  FlightMap
//  ---------------------------------------------------------------------------

interface FlightMapProps {
  flights: Flight[];
  airlines: Airline[];
  airports: string[];
  stats: {
    totalFlights: number;
    totalDistance: number;
    airlines: number;
    airports: number;
  };
}

export default function FlightMap({ flights, airlines, airports, stats }: FlightMapProps) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="space-y-4">
        {/* Stats */}
        <CardScrollArea>
          <CardFeatured title={stats.totalFlights.toString()} description="total flights taken" />

          <CardFeatured
            title={`${Math.round(stats.totalDistance / 1000).toLocaleString()}K`}
            description="kilometers traveled"
          />

          <CardFeatured title={stats.airlines.toString()} description="different carriers" />

          <CardFeatured title={stats.airports.toString()} description="unique destinations" />
        </CardScrollArea>
      </div>

      <div className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden rounded-lg">
        <GlobeMap flights={flights} airports={airports} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import type { ValuesType } from 'utility-types';

import { Flight } from 'services/content/flights';

import { airportCoordinates, getAirlineColor } from 'utils/flights';

import Typography from 'components/shared/typography';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function getArcsData(flights: Flight[]) {
  return flights
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
}

function getPointsData(airports: string[]) {
  return airports
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
}

function getArcLabel(arc: ValuesType<ReturnType<typeof getArcsData>>) {
  return `${arc.flight.airlineIata} ${arc.flight.number}: ${arc.flight.depAirportIata} → ${arc.flight.arrAirportIata}`;
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
  const arcsData = getArcsData(flights);
  const pointsData = getPointsData(airports);

  return (
    <div className="h-full w-full">
      <Globe
        globeImageUrl={
          isDarkMode
            ? '//unpkg.com/three-globe/example/img/earth-night.jpg'
            : '//unpkg.com/three-globe/example/img/earth-day.jpg'
        }
        backgroundColor="rgba(0,0,0,0)"
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
        arcLabel={getArcLabel}
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
//  TravelingMap
//  ---------------------------------------------------------------------------

interface TravelingMapProps {
  flights: Flight[];
  airports: string[];
}

export default function TravelingMap({ flights, airports }: TravelingMapProps) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="flex flex-col space-y-4">
      <GlobeMap flights={flights} airports={airports} isDarkMode={isDarkMode} />
      <Typography.small className="text-center">
        Data is periodically synced from my{' '}
        <a href="https://flighty.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
          Flighty
        </a>{' '}
        account and may not reflect live flight information.
      </Typography.small>
    </div>
  );
}

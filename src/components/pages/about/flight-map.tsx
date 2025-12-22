import 'leaflet/dist/leaflet.css';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaChair, FaClock, FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';

import { Airline, Flight } from 'services/content/flights';

import { airportCoordinates } from 'utils/flights';
import { classNames } from 'utils/styles';

import Tooltip from 'components/shared/tooltip';
import Typography from 'components/shared/typography';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then((mod) => mod.Polyline), { ssr: false });
const TooltipContainer = dynamic(() => import('react-leaflet').then((mod) => mod.Tooltip), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then((mod) => mod.CircleMarker), { ssr: false });

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function getTileUrl(isDarkMode: boolean): string {
  return isDarkMode
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
}

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

function formatTime(timestamp: number | null, timezone: string): string {
  if (!timestamp) return 'N/A';
  return new Date(timestamp * 1000).toLocaleString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function formatDate(timestamp: number, timezone: string): string {
  return new Date(timestamp * 1000).toLocaleString('en-US', {
    timeZone: timezone,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

//  ---------------------------------------------------------------------------
//  FlightDetails
//  ---------------------------------------------------------------------------

interface FlightDetailsProps {
  flight: Flight;
  isDarkMode: boolean;
}

function FlightDetails({ flight, isDarkMode }: FlightDetailsProps) {
  const actualDepTime = flight.depTimeActual || flight.depTimeEstimated || flight.depTimeOriginal;
  const actualArrTime =
    flight.arrTimeActual || flight.arrTimeEstimated || flight.arrTimeOriginal || flight.depTimeOriginal;

  return (
    <div
      className={classNames('min-w-[300px] max-w-[400px] space-y-3 rounded-lg p-4', {
        'bg-gray-800 text-white': isDarkMode,
        'bg-white text-gray-900': !isDarkMode,
      })}
    >
      {/* Header */}
      <div className="border-b border-gray-300 pb-2 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <Typography.p className="text-lg font-bold">
            {flight.airlineIata} {flight.number}
          </Typography.p>
          <FaPlane className="text-blue-500" />
        </div>
        <Typography.small className="text-sm opacity-75">{flight.airlineName}</Typography.small>
      </div>

      {/* Route */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <FaPlaneDeparture className="mt-1 text-green-500" />
          <div>
            <Typography.p className="font-semibold">
              {flight.depAirportIata} • {flight.depCity}
            </Typography.p>
            <Typography.small className="text-sm opacity-75">
              {formatDate(actualDepTime, flight.depTz)} at {formatTime(actualDepTime, flight.depTz)}
            </Typography.small>
            {(flight.depGate || flight.depTerminal) && (
              <Typography.small className="text-sm opacity-75">
                {flight.depTerminal && `Terminal ${flight.depTerminal}`}
                {flight.depTerminal && flight.depGate && ' • '}
                {flight.depGate && `Gate ${flight.depGate}`}
              </Typography.small>
            )}
          </div>
        </div>

        <div className="flex items-start gap-2">
          <FaPlaneArrival className="mt-1 text-red-500" />
          <div>
            <Typography.p className="font-semibold">
              {flight.arrAirportIata} • {flight.arrCity}
            </Typography.p>
            <Typography.small className="text-sm opacity-75">
              {formatDate(actualArrTime, flight.arrTz)} at {formatTime(actualArrTime, flight.arrTz)}
            </Typography.small>
            {(flight.arrGate || flight.arrTerminal || flight.arrBaggageBelt) && (
              <Typography.small className="text-sm opacity-75">
                {flight.arrTerminal && `Terminal ${flight.arrTerminal}`}
                {flight.arrTerminal && flight.arrGate && ' • '}
                {flight.arrGate && `Gate ${flight.arrGate}`}
                {flight.arrBaggageBelt && ` • Baggage ${flight.arrBaggageBelt}`}
              </Typography.small>
            )}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      {(flight.aircraftName || flight.seatNumber || flight.distance) && (
        <div className="space-y-1 border-t border-gray-300 pt-2 text-sm dark:border-gray-600">
          {flight.aircraftName && (
            <div className="flex items-center gap-2">
              <FaPlane className="text-sm opacity-50" />
              <Typography.small>
                {flight.aircraftName}
                {flight.aircraftTailNumber && ` (${flight.aircraftTailNumber})`}
              </Typography.small>
            </div>
          )}
          {flight.seatNumber && (
            <div className="flex items-center gap-2">
              <FaChair className="text-sm opacity-50" />
              <Typography.small>Seat {flight.seatNumber}</Typography.small>
            </div>
          )}
          {flight.distance && (
            <div className="flex items-center gap-2">
              <FaClock className="text-sm opacity-50" />
              <Typography.small>{Math.round(flight.distance).toLocaleString()} km</Typography.small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

//  ---------------------------------------------------------------------------
//  AirlineSelector
//  ---------------------------------------------------------------------------

interface AirlineSelectorProps {
  airlines: Airline[];
  selectedAirline: string | null;
  setSelectedAirline: (airline: string | null) => void;
  isDarkMode: boolean;
}

function AirlineSelector({ airlines, selectedAirline, setSelectedAirline, isDarkMode }: AirlineSelectorProps) {
  return (
    <select
      className={classNames('rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500', {
        'bg-gray-700 text-white': isDarkMode,
        'bg-white text-gray-800': !isDarkMode,
      })}
      value={selectedAirline || ''}
      onChange={(e) => setSelectedAirline(e.target.value || null)}
    >
      <option value="">All Airlines</option>
      {airlines.map((airline) => (
        <option key={airline.code} value={airline.code}>
          {airline.name} ({airline.code})
        </option>
      ))}
    </select>
  );
}

//  ---------------------------------------------------------------------------
//  Map
//  ---------------------------------------------------------------------------

interface MapProps {
  flights: Flight[];
  airports: string[];
  isDarkMode: boolean;
}

function Map({ flights, airports, isDarkMode }: MapProps) {
  const [hoveredFlight, setHoveredFlight] = useState<string | null>(null);

  return (
    <MapContainer center={[20, 0]} zoom={2} className="absolute inset-0 h-full w-full">
      <TileLayer
        url={getTileUrl(isDarkMode)}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Flight paths */}
      {flights.map((flight) => {
        const origin = airportCoordinates[flight.depAirportIata];
        const destination = airportCoordinates[flight.arrAirportIata];

        if (!origin || !destination) return null;

        const color = getAirlineColor(flight.airlineIata);
        const isHovered = hoveredFlight === flight.id;

        return (
          <Polyline
            key={flight.id}
            positions={[origin, destination]}
            color={color}
            weight={isHovered ? 4 : 2}
            opacity={isHovered ? 1 : 0.5}
            eventHandlers={{
              mouseover: () => setHoveredFlight(flight.id),
              mouseout: () => setHoveredFlight(null),
            }}
          >
            <TooltipContainer direction="auto" offset={[0, 0]} opacity={1} sticky>
              <FlightDetails flight={flight} isDarkMode={isDarkMode} />
            </TooltipContainer>
          </Polyline>
        );
      })}

      {/* Airport markers */}
      {airports.map((airport) => {
        const coordinates = airportCoordinates[airport];

        if (!coordinates) return null;

        return (
          <CircleMarker
            key={airport}
            center={coordinates}
            radius={4}
            fillColor={isDarkMode ? '#FFFFFF' : '#000000'}
            color={isDarkMode ? '#000000' : '#FFFFFF'}
            weight={1}
            fillOpacity={1}
          >
            <TooltipContainer
              className="absolute inset-0 h-full w-full"
              direction="auto"
              offset={[0, -5]}
              opacity={1}
              sticky
            >
              <Tooltip.InnerContent>{airport}</Tooltip.InnerContent>
            </TooltipContainer>
          </CircleMarker>
        );
      })}
    </MapContainer>
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
  const [selectedAirline, setSelectedAirline] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const filteredFlights = selectedAirline
    ? flights.filter((flight) => flight.airlineIata === selectedAirline)
    : flights;

  const filteredDistance = filteredFlights.reduce((sum, flight) => sum + flight.distance, 0);

  return (
    <div className="flex w-full flex-col">
      <div className="p-4">
        <div className="container mx-auto space-y-4">
          <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <AirlineSelector
              airlines={airlines}
              selectedAirline={selectedAirline}
              setSelectedAirline={setSelectedAirline}
              isDarkMode={isDarkMode}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div
              className={classNames('rounded-lg p-4', {
                'bg-gray-800': isDarkMode,
                'bg-gray-100': !isDarkMode,
              })}
            >
              <Typography.small className="opacity-75">Flights</Typography.small>
              <Typography.p className="text-2xl font-bold">
                {selectedAirline ? filteredFlights.length : stats.totalFlights}
              </Typography.p>
            </div>
            <div
              className={classNames('rounded-lg p-4', {
                'bg-gray-800': isDarkMode,
                'bg-gray-100': !isDarkMode,
              })}
            >
              <Typography.small className="opacity-75">Distance</Typography.small>
              <Typography.p className="text-2xl font-bold">
                {Math.round(selectedAirline ? filteredDistance : stats.totalDistance).toLocaleString()} km
              </Typography.p>
            </div>
            <div
              className={classNames('rounded-lg p-4', {
                'bg-gray-800': isDarkMode,
                'bg-gray-100': !isDarkMode,
              })}
            >
              <Typography.small className="opacity-75">Airlines</Typography.small>
              <Typography.p className="text-2xl font-bold">{stats.airlines}</Typography.p>
            </div>
            <div
              className={classNames('rounded-lg p-4', {
                'bg-gray-800': isDarkMode,
                'bg-gray-100': !isDarkMode,
              })}
            >
              <Typography.small className="opacity-75">Airports</Typography.small>
              <Typography.p className="text-2xl font-bold">{stats.airports}</Typography.p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 h-[70vh] w-full overflow-hidden rounded-lg shadow-lg">
        <Map flights={filteredFlights} airports={airports} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

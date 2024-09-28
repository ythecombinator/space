import 'leaflet/dist/leaflet.css';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Airline, Flight } from 'services/content/flights';

import { airportCoordinates, getAirlineColor } from 'utils/flights';
import { classNames } from 'utils/styles';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then((mod) => mod.Polyline), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then((mod) => mod.Tooltip), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then((mod) => mod.CircleMarker), { ssr: false });

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
      className={classNames('p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500', {
        'bg-gray-700 text-white': isDarkMode,
        'bg-white text-gray-800': !isDarkMode,
      })}
      value={selectedAirline || ''}
      onChange={(e) => setSelectedAirline(e.target.value || null)}
    >
      <option value="">All Airlines</option>
      {airlines.map((airline) => (
        <option key={airline.code} value={airline.code}>
          {airline.name}
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
  const [hoveredFlight, setHoveredFlight] = useState<number | null>(null);

  return (
    <MapContainer center={[20, 0]} zoom={2} className="absolute inset-0 w-full h-full">
      <TileLayer
        url={
          isDarkMode
            ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {flights.map((flight, index) => {
        const origin = airportCoordinates[flight.origin];
        const destination = airportCoordinates[flight.destination];
        const color = getAirlineColor(flight.airline);

        if (origin && destination) {
          return (
            <Polyline
              key={index}
              positions={[origin, destination]}
              color={color}
              weight={hoveredFlight === index ? 4 : 2}
              opacity={hoveredFlight === index ? 1 : 0.5}
              eventHandlers={{
                mouseover: () => setHoveredFlight(index),
                mouseout: () => setHoveredFlight(null),
              }}
            />
          );
        }

        return null;
      })}

      {airports.map((airport) => {
        const coordinates = airportCoordinates[airport];

        if (coordinates) {
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
              <Tooltip direction="top" offset={[0, -5]} opacity={1} permanent>
                <div
                  className={classNames('px-2 py-1 rounded-full text-xs font-semibold', {
                    'bg-gray-800 text-white': isDarkMode,
                    'bg-white text-gray-800 shadow-md border border-gray-200': !isDarkMode,
                  })}
                >
                  {airport}
                </div>
              </Tooltip>
            </CircleMarker>
          );
        }

        return null;
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
}

export default function FlightMap({ flights, airlines, airports }: FlightMapProps) {
  const [selectedAirline, setSelectedAirline] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const filteredFlights = selectedAirline ? flights.filter((flight) => flight.airline === selectedAirline) : flights;

  return (
    <div className="w-full flex flex-col">
      <div className="p-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-4">
            <AirlineSelector
              airlines={airlines}
              selectedAirline={selectedAirline}
              setSelectedAirline={setSelectedAirline}
              isDarkMode={isDarkMode}
            />
            <span
              className={classNames('text-sm', {
                'text-gray-300': isDarkMode,
                'text-gray-600': !isDarkMode,
              })}
            >
              {selectedAirline
                ? `${filteredFlights.length} of ${flights.length} flights`
                : `${flights.length} total flights`}
            </span>
          </div>
        </div>
      </div>
      <div className="relative h-[60vh] mx-4 mt-4 rounded-lg overflow-hidden shadow-lg">
        <Map flights={filteredFlights} airports={airports} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
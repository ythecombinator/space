import { readFileSync } from 'fs';
import { join } from 'path';

import { AirlineCode, airlineNames, AirportCode } from 'utils/flights';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const DATA_SRC = join(process.cwd(), 'src/data/flights.txt');

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export interface Flight {
  airline: AirlineCode;
  flightNumber: string;
  origin: AirportCode;
  destination: AirportCode;
  departureTime: string;
  arrivalTime: string;
}

export interface Airline {
  code: AirlineCode;
  name: string;
}

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class FlightsContentService {
  private static instance: FlightsContentService;
  private flights: Flight[] = [];

  private constructor() {}

  public static getInstance(): FlightsContentService {
    if (!FlightsContentService.instance) {
      FlightsContentService.instance = new FlightsContentService();
    }
    return FlightsContentService.instance;
  }

  public init() {
    const data = readFileSync(DATA_SRC, 'utf8');

    this.flights = data
      .split('\n')
      .filter((line) => line.trim() !== '' && !line.includes('flights:') && !line.includes('hotels:'))
      .map((line) => {
        const [, , , , , , , airline, flightNumber, , origin, destination, departureTime, arrivalTime] =
          line.split(';');
        return {
          airline: airline as AirlineCode,
          origin: origin as AirportCode,
          destination: destination as AirportCode,
          flightNumber,
          departureTime,
          arrivalTime,
        };
      })
      .filter((flight) => flight.airline && flight.flightNumber && flight.origin && flight.destination);
  }

  //  ---------------------------------------------------------------------------
  //  getters
  //  ---------------------------------------------------------------------------

  public getAirlines() {
    const airlineSet = new Set(this.flights.map((flight) => flight.airline));

    return Array.from(airlineSet).map((code) => ({
      name: airlineNames[code],
      code,
    }));
  }

  public getAirports() {
    const airportSet = new Set<AirportCode>();

    this.flights.forEach((flight) => {
      airportSet.add(flight.origin);
      airportSet.add(flight.destination);
    });

    return Array.from(airportSet);
  }

  public getFlights() {
    return this.flights;
  }

  public getFlightCount() {
    return this.flights.length;
  }

  public getFlightsByAirline(airline: string) {
    return this.flights.filter((flight) => flight.airline === airline);
  }

  public getFlightsByOrigin(origin: string) {
    return this.flights.filter((flight) => flight.origin === origin);
  }

  public getFlightsByDestination(destination: string) {
    return this.flights.filter((flight) => flight.destination === destination);
  }
}

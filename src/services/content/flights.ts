import { existsSync } from 'fs';
import { DatabaseSync } from 'node:sqlite';
import { homedir } from 'os';
import { z } from 'zod';

//  ---------------------------------------------------------------------------
//  CONSTANTS
//  ---------------------------------------------------------------------------

const DB_PATH = `${homedir()}/Library/Containers/com.flightyapp.flighty/Data/Documents/MainFlightyDatabase.db`;

const QUERY = `
SELECT
    Flight.id,
    Flight.number,

    Airline.iata as airlineIata,
    Airline.icao as airlineIcao,
    Airline.name as airlineName,

    AirportDep.iata as depAirportIata,
    AirportDep.city as depCity,
    AirportArr.iata as arrAirportIata,
    AirportArr.city as arrCity,

    Flight.equipmentIata as aircraftIata,
    Flight.equipmentIcao as aircraftIcao,
    Flight.equipmentModelName as aircraftName,
    Flight.equipmentTailNumber as aircraftTailNumber,

    Flight.distance,

    AirportDep.timezoneIdentifier as depTz,
    Flight.departureScheduleGateOriginal as depTimeOriginal,
    Flight.departureScheduleGateEstimated as depTimeEstimated,
    Flight.departureScheduleGateActual as depTimeActual,
    Flight.departureTerminal as depTerminal,
    Flight.departureGate as depGate,

    AirportArr.timezoneIdentifier as arrTz,
    Flight.arrivalScheduleGateOriginal as arrTimeOriginal,
    Flight.arrivalScheduleGateEstimated as arrTimeEstimated,
    Flight.arrivalScheduleGateActual as arrTimeActual,
    Flight.arrivalTerminal as arrTerminal,
    Flight.arrivalGate as arrGate,

    Flight.arrivalBaggageBelt as arrBaggageBelt,

    Ticket.pnr as pnr,
    Ticket.seatNumber as seatNumber
FROM
    UserFlight
JOIN
    Airline ON Airline.id = Flight.airlineId,
    Airport as AirportDep on AirportDep.id = Flight.departureAirportId,
    Airport as AirportArr on AirportArr.id = Flight.scheduledarrivalAirportId,
    Flight ON Flight.id = UserFlight.flightId
LEFT JOIN
    Ticket ON Ticket.flightId = Flight.id
WHERE
    Flight.deleted IS NULL
    AND
    UserFlight.deleted IS NULL
    AND
    UserFlight.isMyFlight = 1
    AND
    UserFlight.isRandom = 0
    AND
    Ticket.userId IS NOT ''
`;

//  ---------------------------------------------------------------------------
//  SCHEMA
//  ---------------------------------------------------------------------------

const TimestampSchema = z.number().int().positive();

const FlightSchema = z.object({
  id: z.string().uuid(),
  number: z.string(),

  // airline
  airlineIata: z.string().length(2),
  airlineIcao: z.string().length(3),
  airlineName: z.string(),

  // airports
  depAirportIata: z.string().length(3),
  depCity: z.string(),
  arrAirportIata: z.string().length(3),
  arrCity: z.string(),

  // aircraft
  aircraftIata: z.string().length(3).nullable(),
  aircraftIcao: z.string().length(4).nullable(),
  aircraftName: z.string().nullable(),
  aircraftTailNumber: z.string().nullable(),

  // details
  distance: z.number(),

  depTz: z.string(),
  depTimeOriginal: TimestampSchema,
  depTimeEstimated: TimestampSchema.nullable(),
  depTimeActual: TimestampSchema.nullable(),
  depTerminal: z.string().nullable(),
  depGate: z.string().nullable(),

  arrTz: z.string(),
  arrTimeOriginal: TimestampSchema.nullable(),
  arrTimeEstimated: TimestampSchema.nullable(),
  arrTimeActual: TimestampSchema.nullable(),
  arrTerminal: z.string().nullable(),
  arrGate: z.string().nullable(),

  arrBaggageBelt: z.string().nullable(),

  pnr: z.string().nullable(),
  seatNumber: z.string().nullable(),
});

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type Flight = z.infer<typeof FlightSchema>;

export interface Airline {
  code: string;
  name: string;
}

export type AirportCode = string;

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class FlightsContentService {
  private static instance: FlightsContentService;
  private flights: Flight[] = [];
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): FlightsContentService {
    if (!FlightsContentService.instance) {
      FlightsContentService.instance = new FlightsContentService();
    }
    return FlightsContentService.instance;
  }

  public init() {
    if (this.isInitialized) return;

    // Check if database exists
    if (!existsSync(DB_PATH)) {
      console.warn('Flighty database not found. Using empty flight list.');
      this.flights = [];
      this.isInitialized = true;
      return;
    }

    try {
      const db = new DatabaseSync(DB_PATH, { readOnly: true });
      const stmt = db.prepare(QUERY);
      const rows = stmt.all();
      db.close();

      // Validate and parse data
      const result = z.array(FlightSchema).safeParse(rows);

      if (!result.success) {
        console.error('Failed to parse Flighty data:', result.error);
        this.flights = [];
      } else {
        // Sort by departure time (most recent first)
        this.flights = result.data.sort((a, b) => b.depTimeOriginal - a.depTimeOriginal);
      }

      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to read Flighty database:', error);
      this.flights = [];
      this.isInitialized = true;
    }
  }

  //  ---------------------------------------------------------------------------
  //  getters
  //  ---------------------------------------------------------------------------

  public getAirlines(): Airline[] {
    const airlineMap = new Map<string, string>();

    this.flights.forEach((flight) => {
      airlineMap.set(flight.airlineIata, flight.airlineName);
    });

    return Array.from(airlineMap.entries())
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  public getAirports(): AirportCode[] {
    const airportSet = new Set<AirportCode>();

    this.flights.forEach((flight) => {
      airportSet.add(flight.depAirportIata);
      airportSet.add(flight.arrAirportIata);
    });

    return Array.from(airportSet).sort();
  }

  public getFlights(): Flight[] {
    return this.flights;
  }

  public getFlightCount(): number {
    return this.flights.length;
  }

  public getFlightsByAirline(airlineCode: string): Flight[] {
    return this.flights.filter((flight) => flight.airlineIata === airlineCode);
  }

  public getFlightsByOrigin(origin: string): Flight[] {
    return this.flights.filter((flight) => flight.depAirportIata === origin);
  }

  public getFlightsByDestination(destination: string): Flight[] {
    return this.flights.filter((flight) => flight.arrAirportIata === destination);
  }

  public getTotalDistance(): number {
    return this.flights.reduce((sum, flight) => sum + flight.distance, 0);
  }

  public getUniqueYears(): number[] {
    const years = new Set<number>();
    const now = Date.now() / 1000;

    this.flights.forEach((flight) => {
      if (flight.depTimeOriginal < now) {
        const date = new Date(flight.depTimeOriginal * 1000);
        years.add(date.getFullYear());
      }
    });

    return Array.from(years).sort((a, b) => b - a);
  }

  public getStats() {
    return {
      totalFlights: this.flights.length,
      totalDistance: this.getTotalDistance(),
      airlines: this.getAirlines().length,
      airports: this.getAirports().length,
      years: this.getUniqueYears(),
    };
  }
}

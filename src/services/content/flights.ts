import { existsSync, readFileSync } from 'fs';
import { DatabaseSync } from 'node:sqlite';
import { homedir } from 'os';
import { join } from 'path';
import { z } from 'zod';

//  ---------------------------------------------------------------------------
//  CONSTANTS
//  ---------------------------------------------------------------------------

const DB_PATH = `${homedir()}/Library/Containers/com.flightyapp.flighty/Data/Documents/MainFlightyDatabase.db`;
const QUERY_PATH = join(process.cwd(), 'src/sql/flighty.sql');
const QUERY = readFileSync(QUERY_PATH, 'utf8');

//  ---------------------------------------------------------------------------
//  SCHEMA
//  ---------------------------------------------------------------------------

const TimestampSchema = z.number().int().positive();

const FlightSchema = z.object({
  id: z.string().uuid(),
  number: z.string(),

  // airline
  airlineIata: z.string().min(1),
  airlineIcao: z.string().min(1),
  airlineName: z.string(),

  // airports
  depAirportIata: z.string().min(1),
  depCity: z.string(),
  arrAirportIata: z.string().min(1),
  arrCity: z.string(),

  // aircraft
  aircraftIata: z.string().nullable(),
  aircraftIcao: z.string().nullable(),
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
        console.error('Total rows from query:', rows.length);
        console.error('Validation errors:', JSON.stringify(result.error.errors, null, 2));
        this.flights = [];
      } else {
        console.log(`Successfully loaded ${result.data.length} flights from ${rows.length} rows`);
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

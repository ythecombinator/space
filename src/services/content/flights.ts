import { existsSync, outputJson, readFileSync, readJsonSync } from 'fs-extra';
import isInCi from 'is-in-ci';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { z } from 'zod';

//  ---------------------------------------------------------------------------
//  CONSTANTS
//  ---------------------------------------------------------------------------

const DB_PATH = `${homedir()}/Library/Containers/com.flightyapp.flighty/Data/Documents/MainFlightyDatabase.db`;
const QUERY_PATH = join(process.cwd(), 'src/sql/flighty.sql');
const JSON_PATH = join(process.cwd(), 'src/data/flights.json');
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

  private constructor() {}

  public static getInstance(): FlightsContentService {
    if (!FlightsContentService.instance) {
      FlightsContentService.instance = new FlightsContentService();
    }
    return FlightsContentService.instance;
  }

  public async generateFlightsData() {
    if (isInCi) {
      console.info('Running in CI - skipping flights data generation');
      return null;
    }

    if (!existsSync(DB_PATH)) {
      console.warn('Flighty database not found');
      return null;
    }

    try {
      const db = new DatabaseSync(DB_PATH, { readOnly: true });
      const rows = db.prepare(QUERY).all();
      db.close();

      const result = z.array(FlightSchema).safeParse(rows);
      if (!result.success) {
        console.error('Failed to validate Flighty data:', result.error);
        return null;
      }

      const flights = result.data.sort((a, b) => b.depTimeOriginal - a.depTimeOriginal);

      const output = {
        lastUpdatedAt: Date.now(),
        flights,
      };

      await outputJson(JSON_PATH, output, { spaces: 2 });
      console.log(`Wrote ${flights.length} flights to JSON`);

      return flights;
    } catch (error) {
      console.error('Failed to generate flights data:', error);
      return null;
    }
  }

  public init() {
    if (!existsSync(JSON_PATH)) {
      console.warn('Flights JSON not found');
      this.flights = [];
      return;
    }

    try {
      const data = readJsonSync(JSON_PATH);
      const result = z.array(FlightSchema).safeParse(data.flights);

      if (result.success) {
        this.flights = result.data;
        console.log(`Loaded ${this.flights.length} flights`);
      } else {
        console.error('Invalid flights JSON:', result.error);
        this.flights = [];
      }
    } catch (error) {
      console.error('Failed to read flights JSON:', error);
      this.flights = [];
    }
  }

  //  ---------------------------------------------------------------------------
  //  GETTERS
  //  ---------------------------------------------------------------------------

  public getFlights(): Flight[] {
    return this.flights;
  }

  public getAirlines(): Airline[] {
    const airlineMap = this.flights.reduce(
      (map, flight) => map.set(flight.airlineIata, flight.airlineName),
      new Map<string, string>()
    );

    return Array.from(airlineMap.entries())
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  public getAirports(): AirportCode[] {
    const airports = new Set(this.flights.flatMap((flight) => [flight.depAirportIata, flight.arrAirportIata]));
    return Array.from(airports).sort();
  }

  public getLastUpdatedAt(): number | null {
    if (!existsSync(JSON_PATH)) return null;

    try {
      const data = readJsonSync(JSON_PATH);
      return data.lastUpdatedAt || null;
    } catch {
      return null;
    }
  }

  public getStats() {
    const now = Date.now() / 1000;

    const years = new Set(
      this.flights
        .filter((flight) => flight.depTimeOriginal < now)
        .map((flight) => new Date(flight.depTimeOriginal * 1000).getFullYear())
    );

    return {
      totalFlights: this.flights.length,
      totalDistance: this.flights.reduce((sum, flight) => sum + flight.distance, 0),
      airlines: this.getAirlines().length,
      airports: this.getAirports().length,
      years: Array.from(years).sort((a, b) => b - a),
    };
  }
}

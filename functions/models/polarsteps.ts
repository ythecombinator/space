export interface Response {
  alltrips: Trip[] | null;
  country_count: number;
  country_count_followers: number;
  country_count_public: number;
  currency: string;
  description: string;
  first_name: string;
  has_multiple_devices: boolean;
  id: number;
  last_name: string;
  living_location: LivingLocation;
  living_location_id: number;
  living_location_name: string;
  locale: string;
  mashup: Mashup;
  profile_image_path: string;
  profile_image_thumb_path: string | null;
  stats: Stats;
  synchronized: boolean;
  temperature_is_celsius: boolean;
  unit_is_km: boolean;
  username: string;
  uuid: string;
  visibility: number;
}

export interface Trip {
  all_steps: Step[] | null;
  creation_time: number;
  end_date: number;
  future_timeline_last_modified: number | null;
  id: number;
  is_deleted: boolean;
  name: string;
  open_graph_id: string | null;
  planned_steps_visible: boolean;
  slug: string;
  start_date: number;
  step_count: number;
  summary: string;
  timezone_id: string;
  total_km: number;
  travel_tracker_device: TravelTrackerDevice | null;
  user_id: number;
  uuid: string;
  views: number;
  visibility: number;
}

export interface Step {
  comment_count: number;
  creation_time: number;
  description: string;
  fb_publish_status: number | null;
  id: number;
  is_deleted: boolean;
  location: Location;
  location_id: number;
  main_media_item_path: null;
  name: string | null;
  open_graph_id: string | null;
  slug: string;
  start_time: number;
  supertype: string;
  timezone_id: string;
  trip_id: number;
  type: number | null;
  uuid: string;
  views: number;
  weather_condition: string;
  weather_temperature: number | null;
}

export interface Location {
  country_code: string;
  detail: string;
  full_detail: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  uuid: string;
  venue: null;
}

export interface TravelTrackerDevice {
  device_name: string;
  id: number;
  tracking_status: number;
  trip_id: number;
  uuid: string;
}

export interface LivingLocation {
  country_code: string;
  detail: string;
  full_detail: string;
  id: number;
  is_deleted: boolean;
  lat: number;
  lon: number;
  name: string;
  synchronized: boolean;
  uuid: string;
}

export interface Mashup {}

export interface Stats {
  continents: string[] | null;
  country_codes: string[] | null;
  furthest_place_from_home_country: string;
  furthest_place_from_home_km: number;
  furthest_place_from_home_location: string;
  km_count: number;
  last_trip_end_date: number;
  like_count: number;
  step_count: number;
  time_traveled_in_seconds: number;
  trip_count: number;
  world_percentage: number;
}

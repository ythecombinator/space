import {Handler} from '@netlify/functions';
import {flag, name} from 'country-emoji';
import fetch from 'node-fetch';

import config from '../config';
import {Response} from '../models/polarsteps';

const { polarstepsBaseUrl, polarstepsUser } = config.variables;

const handler: Handler = async () => {
  const response = await fetch(
    `${polarstepsBaseUrl}/users/byusername/${polarstepsUser}`
  );
  const data = (await response.json()) as Response;

  const countries = data.stats.country_codes.map((countryCode) => ({
    code: countryCode,
    flag: flag(countryCode),
    name: name(countryCode),
  }));
  const continentsCount = data.stats.continents.length;
  const citiesCount = data.stats.step_count;
  const worldPercentage = data.stats.world_percentage;
  const currentLocation = {
    name: data.living_location_name,
    flag: flag(data.living_location.country_code),
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      countries,
      continentsCount,
      citiesCount,
      worldPercentage,
      currentLocation,
    }),
  };
};

export { handler };

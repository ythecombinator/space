import {DeepRequired} from 'utility-types';

const variables = {
  polarstepsBaseUrl: process.env.POLARSTEPS_BASE_URL,
  polarstepsUser: process.env.POLARSTEPS_USER,
};

const config = { variables: variables as DeepRequired<typeof variables> };

export default config;

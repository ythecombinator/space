import {MapData} from 'model/Map';

import config from './config';

export const fetchMapData = async () => {
  const rawResponse = await fetch(config.variables.blogApiUrl);
  const response = await rawResponse.json();

  return response as MapData;
};

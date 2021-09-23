import useSwr from 'swr';

import {fetchMapData} from 'utils/map';

const fetchData = async () => {
  const response = await fetchMapData();
  return response;
};

const useMapData = () => {
  const { data } = useSwr("map", fetchData, { suspense: true });
  return data!;
};

export default useMapData;

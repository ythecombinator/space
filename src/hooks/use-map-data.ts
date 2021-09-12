import {useEffect, useState} from 'react';

import useSwr from 'swr';

import {MapData} from 'model/Map';

const fetchData = async () => {
  const rawResponse = await fetch(
    "https://cors-anywhere.herokuapp.com/https://www.ythecombinator.space/.netlify/functions/map"
  );
  const response = await rawResponse.json();

  return response as MapData;
};

const useMapData = () => {
  const { data } = useSwr("sdsd", fetchData, { suspense: true });
  console.log("data", data);

  return data!;
};

export default useMapData;

import {tailwind} from '@theme-ui/presets';

import {MapData} from 'model/Map';

const { gray } = tailwind.colors;

export const hasBeenVisited = (
  countryCode: string,
  countriesList: MapData["countries"]
) => {
  return countriesList.find((country) => country.code === countryCode)
    ? true
    : false;
};

export const getStylesForLocation = (isVisited: boolean, colorMode: string) => {
  const isDark = colorMode === "dark";

  return isVisited
    ? {
        default: {
          fill: isDark ? gray[1] : gray[7],
          stroke: gray[9],
          strokeWidth: 0.75,
          outline: "none",
        },
        hover: {
          fill: isDark ? gray[2] : gray[6],
          stroke: gray[9],
          strokeWidth: 0.75,
          outline: "none",
        },
      }
    : {
        default: {
          fill: isDark ? gray[7] : gray[1],
          stroke: gray[9],
          strokeWidth: 0.75,
          outline: "none",
        },
        hover: {
          fill: isDark ? gray[6] : gray[2],
          stroke: gray[9],
          strokeWidth: 0.75,
          outline: "none",
        },
      };
};

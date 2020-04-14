import {tailwind} from '@theme-ui/presets';

const { gray } = tailwind.colors;

const hasBeenTo = (location: string, visited: string[]) => {
  return visited.includes(location);
};

export const getStylesForLocation = (
  location: string,
  data: string[],
  colorMode: string
) => {
  const isVisited = hasBeenTo(location, data);
  const isDark = colorMode === "dark";

  return isVisited
    ? {
        fill: isDark ? gray[1] : gray[7],
        stroke: gray[9],
        strokeWidth: 0.75,
        outline: "none",
      }
    : {
        fill: isDark ? gray[7] : gray[1],
        stroke: gray[9],
        strokeWidth: 0.75,
        outline: "none",
      };
};

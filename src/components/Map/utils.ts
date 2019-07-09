import {colors} from 'styles/colors';

const { tertiary, map } = colors;

const hasBeenTo = (location: string, visited: string[]) => {
  return visited.includes(location);
};

const getStylesForLocation = (location: string, data: string[]) => {
  const isVisited = hasBeenTo(location, data);
  return isVisited
    ? {
        fill: tertiary,
        stroke: map.stroke,
        strokeWidth: 0.75,
        outline: "none"
      }
    : {
        fill: map.fill,
        stroke: map.stroke,
        strokeWidth: 0.75,
        outline: "none"
      };
};

export { getStylesForLocation };

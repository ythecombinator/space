import {getRandomItem} from 'utils/array';
import {getRandomFloat, getRandomInt} from 'utils/number';

import {colors} from 'styles/colors';

const palette = colors.dots;

const generateDot = () => {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);
  const size = getRandomFloat(0.4, 1.25);
  const opacity = getRandomFloat(0.9, 1);

  return { x, y, size, opacity, color: getRandomItem(palette) };
};

export { generateDot };

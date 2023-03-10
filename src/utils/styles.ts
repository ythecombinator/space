import { ClassValue, clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { randomElement } from 'utils/array';

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Extracted from: https://hypercolor.dev
export const gradients = {
  hyper: ' from-pink-500 via-red-500 to-yellow-500',
  cottonCandy: ' from-pink-300 via-purple-300 to-indigo-400',
  sunset: ' from-indigo-200 via-red-200 to-yellow-100',
  peachy: ' from-red-200 via-red-300 to-yellow-200',
  minnesota: ' from-purple-400 to-yellow-400',
  orangeCoral: ' from-orange-400 to-rose-400',
  morning: ' from-rose-400 to-orange-300',
  sublime: ' from-rose-400 via-fuchsia-500 to-indigo-500',
  borealis: ' from-green-300 to-purple-400',
};

export type Gradient = keyof typeof gradients;

export const useRandomGradient = () => {
  const [gradientClassName, setGradientClassName] = useState('');

  useEffect(() => {
    setGradientClassName(randomElement(Object.values(gradients)));
  }, []);

  return gradientClassName;
};

export const hexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

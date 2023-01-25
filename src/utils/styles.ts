import { tailwind } from '@theme-ui/presets';
import { ClassValue, clsx } from 'clsx';
import fetch from 'node-fetch';
import { twMerge } from 'tailwind-merge';

const { gray } = tailwind.colors;

export const getColorScheme = (isDark: boolean) => {
  const primaryBackgroundColor = isDark ? gray[8] : gray[1];
  const secondaryBackgroundColor = isDark ? gray[1] : gray[7];
  const text = isDark ? gray[8] : gray[1];

  const stroke1 = isDark ? gray[8] : gray[1];
  const stroke2 = isDark ? gray[7] : gray[2];
  const stroke3 = isDark ? gray[6] : gray[3];

  return {
    primaryBackgroundColor,
    secondaryBackgroundColor,
    text,
    stroke1,
    stroke2,
    stroke3,
  };
};

export const fetchGradients = async () => {
  const url =
    'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json';
  const settings = { method: 'Get' };

  const res = await fetch(url, settings);
  const colors = await res.json();
};

export const classNameForGradient = (gradient: [string, string]) =>
  ` from-[${gradient[0]}] to-[${gradient[1]}]`;

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

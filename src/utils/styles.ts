import { ClassValue, clsx } from 'clsx';
// import fetch from 'node-fetch';
import { twMerge } from 'tailwind-merge';

// export const fetchGradients = async () => {
//   const url =
//     'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json';
//   const settings = { method: 'Get' };

//   const res = await fetch(url, settings);
//   const colors = await res.json();
// };

export const classNameForGradient = (gradient: [string, string]) =>
  ` from-[${gradient[0]}] to-[${gradient[1]}]`;

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

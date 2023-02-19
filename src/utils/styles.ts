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

export const gradients = [
  ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  ' from-[#D8B4FE] to-[#818CF8]',
  ' to-[#6EE7B7] from-[#6EE7F9]',
  ' from-purple-400 to-pink-600',
  ' from-pink-500 via-red-500 to-yellow-500',
  ' from-yellow-100 via-yellow-300 to-yellow-500',
  ' from-indigo-200 via-red-200 to-yellow-100',
  ' from-green-200 via-green-400 to-purple-700',
  ' from-red-200 to-red-600',
  ' from-green-300 via-yellow-300 to-pink-300',
  ' from-pink-400 to-pink-600',
  ' from-sky-400 via-rose-400 to-lime-400',
];
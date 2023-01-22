import { slug } from 'github-slugger';

export const replaceSlashes = (input: string) => {
  return input.replace(/\/\/+/g, `/`);
};

export const toKebabCase = (str: string) => slug(str);

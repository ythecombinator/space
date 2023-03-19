import { slug } from 'github-slugger';

export const toKebabCase = (str: string) => slug(str);

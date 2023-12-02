import { slug } from 'github-slugger';

export const toKebabCase = (str: string) => slug(str);

export const toTitle = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const kebabToTitle = (str: string) => str.split('-').map(toTitle).join(' ');

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function toBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  let currentPath = '';

  return pathSegments.map((segment) => {
    currentPath += `/${segment}`;
    return {
      label: toTitle(segment),
      path: currentPath,
    };
  });
}

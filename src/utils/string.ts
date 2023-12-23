import { Routes } from 'config/constants';

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
      label: segment,
      path: currentPath,
    };
  });
}

export function shouldBreadcrumbsRender(items: ReturnType<typeof toBreadcrumbs>) {
  const includePaths = [Routes.about];
  return items.length > 1 && includePaths.some((path) => path.includes(items[0].label));
}

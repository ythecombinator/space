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

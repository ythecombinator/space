import { toBreadcrumbs } from 'utils/string';
import { classNames } from 'utils/styles';
import { viewTransitionStyle, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface BreadcrumbsProps {
  items: ReturnType<typeof toBreadcrumbs>;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          // The last crumb is the page you are already on, so only the ancestors morph into their title
          const isCurrentPage = index === items.length - 1;
          const transitionKey = isCurrentPage ? undefined : vtKeys.pageTitle(item.path);

          return (
            <li
              key={item.path}
              className={classNames('inline-flex items-center', { 'breadcrumb-separator': index !== 0 })}
            >
              <Link
                className="inline-flex items-center truncate text-sm font-semibold"
                href={item.path}
                style={viewTransitionStyle(transitionKey)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

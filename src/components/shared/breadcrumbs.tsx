import { FunctionComponent } from 'react';

import Link from 'components/shared/link';
import { toBreadcrumbs } from 'utils/string';
import { classNames } from 'utils/styles';

/*~
 * TYPES
 */

interface BreadcrumbsProps {
  items: ReturnType<typeof toBreadcrumbs>;
}

/*~
 * COMPONENT
 */

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          return (
            <li
              key={item.path}
              className={classNames('inline-flex items-center', { 'breadcrumb-separator': index !== 0 })}
            >
              <Link className="inline-flex items-center text-sm font-semibold truncate" href={item.path}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

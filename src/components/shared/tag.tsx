import { FunctionComponent, PropsWithChildren } from 'react';

import { toKebabCase } from 'utils/string';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

export interface TagProps {
  text: string;
}

/*~
 * COMPONENT
 */

const Tag: FunctionComponent<PropsWithChildren<TagProps>> = ({ text }) => {
  return (
    <Link
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      href={`/tags/${toKebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;

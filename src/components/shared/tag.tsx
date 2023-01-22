import { FunctionComponent } from 'react';

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

const Tag: FunctionComponent<TagProps> = ({ text }) => {
  return (
    <Link href={`/tags/${toKebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default Tag;

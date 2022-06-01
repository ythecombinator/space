import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { NavigationPath } from 'config/constants';

import { replaceSlashes } from 'utils/string';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type NavigationProps = PropsWithChildren<{
  items: Array<{
    title: string;
    slug: string;
  }>;
}>;

/*~
 * STYLES
 */

const styles = buildStyleObject({
  nav: {
    'a:not(:last-of-type)': { mr: 3 },
    fontSize: [1, `18px`],
    '.active': { color: `heading` },
  },
});

/*~
 * COMPONENT
 */

const Navigation = (props: NavigationProps) => {
  const { items } = props;

  return (
    <nav sx={styles.nav}>
      {items.map((item) => (
        <Link
          // TODO:
          // activeClassName="active"
          key={item.slug}
          sx={(theme) => ({ ...theme.styles?.a })}
          href={replaceSlashes(`/${NavigationPath.base}/${item.slug}`)}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

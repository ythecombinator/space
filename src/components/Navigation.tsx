import Link from 'next/link';
import { FC } from 'react';
import { NavigationPath } from 'src/config/constants';
import { replaceSlashes } from 'src/utils/string';

/*~
 * TYPES
 */

export type NavigationProps = {
  items: {
    title: string;
    slug: string;
  }[];
};

/*~
 * COMPONENT
 */

const Navigation: FC<NavigationProps> = (props) => {
  const { items } = props;

  return (
    <nav
      sx={{
        'a:not(:last-of-type)': { mr: 3 },
        fontSize: [1, `18px`],
        '.active': { color: `heading` },
      }}
    >
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

import Link from 'next/link';
import * as React from 'react';
import { basePath } from 'src/utils/config';
import { replaceSlashes } from 'src/utils/string';

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
  }[];
};

const Navigation = ({ nav }: NavigationProps) => {
  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            'a:not(:last-of-type)': { mr: 3 },
            fontSize: [1, `18px`],
            '.active': { color: `heading` },
          }}
        >
          {nav.map((item) => (
            <Link
              // TODO:
              // activeClassName="active"
              key={item.slug}
              sx={(t) => ({ ...t.styles?.a })}
              href={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;

/** @jsx jsx */
import React from 'react';

import {Link} from 'gatsby';
import {jsx, Styled} from 'theme-ui';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';
import {StyledGatsbyLink} from 'utils/theme-ui';

import * as styles from './styles';

interface Props {
  nav: {
    title: string;
    slug: string;
  }[];
}

const Navigation = ({ nav }: Props) => {
  const { basePath } = useConfig();

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={styles.nav}>
          {nav.map((item) => (
            <StyledGatsbyLink
              key={item.slug}
              as={Link}
              activeClassName="active"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </StyledGatsbyLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;

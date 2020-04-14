/** @jsx jsx */
import React from 'react';

import {Link} from 'gatsby';
import {jsx, Styled} from 'theme-ui';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';

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
            <Styled.a
              key={item.slug}
              as={Link}
              activeClassName="active"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Styled.a>
          ))}
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;

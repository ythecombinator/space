/** @jsx jsx */
import React from 'react';

import {jsx} from 'theme-ui';

import * as styles from './styles';

interface Props {
  children: React.ReactNode;
}

const SkipNavLink = ({ children, ...props }: Props) => (
  <a {...props} sx={styles.a} href="#skip-nav" data-skip-link="true">
    {children}
  </a>
);

export default SkipNavLink;

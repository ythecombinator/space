/** @jsx jsx */
import React from 'react';

import {Box} from '@theme-ui/components';
import {jsx} from 'theme-ui';

import * as styles from './styles';

interface TitleProps {
  children?: React.ReactNode;
  as?: string;
  className?: string;
  text: string;
}

const Title = ({ text, children, as = `h2`, className }: TitleProps) => (
  <div sx={styles.outer}>
    <Box as={as} sx={styles.box} className={className}>
      {text}
    </Box>
    <div sx={styles.inner}>{children}</div>
  </div>
);

export default Title;

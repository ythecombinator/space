/** @jsx jsx */
import React, {FunctionComponent} from 'react';

import {jsx} from 'theme-ui';

import * as styles from './styles';

const List: FunctionComponent = (props) => {
  const { children } = props;
  return <section sx={styles.section}>{children}</section>;
};

export default List;

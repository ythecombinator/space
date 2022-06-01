import { FC } from 'react';
import { Themed } from 'theme-ui';

import * as styles from './CardTitle.styles';

/*~
 * TYPES
 */

export type CardTitleProps = {};

/*~
 * COMPONENT
 */

const CardTitle: FC<CardTitleProps> = (props) => {
  const { children } = props;
  return <Themed.h4 sx={styles.title}>{children}</Themed.h4>;
};

export default CardTitle;

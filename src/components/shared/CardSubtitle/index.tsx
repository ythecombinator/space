import { FC } from 'react';
import { Themed } from 'theme-ui';

import * as styles from './CardSubtitle.styles';

/*~
 * TYPES
 */

export type CardSubtitleProps = {};

/*~
 * COMPONENT
 */

const CardSubtitle: FC<CardSubtitleProps> = (props) => {
  const { children } = props;
  return <Themed.h6 sx={styles.subtitle}>{children}</Themed.h6>;
};

export default CardSubtitle;

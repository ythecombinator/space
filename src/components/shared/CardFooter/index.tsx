import { FC } from 'react';

import * as styles from './CardFooter.styles';

/*~
 * TYPES
 */

export type CardFooterProps = {};

/*~
 * COMPONENT
 */

const CardFooter: FC<CardFooterProps> = (props) => {
  const { children } = props;
  return <div sx={styles.footer}>{children}</div>;
};

export default CardFooter;

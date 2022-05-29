import { FC } from 'react';

import * as styles from './CardList.styles';

/*~
 * TYPES
 */

export type CardListProps = {};

/*~
 * COMPONENT
 */

const CardList: FC<CardListProps> = (props) => {
  const { children } = props;

  return <div sx={styles.container}>{children}</div>;
};

export default CardList;

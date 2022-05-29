import { FunctionComponent } from 'react';

import * as styles from './Card.styles';

/*~
 * TYPES
 */

export type CardProps = {};

/*~
 * COMPONENT
 */

const Card: FunctionComponent<CardProps> = (props) => {
  const { children } = props;

  return (
    <article sx={styles.container}>
      <div sx={styles.wrapper}>{children}</div>
    </article>
  );
};

export default Card;

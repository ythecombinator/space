import { FunctionComponent } from 'react';

import { useGradient } from 'styles/utils';

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
  const gradient = useGradient();

  return (
    <article sx={styles.container(gradient[0], gradient[1])}>
      <div sx={styles.wrapper}>{children}</div>
    </article>
  );
};

export default Card;

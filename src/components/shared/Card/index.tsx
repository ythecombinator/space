import { FunctionComponent } from 'react';

import { useGradient } from 'styles/utils';

import * as styles from './Card.styles';

/*~
 * TYPES
 */

export type CardProps = {
  width?: number;
};

/*~
 * COMPONENT
 */

const Card: FunctionComponent<CardProps> = (props) => {
  const { children, width = 400 } = props;
  const gradient = useGradient();

  return (
    <article sx={styles.container(gradient[0], gradient[1], width)}>
      {children}
    </article>
  );
};

export default Card;

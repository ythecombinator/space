import { FC } from 'react';

import * as styles from './CardLink.styles';

/*~
 * TYPES
 */

export type CardLinkProps = {
  href: string;
};

/*~
 * COMPONENT
 */

const CardLink: FC<CardLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <a sx={styles.button} href={href}>
      {children}
    </a>
  );
};

export default CardLink;

import { chakra } from '@chakra-ui/react';
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
    <chakra.a
      href={href}
      display="flex"
      alignItems="center"
      border="none"
      boxShadow="none"
      backgroundColor="transparent"
      textDecoration="none"
      transition="0.25s"
      margin="0.5rem 0"
      _hover={{ transform: 'translate(10px 0)' }}
    >
      {children}
    </chakra.a>
  );
};

export default CardLink;

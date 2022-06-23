import { Text } from '@chakra-ui/react';
import { FC } from 'react';

/*~
 * TYPES
 */

export type CardSubtitleProps = {};

/*~
 * COMPONENT
 */

const CardSubtitle: FC<CardSubtitleProps> = (props) => {
  const { children } = props;
  return (
    <Text fontSize="medium" fontWeight={600} margin="0.1rem" color="GrayText">
      {children}
    </Text>
  );
};

export default CardSubtitle;

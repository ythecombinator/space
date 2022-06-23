import { Text } from '@chakra-ui/react';
import { FC } from 'react';

/*~
 * TYPES
 */

export type CardTitleProps = {};

/*~
 * COMPONENT
 */

const CardTitle: FC<CardTitleProps> = (props) => {
  const { children } = props;
  return (
    <Text
      fontSize="2xl"
      display="block"
      cursor="pointer"
      fontWeight="bold"
      textDecoration="none"
      marginBottom={1}
    >
      {children}
    </Text>
  );
};

export default CardTitle;

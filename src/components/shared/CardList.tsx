import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

/*~
 * TYPES
 */

export type CardListProps = {};

/*~
 * COMPONENT
 */

const CardList: FC<CardListProps> = (props) => {
  const { children } = props;

  // TODO:
  // '::-webkit-scrollbar': {
  //   display: 'none',
  // },
  // '@media (min-width: 768px)': {
  //   whiteSpace: 'nowrap',
  //   marginTop: '0',
  // },

  return (
    <Flex width="100%" margin={0} whiteSpace="normal" overflowX="scroll">
      {children}
    </Flex>
  );
};

export default CardList;

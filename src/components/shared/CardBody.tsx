import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

/*~
 * TYPES
 */

export type CardBodyProps = PropsWithChildren<{}>;

/*~
 * COMPONENT
 */

const CardBody = (props: CardBodyProps) => {
  const { children } = props;
  return (
    <Box padding={15} width="100%" whiteSpace="normal">
      {children}
    </Box>
  );
};

export default CardBody;

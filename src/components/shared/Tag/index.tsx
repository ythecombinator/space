import { FC } from 'react';
import { SiUnsplash } from 'react-icons/si';
import { Box, Flex, Themed } from 'theme-ui';

/*~
 * TYPES
 */

export type TagProps = {
  id: string;
  name: string;
};

/*~
 * COMPONENT
 */

const Tag: FC<TagProps> = (props) => {
  const { id, name } = props;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: [0, 2],
        margin: 1,
        borderRadius: 99,
        backgroundColor: 'red',
        color: (theme) => theme.colors?.background,
        cursor: 'pointer',

        '&:hover': { backgroundColor: 'red' },
        '&:active': { backgroundColor: 'red' },
      }}
    >
      <Flex sx={{ alignItems: 'center', margin: 2 }}>
        <SiUnsplash />
        <Themed.p sx={{ marginY: 0, marginX: 1, fontSize: '16px' }}>
          {name}
        </Themed.p>
      </Flex>
    </Box>
  );
};

export default Tag;

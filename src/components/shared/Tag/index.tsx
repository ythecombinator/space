import { FC } from 'react';
import { Box, Flex, useColorMode } from 'theme-ui';

import * as styles from './Tag.styles';
import { TagColor, TagIcon } from './tag.utils';

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

  const [colorMode] = useColorMode();

  const icon = TagIcon[id];
  const color = TagColor[id];

  return (
    <Box sx={styles.boxContainer(color, colorMode)}>
      <Flex sx={styles.flexContainer}>
        {icon}
        <p sx={styles.tagName}>{name}</p>
      </Flex>
    </Box>
  );
};

export default Tag;

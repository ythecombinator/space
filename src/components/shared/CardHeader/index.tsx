import { FC } from 'react';

import * as styles from './CardHeader.styles';

/*~
 * TYPES
 */

export type CardHeaderProps = {
  backgroundImage?: string;
};

/*~
 * COMPONENT
 */

const CardHeader: FC<CardHeaderProps> = (props) => {
  const { children, backgroundImage } = props;

  return (
    <header sx={styles.header({ backgroundImage })}>
      <p
        sx={{
          ...styles.title,
          backgroundColor: (theme) => theme.colors?.background,
        }}
      >
        {children}
      </p>
    </header>
  );
};

export default CardHeader;

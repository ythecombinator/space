import { PropsWithChildren } from 'react';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type CardFooterProps = PropsWithChildren<{}>;

/*~
 * STYLES
 */

const styles = buildStyleObject({
  container: {
    display: 'flex',
    paddingBottom: '1rem',
    lineHeight: 1.8,
  },
});

/*~
 * COMPONENT
 */

const CardFooter = (props: CardFooterProps) => {
  const { children } = props;
  return <div sx={styles.container}>{children}</div>;
};

export default CardFooter;

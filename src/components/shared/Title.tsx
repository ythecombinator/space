import { ElementType, PropsWithChildren } from 'react';
import { Box } from 'theme-ui';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type TitleProps = PropsWithChildren<{
  text: string;
}>;

/*~
 * STYLES
 */

const styles = buildStyleObject({
  container: {
    justifyContent: `space-between`,
    alignItems: `center`,
    borderBottomStyle: `solid`,
    borderBottomWidth: `1px`,
    borderBottomColor: `divide`,
    pb: 3,
    mb: 4,
    flexFlow: `wrap`,
    boxSizing: `border-box`,
    display: `flex`,
  },
  box: {
    fontWeight: `medium`,
    fontSize: [3, 4],
    fontFamily: `heading`,
    lineHeight: `heading`,
    color: `heading`,
  },
  childrenWrapper: {
    color: `secondary`,
    a: {
      variant: `links.secondary`,
    },
  },
});

/*~
 * COMPONENT
 */

const Title = (props: TitleProps) => {
  const { text, children } = props;

  return (
    <div sx={styles.container}>
      <Box sx={styles.box}>{text}</Box>
      <div sx={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default Title;

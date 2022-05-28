import { ElementType, FC } from 'react';
import { Box } from 'theme-ui';

/*~
 * TYPES
 */

export type TitleProps = {
  text: string;
  as?: ElementType<any> | undefined;
  className?: string;
};

/*~
 * COMPONENT
 */

const Title: FC<TitleProps> = (props) => {
  const { text, children, as = `h2`, className = `` } = props;

  return (
    <div
      sx={{
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
      }}
    >
      <Box
        as={as}
        sx={{
          fontWeight: `medium`,
          fontSize: [3, 4],
          fontFamily: `heading`,
          lineHeight: `heading`,
          color: `heading`,
        }}
        className={className}
      >
        {text}
      </Box>
      <div
        sx={{
          color: `secondary`,
          a: {
            variant: `links.secondary`,
          },
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Title;

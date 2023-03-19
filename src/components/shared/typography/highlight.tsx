import { useTheme } from 'next-themes';
import { FunctionComponent, PropsWithChildren } from 'react';
import { RoughNotation, RoughNotationProps } from 'react-rough-notation';
import colors from 'tailwindcss/colors';

import { hexToRGBA } from 'utils/styles';

interface HighlightProps
  extends Omit<RoughNotationProps, 'type' | 'show' | 'color'> {
  color: keyof typeof colors;
}

/*~
 * COMPONENT
 */

const Highlight: FunctionComponent<PropsWithChildren<HighlightProps>> = ({
  children,
  color,
  ...props
}) => {
  const { theme } = useTheme();
  const palette = theme === 'dark' ? colors[color][800] : colors[color][300];

  return (
    <RoughNotation
      type="highlight"
      show={true}
      color={hexToRGBA(palette, 0.5)}
      {...props}
    >
      {children}
    </RoughNotation>
  );
};

export default Highlight;

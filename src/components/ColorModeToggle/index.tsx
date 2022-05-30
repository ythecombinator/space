import { FC } from 'react';

import * as styles from './ColorModeToggle.styles';

/*~
 * TYPES
 */

export type ColorModeToggleProps = {
  isDark: boolean;
  toggle: (e: React.SyntheticEvent) => void;
};

/*~
 * COMPONENT
 */

const ColorModeToggle: FC<ColorModeToggleProps> = (props) => {
  const { isDark, toggle } = props;

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      sx={styles.button}
    >
      <div sx={styles.icon(isDark)} />
    </button>
  );
};

export default ColorModeToggle;

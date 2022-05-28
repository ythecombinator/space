import { FC } from 'react';
import { get } from 'theme-ui';

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
      sx={{
        opacity: 0.65,
        position: `relative`,
        borderRadius: `5px`,
        width: `40px`,
        height: `25px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        transition: `opacity 0.3s ease`,
        border: `none`,
        outline: `none`,
        background: `none`,
        cursor: `pointer`,
        padding: 0,
        appearance: `none`,
        '&:hover, &:focus': { opacity: 1 },
      }}
    >
      <div
        sx={{
          position: `relative`,
          width: `24px`,
          height: `24px`,
          borderRadius: `50%`,
          border: (theme) =>
            isDark ? `4px solid ${get(theme, `colors.toggleIcon`)}` : `none`,
          backgroundColor: isDark ? `toggleIcon` : `transparent`,
          transform: isDark ? `scale(0.55)` : `scale(1)`,
          transition: `all 0.45s ease`,
          overflow: isDark ? `visible` : `hidden`,
          boxShadow: (theme) =>
            isDark
              ? `none`
              : `inset 8px -8px 0px 0px ${get(theme, `colors.toggleIcon`)}`,
          '&:before': {
            content: `""`,
            position: `absolute`,
            right: `-9px`,
            top: `-9px`,
            height: `24px`,
            width: `24px`,
            border: (theme) =>
              isDark ? `2px solid ${get(theme, `colors.toggleIcon`)}` : `none`,
            borderRadius: `50%`,
            transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
            opacity: isDark ? 0 : 1,
            transition: `transform 0.45s ease`,
          },
          '&:after': {
            content: `""`,
            width: `8px`,
            height: `8px`,
            borderRadius: `50%`,
            margin: `-4px 0 0 -4px`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            boxShadow: (theme) =>
              `0 -23px 0 ${get(theme, `colors.toggleIcon`)}, 0 23px 0 ${get(
                theme,
                `colors.toggleIcon`
              )}, 23px 0 0 ${get(theme, `colors.toggleIcon`)}, -23px 0 0 ${get(
                theme,
                `colors.toggleIcon`
              )}, 15px 15px 0 ${get(
                theme,
                `colors.toggleIcon`
              )}, -15px 15px 0 ${get(
                theme,
                `colors.toggleIcon`
              )}, 15px -15px 0 ${get(
                theme,
                `colors.toggleIcon`
              )}, -15px -15px 0 ${get(theme, `colors.toggleIcon`)}`,
            transform: isDark ? `scale(1)` : `scale(0)`,
            transition: `all 0.35s ease`,
          },
        }}
      />
    </button>
  );
};

export default ColorModeToggle;

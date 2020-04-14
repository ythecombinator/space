import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

interface Props {
  isDark: boolean;
  toggle: (e: any) => void;
}

const ColorModeToggle: FunctionComponent<Props> = (props) => {
  const { isDark, toggle } = props;

  return (
    <Styled.Button
      onClick={toggle}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    >
      <Styled.Icon isDark={isDark} />
    </Styled.Button>
  );
};

export default ColorModeToggle;

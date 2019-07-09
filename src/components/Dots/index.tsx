import React, {FunctionComponent} from 'react';

import {StyledBottomDot, StyledTopDot} from './styles';
import {generateDot} from './utils';

interface Props {
  number: number;
}

const Dots: FunctionComponent<Props> = props => {
  const dots = Array.from({ length: props.number }, generateDot);

  return (
    <div>
      {dots.map((dot, i) => (
        <StyledTopDot
          key={`top-dot-${dot.y}-${dot.x}-${i}`}
          x={dot.x}
          y={dot.y}
          size={dot.size}
          opacity={dot.opacity}
          color={dot.color}
        />
      ))}

      {dots.map((dot, i) => (
        <StyledBottomDot
          key={`bottom-dot-${dot.y}-${dot.x}-${i}`}
          x={dot.x}
          y={dot.y}
          size={dot.size}
          opacity={dot.opacity}
          color={dot.color}
        />
      ))}
    </div>
  );
};

export default Dots;

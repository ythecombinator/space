import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";
import { getRandomItem } from "../../utils/array";
import { getRandomFloat, getRandomInt } from "../../utils/number";

const palette = colors.dots;

const StyledDot = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  height: ${props => `${props.size}rem`};
  width: ${props => `${props.size}rem`};
  opacity: ${props => `${props.opacity}`};
  background-color: ${props => `${props.color}`};
`;

const TopDot = styled(StyledDot)`
  left: ${props => `${props.x}%`};
  top: ${props => `${props.y}%`};
`;

const BottomDot = styled(StyledDot)`
  right: ${props => `${props.x}%`};
  bottom: ${props => `${props.y}%`};
`;

const generateDot = () => {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);
  const size = getRandomFloat(0.4, 1.25);
  const opacity = getRandomFloat(0.9, 1);

  return { x, y, size, opacity, color: getRandomItem(palette) };
};

const Dots = props => {
  const dots = Array.from({ length: props.number }, generateDot);

  return (
    <div>
      {dots.map((dot, i) => (
        <TopDot
          key={`top-dot-${dot.y}-${dot.x}-${i}`}
          x={dot.x}
          y={dot.y}
          size={dot.size}
          opacity={dot.opacity}
          color={dot.color}
        />
      ))}

      {dots.map((dot, i) => (
        <BottomDot
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

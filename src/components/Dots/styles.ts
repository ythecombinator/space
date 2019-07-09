import styled from 'styled-components';

interface Props {
  size: string;
  opacity: string;
  color: string;
  x: number;
  y: number;
}

const StyledDot = styled.div<Props>`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  height: ${props => `${props.size}rem`};
  width: ${props => `${props.size}rem`};
  opacity: ${props => `${props.opacity}`};
  background-color: ${props => `${props.color}`};
`;

const StyledTopDot = styled(StyledDot)`
  left: ${props => `${props.x}%`};
  top: ${props => `${props.y}%`};
`;

const StyledBottomDot = styled(StyledDot)`
  right: ${props => `${props.x}%`};
  bottom: ${props => `${props.y}%`};
`;

export { StyledTopDot, StyledBottomDot };

import {keyframes} from '@emotion/core';

import styled from 'utils/styles';

interface ContentProps {
  duration: number;
}

const slide = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

export const Content = styled.div<ContentProps>`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: ${slide} ${(props) => props.duration * 2 || 10}s linear infinite;

  > div {
    display: inline-block;
  }
`;

import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

interface Props {
  duration: number;
}

const BackgroundSlider: FunctionComponent<Props> = (props) => {
  const { duration, children } = props;

  const isF = typeof children === "function";
  const child = (num: number) => (isF ? children(num) : children);

  return (
    <Styled.Container>
      <Styled.Content duration={duration}>
        <div>{child(1)}</div>
        <div>{child(2)}</div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default BackgroundSlider;

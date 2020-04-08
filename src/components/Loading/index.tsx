import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

const Loading: FunctionComponent = () => {
  return (
    <Styled.Container>
      <Styled.ChildrenContainer>
        <Styled.Stroke1 />
        <Styled.Stroke2 />
        <Styled.Stroke3 />
      </Styled.ChildrenContainer>
    </Styled.Container>
  );
};

export default Loading;

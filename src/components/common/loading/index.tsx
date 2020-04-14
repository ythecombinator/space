import React, {FunctionComponent} from 'react';

import {useColorMode} from 'theme-ui';

import * as Styled from './styles';

const Loading: FunctionComponent = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <Styled.Container>
      <Styled.ChildrenContainer>
        <Styled.Stroke1 isDark={isDark} />
        <Styled.Stroke2 isDark={isDark} />
        <Styled.Stroke3 isDark={isDark} />
      </Styled.ChildrenContainer>
    </Styled.Container>
  );
};

export default Loading;

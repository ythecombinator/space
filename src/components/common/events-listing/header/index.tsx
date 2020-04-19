import React, {FunctionComponent} from 'react';

import {Event} from 'model/Event';

import * as Styled from './styles';

interface Props extends Pick<Event, "city" | "thumbnail"> {}

const Header: FunctionComponent<Props> = (props) => {
  const { city, thumbnail } = props;

  return (
    <Styled.Header image={thumbnail}>
      <Styled.Title>{city}</Styled.Title>
    </Styled.Header>
  );
};

export default Header;

import React, {FunctionComponent} from 'react';

import {FaChevronRight} from 'react-icons/fa';

import {Event} from 'model/Event';

import * as Styled from './styles';

interface Props extends Pick<Event, "video"> {}

interface Props {}

const Card: FunctionComponent<Props> = (props) => {
  const { video } = props;

  return (
    <Styled.Button href={video}>
      <FaChevronRight /> Watch it 📺
    </Styled.Button>
  );
};

export default Card;

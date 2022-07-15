import React, {FunctionComponent} from 'react';

import {Event} from 'model/Event';

import CardBody from '../body';
import CardHeader from '../header';
import * as Styled from './styles';

interface Props extends Event {}

const Card: FunctionComponent<Props> = (props) => {
  const {
    name,
    thumbnail,
    city,
    place,
    audience,
    date,
    video,
    slides,
    link,
  } = props;

  return (
    <Styled.Container>
      <CardHeader city={city} thumbnail={thumbnail} />
      <CardBody
        name={name}
        place={place}
        audience={audience}
        date={date}
        link={link}
        video={video}
        slides={slides}
      />
    </Styled.Container>
  );
};

export default Card;

import React, { FunctionComponent } from 'react';

import { Session } from '../../utils';

import CardBody from '../CardBody';
import CardHeader from '../CardHeader';

import * as Styled from './styles';

interface Props extends Session {}

const Card: FunctionComponent<Props> = (props) => {
  const {
    audience,
    eventEndingDate,
    eventName,
    eventStartingDate,
    location,
    recording,
    slides,
  } = props;

  return (
    <Styled.Container>
      <CardHeader name={location.name} photo={location.photo} />
      <CardBody
        eventName={eventName}
        audience={audience}
        recording={recording}
        slides={slides}
      />
    </Styled.Container>
  );
};

export default Card;

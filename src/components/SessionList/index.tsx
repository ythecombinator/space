import React, { FunctionComponent } from 'react';
import { Session } from '../utils';

import Card from './Card';
import * as Styled from './styles';

interface Props {
  sessions: Session[];
}

const SessionList: FunctionComponent<Props> = (props) => {
  const { sessions } = props;

  return (
    <Styled.List>
      {sessions.map((item) => {
        const {
          eventName,
          eventEndingDate,
          eventStartingDate,
          audience,
          location,
          recording,
          slides,
        } = item;

        return (
          <Card
            key={eventName}
            audience={audience}
            eventName={eventName}
            eventEndingDate={eventEndingDate}
            eventStartingDate={eventStartingDate}
            location={location}
            recording={recording}
            slides={slides}
          />
        );
      })}
    </Styled.List>
  );
};

export default SessionList;

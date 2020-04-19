import React, {FunctionComponent} from 'react';

import {Event} from 'model/Event';

import Card from './card';
import * as Styled from './styles';

interface Props {
  data: Event[];
}

const EventsListing: FunctionComponent<Props> = (props) => {
  const { data } = props;

  return (
    <Styled.List>
      {data.map((item) => {
        const {
          name,
          thumbnail,
          city,
          place,
          audience,
          date,
          link,
          video,
        } = item;

        return (
          <Card
            name={name}
            thumbnail={thumbnail}
            city={city}
            place={place}
            audience={audience}
            date={date}
            link={link}
            video={video}
          />
        );
      })}
    </Styled.List>
  );
};

export default EventsListing;

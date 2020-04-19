import React, {FunctionComponent} from 'react';

import {Event} from 'model/Event';

import Button from '../button';
import * as Styled from './styles';

interface Props
  extends Pick<
    Event,
    "name" | "place" | "date" | "audience" | "video" | "link"
  > {}

const Body: FunctionComponent<Props> = (props) => {
  const { name, place, date, audience, video, link } = props;

  return (
    <Styled.Container>
      <Styled.Date>{date}</Styled.Date>

      <Styled.Title href={link}>{name}</Styled.Title>

      <Styled.Content>
        <p>📍 {place} </p>
        {audience ? <p>👥 ≈ {audience} people audience</p> : <p>👥 N/A</p>}
      </Styled.Content>

      {video && <Button video={video} />}
    </Styled.Container>
  );
};

export default Body;
